/**
 * 游戏大门：用于处理进入游戏、读取存档、更换场景
 * Created by 黑暗之神KDS on 2020-09-11 19:18:46.
 */
declare class GameGate {
    /**
     * 事件：进入场景的状态改变时派发事件，对应 GameGate.STATE_XXX
     * onInSceneStateChange(inNewSceneState:number);
     */
    static EVENT_IN_SCENE_STATE_CHANGE: string;
    /**
     * 状态：离开场景，开始执行相关准备事件（离开场景时事件、新游戏开始事件、读档开始事件）
     */
    static STATE_0_START_EXECUTE_LEAVE_SCENE_EVENT: number;
    /**
     * 状态：相关准备事件执行完毕，开始加载场景
     */
    static STATE_1_START_LOAD_SCENE: number;
    /**
     * 状态：加载场景完毕，开始执行对应的完成事件（进入场景时事件、新游戏完成事件、读档完成事件）
     */
    static STATE_2_START_EXECUTE_IN_SCENE_EVENT: number;
    /**
     * 状态：场景已进入完毕
     */
    static STATE_3_IN_SCENE_COMPLETE: number;
    /**
     * 状态：玩家可控制阶段开始
     */
    static STATE_4_PLAYER_CONTROL_START: number;
    /**
     * 状态值，对应GameGate.STATE_XXXX
     */
    static gateState: number;
    /**
     * 辅助计算用
     */
    private static bgmSyncTaskName;
    private static bgsSyncTaskName;
    /**
     * 游戏首次进入场景时表示
     */
    static inSceneInited: boolean;
    /**
     * 开始
     */
    static start(): void;
    /**
     * 世界初始化
     */
    private static onWorldInit;
    /**
     * 当接收到进入新的场景时事件
     * @param sceneID 场景模型ID
     * @param inNewSceneState 进入场景的方式 0-切换游戏场景 1-新游戏 2-读取存档
     */
    private static onInNewScene;
    /**
     * 添加玩家的场景对象
     * @param so 玩家场景对象数据
     * @param isEntity 是否是场景对象实体
     * @param insertNewPostion 插入到新的空位置上，如普通的切换场景时
     */
    private static addPlayerSceneObject;
}
//# sourceMappingURL=GameGate.d.ts.map