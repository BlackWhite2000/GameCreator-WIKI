/**
 * 该文件为GameCreator编辑器自动生成的代码，请勿修改
 */
/**
 * 1-标题界面 [BASE]
 */
declare class GUI_1 extends GUI_BASE {
    标题背景: UIBitmap;
    底部装饰: UIBitmap;
    上半圆装饰: UIBitmap;
    下半圆装饰: UIBitmap;
    游戏标题: UIString;
    开始游戏按钮: UIButton;
    读取存档按钮: UIButton;
    游戏设置按钮: UIButton;
    退出游戏按钮: UIButton;
    上装饰: UIBitmap;
    下装饰: UIBitmap;
    constructor();
}
declare class ListItem_1 extends UIListItemData {
    标题背景: string;
    底部装饰: string;
    上半圆装饰: string;
    下半圆装饰: string;
    游戏标题: string;
    上装饰: string;
    下装饰: string;
}
/**
 * 2-读档界面 [BASE]
 */
declare class GUI_2 extends GUI_BASE {
    半透明背景: UIBitmap;
    界面框背景: UIBitmap;
    滚动条背景: UIBitmap;
    list: UIList;
    关闭读档界面按钮: UIButton;
    关闭标志: UIBitmap;
    界面标题: UIString;
    constructor();
}
declare class ListItem_2 extends UIListItemData {
    半透明背景: string;
    界面框背景: string;
    滚动条背景: string;
    list: UIListItemData[];
    关闭标志: string;
    界面标题: string;
}
/**
 * 3-菜单界面 [BASE]
 */
declare class GUI_3 extends GUI_BASE {
    半透明背景: UIBitmap;
    背包按钮: UIButton;
    存档按钮: UIButton;
    读档按钮: UIButton;
    设置按钮: UIButton;
    返回标题界面按钮: UIButton;
    返回游戏按钮: UIButton;
    constructor();
}
declare class ListItem_3 extends UIListItemData {
    半透明背景: string;
}
/**
 * 4-背包界面 [BASE]
 */
declare class GUI_4 extends GUI_BASE {
    半透明背景: UIBitmap;
    道具框背景: UIBitmap;
    说明栏背景: UIBitmap;
    说明栏背景底衬: UIBitmap;
    货币栏背景: UIBitmap;
    滚动条背景: UIBitmap;
    list: UIList;
    itemIntroRoot: UIRoot;
    itemIntro: UIString;
    itemName: UIString;
    玩家金币数: UIString;
    关闭背包界面按钮: UIButton;
    关闭标志: UIBitmap;
    货币图片: UIBitmap;
    我的金币文本: UIString;
    界面标题: UIString;
    constructor();
}
declare class ListItem_4 extends UIListItemData {
    半透明背景: string;
    道具框背景: string;
    说明栏背景: string;
    说明栏背景底衬: string;
    货币栏背景: string;
    滚动条背景: string;
    list: UIListItemData[];
    itemIntro: string;
    itemName: string;
    关闭标志: string;
    货币图片: string;
    我的金币文本: string;
    界面标题: string;
}
/**
 * 5-存档界面 [BASE]
 */
declare class GUI_5 extends GUI_BASE {
    半透明背景: UIBitmap;
    界面框背景: UIBitmap;
    滚动条背景: UIBitmap;
    list: UIList;
    关闭存档界面按钮: UIButton;
    关闭标志: UIBitmap;
    界面标题: UIString;
    constructor();
}
declare class ListItem_5 extends UIListItemData {
    半透明背景: string;
    界面框背景: string;
    滚动条背景: string;
    list: UIListItemData[];
    关闭标志: string;
    界面标题: string;
}
/**
 * 6-系统设置 [BASE]
 */
