/**
 * 项目层-玩家实现类
 * 
 * Created by 黑暗之神KDS on 2020-03-03 09:04:41.
 */
class ProjectPlayer extends ClientPlayer {
    //------------------------------------------------------------------------------------------------------
    // 静态变量
    //------------------------------------------------------------------------------------------------------
    /**
      * 事件：监听道具数目改变
      */
    static EVENT_CHANGE_ITEM_NUMBER = "ProjectPlayerCHANGE_ITEM_NUMBER";
    /**
     * 事件：监听金币改变
     */
    static EVENT_CHANGE_GOLD_NUMBER = "ProjectPlayerCHANGE_GOLD_NUMBER";
    //------------------------------------------------------------------------------------------------------
    // 实例
    //------------------------------------------------------------------------------------------------------
    /**
     * 玩家的游戏对象数据：重写以便类别能够指向项目层的ProjectClientSceneObject，方便调用
     */
    declare public sceneObject: ProjectClientSceneObject;
    /**
     * 构造函数
     */
    constructor() {
        super(true);
    }
    //------------------------------------------------------------------------------------------------------
    // 静态方法-属性
    //------------------------------------------------------------------------------------------------------
    /**
     * 增加金币
     * @param v 增加的数
     */
    static increaseGold(v: number): void {
        // 修改金币
        Game.player.data.gold = Math.max(Game.player.data.gold + v, 0);
        // 派发事件
        EventUtils.happen(ProjectPlayer, ProjectPlayer.EVENT_CHANGE_GOLD_NUMBER);
    }
    //------------------------------------------------------------------------------------------------------
    // 静态方法-背包
    //------------------------------------------------------------------------------------------------------
    /**
     * 获取道具-DS类型
     * @param itemID 道具ID
     * @return [DataStructure_packageItem] 
     */
    static getItemDS(itemID: number): DataStructure_packageItem {
        return ArrayUtils.matchAttributesD2(Game.player.data.package, "item", { id: itemID }, true)[0] as any;
    }
    /**
     * 获取道具
     * @param itemID 道具ID
     * @return [Module_Item] 
     */
    static getItem(itemID: number): Module_Item {
        let itemDS = this.getItemDS(itemID);
        if (itemDS) return itemDS.item;
        return null;
    }
    /**
     * 改变道具数目（增减道具）
     * @param itemID 道具ID
     * @param v 增加或减少的数目
     */
    static changeItemNumber(itemID: number, v: number): void {
        // 道具不存在的情况：忽略
        if (!GameData.getModuleData(1, itemID)) return;
        // 增加的情况
        if (v > 0) {
            let itemDS = this.getItemDS(itemID);
            if (itemDS) {
                itemDS.number += v;
            }
            else {
                itemDS = new DataStructure_packageItem;
                itemDS.item = GameData.newModuleData(1, itemID);
                itemDS.number = v;
                Game.player.data.package.push(itemDS);
            }
        }
        // 减少的情况
        else {
            let itemDS = this.getItemDS(itemID);
            if (itemDS) {
                itemDS.number += v;
                if (itemDS.number <= 0) Game.player.data.package.splice(Game.player.data.package.indexOf(itemDS), 1);
            }
        }
        // 派发事件
        EventUtils.happen(ProjectPlayer, ProjectPlayer.EVENT_CHANGE_ITEM_NUMBER);
    }

}