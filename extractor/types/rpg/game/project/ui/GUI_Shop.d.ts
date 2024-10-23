/**
 * 商店界面
 * Created by 七星瓢虫 on 2020-10-07 21:21:25.
 */
declare class GUI_Shop extends GUI_11 {
    /**
     * 商店事件数据：从「打开商店」事件中获取
     */
    shopEventData: CustomCommandParams_2012;
    /**
     * 焦点状态：0-购买/出售列表 1-购买/出售区域
     */
    private focusState;
    /**
     * 原本禁用菜单状态
     */
    private preMenuEnabled;
    /**
     * 原本禁止玩家操控状态
     */
    private prePlayCtrlEnabled;
    /**
     * 记录type
     */
    private preTypeTabItem;
    /**
     * 构造函数
     */
    constructor();
    /**
     * 界面监听事件列表
     */
    listenQueue(): void;
    /**
     * 初始化商品列表
     */
    initGoodsList(): void;
    /**
     * 显示界面时
     */
    private onDisplay;
    /**
     * 隐藏界面时
     */
    private onUndisplay;
    /**
     * 选中商品时
     */
    onGoodsClick(): void;
    /**
     * 选中待售品时
     */
    onSellItemClick(): void;
    /**
     * 当购买出售类别改变时处理
     */
    private onTypeTabChange;
    private onKeyDown;
    /**
     * 右键鼠标按下时
     */
    private onRightMouseDOwn;
    /**
     * 使用按钮减少1个购买或卖出数量
     */
    private onSubNumChange;
    /**
     * 使用按钮增加1个购买或卖出数量
     */
    private onAddNumChange;
    /**
     * 使用按钮最大化购买或卖出数量
     */
    private onMaxNumChange;
    /**
     * 使用按钮确认购买或卖出
     */
    private onSureNumChange;
    /**
     * 使用按钮取消购买或卖出
     */
    private onCancelNumChange;
    /**
     * 更改购买或卖出的数量
     */
    private changeBuyOrSellNum;
    /**
     * 购买商品
     */
    private buyGoods;
    /**
     * 减少库存
     */
    private reduceGoodsNum;
    /**
     * 出售商品
     */
    private sellItem;
    /**
     * 刷新商品列表显示效果
     */
    private refreshGoodsListView;
    /**
     * 刷新待售列表显示效果
     */
    private refreshSellItemListView;
    /**
     * 刷新道具详情
     */
    private refreshItemInfo;
    private clearItemInfo;
    /**
     * 刷新持有数量
     */
    private refreshItemInPackage;
    /**
     * 刷新购买数量
     */
    private refreshBuyNum;
    /**
     * 刷新出售数量
     */
    private refreshSellNum;
    /**
     * 刷新待售列表
     */
    refreshSellItemList(): void;
}
//# sourceMappingURL=GUI_Shop.d.ts.map