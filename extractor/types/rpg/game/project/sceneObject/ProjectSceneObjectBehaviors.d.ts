/**
 * 自定义场景对象行为
 * 一个对象可能拥有多层行为，当前总是执行最后层的行为
 * 当行为播放完毕的时候根据循环决定是否重复播放或是清除行为
 * 当处于logicPause状态下时会不在继续执行后面的行为
 *
 * Created by 黑暗之神KDS on 2019-08-07 13:24:13.
 */
declare class ProjectSceneObjectBehaviors extends SceneObjectBehaviors {
    /**
     * 执行行为者（可能是执行事件者或触发事件者或者其他指定的对象）
     */
    so: ProjectClientSceneObject;
    /**
     * 触发事件者
     */
    targetSceneObject: ProjectClientSceneObject;
    /**
     * 执行事件者（派发行为者）
     */
    executor: ProjectClientSceneObject;
    /**
     * 需要恢复的移动行为
     */
    needRecoveryMoveInfo: any;
    /**
     * 执行事件页中
     */
    private executeCommandPageFragment;
    /**
     * [行为编辑器专用]-记录预设的影子
     */
    private soModule_shadow_default;
    /**
     * 等待动作结束
     */
    protected isWaitingActionOver: boolean;
    /**
     * 逻辑用的暂停标识，比如行为在运动结束前不在执行下一步动作（如配合Game.pause的效果）
     * 实现类可以根据具体的游戏规则重写该属性，以便能够正确的暂停下一步行为执行
     * 如RPG中处于移动中的对象只有等待执行完毕后再继续执行：
     */
    protected get logicPause(): boolean;
    /**
     * 重置：还原到最初始的状态
     * 仅在行为编辑器预览使用，项目层需要实现行为的重置，以便预览时能够正确显示效果
     */
    reset(defSceneObejct: SceneObject): void;
    /**
     * 构造函数
     * @param so 执行行为的场景对象
     * @param loop 是否循环
     * @param targetSceneObject 事件触发者
     * @param onOver 当行为执行完毕时回调 onOver(soBehavior:SceneObjectBehaviors)
     * @param startIndex [可选] 默认值=0 起始行为索引行
     * @param executor [可选] 默认值=null 事件执行者（也是行为派发者）
     */
    constructor(so: SceneObjectEntity, loop: boolean, targetSceneObject: SceneObject, onOver: Callback, startIndex?: number, executor?: SceneObjectEntity);
    /**
     * 设置行走图
     * 该行为系统内置，由项目层实现
     * @param avatarID 行走图ID
     * @param actID 动作
     * @param frame 帧数
     * @param ori  [可选] 默认值=null 表示面向
     */
    private behavior0;
    /** 向下移动一步 2 */
    private behavior1;
    /** 向左移动一步 4 */
    private behavior2;
    /** 向上移动一步 8 */
    private behavior3;
    /** 向右移动一步 6 */
    private behavior4;
    /** 向左下移动一步 1 */
    private behavior5;
    /** 向右下移动一步 3 */
    private behavior6;
    /** 向左上移动一步 7 */
    private behavior7;
    /** 向右上移动一步 9 */
    private behavior8;
    /** 随机移动一步 */
    private behavior9;
    /** 靠近场景对象 */
    private behavior10;
    /** 远离玩家移动一步 */
    private behavior11;
    /** 移动至 */
    private behavior12;
    /** 跳跃至坐标 */
    private behavior13;
    /** 设置至坐标 */
    private behavior14;
    /** 等待 */
    private behavior15;
    /** 面向朝下 */
    private behavior16;
    /** 面向朝左 */
    private behavior17;
    /** 面向朝上 */
    private behavior18;
    /** 面向朝右 */
    private behavior19;
    /** 面向朝左下 */
    private behavior20;
    /** 面向朝右下 */
    private behavior21;
    /** 面向朝左上 */
    private behavior22;
    /** 面向朝右上 */
    private behavior23;
    /** 随机朝向 */
    private behavior24;
    /** 面向指定的场景对象 */
    private behavior25;
    /** 背向指定的场景对象 */
    private behavior26;
    /** 使用变量指定面向 */
    private behavior27;
    /** 更改体型 */
    private behavior28;
    /** 更改移动速度 */
    private behavior29;
    /** 更改透明度 */
    private behavior30;
    /** 更改色相 */
    private behavior31;
    /** 更改动作播放帧率 */
    private behavior32;
    /** 更改影子 */
    private behavior33;
    /** 播放动画 */
    private behavior34;
    /** 停止动画 */
    private behavior35;
    /** 播放音效 */
    private behavior36;
    /**
     * 忽略不能移动的场合
     * @param v 是否忽略不能移动的场合 0=ON 1=OFF
     * @param keepMoveActWhenCollsionObstacleAndIgnoreCantMove
     * @param systemRecovery 来自系统恢复还原此前的设置
     */
    private behavior37;
    /** 允许选中 */
    private behavior38;
    /** 固定朝向 */
    private behavior39;
    /** 更改显示层次 */
    private behavior40;
    /** 桥属性 */
    private behavior41;
    /** 自动播放动作 */
    private behavior42;
    /** 移动时自动切换动作 */
    private behavior43;
    /** 穿透 */
    private behavior44;
    /** 限定四方向 */
    private behavior45;
    /** 更改行走图ID */
    private behavior46;
    /** 更改动作 */
    private behavior47;
    /** 更改帧 */
    private behavior48;
    /** 事件页：触发者-事件触发者 执行者-自身 */
    private behavior49;
    /** 编辑器预览 */
    private behavior50;
    private behaviorMoveD;
    /**
     * 刷新场景对象
     */
    private sceneObjectUpdate;
}
//# sourceMappingURL=ProjectSceneObjectBehaviors.d.ts.map