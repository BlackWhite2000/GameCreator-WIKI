/**
 * 游戏手柄类
 *   该类适配了XBOX类、PS5的手柄
 * Created by 黑暗之神KDS on 2020-03-20 01:49:30.
 */
class GCGamepad extends EventDispatcher {
    /**
     * 获取游戏手柄
     * @param index 手柄索引
     * @return [GamePad]
     */
    static getPad(index) {
        let pad = GCGamepad.pads[index];
        if (!pad)
            pad = GCGamepad.pads[index] = new GCGamepad(index);
        return pad;
    }
    /**
     * 常用手柄1
     */
    static get pad1() {
        return this.getPad(0);
    }
    /**
     * 常用手柄2
     */
    static get pad2() {
        return this.getPad(1);
    }
    /**
     * 常用手柄3
     */
    static get pad3() {
        return this.getPad(2);
    }
    /**
     * 常用手柄4
     */
    static get pad4() {
        return this.getPad(3);
    }
    /**
     * 根据键位获取索引
     * @param keyCode 键位值
     */
    getKeyIndex(keyCode) {
        return this.keyMappings.indexOf(MathUtils.int(keyCode));
    }
    /**
     * 获取指定摇杆点的角度 0~360
     * @param 指定的摇杆点 如leftJoyPoint/rightJoyPoint
     */
    getJoyPointAngle(joyPoint) {
        // 270~360  x越大越靠近270，y越大，越靠近360
        if (joyPoint.x <= 0 && joyPoint.y <= 0) {
            return (joyPoint.x - joyPoint.y) * 45 + 315;
        }
        else if (joyPoint.x <= 0 && joyPoint.y >= 0) {
            return (-joyPoint.x - joyPoint.y) * 45 + 225;
        }
        else if (joyPoint.x >= 0 && joyPoint.y <= 0) {
            return (joyPoint.x + joyPoint.y) * 45 + 45;
        }
        else if (joyPoint.x >= 0 && joyPoint.y >= 0) {
            return (-joyPoint.x + joyPoint.y) * 45 + 135;
        }
        return 0;
    }
    /**
     * 构造函数
     * @param index
     */
    constructor(index) {
        super();
        //------------------------------------------------------------------------------------------------------
        // 键位映射
        //------------------------------------------------------------------------------------------------------
        /**
         * 键位映射：左摇杆
         */
        this.leftJoy1 = 0;
        this.leftJoy2 = 1;
        /**
         * 键位映射：左方向键
         */
        this.leftKey = 9;
        /**
         * 键位映射：右摇杆
         */
        this.rightJoy1 = 2;
        this.rightJoy2 = 3;
        /**
         * 键位映射：按键 aKey、bKey、xKey、yKey、LBKey、LTKey、RBKey、RTKey、backKey、startKey、leftJoyDownKey、rightJoyDownKey
         * 储存值是代表原生gamepad的buttons中的位置，比如3代表pad.buttons[3]，默认代表xKey
         */
        this.keyMappings = [0, 1, 2, 3, 4, 6, 5, 7, 8, 9, 10, 11];
        /**
         * 键位
         */
        this.xKey = 2;
        this.yKey = 3;
        this.aKey = 0;
        this.bKey = 1;
        this.LBKey = 4;
        this.LTKey = 6;
        this.RBKey = 5;
        this.RTKey = 7;
        this.backKey = 8;
        this.startKey = 9;
        this.leftJoyDownKey = 10;
        this.rightJoyDownKey = 11;
        /**
         * 键位默认值：摇杆未摇动的默认值
         */
        this.joyDefValue = 0.003921627998352051;
        /**
         * 方向键位应：
         */
        this.dirKeyMapping = {
            "1": 7, "-1": 8, "-0.7142857313156128": 9, "-0.4285714030265808": 6, "-0.1428571343421936": 3, "0.14285719394683838": 2, "0.4285714626312256": 1, "0.7142857313156128": 4
        };
        //------------------------------------------------------------------------------------------------------
        // 当前键位记录
        //------------------------------------------------------------------------------------------------------
        /**
         * 左摇杆点
         */
        this.leftJoyPoint = new Point();
        /**
         * 右摇杆点
         */
        this.rightJoyPoint = new Point();
        /**
         * 左方向键 1-8（不包含5） 对应小键盘面向
         */
        this.leftKeyDir = 0;
        /**
         * 普通按键
         */
        this.buttons = [false, false, false, false, false, false, false, false, false, false, false, false];
        //------------------------------------------------------------------------------------------------------
        // 辅助计算
        //------------------------------------------------------------------------------------------------------
        this.tempPoint = new Point();
        this.lastDir4Info = [
            { lastMenuJoyTime: 0, lastMenuClick: null, lastJoy: [0, 0] },
            { lastMenuJoyTime: 0, lastMenuClick: null, lastJoy: [0, 0] }
        ];
        this.index = index;
        os.add_ENTERFRAME(this.update, this);
    }
    /**
     * 销毁
     */
    dispose() {
        this.offAll();
        os.remove_ENTERFRAME(this.update, this);
    }
    /**
     * 刷新
     */
    update() {
        // 获取可用的手柄
        let gamepads = navigator.getGamepads();
        if (!gamepads)
            return;
        let pad;
        for (let i = 0, index = 0; i < gamepads.length; i++) {
            pad = gamepads[i];
            if (!pad || pad.id.indexOf("Unknown") != -1)
                continue;
            if (index == this.index)
                break;
            index++;
        }
        if (!pad)
            return;
        let now = new Date().getTime();
        // 左摇杆：状态不同则派发事件或连续按键间隔连续派发事件
        this.getJoyValue(pad, this.leftJoy1, this.leftJoy2, this.tempPoint);
        if (this.tempPoint.x != this.leftJoyPoint.x || this.tempPoint.y != this.leftJoyPoint.y) {
            this.leftJoyPoint.x = this.tempPoint.x;
            this.leftJoyPoint.y = this.tempPoint.y;
            this.leftJoyStartTime = now;
            this.leftJoyFirstChangeTimes = true;
            this.onGamepadJoyChange(true, this.leftJoyPoint.x, this.leftJoyPoint.y);
            this.event(GCGamepad.GAMEPAD_JOY_CHANGE, [true, this.leftJoyPoint.x, this.leftJoyPoint.y, true]);
        }
        else {
            if (((this.leftJoyFirstChangeTimes && now - this.leftJoyStartTime > GCGamepad.firstContinuityDelayTime) ||
                (!this.leftJoyFirstChangeTimes && now - this.leftJoyStartTime > GCGamepad.continuityDelayTime)) &&
                (this.leftJoyPoint.x != 0 || this.leftJoyPoint.y != 0)) {
                this.leftJoyStartTime = now;
                this.leftJoyFirstChangeTimes = false;
                this.onGamepadJoyChange(true, this.leftJoyPoint.x, this.leftJoyPoint.y);
                this.event(GCGamepad.GAMEPAD_JOY_CHANGE, [true, this.leftJoyPoint.x, this.leftJoyPoint.y, false]);
            }
        }
        // 右摇杆
        this.getJoyValue(pad, this.rightJoy1, this.rightJoy2, this.tempPoint);
        if (this.tempPoint.x != this.rightJoyPoint.x || this.tempPoint.y != this.rightJoyPoint.y) {
            this.rightJoyPoint.x = this.tempPoint.x;
            this.rightJoyPoint.y = this.tempPoint.y;
            this.rightJoyStartTime = now;
            this.rightJoyFirstChangeTimes = true;
            this.event(GCGamepad.GAMEPAD_JOY_CHANGE, [false, this.rightJoyPoint.x, this.rightJoyPoint.y, true]);
        }
        else {
            if (((this.rightJoyFirstChangeTimes && now - this.rightJoyStartTime > GCGamepad.firstContinuityDelayTime) ||
                (!this.rightJoyFirstChangeTimes && now - this.rightJoyStartTime > GCGamepad.continuityDelayTime)) &&
                (this.rightJoyPoint.x != 0 || this.rightJoyPoint.y != 0)) {
                this.rightJoyStartTime = now;
                this.rightJoyFirstChangeTimes = false;
                this.onGamepadJoyChange(false, this.rightJoyPoint.x, this.rightJoyPoint.y);
                this.event(GCGamepad.GAMEPAD_JOY_CHANGE, [false, this.rightJoyPoint.x, this.rightJoyPoint.y, false]);
            }
        }
        // 左方向键
        let leftKeyDir = this.getDirectionKey(pad, this.leftKey);
        if (leftKeyDir != this.leftKeyDir) {
            this.leftKeyDir = leftKeyDir;
            this.leftKeyStartTime = now;
            this.leftKeyFirstChangeTimes = true;
            this.event(GCGamepad.GAMEPAD_LEFT_KEY_CHANGE, [leftKeyDir]);
        }
        else {
            if (((this.leftKeyFirstChangeTimes && now - this.leftKeyStartTime > GCGamepad.firstContinuityDelayTime) ||
                (!this.leftKeyFirstChangeTimes && now - this.leftKeyStartTime > GCGamepad.continuityDelayTime)) &&
                (this.leftKeyDir != 0)) {
                this.leftKeyStartTime = now;
                this.leftKeyFirstChangeTimes = false;
                this.event(GCGamepad.GAMEPAD_LEFT_KEY_CHANGE, [leftKeyDir]);
            }
        }
        // 普通键位
        for (let s in pad.buttons) {
            let padpressed = pad.buttons[s].pressed;
            if (padpressed != this.buttons[s]) {
                this.buttons[s] = padpressed;
                if (padpressed)
                    this.event(GCGamepad.GAMEPAD_KEY_DOWN, [s]);
                else
                    this.event(GCGamepad.GAMEPAD_KEY_UP, [s]);
            }
        }
    }
    /**
     * 获取摇杆数值
     * @param pad 原生摇杆
     * @param joy1Index 摇杆映射索引1
     * @param joy2Index 摇杆映射索引2
     * @param p 储存的点
     */
    getJoyValue(pad, joy1Index, joy2Index, p) {
        let joyValue1 = pad.axes[joy1Index];
        let joyValue2 = pad.axes[joy2Index];
        if (joyValue1 != this.joyDefValue || joyValue2 != this.joyDefValue) {
            let joyX = parseFloat(joyValue1.toFixed(2));
            let joyY = parseFloat(joyValue2.toFixed(2));
            if (Math.abs(joyX) <= 0.3)
                joyX = 0;
            if (Math.abs(joyY) <= 0.3)
                joyY = 0;
            p.x = joyX;
            p.y = joyY;
        }
        else {
            p.x = 0;
            p.y = 0;
        }
    }
    /**
     * 获取方向键，转为1-8面向表示
     * @param pad 原生摇杆
     * @param keyIndex
     * @return [number]
     */
    getDirectionKey(pad, keyIndex) {
        let dir = this.dirKeyMapping[pad.axes[this.leftKey]];
        if (dir == null)
            dir = 0;
        return dir;
    }
    /**
     * 当摇杆更改时，派发摇杆的方向事件（转换为方向键功能作用派发）
     * @param isleft 是否左摇杆
     * @param joyX 摇杆x值
     * @param joyY 摇杆y值
     */
    onGamepadJoyChange(isleft, joyX, joyY) {
        if (isleft) {
            if (!this.hasListener(GCGamepad.GAMEPAD_LEFT_JOY_DIR4_CHANGE))
                return;
        }
        else {
            if (!this.hasListener(GCGamepad.GAMEPAD_RIGHT_JOY_DIR4_CHANGE))
                return;
        }
        let helpInfo = this.lastDir4Info[isleft ? 0 : 1];
        let GAMEPAD_JOY_DIR4_CHANGE = isleft ? GCGamepad.GAMEPAD_LEFT_JOY_DIR4_CHANGE : GCGamepad.GAMEPAD_RIGHT_JOY_DIR4_CHANGE;
        let lastJoyX = helpInfo.lastJoy[0];
        let lastJoyY = helpInfo.lastJoy[1];
        helpInfo.lastJoy = [joyX, joyY];
        let p = 0.8;
        if (Math.abs(joyX) < p && Math.abs(joyY) < p) {
            helpInfo.lastJoy = [0, 0];
            helpInfo.lastMenuJoyTime = 0;
            if (lastJoyX != 0 || lastJoyY != 0) {
                this.event(GAMEPAD_JOY_DIR4_CHANGE, [0]);
            }
            return;
        }
        let now = new Date().getTime();
        let menuClick;
        if (Math.abs(joyX) > Math.abs(joyY)) {
            if (Math.abs(joyX) < p)
                return;
            if (joyX < 0)
                menuClick = 4;
            else
                menuClick = 6;
        }
        else {
            if (Math.abs(joyY) < p)
                return;
            if (joyY < 0)
                menuClick = 8;
            else
                menuClick = 2;
        }
        // 如果摇杆值完全相同则允许（连续按键）
        if ((lastJoyX == joyX && lastJoyY == joyY) || (helpInfo.lastMenuClick != menuClick && now - helpInfo.lastMenuJoyTime > 150)
            || (helpInfo.lastMenuClick == menuClick && now - helpInfo.lastMenuJoyTime > 300)) {
        }
        // 摇杆值未完全相同，但相同功能键短期内不再派发 if (now - this.lastMenuJoyTime < this.menuJoyInterval)
        else {
            return;
        }
        // 记录上次派发按键的时间
        helpInfo.lastMenuJoyTime = now;
        helpInfo.lastMenuClick = menuClick;
        helpInfo.lastJoy = [joyX, joyY];
        this.event(GAMEPAD_JOY_DIR4_CHANGE, [helpInfo.lastMenuClick]);
    }
}
//------------------------------------------------------------------------------------------------------
// 事件
//------------------------------------------------------------------------------------------------------
/**
 * 事件：按键按下 onGamepadKeyDown(key:number) key对应GCGamepad的键位映射类别 如pad.xKey
 */
