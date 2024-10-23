/**
 * 鼠标控制器
 * Created by 黑暗之神KDS on 2020-03-26 06:05:08.
 */
class MouseControl {
    //------------------------------------------------------------------------------------------------------
    // 启动或停止
    //------------------------------------------------------------------------------------------------------
    /**
     * 启动控制器
     */
    static start() {
        let sceneLayer = Game.layer.sceneLayer;
        // 初始化选中时效果
        if (WorldData.selectSceneObjectEffect != 0 && !this.selectEffect) {
            this.selectEffect = new GCAnimation;
            this.selectEffect.id = WorldData.selectSceneObjectEffect;
            this.selectEffect.loop = true;
            this.selectEffect.play();
        }
        // 初始化
        sceneLayer.width = Config.WINDOW_WIDTH;
        sceneLayer.height = Config.WINDOW_HEIGHT;
        // 抛出同等事件
        for (let i in MouseControl.mouseEvents) {
            sceneLayer.on(MouseControl.mouseEvents[i], this, this.onSceneLayerMouseEvent);
        }
        // 操作事件
        sceneLayer.on(EventObject.MOUSE_DOWN, this, MouseControl.onSceneMouseDown);
        sceneLayer.on(EventObject.MOUSE_MOVE, this, MouseControl.onSceneMouseMove);
    }
    /**
     * 关闭控制器
     */
    static stop() {
        if (MouseControl.selectSceneObject)
            this.unselectOneSceneObject(MouseControl.selectSceneObject);
        let sceneLayer = Game.layer.sceneLayer;
        for (let i in MouseControl.mouseEvents) {
            sceneLayer.on(MouseControl.mouseEvents[i], this, this.onSceneLayerMouseEvent);
        }
        // 场景对象
        sceneLayer.off(EventObject.MOUSE_DOWN, this, MouseControl.onSceneMouseDown);
        sceneLayer.off(EventObject.MOUSE_MOVE, this, MouseControl.onSceneMouseMove);
    }
    //------------------------------------------------------------------------------------------------------
    // 选中效果
    //------------------------------------------------------------------------------------------------------
    /**
     * 更新选中场景对象的效果
     * @param e
     */
    static updateSelectSceneObject() {
        if (!Game.currentScene || Game.currentScene == ClientScene.EMPTY)
            return;
        let len = Game.currentScene.sceneObjects.length;
        let globalP = Game.currentScene.globalPos;
        for (let i = len - 1; i >= 0; i--) {
            let soc = Game.currentScene.sceneObjects[i];
            if (!soc)
                continue;
            if (!soc.root.stage)
                continue;
            if (!soc.selectEnabled)
                continue;
            // 非选中效果
            this.unselectOneSceneObject(soc);
            // 像素级检测
            if (soc.avatar.hitTestPoint(globalP.x, globalP.y)) {
                this.selectOneSceneObject(soc);
                return;
            }
        }
    }
    /**
     * 取消选中场景对象
     */
    static unselectOneSceneObject(soc) {
        if (soc == this.selectSceneObject) {
            this.selectSceneObject = null;
            if (WorldData.selectSceneObjectEffect != 0 && this.selectEffect) {
                this.selectEffect.removeFromGameSprite();
            }
        }
    }
    /**
     * 选中场景对象
     * @param soc 场景对象
     */
    static selectOneSceneObject(soc) {
        if (this.selectSceneObject)
            this.unselectOneSceneObject(this.selectSceneObject);
        this.selectSceneObject = soc;
        if (WorldData.selectSceneObjectEffect != 0 && this.selectEffect) {
            this.selectEffect.addToGameSprite(soc.avatarContainer, soc.animationLowLayer, soc.animationHighLayer);
        }
    }
    /**
     * 场景鼠标事件
     * @param e
     */
    static onSceneLayerMouseEvent(e) {
        this.eventDispatcher.event(e.type, [e]);
    }
    /**
     * 鼠标左键点击场景的场合
     * @param e
     */
    static onSceneMouseDown(e) {
        // 刷新选中效果
        this.updateSelectSceneObject();
        // 当无法控制时忽略
        if (!Controller.inSceneEnabled)
            return;
        // 选中对象时：移动至其附近并执行点击事件
        if (this.selectSceneObject && this.selectSceneObject.inScene) {
            Controller.moveToNearTargetSceneObjectAndTriggerClickEvent(this.selectSceneObject);
        }
    }
    /**
     * 鼠标在场景中移动的场合
     */
    static onSceneMouseMove() {
        // 刷新选中效果
        this.updateSelectSceneObject();
    }
}
/**
 * 鼠标事件集
 */
MouseControl.mouseEvents = [EventObject.MOUSE_DOWN, EventObject.MOUSE_UP, EventObject.CLICK, EventObject.DOUBLE_CLICK, EventObject.RIGHT_MOUSE_DOWN, EventObject.RIGHT_MOUSE_UP, EventObject.RIGHT_CLICK, EventObject.MOUSE_WHEEL, EventObject.MOUSE_MOVE];
/**
 * 事件派发器
 */
MouseControl.eventDispatcher = new EventDispatcher;
//# sourceMappingURL=MouseControl.js.map