declare class GUI_6 extends GUI_BASE {
    半透明背景: UIBitmap;
    设置框背景: UIBitmap;
    typeTab: UITabBox;
    常规: UIRoot;
    bgmFocus: UIButton;
    bgsFocus: UIButton;
    seFocus: UIButton;
    tsFocus: UIButton;
    bgmSlider: UISlider;
    bgsSlider: UISlider;
    seSlider: UISlider;
    tsSlider: UISlider;
    背景音乐音量文本: UIString;
    环境音效音量文本: UIString;
    音效音量文本: UIString;
    语音音量文本: UIString;
    键盘控制: UIRoot;
    键盘滚动条背景: UIBitmap;
    keyboardList: UIList;
    keyboardReset: UIButton;
    手柄控制: UIRoot;
    手柄滚动条背景: UIBitmap;
    gamepadList: UIList;
    gamepadReset: UIButton;
    关闭系统设置界面按钮: UIButton;
    关闭标志: UIBitmap;
    needInputKeyPanel: UIBitmap;
    needInputKeyLabel: UIString;
    constructor();
}
declare class ListItem_6 extends UIListItemData {
    半透明背景: string;
    设置框背景: string;
    typeTab: string;
    bgmSlider: number;
    bgsSlider: number;
    seSlider: number;
    tsSlider: number;
    背景音乐音量文本: string;
    环境音效音量文本: string;
    音效音量文本: string;
    语音音量文本: string;
    键盘滚动条背景: string;
    keyboardList: UIListItemData[];
    手柄滚动条背景: string;
    gamepadList: UIListItemData[];
    关闭标志: string;
    needInputKeyPanel: string;
    needInputKeyLabel: string;
}
/**
 * 7-文本输入界面 [BASE]
 */
declare class GUI_7 extends GUI_BASE {
    界面背景: UIBitmap;
    输入框背景: UIBitmap;
    input: UIInput;
    提交文本输入按钮: UIButton;
    constructor();
}
declare class ListItem_7 extends UIListItemData {
    界面背景: string;
    输入框背景: string;
    input: string;
}
/**
 * 8-数字输入界面 [BASE]
 */
declare class GUI_8 extends GUI_BASE {
    界面背景: UIBitmap;
    输入框背景: UIBitmap;
    input: UIInput;
    提交数字输入按钮: UIButton;
    constructor();
}
declare class ListItem_8 extends UIListItemData {
    界面背景: string;
    输入框背景: string;
    input: string;
}
/**
 * 9-密码输入界面 [BASE]
 */
declare class GUI_9 extends GUI_BASE {
    界面背景: UIBitmap;
    输入框背景: UIBitmap;
    input: UIInput;
    提交密码输入按钮: UIButton;
    constructor();
}
declare class ListItem_9 extends UIListItemData {
    界面背景: string;
    输入框背景: string;
    input: string;
}
/**
 * 10-游戏结束界面 [BASE]
 */
declare class GUI_10 extends GUI_BASE {
    半透明背景: UIBitmap;
    底部装饰: UIBitmap;
    苍之羽标志: UIBitmap;
    GameOver文本: UIString;
    constructor();
}
declare class ListItem_10 extends UIListItemData {
    半透明背景: string;
    底部装饰: string;
    苍之羽标志: string;
    GameOver文本: string;
}
/**
 * 11-商店界面 [BASE]
 */
