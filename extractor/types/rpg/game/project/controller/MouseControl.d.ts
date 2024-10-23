/**
 * 鼠标控制器
 * Created by 黑暗之神KDS on 2020-03-26 06:05:08.
 */
declare class MouseControl {
    /**
     * 鼠标事件集
     */
    static mouseEvents: string[];
    /**
     * 事件派发器
     */
    static eventDispatcher: EventDispatcher;
    /**
     * 选中的场景对象
     */
    static selectSceneObject: ProjectClientSceneObject;
    /**
     * 选中场景对象时的动画效果
     */
    private static selectEffect;
    /**
     * 启动控制器
     */
    static start(): void;
    /**
     * 关闭控制器
     */
    static stop(): void;
    /**
     * 更新选中场景对象的效果
     * @param e
     */
    static updateSelectSceneObject(): void;
    /**
     * 取消选中场景对象
     */
    static unselectOneSceneObject(soc: ProjectClientSceneObject): void;
    /**
     * 选中场景对象
     * @param soc 场景对象
     */
    static selectOneSceneObject(soc: ProjectClientSceneObject): void;
    /**
     * 场景鼠标事件
     * @param e
     */
    private static onSceneLayerMouseEvent;
    /**
     * 鼠标左键点击场景的场合
     * @param e
     */
    private static onSceneMouseDown;
    /**
     * 鼠标在场景中移动的场合
     */
    private static onSceneMouseMove;
}
//# sourceMappingURL=MouseControl.d.ts.map