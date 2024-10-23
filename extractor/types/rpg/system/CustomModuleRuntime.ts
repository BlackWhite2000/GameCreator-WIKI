/**
 * #1 道具
 */
class Module_Item {
    id: number;
    name: string;
    icon: string; // = ""; 图标
    intro: string; // = "";
    sell: number; // = 0; 商店售价
    isUse: boolean; // = false; 可使用
    sellEnabled: boolean; // = false; 允许出售给商店
    isConsumables: boolean; // = false; 消耗品
    se: string; // = ""; 使用时音效
    callEvent: string; // = ""; 使用后执行的事件
}
/**
 * #2 光标样式
 */
class Module_cursorStyleDiy_yyvhc {
    id: number;
    name: string;
}
/**
 * #3 字体切换
 */
class Module_W26_FontMap {
    id: number;
    name: string;
    fontMap: DataStructure_W26_FontMap[]; // = [];
}