declare class GUI_11 extends GUI_BASE {
    半透明背景: UIBitmap;
    goodsListBox: UIBitmap;
    文字底衬: UIBitmap;
    文本_商品名称: UIString;
    文本_价格: UIString;
    文本_数量: UIString;
    文本_持有数量: UIString;
    滚动条背景: UIBitmap;
    goodsList: UIList;
    sellItemList: UIList;
    说明栏背景: UIBitmap;
    buyBox: UIRoot;
    buyBoxArea: UIRoot;
    购买数量背景底衬: UIBitmap;
    buyNum_text: UIString;
    sellNum_text: UIString;
    buyNum_text2: UIString;
    subNumBtn: UIButton;
    addNumBtn: UIButton;
    maxNumBtn: UIButton;
    购买数量背景纹路: UIBitmap;
    buyNum: UIString;
    sureBtn: UIButton;
    cancelBtn: UIButton;
    itemBox: UIBitmap;
    说明栏背景底衬: UIBitmap;
    itemName: UIString;
    itemIntroRoot: UIRoot;
    itemIntro: UIString;
    货币栏背景: UIBitmap;
    goldNum: UIString;
    closeBtn: UIButton;
    关闭标志: UIBitmap;
    typeTab: UITabBox;
    我的金币文本: UIString;
    货币图片: UIBitmap;
    constructor();
}
declare class ListItem_11 extends UIListItemData {
    半透明背景: string;
    goodsListBox: string;
    文字底衬: string;
    文本_商品名称: string;
    文本_价格: string;
    文本_数量: string;
    文本_持有数量: string;
    滚动条背景: string;
    goodsList: UIListItemData[];
    sellItemList: UIListItemData[];
    说明栏背景: string;
    购买数量背景底衬: string;
    buyNum_text: string;
    sellNum_text: string;
    buyNum_text2: string;
    购买数量背景纹路: string;
    buyNum: string;
    itemBox: string;
    说明栏背景底衬: string;
    itemName: string;
    itemIntro: string;
    货币栏背景: string;
    关闭标志: string;
    typeTab: string;
    我的金币文本: string;
    货币图片: string;
}
/**
 * 12-虚拟按键 [BASE]
 */
declare class GUI_12 extends GUI_BASE {
    容器: UIRoot;
    A: UIButton;
    B: UIButton;
    START: UIButton;
    BACK: UIButton;
    rockerBg: UIBitmap;
    上标识: UIBitmap;
    右标识: UIBitmap;
    下标识: UIBitmap;
    左标识: UIBitmap;
    rocker: UIBitmap;
    dirBtnRoot: UIRoot;
    上按钮: UIButton;
    下按钮: UIButton;
    左按钮: UIButton;
    右按钮: UIButton;
    隐藏按键: UIButton;
    constructor();
}
declare class ListItem_12 extends UIListItemData {
    rockerBg: string;
    上标识: string;
    右标识: string;
    下标识: string;
    左标识: string;
    rocker: string;
}
/**
 * 13-计时器 [BASE]
 */
declare class GUI_13 extends GUI_BASE {
    图片: UIBitmap;
    time: UIString;
    constructor();
}
declare class ListItem_13 extends UIListItemData {
    图片: string;
    time: string;
}
/**
 * 14-TEST [BASE]
 */
declare class GUI_14 extends GUI_BASE {
    图片2: UIBitmap;
    图片1: UIBitmap;
    行走图: UIAvatar;
    行走图2: UIAvatar;
    文本: UIString;
    滑块控件: UISlider;
    游戏数值: UIString;
    constructor();
}
declare class ListItem_14 extends UIListItemData {
    图片2: string;
    图片1: string;
    行走图: number;
    行走图2: number;
    文本: string;
    滑块控件: number;
}
/**
 * 15-TEST2 [BASE]
 */
declare class GUI_15 extends GUI_BASE {
    图片2: UIBitmap;
    容器: UIRoot;
    物理: UIRoot;
    图片: UIBitmap;
    文本: UIString;
    constructor();
}
declare class ListItem_15 extends UIListItemData {
    图片2: string;
    图片: string;
    文本: string;
}
/**
 * 16- [BASE]
 */
declare class GUI_16 extends GUI_BASE {
    constructor();
}
declare class ListItem_16 extends UIListItemData {
}
/**
 * 17- [BASE]
 */
declare class GUI_17 extends GUI_BASE {
    constructor();
}
declare class ListItem_17 extends UIListItemData {
}
/**
 * 18- [BASE]
 */
declare class GUI_18 extends GUI_BASE {
    constructor();
}
declare class ListItem_18 extends UIListItemData {
}
/**
 * 19- [BASE]
 */
