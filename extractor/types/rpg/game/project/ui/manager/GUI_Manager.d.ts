/**
 * 游戏UI管理器
 * Created by 黑暗之神KDS on 2020-03-17 02:20:53.
 */
declare class GUI_Manager {
    /**
     * 标准化列表LIST
     * -- 键位滚动至可见区域
     */
    static standardList(list: UIList, useItemClickSe?: boolean): void;
    /**
     * 标准化标签栏
     * -- 快捷键
     * @param tab
     */
    static standardTab(tab: UITabBox): void;
    /**
     * 注册鼠标点击区域后激活指定的列表
     * @param area 区域
     * @param list 列表
     * @param playSureSE [可选] 默认值=true 是否播放确认音效
     * @param onFocus [可选] 默认值=null 当产生焦点时回调
     * @param thisPtr [可选] 默认值=null 当产生焦点时回调的作用域
     */
    static regHitAreaFocusList(area: UIBase, list: UIList, playSureSE?: boolean, onFocus?: Function, thisPtr?: any): void;
    /**
     * 激活List并选中
     * @param list 列表
     * @param playSureSE [可选] 默认值=true 是否播放确认音效
     */
    private static focusList;
    /**
     * 按键更改标签索引
     */
    private static onStandardTabKeyDown;
}
//# sourceMappingURL=GUI_Manager.d.ts.map