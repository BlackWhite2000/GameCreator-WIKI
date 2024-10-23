/**
 * 游戏手柄控制器
 * Created by 黑暗之神KDS on 2020-03-26 03:50:18.
 */
declare class GamepadControl {
    /**
     * 辅助计算
     */
    private static lastJoyAngle8;
    static init(): void;
    /**
     * 启动
     */
    static start(): void;
    /**
     * 停止
     */
    static stop(): void;
    /**
     * 左方向键按键移动
     * @param dir 方向
     */
    private static onLeftKeyChange;
    /**
     * 更新：处理左摇杆-角色移动
     */
    private static update;
    /**
     * 当使用手柄控制菜单方向
     * @param isJoy
     * @param dir
     */
    private static onGamepadMenuDirChange;
    /**
     * 手柄按键-映射成键盘按键功能
     * -- 菜单按键映射菜单按键（头部标识为MENU）
     * -- 非菜单按键映射成非菜单按键
     * @param keyCode
     */
    private static onGamepadKeyDown;
}
//# sourceMappingURL=GamepadControl.d.ts.map