declare class GUI_19 extends GUI_BASE {
    constructor();
}
declare class ListItem_19 extends UIListItemData {
}
/**
 * 20- [BASE]
 */
declare class GUI_20 extends GUI_BASE {
    constructor();
}
declare class ListItem_20 extends UIListItemData {
}
/**
 * 1001-档案_Item [BASE]
 */
declare class GUI_1001 extends GUI_BASE {
    项目背景: UIBitmap;
    screenshotImg: UIBitmap;
    截图背景: UIBitmap;
    mapName: UIString;
    dateStr: UIString;
    no: UIString;
    delBtn: UIButton;
    关闭标志: UIBitmap;
    texts: UIRoot;
    游戏时长文本: UIString;
    创建时间文本: UIString;
    gameTimeStr: UIString;
    constructor();
}
declare class ListItem_1001 extends UIListItemData {
    项目背景: string;
    screenshotImg: string;
    截图背景: string;
    mapName: string;
    dateStr: string;
    no: string;
    关闭标志: string;
    游戏时长文本: string;
    创建时间文本: string;
    gameTimeStr: string;
}
/**
 * 1002-道具_Item [BASE]
 */
declare class GUI_1002 extends GUI_BASE {
    项目背景: UIBitmap;
    itemNum: UIString;
    itemName: UIString;
    道具背景: UIBitmap;
    icon: UIBitmap;
    道具框: UIBitmap;
    constructor();
}
declare class ListItem_1002 extends UIListItemData {
    项目背景: string;
    itemNum: string;
    itemName: string;
    道具背景: string;
    icon: string;
    道具框: string;
}
/**
 * 1003-商品_Item [BASE]
 */
declare class GUI_1003 extends GUI_BASE {
    项目背景: UIBitmap;
    ownNum: UIString;
    itemNum: UIString;
    道具背景: UIBitmap;
    itemPrice: UIString;
    道具框: UIBitmap;
    itemName: UIString;
    icon: UIBitmap;
    constructor();
}
declare class ListItem_1003 extends UIListItemData {
    项目背景: string;
    ownNum: string;
    itemNum: string;
    道具背景: string;
    itemPrice: string;
    道具框: string;
    itemName: string;
    icon: string;
}
/**
 * 1004- [BASE]
 */
declare class GUI_1004 extends GUI_BASE {
    constructor();
}
declare class ListItem_1004 extends UIListItemData {
}
/**
 * 1005- [BASE]
 */
declare class GUI_1005 extends GUI_BASE {
    constructor();
}
declare class ListItem_1005 extends UIListItemData {
}
/**
 * 1006- [BASE]
 */
declare class GUI_1006 extends GUI_BASE {
    constructor();
}
declare class ListItem_1006 extends UIListItemData {
}
/**
 * 1007- [BASE]
 */
declare class GUI_1007 extends GUI_BASE {
    constructor();
}
declare class ListItem_1007 extends UIListItemData {
}
/**
 * 1008-按钮选中效果样式1 [BASE]
 */
declare class GUI_1008 extends GUI_BASE {
    容器: UIRoot;
    target: UIBitmap;
    constructor();
}
declare class ListItem_1008 extends UIListItemData {
    target: string;
}
/**
 * 1009-按钮选中效果样式2 [BASE]
 */
declare class GUI_1009 extends GUI_BASE {
    容器: UIRoot;
    target: UIBitmap;
    constructor();
}
declare class ListItem_1009 extends UIListItemData {
    target: string;
}
/**
 * 1010-按钮选中效果样式3 [BASE]
 */
declare class GUI_1010 extends GUI_BASE {
    容器: UIRoot;
    target: UIBitmap;
    constructor();
}
declare class ListItem_1010 extends UIListItemData {
    target: string;
}
/**
 * 1011- [BASE]
 */
declare class GUI_1011 extends GUI_BASE {
    constructor();
}
declare class ListItem_1011 extends UIListItemData {
}
/**
 * 1012- [BASE]
 */
