/**
 * 游戏手柄类
 *   该类适配了XBOX类、PS5的手柄
 * Created by 黑暗之神KDS on 2020-03-20 01:49:30.
 */
declare class GCGamepad extends EventDispatcher {
    /**
     * 事件：按键按下 onGamepadKeyDown(key:number) key对应GCGamepad的键位映射类别 如pad.xKey
     */
    static GAMEPAD_KEY_DOWN: string;
    /**
     * 事件：按键弹起 onGamepadKeyUp(key:number) key对应GCGamepad的键位映射类别 如pad.xKey
     */
    static GAMEPAD_KEY_UP: string;
    /**
     * 事件：摇杆改变 onGamepadJoyChange(isLeft:boolean,joyX:number,joyY:number,isFirstChange:boolean)
     */
    static GAMEPAD_JOY_CHANGE: string;
    /**
     * 事件：方向键改变 onGamepadLeftKeyChange(dir:number) dir=0、1-8(5除外) 以小键盘5为中心的数字面向，0表示未按下
     */
    static GAMEPAD_LEFT_KEY_CHANGE: string;
    /**
     * 事件：摇杆四方向 onGamepadLeftJoyDir4Change(dir:number) dir=2下 4左 6右 8上 0-无
     */
    static GAMEPAD_LEFT_JOY_DIR4_CHANGE: string;
    /**
     * 事件：摇杆四方向 onGamepadRightJoyDir4Change(dir:number) dir=2下 4左 6右 8上 0-无
     */
    static GAMEPAD_RIGHT_JOY_DIR4_CHANGE: string;
    /**
     * 键位名称
     */
    static keyNames: any;
    /**
     * 键位所在的keyMappings索引（该键位值默认为XBOX-360键位，而传统手柄键位通常在abxy上有一些差别）
     */
    static xKeyIndex: number;
    static yKeyIndex: number;
    static aKeyIndex: number;
    static bKeyIndex: number;
    static LBKeyIndex: number;
    static LTKeyIndex: number;
    static RBKeyIndex: number;
    static RTKeyIndex: number;
    static backKeyIndex: number;
    static startKeyIndex: number;
    static leftJoyDownKeyIndex: number;
    static rightJoyDownKeyIndex: number;
    static leftKeyIndex: number;
    static rightKeyIndex: number;
    static upKeyIndex: number;
    static downKeyIndex: number;
    private static pads;
    private static firstContinuityDelayTime;
    private static continuityDelayTime;
    /**
     * 获取游戏手柄
     * @param index 手柄索引
     * @return [GamePad]
     */
    static getPad(index: number): GCGamepad;
    /**
     * 常用手柄1
     */
    static get pad1(): GCGamepad;
    /**
     * 常用手柄2
     */
    static get pad2(): GCGamepad;
    /**
     * 常用手柄3
     */
    static get pad3(): GCGamepad;
    /**
     * 常用手柄4
     */
    static get pad4(): GCGamepad;
    /**
     * 索引，用于获取游戏手柄中可用的手柄
     */
    private index;
    /**
     * 键位映射：左摇杆
     */
    private leftJoy1;
    private leftJoy2;
    /**
     * 键位映射：左方向键
     */
    private leftKey;
    /**
     * 键位映射：右摇杆
     */
    private rightJoy1;
    private rightJoy2;
    /**
     * 键位映射：按键 aKey、bKey、xKey、yKey、LBKey、LTKey、RBKey、RTKey、backKey、startKey、leftJoyDownKey、rightJoyDownKey
     * 储存值是代表原生gamepad的buttons中的位置，比如3代表pad.buttons[3]，默认代表xKey
     */
    keyMappings: number[];
    /**
     * 根据键位获取索引
     * @param keyCode 键位值
     */
    getKeyIndex(keyCode: number): number;
    /**
     * 键位
     */
    xKey: number;
    yKey: number;
    aKey: number;
    bKey: number;
    LBKey: number;
    LTKey: number;
    RBKey: number;
    RTKey: number;
    backKey: number;
    startKey: number;
    leftJoyDownKey: number;
    rightJoyDownKey: number;
    /**
     * 键位默认值：摇杆未摇动的默认值
     */
    joyDefValue: number;
    /**
     * 方向键位应：
     */
    dirKeyMapping: {
        "1": number;
        "-1": number;
        "-0.7142857313156128": number;
        "-0.4285714030265808": number;
        "-0.1428571343421936": number;
        "0.14285719394683838": number;
        "0.4285714626312256": number;
        "0.7142857313156128": number;
    };
    /**
     * 左摇杆点
     */
    leftJoyPoint: Point;
    /**
     * 右摇杆点
     */
    rightJoyPoint: Point;
    /**
     * 获取指定摇杆点的角度 0~360
     * @param 指定的摇杆点 如leftJoyPoint/rightJoyPoint
     */
    getJoyPointAngle(joyPoint: Point): number;
    /**
     * 左方向键 1-8（不包含5） 对应小键盘面向
     */
    leftKeyDir: number;
    /**
     * 普通按键
     */
    private buttons;
    private tempPoint;
    private leftJoyStartTime;
    private leftJoyFirstChangeTimes;
    private rightJoyStartTime;
    private rightJoyFirstChangeTimes;
    private leftKeyStartTime;
    private leftKeyFirstChangeTimes;
    private lastDir4Info;
    /**
     * 构造函数
     * @param index
     */
    constructor(index: number);
    /**
     * 销毁
     */
    dispose(): void;
    /**
     * 刷新
     */
    private update;
    /**
     * 获取摇杆数值
     * @param pad 原生摇杆
     * @param joy1Index 摇杆映射索引1
     * @param joy2Index 摇杆映射索引2
     * @param p 储存的点
     */
    private getJoyValue;
    /**
     * 获取方向键，转为1-8面向表示
     * @param pad 原生摇杆
     * @param keyIndex
     * @return [number]
     */
    private getDirectionKey;
    /**
     * 当摇杆更改时，派发摇杆的方向事件（转换为方向键功能作用派发）
     * @param isleft 是否左摇杆
     * @param joyX 摇杆x值
     * @param joyY 摇杆y值
     */
    private onGamepadJoyChange;
}
//# sourceMappingURL=GCGamepad.d.ts.map