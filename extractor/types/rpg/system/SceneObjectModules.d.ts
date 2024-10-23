/**
 * 该文件为GameCreator编辑器自动生成的代码，请勿修改
 */
/**
 * 场景对象模块基类
 */
declare class SceneObjectModule {
    static moduleClassArr: (typeof SceneObjectModule)[];
    id: number;
    name: string;
    so: ProjectClientSceneObject;
    isDisposed: boolean;
    /**
     * 构造函数
     * @param installCB 用于安装模块的属性值
     */
    constructor(installCB: Callback);
    /**
     * 当移除模块时执行的函数
     */
    onRemoved(): void;
    /**
     * 刷新：通常在改变了属性需要调用此函数统一刷新效果
     */
    refresh(): void;
    /**
     * 当卸载模块时执行的函数
     */
    dispose(): void;
}
/**
 * 场景对象公共类，任何场景对象都继承该类
 */
declare class SceneObjectCommon extends ClientSceneObject {
    selectEnabled: boolean;
    through: boolean;
    bridge: boolean;
    fixOri: boolean;
    ignoreCantMove: boolean;
    moveAutoChangeAction: boolean;
    lockBehaviorLayer: number;
    keepMoveActWhenCollsionObstacleAndIgnoreCantMove: boolean;
    behaviorDir4: boolean;
    repeatedTouchEnabled: boolean;
    onlyPlayerTouch: boolean;
    waitTouchEvent: boolean;
    moveSpeed: number;
    defBehavior: string;
    constructor(soData: SceneObject, scene: ClientScene);
}
/**
 * 场景对象模型：影子
 */
declare class SceneObjectModule_1 extends SceneObjectModule {
    shadowWidth: number;
    shadowHeight: number;
    shadowAlpha: number;
    constructor(installCB: Callback);
}
/**
 * 场景对象模型：行走图材质
 */
declare class SceneObjectModule_2 extends SceneObjectModule {
    materialData: {
        materials: MaterialData[];
    }[];
    constructor(installCB: Callback);
}
/**
 * 场景对象模型：动画
 */
declare class SceneObjectModule_3 extends SceneObjectModule {
    ani: GCAnimation;
    constructor(installCB: Callback);
}
//# sourceMappingURL=SceneObjectModules.d.ts.map