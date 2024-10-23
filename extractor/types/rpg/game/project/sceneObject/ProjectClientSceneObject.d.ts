/**
 * 场景对象绑定类示例
 * Created by 黑暗之神KDS on 2020-09-08 17:00:01.
 */
declare class ProjectClientSceneObject extends SceneObjectCommon {
    /**
     * 面向
     */
    static CHANGE_ORI: string;
    /**
     * 移动开始事件 onMoveStart(fromAutoRetry:boolean) fromAutoRetry=是否来自自动重试的移动
     */
    static MOVE_START: string;
    /**
     * 移动结束事件
     */
    static MOVE_OVER: string;
    /**
     * 跳跃开始事件
     */
    static JUMP_START: string;
    /**
     * 跳跃结束事件
     */
    static JUMP_OVER: string;
    /**
     * 碰撞事件 onCollision(touchRes:{ isObstacle: boolean, touchSceneObjects: ProjectClientSceneObject[] })
     */
    static COLLISION: string;
    /**
     * 所属的场景
     */
    scene: ProjectClientScene;
    /**
     * 行为状态：是否处于跳跃中
     */
    isJumping: boolean;
    /**
     * 当前所在的坐标点，Point版
     */
    pos: Point;
    /**
     * 当前所在的格子位置，通过refreshCoordinate刷新计算而来的缓存数据
     */
    posGrid: Point;
    /**
     * 当前所在位置的矩形数据
     */
    posRect: Rectangle;
    /**
     * 想要到达的点（如用于SceneUtils.getAroundPositions计算）
     */
    wantToGoGrid: Point;
    /**
     * 已经保存记录的移动路径信息（如通过命令临时记录使用）
     */
    recordMoveRoadInfo: any;
    /**
     * 事件开始等待的状态记录（需要进入存档）
     */
    protected eventStartWaitInfo: any;
    /**
     * 行为集，由多个行为组合而成，重写变量属性以便类别指向项目层的 ProjectSceneObjectBehaviors
     */
    protected behaviors: ProjectSceneObjectBehaviors[];
    /**
     * 重试自动寻路标识
     */
    protected needRetryAutoFindRoadMoveSign: any;
    /**
     * 我的上一次接触者列表
     */
    protected myLastTouchObjects: ProjectClientSceneObject[];
    /**
     * 是否来自恢复存档数据
     */
    protected isFromRecorySaveData: boolean;
    /**
     * 恢复存档时的帧记录，以便在当前不会新触发事件
     */
    protected fromRecorySaveDataGameFrame: number;
    /**
     * 禁止发送下一个移动开始事件
     */
    protected stopSendNextMoveStartEvent: boolean;
    /**
     * 禁止发送下一个移动结束事件
     */
    protected stopSendNextMoveOverEvent: boolean;
    protected tempGridPosHelper: Point;
    /**
     * 上一次移动的趋势，由from位置移动至to位置（像素坐标）
     */
    moveTrendInfo: {
        from: Point;
        to: Point;
    };
    /**
     * 上一次实际移动的信息，由from位置移动至to位置（像素坐标）
     */
    moveRealInfo: {
        from: Point;
        to: Point;
    };
    /**
     * 构造函数
     * @param soData 场景对象数据
     * @param scene 所属场景
     */
    constructor(soData: SceneObject, scene: ClientScene);
    /**
     * 释放函数
     */
    dispose(): void;
    /**
     * 获取需要存档的自定义数据
     */
    getSaveData(): any;
    /**
     * 恢复需要存档的自定义数据
     */
    retorySaveData(o: any): void;
    /**
     * 刷新：场景会调用所有场景上的场景对象的该函数
     * @param nowTime 游戏时间戳（Game.pause会暂停游戏时间戳）
     */
    update(nowTime: number): void;
    /**
     * 添加一组行为
     * @param behaviorData 行为数据
     * @param loop 是否循环
     * @param targetSceneObject 目标对象
     * @param onOver 当行为结束时回调
     * @param cover 覆盖旧的行为
     * @param startIndex [可选] 默认值=0 行为起始索引
     * @param Immediate [可选] 默认值=true 是否立即执行，否则等待帧刷
     * @param forceStopLastBehavior  [可选] 默认值=false 是否强制停止此前正在执行的行为
     * @param delayFrame [可选] 默认值=0 行为内部的需要等待的帧数
     * @return 对象行为处理器
     */
    addBehavior(behaviorData: any[], loop: boolean, targetSceneObject: ProjectClientSceneObject, onOver: Callback, cover: boolean, startIndex?: number, Immediate?: boolean, forceStopLastBehavior?: boolean, delayFrame?: number, executor?: SceneObjectEntity): ProjectSceneObjectBehaviors;
    /**
     * 停止当前的行为，但不会清空行为列表，如果存在后续行为指令会继续执行。
     * 如果还想要清空行为列表，可以调用 clearBehaviors
     * @param force 强制停止，不必因移动至中心点而必须移动下一个最近的中心点才停止
     */
    stopBehavior(force?: boolean): void;
    /**
     * 获取当前的行为层
     */
    getBehaviorLayer(): number;
    /**
     * 直接设置坐标
     * @param x
     * @param y
     * @param stopMove [可选] 默认值=true 需要停止移动
     * @param integer [可选] 默认值=true 取整
     * @param alreadySetTempPosHelper [可选] 默认值=false [优化项]表示已计算过格子辅助体，无需重新计算
     * @param alreadySetRect [可选] 默认值=false [优化项]表示已计算过矩形范围，无需重新计算
     * @pparam clacTouchEvent [可选] 默认值=true 是否计算碰触事件
     */
    setTo(x: number, y: number, stopMove?: boolean, integer?: boolean, alreadySetTempPosHelper?: boolean, alreadySetRect?: boolean, clacTouchEvent?: boolean): void;
    /**
     * 自动寻路方式的移动
     * @param toX 目的地像素坐标x
     * @param toY 目的地像素坐标y
     * @param ifObstacleHandleMode [可选] 默认值=0 当目的地是障碍的处理场合 0忽略当前移动指令 1在目的地附近找到可通行点 2强行视为空地进行移动
     * @param costTime [可选] 默认值=0 已花费的时间，移动根据当前时间与初始时间计算障碍
     * @param useAstar [可选] 默认值=true 使用Astar寻路，根据周围障碍信息进行寻路
     * @param whenCantMoveRetry [可选] 默认值=true 当无法移动的时候重试（下一帧重试）
     * @param useGridObstacle [可选] 默认值=true 使用格子障碍，关闭此项将使用矩形碰撞计算障碍
     * @param forceDir4 [可选] 默认值=false 是否强制四方向
     * @param fromAutoRetry [可选] 默认值=false 是否来自自动重试
     */
    autoFindRoadMove(toX: number, toY: number, ifObstacleHandleMode?: number, costTime?: number, useAstar?: boolean, whenCantMoveRetry?: boolean, useGridObstacle?: boolean, forceDir4?: boolean, fromAutoRetry?: boolean): void;
    /**
     * 开始移动（此处不会预先计算障碍，纯粹根据指定的路径移动，但在移动过程中会判定障碍）
     * @param movePath 移动路径，首个坐标无需包含自己的坐标点
     * @param costTime [可选] 默认值=0 当前移动已花费的时间（客户端出现时可能其已在移动中途）
     * @param useGridObstacle [可选] 默认值=false 开启此项则使用格子计算障碍，否则使用矩形计算（A星计算移动则需要开启此项，通常按键可以使用矩形计算）
     * @param onMoveOver [可选] 默认值=null 当移动结束时回调，一般为无关紧要的事务处理，如果特别重要，可以自行加入到存档的自定义数据中，以便读档恢复该回调事件
     */
    startMove(movePath: number[][], costTime?: number, useGridObstacle?: boolean, onMoveOver?: Callback): void;
    /**
     * 停止移动
     * @param force 强制停止，不必因移动至中心点而必须移动下一个最近的中心点才停止
     */
    stopMove(force?: boolean): void;
    /**
     * 跳跃至
     * @param x
     * @param y
     * @param costFrame 已经花费的游戏帧数
     */
    jumpTo(x: number, y: number, costFrame?: number): void;
    /**
     * 记录移动状态
     */
    getRecordMoveState(): {
        useGridObstacle: boolean;
        roadsArr: Point[];
        roadMax: number;
        nowRoad: number;
        nowRoadStartDate: number;
        nowRoadTime: number;
        thisRoadS: number;
        recordNow: number;
        moveSpeed: number;
    };
    /**
     * 恢复移动状态
     * @param force 强行恢复，无论当前是否正处于移动状态中
     */
    restoryMove(recordMoveStateInfo: any, force?: boolean): void;
    /**
     * 进入新的坐标后进行一些刷新
     * -- 位置改变时
     * -- 新出现时
     * @param alreadySetTempPosHelper [优化项]表示已计算过格子辅助体，无需重新计算
     * @param alreadySetRect [优化项]表示已计算过矩形范围，无需重新计算
     * @param clacTouchEvent [可选] 默认值=true 是否计算碰触事件模式
     * @param triggerEvent [可选] 默认值=true 触发碰触事件
     */
    refreshCoordinate(alreadySetTempPosHelper?: boolean, alreadySetRect?: boolean, clacTouchEvent?: boolean, triggerEvent?: boolean): void;
    /**
     * 是否已处于事件等待中
     * @return [boolean]
     */
    get isEventStartWait(): boolean;
    /**
     * 事件开始时等待处理（当前对象是执行者身份）
     * @param trigger 触发者
     * @param faceToTrigger 面向触发者
     * @param 是否等待成功
     */
    eventStartWait(trigger: ProjectClientSceneObject, faceToTrigger?: boolean): boolean;
    /**
     * 事件结束时恢复
     * @return 是否恢复成功
     */
    eventCompleteContinue(): boolean;
    /**
     * 清除我接触的对象记录
     * @param targetSo [可选] 默认值=null 指定的接触过的对象，如果为null则清理全部
     */
    clearMyTouchRecord(targetSo?: ProjectClientSceneObject): void;
    /**
     * 清理所有人接触我的记录
     */
    clearTouchMeRecord(): void;
    /**
     * 是否允许接触
     */
    get touchEnabled(): boolean;
    /**
     * 获取接触者列表
     */
    get lastTouchObjects(): ProjectClientSceneObject[];
    /**
     * 判断指定对象是否在我的接触者列表中
     */
    isInMyTouchList(targetSo: ProjectClientSceneObject): boolean;
    protected useGridObstacle: boolean;
    protected _isMoving: boolean;
    protected roadsArr: Point[];
    protected roadMax: number;
    protected nowRoad: number;
    protected nowRoadStartDate: number;
    protected nowRoadTime: number;
    protected onMoveOver: Callback;
    protected thisRoadS: number;
    protected jumpToPoint: Point;
    protected currentJumpFrame: number;
    /**
     * 开始移动（此处不会预先计算障碍，纯粹根据指定的路径移动，但在移动过程中会判定障碍）
     */
    private doStartMove;
    /**
     * 更改移动状态
     */
    get isMoving(): boolean;
    set isMoving(isMove: boolean);
    /**
     * 更改移动时动作
     */
    protected changeMoveAction(isMove: boolean): void;
    /**
     * 刷新坐标
     * @param _nowTime 当前游戏时间戳
     */
    protected updateCoordinate(_nowTime: number): void;
    /**
     * 跳跃时更改的属性值
     */
    protected get jumpY(): number;
    protected set jumpY(v: number);
    /**
     * 碰触事件处理，碰触是相互的，执行了对方的碰触事件也会执行自己的碰触事件
     * @param touchRes 我的碰触信息
     * @param triggerEvent 是否触发碰触事件
     * @return 是否触发过事件
     */
    protected touchEventHandle(touchRes: {
        isObstacle: boolean;
        touchSceneObjects: ProjectClientSceneObject[];
    }, triggerEvent?: boolean): boolean;
    /**
     * 并行事件处理
     */
    protected parallelEventUpdate(): void;
    /**
     * 执行出现事件
     */
    protected appearEventHandle(): void;
    /**
     * 初始化
     */
    protected init(): void;
    /**
     * 当状态页改变时
     * @param isFirst 首次出现时
     */
    protected onStausPageChange(isFirst: boolean): void;
    /**
     * 开始执行默认行为
     */
    protected startDefBehavior(): void;
    /**
     * 刷新行为
     */
    protected updateBehavior(): void;
    /**
     * 重试自动寻路
     */
    protected retryAutoFindRoadMove(toX: number, toY: number, ifObstacleHandleMode?: number, costTime?: number, useAstar?: boolean, whenCantMoveRetry?: boolean, useGridObstacle?: boolean, touchRes?: any): void;
    /**
     * 清理重试自动寻路的状态
     */
    protected clearRetryAutoFindRoadMove(offCollisionEvent?: boolean): void;
    /**
     * 当系统事件被执行时
     * @param mode 0-对话框显示时 1-对话选择框显示时 2-其他（如更换场景）
     */
    protected onSystemCommandStart(mode: number): void;
    /**
     * 当执行等待事件时更改了面向
     */
    private onExecuteWaitEventChangeOri;
    /**
     * 当执行等待事件时重新执行了新的移动指令
     */
    private onExecuteWaitEventNewMove;
    /**
     * 当游戏暂停状态改变时处理
     */
    private onGamePauseChangeHandle;
}
//# sourceMappingURL=ProjectClientSceneObject.d.ts.map