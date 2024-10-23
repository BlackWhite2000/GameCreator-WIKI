/**
 * 背包
 * Created by 黑暗之神KDS on 2020-09-17 14:56:35.
 */
class GUI_Package extends GUI_4 {
    // 使用道具锁定状态
    private useItemLock: boolean;
    /**
     * 构造函数
     */
    constructor() {
        super();
        // 标准化列表
        GUI_Manager.standardList(this.list, false);
        // 事件监听：当界面显示时
        this.on(EventObject.DISPLAY, this, this.onDisplay);
        // 事件监听：当列表选择项改变时-刷新道具描述
        this.list.on(EventObject.CHANGE, this, this.refreshItemInfo);
        // 事件监听：当项选中时-刷新道具
        this.list.on(UIList.ITEM_CLICK, this, this.onItemClick);
        // 事件监听：当道具更改时
        EventUtils.addEventListenerFunction(ProjectPlayer, ProjectPlayer.EVENT_CHANGE_ITEM_NUMBER, this.onItemChange, this);
        // 事件监听：当创建项对象时
        this.list.onCreateItem = Callback.New(this.onCreateItemUI, this);
    }
    //------------------------------------------------------------------------------------------------------
    // 事件
    //------------------------------------------------------------------------------------------------------
    /**
     * 当界面显示时事件
     */
    private onDisplay() {
        // 设置焦点为道具列表
        UIList.focus = this.list;
        // 刷新道具列表
        this.refreshItems(0);
        // 刷新选中的道具详情
        this.refreshItemInfo();
    }
    /**
     * 当创建项显示对象时
     */
    private onCreateItemUI(ui: GUI_1002, data: ListItem_1002, index: number) {
        let itemDS: DataStructure_packageItem = data.data;
        // 空数据透明化
        if (!itemDS) ui.alpha = 0;
        // 禁用:不可使用的道具
        if (itemDS && !itemDS.item.isUse) {
            ui.itemName.alpha = ui.icon.alpha = ui.itemNum.alpha = 0.2;
        }
    }
    /**
     * 当道具发生变更时
     */
    private onItemChange() {
        // 刷新道具（优化：延迟到下一帧渲染前执行，以保证连续多次更改道具后仅刷新一次而非多次）
        Callback.CallLaterBeforeRender(this.refreshItems, this, [0]);
    }
    /**
     * 当道具点击时
     */
    private onItemClick() {
        // 锁定状态下时不触发使用效果
        if (this.useItemLock) return;
        // 获取当前选中的列表项
        let selectedItem = this.list.selectedItem;
        if (selectedItem && selectedItem.data) {
            // 获取道具DS格式（此结构额外追加储存了道具的数目）
            let itemDS: DataStructure_packageItem = selectedItem.data;
            // 获取道具
            let item = itemDS.item;
            // 可使用道具的情况
            if (item.isUse) {
                // 播放使用音效
                if (item.se) GameAudio.playSE(item.se);
                // 锁定，在执行完毕事件前不允许再次使用
                this.useItemLock = true;
                // 执行片段事件
                let trigger = CommandPage.startTriggerFragmentEvent(item.callEvent, Game.player.sceneObject, Game.player.sceneObject, Callback.New(() => {
                    this.useItemLock = false;
                }, this));
                if (!trigger) this.useItemLock = false;
                // 消耗品的情况：道具-1
                if (item.isConsumables) ProjectPlayer.changeItemNumber(item.id, -1);
            }
            // 否则禁止使用的场合播放禁用音效
            else {
                GameAudio.playSE(WorldData.disalbeSE);
                return;
            }
        }
    }
    //------------------------------------------------------------------------------------------------------
    // 刷新
    //------------------------------------------------------------------------------------------------------
    /**
     * 刷新道具列表
     */
    private refreshItems(state: number) {
        if (state != 0) return;
        let arr: ListItem_1002[] = [];
        // 遍历玩家自定义数据-背包
        for (let i = 0; i < Game.player.data.package.length; i++) {
            // 创建对应的背包物品项数据，该项数据由系统自动生成
            let d = new ListItem_1002;
            // 获取背包的道具DS格式
            let itemDS = Game.player.data.package[i];
            // 绑定项数据，项显示对象会自动根据项数据设置对应的值，参考UIList.api头部注释（CTRL+SHIFT+R搜索UIList.api）
            d.data = itemDS; // 项数据记录对应的道具，以便能够通过项数据找到其对应的道具
            d.icon = itemDS.item.icon; // 设置图标
            d.itemName = itemDS.item.name; // 设置名称
            d.itemNum = "x" + itemDS.number.toString(); // 设置道具数目
            arr.push(d);
        }
        // 如果没有道具的话：追加一个空项
        if (Game.player.data.package.length == 0) {
            let emptyItem = new ListItem_1002;
            emptyItem.icon = "";
            emptyItem.itemName = "";
            emptyItem.itemNum = "";
            arr.push(emptyItem)
        }
        // 刷新排列
        arr.sort((aListItem, bListItem) => {
            let a = aListItem.data as DataStructure_packageItem;
            let b = bListItem.data as DataStructure_packageItem;
            if (!a || !b) return -1;
            // -- 道具比装备更优先
            if (a.item.isUse != b.item.isUse) {
                return a.item.isUse ? -1 : 1;
            }
            // -- 装备按照编号排列
            else {
                return a.item.id < b.item.id ? -1 : 1;
            }
        });
        // 刷新列表
        this.list.items = arr;
    }
    /**
     * 刷新道具详情
     */
    private refreshItemInfo() {
        // 获取选中的项数据
        let selectedItem = this.list.selectedItem;
        // 未选中任何道具的情况
        if (!selectedItem || !selectedItem.data) {
            this.itemName.text = "";
            this.itemIntro.text = "";
        }
        // 已选中道具的情况：显示该道具详情
        else {
            let itemDS: DataStructure_packageItem = selectedItem.data;
            this.itemName.text = itemDS.item.name;
            this.itemIntro.text = itemDS.item.intro;
        }
        this.itemIntro.height = this.itemIntro.textHeight;
        this.itemIntroRoot.refresh();
    }


}