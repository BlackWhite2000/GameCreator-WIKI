/**
 * 场景对象模块-行走图材质
 * Created by 黑暗之神KDS on 2021-11-02 05:06:12.
 */
declare class SoModule_AvatarMaterial extends SceneObjectModule_2 {
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
}
//# sourceMappingURL=SoModule_AvatarMaterial.d.ts.map