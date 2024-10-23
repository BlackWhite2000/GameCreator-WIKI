/**
 * 虚拟键盘
 * Created by 黑暗之神KDS on 2022-03-11 20:28:26.
 */
class GUI_VirtualKeyboard extends GUI_12 {
    /**
     * 事件：摇杆四方向 onVirtualKeyboardDir4Change(dir:number) dir=2下 4左 6右 8上 0-无
     */
    static VIRTUALKEYBOARD_DIR4_CHANGE: string = "VIRTUALKEYBOARD_DIR4_CHANGE";
    /**
     * 摇杆中心点
     */
    private rockerCenterPoint = new Point;
    /**
     * 记录上次的方向键值
     */
    private lastMenuDir: number = 0;
    /**
     * 摇杆半径
     */
    private rockerR: number;
    private touchId: number;
    constructor() {
        super();
        this.init();
    }
    /**
     * 初始化
     */
    private init(): void {
        if (!this.rocker || !this.rockerBg) return;
        // 初始化参数
        this.rockerCenterPoint = new Point(Math.floor(this.rockerBg.width / 2), Math.floor(this.rockerBg.height / 2));
        this.rockerR = this.rockerBg.width / 2;
        this.stopDragRocker(null);
        // 初始化事件
        this.rocker.on(EventObject.MOUSE_DOWN, this, this.startDragRocker);
        this.rockerBg.on(EventObject.MOUSE_DOWN, this, this.startDragRocker);
        // 监听方向键改变
        this.on(GUI_VirtualKeyboard.VIRTUALKEYBOARD_DIR4_CHANGE, this, this.onVirtualKeyboardMenuDirChange);
        // 保持该界面最前方显示
        EventUtils.addEventListenerFunction(GameUI, GameUI.EVENT_OPEN_SYSTEM_UI, (uiID: number) => {
            if (uiID != 12) {
                if (this.stage) GameUI.show(12);
            }
        }, this);
        EventUtils.addEventListenerFunction(GameDialog, GameDialog.EVENT_DIALOG_START, (isOption: boolean, content: string, options: string[], name: string, head: string | number, expression: number, audioURL: string, speed: number) => {
            if (this.stage) GameUI.show(12);
        }, this);
    }
    /**
     * 开始拖拽摇杆
     * @param e 
     */
    private startDragRocker(e: EventObject) {
        this.stopDragRocker(null);
        this.touchId = e.touchId;
        stage.on(EventObject.MOUSE_MOVE, this, this.updateRocker);
        stage.on(EventObject.MOUSE_UP, this, this.stopDragRocker);
        this.updateRocker(e);
    }
    /**
     * 停止拖拽摇杆
     * @param e 
     */
    private stopDragRocker(e: EventObject) {
        if (this.isDisposed) return;
        if (e && e.touchId != this.touchId) return;
        this.touchId = null;
        stage.off(EventObject.MOUSE_MOVE, this, this.updateRocker);
        stage.off(EventObject.MOUSE_UP, this, this.stopDragRocker);
        this.rocker.x = this.rockerCenterPoint.x;
        this.rocker.y = this.rockerCenterPoint.y;
        Controller.stopJoy();
        if (this.lastMenuDir != 0) {
            this.lastMenuDir = 0;
            this.event(GUI_VirtualKeyboard.VIRTUALKEYBOARD_DIR4_CHANGE, [0]);
        }
    }
    /**
     * 更新摇杆
     */
    private updateRocker(e: EventObject) {
        if (this.isDisposed) return;
        if (e && e.touchId != this.touchId) return;
        // 限制在圆形范围内
        let localMouseX = this.rockerBg.mouseX;
        let localMouseY = this.rockerBg.mouseY;
        let dis = Point.distance2(this.rockerCenterPoint.x, this.rockerCenterPoint.y, localMouseX, localMouseY);
        let per = this.rockerR / dis;
        if (per > 1) per = 1;
        let currentP = Point.interpolate2(localMouseX, localMouseY, this.rockerCenterPoint.x, this.rockerCenterPoint.y, per);
        this.rocker.x = currentP[0];
        this.rocker.y = currentP[1];
        // 距离过小则忽略
        if (dis < this.rockerR * 0.4) return;
        // 获取方位角度
        let angle = MathUtils.direction360(this.rockerCenterPoint.x, this.rockerCenterPoint.y, localMouseX, localMouseY);
        // 四方向移动：根据角度计算方向
        if (ClientWorld.data.moveDir4) {
            angle = GameUtils.getAngleByOri(GameUtils.getAssetOri(GameUtils.getOriByAngle(angle), 4));
        }
        // 四方向
        let menuDir: number;
        if (angle <= 45 || angle >= 315) {
            menuDir = 8;
        }
        else if (angle >= 45 && angle <= 135) {
            menuDir = 6;
        }
        else if (angle >= 135 && angle <= 225) {
            menuDir = 2;
        }
        else if (angle >= 225 && angle <= 315) {
            menuDir = 4;
        }
        if (this.lastMenuDir != menuDir) {
            this.lastMenuDir = menuDir;
            this.event(GUI_VirtualKeyboard.VIRTUALKEYBOARD_DIR4_CHANGE, [menuDir]);
        }
        Controller.startJoy(angle);
    }
    private onVirtualKeyboardMenuDirChange(dir: number) {
        // 在菜单中支持控制（List）
        if (Controller.inSceneEnabled) return;
        let m = {
            2: GUI_Setting.KEY_BOARD.DOWN.keys[0], 4: GUI_Setting.KEY_BOARD.LEFT.keys[0],
            6: GUI_Setting.KEY_BOARD.RIGHT.keys[0], 8: GUI_Setting.KEY_BOARD.UP.keys[0]
        };
        let transKeyCode = m[dir];
        if (transKeyCode) stage.event(EventObject.KEY_DOWN, [{ keyCode: transKeyCode }]);
    }
}