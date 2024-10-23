/**
 * 该文件为GameCreator编辑器自动生成的代码，请勿修改
 */
/**
 * 场景对象模块基类
 */
class SceneObjectModule {
    /**
     * 构造函数
     * @param installCB 用于安装模块的属性值
     */
    constructor(installCB) {
        installCB && installCB.runWith([this]);
    }
    /**
     * 当移除模块时执行的函数
     */
    onRemoved() {
    }
    /**
     * 刷新：通常在改变了属性需要调用此函数统一刷新效果
     */
    refresh() {
    }
    /**
     * 当卸载模块时执行的函数
     */
    dispose() {
        this.so = null;
        this.name = null;
        this.isDisposed = true;
    }
}
SceneObjectModule.moduleClassArr = [];
/**
 * 场景对象公共类，任何场景对象都继承该类
 */
class SceneObjectCommon extends ClientSceneObject {
    constructor(soData, scene) {
        super(soData, scene);
    }
}
/**
 * 场景对象模型：影子
 */
class SceneObjectModule_1 extends SceneObjectModule {
    constructor(installCB) {
        super(installCB);
    }
}
SceneObjectModule.moduleClassArr[1] = SceneObjectModule_1;
/**
 * 场景对象模型：行走图材质
 */
class SceneObjectModule_2 extends SceneObjectModule {
    constructor(installCB) {
        super(installCB);
    }
}
SceneObjectModule.moduleClassArr[2] = SceneObjectModule_2;
/**
 * 场景对象模型：动画
 */
class SceneObjectModule_3 extends SceneObjectModule {
    constructor(installCB) {
        super(installCB);
    }
}
SceneObjectModule.moduleClassArr[3] = SceneObjectModule_3;
//# sourceMappingURL=SceneObjectModules.js.map