declare class GUI_1012 extends GUI_BASE {
    constructor();
}
declare class ListItem_1012 extends UIListItemData {
}
/**
 * 1013- [BASE]
 */
declare class GUI_1013 extends GUI_BASE {
    constructor();
}
declare class ListItem_1013 extends UIListItemData {
}
/**
 * 1014- [BASE]
 */
declare class GUI_1014 extends GUI_BASE {
    constructor();
}
declare class ListItem_1014 extends UIListItemData {
}
/**
 * 1015- [BASE]
 */
declare class GUI_1015 extends GUI_BASE {
    constructor();
}
declare class ListItem_1015 extends UIListItemData {
}
/**
 * 1016- [BASE]
 */
declare class GUI_1016 extends GUI_BASE {
    constructor();
}
declare class ListItem_1016 extends UIListItemData {
}
/**
 * 1017- [BASE]
 */
declare class GUI_1017 extends GUI_BASE {
    constructor();
}
declare class ListItem_1017 extends UIListItemData {
}
/**
 * 1018-设置_Item1 [BASE]
 */
declare class GUI_1018 extends GUI_BASE {
    项目背景: UIBitmap;
    keyName: UIString;
    key1: UIButton;
    key2: UIButton;
    key3: UIButton;
    key4: UIButton;
    constructor();
}
declare class ListItem_1018 extends UIListItemData {
    项目背景: string;
    keyName: string;
}
/**
 * 1019-设置_Item2 [BASE]
 */
declare class GUI_1019 extends GUI_BASE {
    项目背景: UIBitmap;
    keyName: UIString;
    key1: UIButton;
    constructor();
}
declare class ListItem_1019 extends UIListItemData {
    项目背景: string;
    keyName: string;
}
/**
 * 1020- [BASE]
 */
declare class GUI_1020 extends GUI_BASE {
    constructor();
}
declare class ListItem_1020 extends UIListItemData {
}
/**
 * 2001-启动载入界面 [BASE]
 */
declare class GUI_2001 extends GUI_BASE {
    进度条背景: UIBitmap;
    loadingComp: UISlider;
    动画: UIAnimation;
    constructor();
}
declare class ListItem_2001 extends UIListItemData {
    进度条背景: string;
    loadingComp: number;
    动画: number;
}
/**
 * 2002-新游戏载入界面 [BASE]
 */
declare class GUI_2002 extends GUI_BASE {
    图片: UIBitmap;
    constructor();
}
declare class ListItem_2002 extends UIListItemData {
    图片: string;
}
/**
 * 2003-读档载入界面 [BASE]
 */
declare class GUI_2003 extends GUI_BASE {
    图片: UIBitmap;
    constructor();
}
declare class ListItem_2003 extends UIListItemData {
    图片: string;
}
/**
 * 2004-场景载入界面 [BASE]
 */
declare class GUI_2004 extends GUI_BASE {
    图片: UIBitmap;
    constructor();
}
declare class ListItem_2004 extends UIListItemData {
    图片: string;
}
/**
 * 2005- [BASE]
 */
declare class GUI_2005 extends GUI_BASE {
    constructor();
}
declare class ListItem_2005 extends UIListItemData {
}
/**
 * 3001-我的自定义界面 [BASE]
 */
declare class GUI_3001 extends GUI_BASE {
    图片: UIBitmap;
    文本: UIString;
    按钮: UIButton;
    游戏数值: UIString;
    constructor();
}
declare class ListItem_3001 extends UIListItemData {
    图片: string;
    文本: string;
}
/**
 * 3002- [BASE]
 */
declare class GUI_3002 extends GUI_BASE {
    constructor();
}
declare class ListItem_3002 extends UIListItemData {
}
/**
 * 15001- [BASE]
 */
declare class GUI_15001 extends GUI_BASE {
    constructor();
}
declare class ListItem_15001 extends UIListItemData {
}
//# sourceMappingURL=UIRuntime.d.ts.map