/**
 * 该文件为GameCreator编辑器自动生成的代码，请勿修改
 */
/**
 * 场景对象模块基类
 */
class SceneObjectModule {
    static moduleClassArr:(typeof SceneObjectModule)[] = [];
    id: number; // 模块ID
    name: string; // 模块名称
    so: ProjectClientSceneObject; // 场景对象实例
    isDisposed:boolean; // 是否已被销毁
    /**
     * 构造函数
     * @param installCB 用于安装模块的属性值
     */
    constructor(installCB: Callback) {
        installCB && installCB.runWith([this]);
    }
    /**
     * 当移除模块时执行的函数
     */
    onRemoved():void {
        
    }
    /**
     * 刷新：通常在改变了属性需要调用此函数统一刷新效果
     */
    refresh():void {
        
    }
    /**
     * 当卸载模块时执行的函数
     */
    dispose():void {
        this.so = null;
        this.name = null;
        this.isDisposed = true;
    }
}
/**
 * 场景对象公共类，任何场景对象都继承该类
 */
class SceneObjectCommon extends ClientSceneObject {
    selectEnabled: boolean; // = true; 允许光标选中
    through: boolean; // = false; 穿透
    bridge: boolean; // = false; 桥属性
    fixOri: boolean; // = false; 固定朝向
    ignoreCantMove: boolean; // = false; 忽略无法移动的场合
    moveAutoChangeAction: boolean; // = true; 移动时更换动作
    lockBehaviorLayer: number; // = 0; 执行点击事件中
    keepMoveActWhenCollsionObstacleAndIgnoreCantMove: boolean; // = false; 当碰到障碍时且处于忽略无法移动的场合时保持移动动作
    behaviorDir4: boolean; // = false; 行为四方向限定
    repeatedTouchEnabled: boolean; // = false; 允许重复接触
    onlyPlayerTouch: boolean; // = false; 仅允许玩家触发碰触事件
    waitTouchEvent: boolean; // = false; 碰触事件执行时等待
    moveSpeed: number; // = 150; 移动速度
    defBehavior: string; // = ""; 默认行为
    constructor(soData: SceneObject, scene: ClientScene) {
        super(soData,scene);
    }
}
/**
 * 场景对象模型：影子
 */
class SceneObjectModule_1 extends SceneObjectModule {
    shadowWidth: number; // = 30; 影子宽度
    shadowHeight: number; // = 15; 影子高度
    shadowAlpha: number; // = 0.5; 影子透明度
    constructor(installCB: Callback) {
        super(installCB);
    }
}
SceneObjectModule.moduleClassArr[1]=SceneObjectModule_1;
/**
 * 场景对象模型：行走图材质
 */
class SceneObjectModule_2 extends SceneObjectModule {
    materialData: { materials: MaterialData[] }[];
    constructor(installCB: Callback) {
        super(installCB);
    }
}
SceneObjectModule.moduleClassArr[2]=SceneObjectModule_2;
/**
 * 场景对象模型：动画
 */
class SceneObjectModule_3 extends SceneObjectModule {
    ani: GCAnimation;
    constructor(installCB: Callback) {
        super(installCB);
    }
}
SceneObjectModule.moduleClassArr[3]=SceneObjectModule_3;