GCGamepad.GAMEPAD_KEY_DOWN = "GCGamepad1";
/**
 * 事件：按键弹起 onGamepadKeyUp(key:number) key对应GCGamepad的键位映射类别 如pad.xKey
 */
GCGamepad.GAMEPAD_KEY_UP = "GCGamepad2";
/**
 * 事件：摇杆改变 onGamepadJoyChange(isLeft:boolean,joyX:number,joyY:number,isFirstChange:boolean)
 */
GCGamepad.GAMEPAD_JOY_CHANGE = "GCGamepad3";
/**
 * 事件：方向键改变 onGamepadLeftKeyChange(dir:number) dir=0、1-8(5除外) 以小键盘5为中心的数字面向，0表示未按下
 */
GCGamepad.GAMEPAD_LEFT_KEY_CHANGE = "GCGamepad4";
/**
 * 事件：摇杆四方向 onGamepadLeftJoyDir4Change(dir:number) dir=2下 4左 6右 8上 0-无
 */
GCGamepad.GAMEPAD_LEFT_JOY_DIR4_CHANGE = "GCGamepad5";
/**
 * 事件：摇杆四方向 onGamepadRightJoyDir4Change(dir:number) dir=2下 4左 6右 8上 0-无
 */
GCGamepad.GAMEPAD_RIGHT_JOY_DIR4_CHANGE = "GCGamepad6";
/**
 * 键位名称
 */
