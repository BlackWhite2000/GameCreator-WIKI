/**
 * 场景-项目层实现类
 * Created by 黑暗之神KDS on 2020-09-08 17:10:24.
 */
declare class ProjectClientScene extends ClientScene {
    /**
     * 场景对象列表：场景上全部的场景对象
     * 重写，如果确保场景上只有ClientSceneObject_1的话则可以如此使用，方便代码调用
     */
    sceneObjects: ProjectClientSceneObject[];
    /**
     * 场景工具
     */
    sceneUtils: SceneUtils;
    /**
     * DEBUG层
     */
    debugLayer: ClientSceneLayer;
    /**
     * 辅助场景集合，克隆其内的场景对象需要预先创建该场景
     */
    private static sceneHelpers;
    private static sceneHelperLoadings;
    /**
     * 初始化
     */
    static init(): void;
    /**
     * 根据设定获取场景对象
     * @param soType 类别：0-玩家的场景对象 1-触发者 2-执行者 3-指定编号
     * @param soIndex 指定的编号
     * @param pointSoMode [可选] 默认值=0 指定场景对象编号的模式 0-常量 1-变量
     * @param soIndexVarID [可选] 默认值=0 使用的变量ID
     * @param trigger [可选] 默认值=null 触发器，如在事件执行时调用该函数则可传递触发器过来使用，以便判定触发者、执行者
     */
    static getSceneObjectBySetting(soType: number, soIndex: number, pointSoMode?: number, soIndexVarID?: number, trigger?: CommandTrigger): ProjectClientSceneObject;
    /**
     * 获取辅助场景，如用于克隆里面的场景对象使用，并不会实际作为游戏场景使用
     * 已存在的话同步回调
     * @param sceneID 场景ID
     * @param onFin 完成时回调 onFin(scene:ClientScene,isSync)
     */
    static createSceneHelper(sceneID: number, onFin: Callback): void;
    /**
     * 销毁辅助场景
     * @param sceneID 场景ID
     */
    static disposeSceneHelper(sceneID: number): boolean;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 当场景解析时函数：由系统调用
     * @param jsonObj 解析数据
     * @param gameData 游戏数据
     */
    parse(jsonObj: any, gameData: GameData): void;
    /**
     * 当渲染时：每帧执行的逻辑
     */
    onRender(): void;
    /**
     * 添加显示对象
     * @param soData 场景对象数据
     * @param isSoc [可选] 默认值=false 是否是实际的对象而非数据
     * @param useModelClass [可选] 默认值=false 是否使用场景对象模型的实现类
     * @return [ClientSceneObject] 添加的场景对象实例
     */
    addSceneObject(soData: SceneObject, isSoc?: boolean, useModelClass?: boolean): ClientSceneObject;
    /**
     * 移除显示对象
     * @param so 显示对象
     * @return [ClientSceneObject]
     */
    removeSceneObject(so: SceneObject, removeFromList?: boolean): ClientSceneObject;
    /**
     * DEBUG显示障碍数据
     */
    private debugRender;
    /** 是否恢复了需要玩家等待的的事件（即无法操控） */
    private static hasRetoryWaitEvent;
    /**
     * 当场景状态改变时
     */
    private static onInSceneStateChange;
    /**
     * 获取追加的自定义存档数据
     * -- 场景对象数据
     */
    private static getSaveData;
    /**
     * 恢复数据前的处理
     */
    private static beforeRetorySaveData;
    /**
     * 恢复场景对象数据
     */
    private static retorySceneObjectSaveData;
    /**
     * 恢复场景数据
     */
    private static retorySceneSaveData;
}
//# sourceMappingURL=ProjectClientScene.d.ts.map