/**
 * 虚拟键盘
 * Created by 黑暗之神KDS on 2022-03-11 20:28:26.
 */
declare class GUI_VirtualKeyboard extends GUI_12 {
    /**
     * 事件：摇杆四方向 onVirtualKeyboardDir4Change(dir:number) dir=2下 4左 6右 8上 0-无
     */
    static VIRTUALKEYBOARD_DIR4_CHANGE: string;
    /**
     * 摇杆中心点
     */
    private rockerCenterPoint;
    /**
     * 记录上次的方向键值
     */
    private lastMenuDir;
    /**
     * 摇杆半径
     */
    private rockerR;
    private touchId;
    constructor();
    /**
     * 初始化
     */
    private init;
    /**
     * 开始拖拽摇杆
     * @param e
     */
    private startDragRocker;
    /**
     * 停止拖拽摇杆
     * @param e
     */
    private stopDragRocker;
    /**
     * 更新摇杆
     */
    private updateRocker;
    private onVirtualKeyboardMenuDirChange;
}
//# sourceMappingURL=GUI_VirtualKeyboard.d.ts.map