GCGamepad.keyNames = ["A", "B", "X", "Y", "LB", "RB", "LT", "RT", "BACK", "START", "LEFT_JOY_DOWN", "RIGHT_JOY_DOWN"];
/**
 * 键位所在的keyMappings索引（该键位值默认为XBOX-360键位，而传统手柄键位通常在abxy上有一些差别）
 */
GCGamepad.xKeyIndex = 2;
GCGamepad.yKeyIndex = 3;
GCGamepad.aKeyIndex = 0;
GCGamepad.bKeyIndex = 1;
GCGamepad.LBKeyIndex = 4;
GCGamepad.LTKeyIndex = 6;
GCGamepad.RBKeyIndex = 5;
GCGamepad.RTKeyIndex = 7;
GCGamepad.backKeyIndex = 8;
GCGamepad.startKeyIndex = 9;
GCGamepad.leftJoyDownKeyIndex = 10;
GCGamepad.rightJoyDownKeyIndex = 11;
GCGamepad.leftKeyIndex = 14;
GCGamepad.rightKeyIndex = 15;
GCGamepad.upKeyIndex = 12;
GCGamepad.downKeyIndex = 13;
//------------------------------------------------------------------------------------------------------
// 静态方法
//------------------------------------------------------------------------------------------------------
GCGamepad.pads = [];
GCGamepad.firstContinuityDelayTime = 500;
GCGamepad.continuityDelayTime = 30;
//# sourceMappingURL=GCGamepad.js.map