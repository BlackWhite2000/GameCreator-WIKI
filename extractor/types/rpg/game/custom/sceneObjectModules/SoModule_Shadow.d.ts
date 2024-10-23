/**
 * 场景对象模块-影子
 * Created by 黑暗之神KDS on 2021-11-02 01:05:48.
 */
declare class SoModule_Shadow extends SceneObjectModule_1 {
    /**
     * 构造函数
     * @param installCB
     */
    constructor(installCB: Callback);
    /**
     * 模块移除时
     */
    onRemoved(): void;
    /**
     * 刷新：通常在改变了属性需要调用此函数统一刷新效果
     */
    refresh(): void;
    /**
     * 清理影子
     */
    private clearShadow;
    /**
     * 绘制影子
     */
    private drawShadow;
    /**
     * 开始刷新绘制
     */
    private startUpdateDraw;
    /**
     * 停止刷新绘制
     */
    private stopUpdateDraw;
}
//# sourceMappingURL=SoModule_Shadow.d.ts.map