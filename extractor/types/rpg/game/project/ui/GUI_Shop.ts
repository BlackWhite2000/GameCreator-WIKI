/**
 * 商店界面
 * Created by 七星瓢虫 on 2020-10-07 21:21:25.
 */
class GUI_Shop extends GUI_11 {
    //===============================================================================
    // 属性
    //===============================================================================
    /**
     * 商店事件数据：从「打开商店」事件中获取
     */
    shopEventData: CustomCommandParams_2012;
    /**
     * 焦点状态：0-购买/出售列表 1-购买/出售区域
     */
    private focusState: number;
    /**
     * 原本禁用菜单状态
     */
    private preMenuEnabled: boolean;
    /**
     * 原本禁止玩家操控状态
     */
    private prePlayCtrlEnabled: boolean;
    /**
     * 记录type
     */
    private preTypeTabItem: string;
    //===============================================================================
    // 初始化
    //===============================================================================
    /**
     * 构造函数
     */
    constructor() {
        super();
        // 标准化列表
        GUI_Manager.standardList(this.goodsList, false);
        GUI_Manager.standardList(this.sellItemList, false);
        // 记录标签类别
        this.preTypeTabItem = this.typeTab.items;
        // 开启监听
        this.listenQueue();
    }
    /**
     * 界面监听事件列表
     */
    listenQueue() {
        // 事件监听：当界面显示时
        this.on(EventObject.DISPLAY, this, this.onDisplay);
        // 事件监听：当界面隐藏时
        this.on(EventObject.UNDISPLAY, this, this.onUndisplay);
        // 事件监听：当商品列表选择项改变时 - 选中商品
        this.goodsList.on(EventObject.CHANGE, this, this.refreshItemInfo, [this.goodsList]);
        // 事件监听：当出售列表选择项改变时 - 选中待售品
        this.sellItemList.on(EventObject.CHANGE, this, this.refreshItemInfo, [this.sellItemList]);
        // 事件监听：当商品列表项选中时 - 刷新道具
        this.goodsList.on(UIList.ITEM_CLICK, this, this.onGoodsClick);
        // 事件监听：当出售列表项选中时 - 刷新道具
        this.sellItemList.on(UIList.ITEM_CLICK, this, this.onSellItemClick);
        // 事件监听：当切换购买出售标签时
        this.typeTab.on(EventObject.CHANGE, this, this.onTypeTabChange);
        // 事件监听：当按下关闭按钮时
        this.closeBtn.on(EventObject.CLICK, this, () => {
            GameAudio.playSE(WorldData.cancelSE);
            GameUI.hide(this.guiID);
        });
        // 购买/出售相关按钮
        this.subNumBtn.on(EventObject.CLICK, this, this.onSubNumChange);
        this.addNumBtn.on(EventObject.CLICK, this, this.onAddNumChange);
        this.maxNumBtn.on(EventObject.CLICK, this, this.onMaxNumChange);
        this.sureBtn.on(EventObject.CLICK, this, this.onSureNumChange);
        this.cancelBtn.on(EventObject.CLICK, this, this.onCancelNumChange);
        // 鼠标右键
        stage.on(EventObject.RIGHT_MOUSE_DOWN, this, this.onRightMouseDOwn);
    }
    /**
     * 初始化商品列表
     */
    public initGoodsList() {
        let dataArr: DataStructure_shopItem[];
        let p = this.shopEventData;
        if (!p || !p.goodsList || p.goodsList.length == 0) {
            this.goodsList.items = [];
            this.goodsList.selectedIndex = -1;
            return;
        }
        dataArr = p.goodsList;
        let items = [];
        // 遍历
        for (let i = 0; i < dataArr.length; i++) {
            let goods = dataArr[i];
            let data = new ListItem_1003();
            let moduleID = 1;
            let gooldsID = goods.item;
            let item: Module_Item = GameData.getModuleData(moduleID, gooldsID);
            // 道具不存在的情况：忽略
            if (!item) continue;
            data.data = goods;
            data.icon = item.icon;
            data.itemName = item.name;
            if (goods.numberType == 0) {
                data.itemNum = this.shopEventData.nameWhenInfinite;
            }
            else if (goods.numberType == 1) {
                data.itemNum = goods.number.toString();
            }
            else {
                data.itemNum = Game.player.variable.getVariable(goods.numberVar).toString();
            }
            if (goods.priceType == 0) {
                data.itemPrice = item.sell.toString();
            }
            else if (goods.priceType == 1) {
                data.itemPrice = goods.price.toString();
            }
            else {
                data.itemPrice = Game.player.variable.getVariable(goods.priceVar).toString();
            }
            let playerItemDS = ProjectPlayer.getItemDS(item.id);
            data.ownNum = playerItemDS ? playerItemDS.number.toString() : "0";
            items.push(data);
        }
        // 赋值
        this.goodsList.items = items;
        // 默认悬停第一项
        this.goodsList.selectedIndex = 0;
        // 刷新商品列表显示效果
        this.refreshGoodsListView();
    }
    //===============================================================================
    // 监听反馈
    //===============================================================================
    /**
     * 显示界面时
     */
    private onDisplay() {
        // 容错：没有商店数据时
        if (!this.shopEventData) return;
        // 禁用菜单
        this.preMenuEnabled = WorldData.menuEnabled;
        WorldData.menuEnabled = false;
        // 调整出售按钮
        if (this.shopEventData.enableSell) {
            this.typeTab.items = this.preTypeTabItem;
        }
        else {
            this.typeTab.items = this.preTypeTabItem.split(",")[0];
        }
        // 隐藏购买区域
        this.buyBoxArea.visible = false;
        // 初始化商品列表
        this.initGoodsList();
        // 更新焦点状态：0-商品列表(延迟1帧)
        setFrameout(() => { UIList.focus = this.goodsList; }, 1);
        this.focusState = 0;
        // 刷新选中的道具详情
        this.refreshItemInfo();
        // 开启按键监听
        stage.on(EventObject.KEY_DOWN, this, this.onKeyDown);
    }
    /**
     * 隐藏界面时
     */
    private onUndisplay() {
        // 恢复禁用菜单为原先状态
        WorldData.menuEnabled = this.preMenuEnabled;
        // 取消按键监听
        stage.off(EventObject.KEY_DOWN, this, this.onKeyDown);
        // 回到购买页面
        this.typeTab.selectedIndex = 0;
    }
    /**
     * 选中商品时
     */
    onGoodsClick() {
        // 获取当前选中的列表项
        let selectedItem: ListItem_1003 = this.goodsList.selectedItem as any;
        if (selectedItem && selectedItem.data) {
            // 获取商品信息
            let itemID: number = selectedItem.data;                  // 道具编号
            let itemNum: number = Number(selectedItem.itemNum);  // 剩余数量
            let itemPrice: number = Number(selectedItem.itemPrice);  // 当前价格
            // 可购买的情况
            if (itemPrice <= Game.player.data.gold && itemNum != 0) {
                // 播放 确认音效
                GameAudio.playSE(ClientWorld.data.sureSE);
                // 更新焦点状态：1-购买区域
                this.focusState = 1;
                // 显示购买区域
                this.buyBoxArea.visible = true;
                this.buyNum_text.visible = true;
                this.sellNum_text.visible = false;
                UIList.focus = null;
                this.buyNum.text = "1";
                // 刷新购买数量
                this.refreshBuyNum(selectedItem);
            }
            else { // 不可购买的情况
                // 播放 禁用音效
                GameAudio.playSE(ClientWorld.data.disalbeSE);
            }
        }
    }
    /**
     * 选中待售品时
     */
    onSellItemClick() {
        // 获取当前选中的列表项
        let selectedItem: ListItem_1003 = this.sellItemList.selectedItem as any;
        if (selectedItem && selectedItem.data) {
            // 获取待售品信息
            let itemID: number = selectedItem.data;                  // 道具编号
            let itemNum: number = Number(selectedItem.itemNum);  // 持有数量
            let itemPrice: number = Number(selectedItem.itemPrice);  // 出售价格
            // 可出售的情况
            if (itemNum > 0) {
                // 播放 确认音效
                GameAudio.playSE(ClientWorld.data.sureSE);
                // 更新焦点状态：1-出售区域
                this.focusState = 1;
                // 显示购买区域
                this.buyBoxArea.visible = true;
                this.buyNum_text.visible = false;
                this.sellNum_text.visible = true;
                UIList.focus = null;
                this.buyNum.text = "1";
                // 刷新出售数量
                this.refreshSellNum(selectedItem);
            }
            else { // 不可出售的情况
                // 播放 禁用音效
                GameAudio.playSE(ClientWorld.data.disalbeSE);
            }
        }
    }
    /**
     * 当购买出售类别改变时处理
     */
    private onTypeTabChange() {
        // 购买
        if (this.typeTab.selectedIndex == 0) {
            // 隐藏待售列表
            this.sellItemList.visible = false;
            // 显示商品列表
            this.goodsList.visible = true;
            // 更新焦点状态：0-商品列表
            UIList.focus = this.goodsList;
            this.focusState = 0;
            this.buyBoxArea.visible = false;
            this.refreshItemInfo(this.goodsList);
            // 更换提示文字
            this.buyNum_text.visible = true;
            this.sellNum_text.visible = false;
            // 刷新商品列表显示效果
            this.refreshGoodsListView();
        }
        // 出售
        else if (this.typeTab.selectedIndex == 1) {
            // 刷新出售列表
            this.refreshSellItemList();
            // 隐藏商品列表
            this.goodsList.visible = false;
            // 显示待售列表
            this.sellItemList.visible = true;
            // 更新焦点状态：0-待售列表
            UIList.focus = this.sellItemList;
            this.focusState = 0;
            this.buyBoxArea.visible = false;
            this.refreshItemInfo(this.sellItemList);
            // 更换提示文字
            this.buyNum_text.visible = false;
            this.sellNum_text.visible = true;
        }
    }
    //===============================================================================
    // 监听反馈 仅显示时监听
    //===============================================================================
    private onKeyDown(e: EventObject) {
        let keyCode: number = e.keyCode;
        // 按键：切换标签
        if (GUI_Setting.IS_KEY(e.keyCode, GUI_Setting.KEY_BOARD.L1)) {
            if (this.typeTab.selectedIndex > 0) {
                this.typeTab.selectedIndex--;
                GameAudio.playSE(WorldData.selectSE);
            }
        }
        else if (GUI_Setting.IS_KEY(e.keyCode, GUI_Setting.KEY_BOARD.R1)) {
            if (this.typeTab.selectedIndex < this.typeTab.length - 1) {
                this.typeTab.selectedIndex++;
                GameAudio.playSE(WorldData.selectSE);
            }
        }
        // 按键：退出
        else if (GUI_Setting.IS_KEY(e.keyCode, GUI_Setting.KEY_BOARD.B)) {
            if (this.focusState == 0) {
                // ESC键：离开商店
                GameAudio.playSE(WorldData.cancelSE);
                GameUI.hide(this.guiID);
            }
            else if (this.focusState == 1) {
                GameAudio.playSE(WorldData.cancelSE);
                this.focusState = 0;
                this.buyBoxArea.visible = false;
                if (this.typeTab.selectedIndex == 0) {
                    UIList.focus = this.goodsList;
                }
                else {
                    UIList.focus = this.sellItemList;
                }
            }
        }
        // 操作购买/售出数值
        if (this.focusState == 1) {
            // 获取当前选中的列表项
            let selectedItem: ListItem_1003;
            if (this.typeTab.selectedIndex == 0) selectedItem = this.goodsList.selectedItem as any;
            else if (this.typeTab.selectedIndex == 1) selectedItem = this.sellItemList.selectedItem as any;
            // 方向键：数量操作
            let buyNum: number = Number(this.buyNum.text);
            let flag_key_num: boolean = false;
            // 下：减 10
            if (GUI_Setting.IS_KEY(e.keyCode, GUI_Setting.KEY_BOARD.DOWN)) {
                flag_key_num = true;
                if (buyNum > 10) buyNum -= 10;
                else buyNum = 1;
            }
            // 上：加 10
            else if (GUI_Setting.IS_KEY(e.keyCode, GUI_Setting.KEY_BOARD.UP)) {
                flag_key_num = true;
                if (buyNum < 990) buyNum += 10;
                else buyNum = 999;
            }
            // 左：减 1
            else if (GUI_Setting.IS_KEY(e.keyCode, GUI_Setting.KEY_BOARD.LEFT)) {
                flag_key_num = true;
                if (buyNum > 1) buyNum -= 1;
            }
            // 右：加 1
            else if (GUI_Setting.IS_KEY(e.keyCode, GUI_Setting.KEY_BOARD.RIGHT)) {
                flag_key_num = true;
                if (buyNum < 999) buyNum += 1;
            }
            // 触发方向键时
            if (flag_key_num == true) {
                // 刷新数量
                if (this.typeTab.selectedIndex == 0) this.refreshBuyNum(selectedItem, buyNum);
                else if (this.typeTab.selectedIndex == 1) this.refreshSellNum(selectedItem, buyNum);
                GameAudio.playSE(WorldData.selectSE);
            }
            // 确定键：购买
            if (GUI_Setting.IS_KEY(e.keyCode, GUI_Setting.KEY_BOARD.A)) {
                // 买卖商品
                if (this.typeTab.selectedIndex == 0) this.buyGoods(selectedItem, Math.floor(Number(this.buyNum.text)));
                else if (this.typeTab.selectedIndex == 1) this.sellItem(selectedItem, Math.floor(Number(this.buyNum.text)))
            }
        }
    }
    /**
     * 右键鼠标按下时
     */
    private onRightMouseDOwn() {
        if (!this.stage) return;
        let e = new EventObject;
        e.keyCode = GUI_Setting.KEY_BOARD.BACK.keys[0];
        this.onKeyDown(e);
    }
    /**
     * 使用按钮减少1个购买或卖出数量
     */
    private onSubNumChange() {
        let buyNum: number = Number(this.buyNum.text);
        if (buyNum > 1) buyNum -= 1;
        this.changeBuyOrSellNum(buyNum);
    }
    /**
     * 使用按钮增加1个购买或卖出数量
     */
    private onAddNumChange() {
        let buyNum: number = Number(this.buyNum.text);
        if (buyNum < 999) buyNum += 1;
        this.changeBuyOrSellNum(buyNum);
    }
    /**
     * 使用按钮最大化购买或卖出数量
     */
    private onMaxNumChange() {
        let buyNum: number = 999;
        this.changeBuyOrSellNum(buyNum);
    }
    /**
     * 使用按钮确认购买或卖出
     */
    private onSureNumChange() {
        let selectedItem: ListItem_1003;
        if (this.typeTab.selectedIndex == 0) selectedItem = this.goodsList.selectedItem as any;
        else if (this.typeTab.selectedIndex == 1) selectedItem = this.sellItemList.selectedItem as any;
        if (this.typeTab.selectedIndex == 0) this.buyGoods(selectedItem, Math.floor(Number(this.buyNum.text)));
        else if (this.typeTab.selectedIndex == 1) this.sellItem(selectedItem, Math.floor(Number(this.buyNum.text)))
    }
    /**
     * 使用按钮取消购买或卖出
     */
    private onCancelNumChange() {
        GameAudio.playSE(WorldData.cancelSE);
        this.focusState = 0;
        this.buyBoxArea.visible = false;
        if (this.typeTab.selectedIndex == 0) {
            UIList.focus = this.goodsList;
        }
        else {
            UIList.focus = this.sellItemList;
        }
    }
    /**
     * 更改购买或卖出的数量
     */
    private changeBuyOrSellNum(buyNum: number) {
        GameAudio.playSE(WorldData.selectSE);
        let selectedItem: ListItem_1003;
        if (this.typeTab.selectedIndex == 0) selectedItem = this.goodsList.selectedItem as any;
        else if (this.typeTab.selectedIndex == 1) selectedItem = this.sellItemList.selectedItem as any;
        if (this.typeTab.selectedIndex == 0) this.refreshBuyNum(selectedItem, buyNum);
        else if (this.typeTab.selectedIndex == 1) this.refreshSellNum(selectedItem, buyNum);
    }
    //===============================================================================
    // 数据交互
    //===============================================================================
    /**
     * 购买商品
     */
    private buyGoods(selectedItem: ListItem_1003, buyNum: number) {
        // 容错
        if (!selectedItem || !selectedItem.data) return;
        let itemDS: DataStructure_shopItem = selectedItem.data;
        let itemPrice = Math.floor(Number(selectedItem.itemPrice));
        if (itemPrice * buyNum > Game.player.data.gold) return;
        let itemID = itemDS.item;
        // 播放 确认音效
        GameAudio.playSE(ClientWorld.data.sureSE);
        // 扣除对应货币
        ProjectPlayer.increaseGold(-itemPrice * buyNum)
        // 减少对应库存
        this.reduceGoodsNum(buyNum);
        // 增加对应道具
        ProjectPlayer.changeItemNumber(itemID, buyNum);
        // 刷新持有数量
        this.refreshItemInPackage(itemID, selectedItem);
        // 刷新列表显示
        this.refreshGoodsListView();
        // 隐藏购买区域
        this.buyBoxArea.visible = false;
        // 更新焦点状态：0-商品列表
        this.focusState = 0;
        UIList.focus = this.goodsList;
    }
    /**
     * 减少库存
     */
    private reduceGoodsNum(buyNum: number) {
        // 获取选中项索引
        let selectedItemIndex: number = this.goodsList.selectedIndex;
        if (selectedItemIndex < 0) return;
        // 获取商品数据
        let goods: ListItem_1003 = this.goodsList.items[selectedItemIndex] as any;
        // 获取商店事件原始数据
        let data: DataStructure_shopItem = this.shopEventData.goodsList[selectedItemIndex];
        // 当数量类型为无限时，什么都不发生
        if (data.numberType == 0) return;
        // 更新库存数量
        goods.itemNum = (Number(goods.itemNum) - buyNum).toString();
        this.goodsList.replaceItem(goods, selectedItemIndex);
        // 当数量类型为变量时，修改对应变量
        if (data.numberType == 2) Game.player.variable.setVariable(data.numberVar, Number(goods.itemNum));
    }
    /**
     * 出售商品
     */
    private sellItem(selectedItem: ListItem_1003, sellNum: number) {
        // 容错
        if (!selectedItem || !selectedItem.data || sellNum <= 0) return;
        let itemDS: DataStructure_packageItem = selectedItem.data;
        let itemPrice = Math.floor(Number(selectedItem.itemPrice));
        let itemID = itemDS.item.id;
        // 播放 确认音效
        GameAudio.playSE(ClientWorld.data.sureSE);
        // 增加对应货币
        ProjectPlayer.increaseGold(itemPrice * sellNum)
        // 减少对应道具
        ProjectPlayer.changeItemNumber(itemID, -sellNum)
        // 刷新持有数量
        this.refreshItemInPackage(itemID, null);
        // 刷新待售列表
        this.refreshSellItemList();
        // 刷新列表显示
        this.refreshSellItemListView();
        // 隐藏购买区域
        this.buyBoxArea.visible = false;
        // 更新焦点状态：0-待售列表
        this.focusState = 0;
        UIList.focus = this.sellItemList;
    }
    //===============================================================================
    // 刷新
    //===============================================================================
    /**
     * 刷新商品列表显示效果
     */
    private refreshGoodsListView() {
        for (let i = 0; i < this.goodsList.length; i++) {
            // 获取对应商品的界面
            let goodsUI: GUI_1003 = this.goodsList.getItemUI(i) as any;
            // 获取对应商品的数据
            let goods: ListItem_1003 = this.goodsList.items[i] as any;
            // 根据价格判断是否不可购买更改显示效果（这里默认就是半透明啦~）
            if (Number(goods.itemPrice) > Game.player.data.gold || goods.itemNum == "0") {
                goodsUI.alpha = 0.5;
            }
            else {
                goodsUI.alpha = 1;
            }
        }
    }
    /**
     * 刷新待售列表显示效果
     */
    private refreshSellItemListView() {
        for (let i = 0; i < this.sellItemList.length; i++) {
            // 获取对应商品的界面
            let sellItemUI: GUI_1003 = this.sellItemList.getItemUI(i) as any;
            // 获取对应商品的数据
            let sellItem: ListItem_1003 = this.sellItemList.items[i] as any;
            // 根据价格判断是否不可购买更改显示效果（这里默认就是半透明啦~）
            if (Number(sellItem.itemNum) <= 0) {
                sellItemUI.alpha = 0.5;
            }
            else {
                sellItemUI.alpha = 1;
            }
        }
    }
    /**
     * 刷新道具详情
     */
    private refreshItemInfo(list: UIList = this.goodsList) {
        // 获取选中的项数据
        let selectedItem = list.selectedItem as ListItem_1003;
        // 未选中任何道具的情况
        if (!selectedItem || !selectedItem.data) {
            this.clearItemInfo();
        }
        // 已选中道具的情况：显示该道具详情
        else {
            let item: Module_Item;
            if (this.typeTab.selectedIndex == 0) {
                let itemDS: DataStructure_shopItem = selectedItem.data;
                item = GameData.getModuleData(1, itemDS.item);
            }
            else {
                let inPackageItemDS: DataStructure_packageItem = selectedItem.data;
                item = (inPackageItemDS.item) as any;
            }
            if (!item) {
                this.clearItemInfo();
                return;
            }
            this.itemIntro.text = item.intro;
            this.itemName.text = item.name;
            // 刷新持有数量
            this.refreshItemInPackage(item.id, selectedItem);
        }
        // 重置购买数量
        this.buyNum.text = "1";
        // 刷新文本容器
        this.itemIntro.height = this.itemIntro.textHeight;
        this.itemIntroRoot.refresh();
    }
    private clearItemInfo() {
        this.itemName.text = "";
        this.itemIntro.text = "";
    }
    /**
     * 刷新持有数量
     */
    private refreshItemInPackage(itemID: number, selectedItem: ListItem_1003) {
        let itemInPackage = ProjectPlayer.getItemDS(itemID);
        // 没有选中项数据时动态查找，查找不到则无需刷新
        if (!selectedItem) {
            selectedItem = ArrayUtils.matchAttributesD2(this.goodsList.items, "data", { item: itemID }, true)[0];
            if (!selectedItem) return;
        }
        let index = this.goodsList.items.indexOf(selectedItem);
        selectedItem.ownNum = itemInPackage ? itemInPackage.number.toString() : "0";
        this.goodsList.replaceItem(selectedItem, index);
    }
    /**
     * 刷新购买数量
     */
    private refreshBuyNum(selectedItem: ListItem_1003, buyNum?: number) {
        if (!buyNum) buyNum = Number(this.buyNum.text);
        if (selectedItem && selectedItem.data) {
            // 修正最大购买数量，不超过商品剩余数量
            if (selectedItem.itemNum != this.shopEventData.nameWhenInfinite && buyNum > Number(selectedItem.itemNum)) {
                buyNum = Number(selectedItem.itemNum);
            }
            // 修正最大购买数量，不超过持有金额
            if (Number(selectedItem.itemPrice) > 0 && buyNum * Number(selectedItem.itemPrice) > Game.player.data.gold) {
                buyNum = Game.player.data.gold / Number(selectedItem.itemPrice);
            }
            // 刷新文本
            this.buyNum.text = Math.floor(buyNum).toString();
        }
    }
    /**
     * 刷新出售数量
     */
    private refreshSellNum(selectedItem: ListItem_1003, buyNum?: number) {
        if (!buyNum) buyNum = Number(this.buyNum.text);
        if (selectedItem && selectedItem.data) {
            // 修正最大出售数量，不超过持有数量
            if (buyNum > Number(selectedItem.itemNum)) {
                buyNum = Number(selectedItem.itemNum);
            }
            // 刷新文本
            this.buyNum.text = Math.floor(buyNum).toString();
        }
    }
    /**
     * 刷新待售列表
     */
    public refreshSellItemList() {
        let items = [];
        // 遍历玩家自定义数据-背包
        for (let i = 0; i < Game.player.data.package.length; i++) {
            // 创建对应的背包物品项数据，该项数据由系统自动生成
            let d = new ListItem_1003();
            // 获取背包的道具DS格式
            let itemDS = Game.player.data.package[i];
            // 不允许出售的情况：不列举
            if (!itemDS.item.sellEnabled) continue;
            let sell = itemDS.item.sell;
            // 跳过数据库中售价为0的物品
            if (sell == 0) continue;
            let sellPrice: number = Math.ceil(sell * this.shopEventData.discount);
            d.data = itemDS;                     // 模块编号
            // 绑定数据
            d.icon = itemDS.item.icon;                   // 图标
            d.itemName = itemDS.item.name;               // 名称
            d.itemNum = itemDS.number.toString();        // 数目
            d.itemPrice = sellPrice.toString();          // 价格
            d.ownNum = "";
            items.push(d);
        }
        // 赋值
        this.sellItemList.items = items;
    }
}