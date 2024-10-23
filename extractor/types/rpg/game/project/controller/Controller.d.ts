/**
 * 游戏总控制器
 * -- 管理其他控制器
 * -- 场景对象的操作
 * -- 场景对象相关事件触发
 * -- 进入场景事件完毕后才会开启控制器
 *
 * Created by 黑暗之神KDS on 2018-10-07 16:18:25.
 */
declare class Controller {
    /** 控制器开启事件 */
    static EVENT_CONTROLLER_START: string;
    /** 控制器关闭事件 */
    static EVENT_CONTROLLER_STOP: string;
    /** 点击事件的命令 true=开始 false=结束 */
    static EVENT_SCENE_OBJECT_CLICK_COMMAND: string;
    /** 碰触事件的命令 true=开始 false=结束 */
    static EVENT_SCENE_OBJECT_TOUCH_COMMAND: string;
    /** 控制器启动状态 */
    static ctrlStart: boolean;
    /** 控制可用状态：点击事件执行中 */
    private static ENABLED_COMMAND_SCENE_OBJECT_CLICK_EXECUTE;
    /** 控制可用状态：碰触事件执行中 */
    private static ENABLED_COMMAND_SCENE_OBJECT_TOUCH_EXECUTE;
    /** 控制可用状态是否可控，需要条件全满足才可控制 */
    private static enabledMapping;
    /** 等待碰触事件开始的状态 */
    private static waitTouchEventStart;
    /** 需要等待的碰触事件执行中计数 */
    private static needWaitTouchExcuteCount;
    /**
     * 当前方向键输入状态：0-无 1-键盘输入 2-手柄输入 3-虚拟按键 4-其他
     */
    static inputState: number;
    /**
     * 启动控制器
     */
    static start(): void;
    /**
     * 停止控制
     */
    static stop(): void;
    /**
     * 在场景中是否可控制
     */
    static get inSceneEnabled(): boolean;
    /**
     * 是否玩家触发事件中（点击事件、碰触事件）
     */
    static get isPlayerTriggerEvent(): boolean;
    private static lastJoyAngle;
    /**
     * 摇杆移动
     * @param dirAngle 角度
     * @param recordAngle [可选] 默认值=true 记录角度，以便拒绝小规模角度偏移导致不断触发移动
     * @param tryTimes [可选] 默认值=-1 尝试次数（当遇到障碍的时候系统会自动尝试更换角度来移动，比如碰到NPC、撞墙等，以便平滑）
     * @param oriAngle [可选] 默认值=null 原始发出的角度
     */
    static startJoy(dirAngle: number, recordAngle?: boolean, tryTimes?: number, oriAngle?: number): void;
    /**
     * 停止摇杆
     */
    static stopJoy(): void;
    /**
     * 开始触发场景对象的点击事件
     * @param target 目标对象
     * @param playerFaceToTarget [可选] 默认值=false 是否执行事件时玩家面向对象
     */
    static startSceneObjectClickEvent(target: ProjectClientSceneObject, playerFaceToTarget?: boolean): void;
    /**
     * 移动至目标场景对象附近后出发点击事件
     * @param targetSceneObject 目标场景对象
     */
    static moveToNearTargetSceneObjectAndTriggerClickEvent(targetSceneObject: ProjectClientSceneObject): void;
    /**
     * 清理移动至目标场景对象附近后出发点击事件的命令
     * @param fromAutoRetry [可选] 默认值=false 来自自动重试
     */
    static clearNearTargetSceneObjectAndTriggerClickEvent(fromAutoRetry?: boolean): void;
    /**
     * 开始触发碰触事件
     * @param trigger 碰触者
     * @param executor 执行者
     * @param onCommandExecuteOver [可选] 默认值=null 执行事件完成后回调
     * @return [boolean] 是否成功
     */
    static startSceneObjectTouchEvent(trigger: ProjectClientSceneObject, executor: ProjectClientSceneObject, onCommandExecuteOver?: Callback): boolean;
    /**
     * 开始离开碰触的事件：当已碰触该对象的对象不再碰触该对象时触发
     * @param trigger 触发者
     * @param executor 执行者
     * @param onCommandExecuteOver [可选] 默认值=null 当执行完成时回调
     * @return [boolean] 是否执行成功
     */
    static startSceneObjectTouchOutEvent(trigger: ProjectClientSceneObject, executor: ProjectClientSceneObject, onCommandExecuteOver?: Callback): boolean;
    /**
     * 开始事件
     */
    private static startEvent;
    /**
     * 清理事件
     */
    private static clearEvent;
    /**
     * 当命令开始时
     * @param enabledID 命令编号
     * @param isStart 是否开始
     */
    private static onCommandStart;
    /**
     * 当摇杆操作时发生了碰撞
     * @param dirAngle 当前角度
     * @param tryTimes 尝试的次数
     * @param oriAngle 最初操作的原始角度
     */
    private static onJoyCollision;
    /**
     * 获取碰撞后自动尝试的角度
     * -- 当fromAngle角度接近四方向的角度则返回四方向
     * @param fromAngle 参考角度
     * @param tryTimes 尝试的次数 2、1
     * @return [number]
     */
    private static getCollisionAutoTryAngle;
}
//# sourceMappingURL=Controller.d.ts.map