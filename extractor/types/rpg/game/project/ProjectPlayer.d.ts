/**
 * 项目层-玩家实现类
 *
 * Created by 黑暗之神KDS on 2020-03-03 09:04:41.
 */
declare class ProjectPlayer extends ClientPlayer {
    /**
      * 事件：监听道具数目改变
      */
    static EVENT_CHANGE_ITEM_NUMBER: string;
    /**
     * 事件：监听金币改变
     */
    static EVENT_CHANGE_GOLD_NUMBER: string;
    /**
     * 玩家的游戏对象数据：重写以便类别能够指向项目层的ProjectClientSceneObject，方便调用
     */
    sceneObject: ProjectClientSceneObject;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 增加金币
     * @param v 增加的数
     */
    static increaseGold(v: number): void;
    /**
     * 获取道具-DS类型
     * @param itemID 道具ID
     * @return [DataStructure_packageItem]
     */
    static getItemDS(itemID: number): DataStructure_packageItem;
    /**
     * 获取道具
     * @param itemID 道具ID
     * @return [Module_Item]
     */
    static getItem(itemID: number): Module_Item;
    /**
     * 改变道具数目（增减道具）
     * @param itemID 道具ID
     * @param v 增加或减少的数目
     */
    static changeItemNumber(itemID: number, v: number): void;
}
//# sourceMappingURL=ProjectPlayer.d.ts.map