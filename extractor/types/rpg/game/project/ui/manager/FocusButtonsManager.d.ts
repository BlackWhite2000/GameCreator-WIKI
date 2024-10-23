/**
 * 按钮组焦点管理器
 * 进入新的焦点时可以保留原焦点显示，但动画将会停止
 * 退出焦点时焦点显示会移除
 * Created by 黑暗之神KDS on 2020-09-21 18:41:20.
 */
declare class FocusButtonsManager {
    /**
     * 激活的按钮组焦点
     */
    static _focus: FocusButtonsManager;
    /**
     * 是否已初始化
     */
    private static inited;
    /**
     * 是否已经按下确认键
     */
    private keyDownEnter;
    /**
     * 是否已按下取消键
     */
    private keyDownEsc;
    /**
     * 管理器初始化
     */
    private static init;
    /**
     * 焦点设置和获取
     * @param btnFocusManager 按钮组焦点
     */
    static set focus(btnFocusManager: FocusButtonsManager);
    static get focus(): FocusButtonsManager;
    /**
     * 关闭
     */
    static closeFocus(): void;
    /**
     * 按钮处于焦点中的状态
     * @param btn 按钮
     * @return [number] 0-未启用焦点或未在该焦点组中 1-已在该焦点组中，但未选中 2-已在该焦点组中同时也选中了
     */
    static inFocusState(btn: UIButton): number;
    /**
     * 选中焦点
     * @param btn 按钮
     */
    static setFocusButton(btn: UIButton): boolean;
    /**
     * 所属界面
     */
    private ui;
    /**
     * 选中的按钮
     */
    private selBtn;
    /**
     * 选中的皮肤界面
     */
    private selEffectUI;
    /**
     * 选中的皮肤界面中的target组件（用于动画的目标）
     */
    private selEffectTargetComp;
    /**
     * 选中的皮肤播放的动画效果
     */
    private uiCompFocusAnimation;
    /**
     * 可作为焦点的按钮集
     */
    buttons: UIButton[];
    /**
     * 按钮位置信息
     */
    private btnInfos;
    /**
     * 快捷键关闭
     */
    shortcutKeyExit: boolean;
    /**
     * 当关闭窗口时回到上一个焦点
     */
    whenExitBackLastFocus: boolean;
    /**
     * 当退出焦点时片段事件
     */
    whenExitEvent: string;
    /**
     * 当关闭窗口时的监听事件
     */
    private onExitBackLastFocusCB;
    /**
     * 记录来源焦点，以便关闭时能够恢复该焦点
     */
    private lastFocus;
    /**
     * 构造函数
     * @param ui 所属界面
     * @param isAutoFocus 是否自动选择根容器的第一层子节点中的所有按钮组件作为按键焦点集
     * @param addButtons 额外追加的按钮
     * @param excludeButtons 自动选择后希望剔除掉的按钮
     * @param selEffectUI 选中时皮肤界面的组件
     * @param useFocusAnimation 是否使用焦点动画
     * @param shortcutKeyExit [可选] 默认值=false 快捷键退出
     * @param whenExitBackLastFocus [可选] 默认值=false 当退出时回到上一个焦点
     */
    constructor(ui: GUI_BASE, isAutoFocus: boolean, addButtons: string[], excludeButtons: string[], selEffectUIID: number, useFocusAnimation: boolean, shortcutKeyExit?: boolean, whenExitBackLastFocus?: boolean);
    /**
     * 销毁
     */
    dispose(): void;
    /**
     * 获取和设置按钮索引
     */
    get selectedIndex(): number;
    set selectedIndex(v: number);
    /**
     * 获取实际存在的焦点按钮（可能焦点按钮不再显示了）
     */
    get realButtons(): UIButton[];
    /**
     * 选中按钮
     * @param btn
     * @param btnPos
     */
    private selectButton;
    /**
     * 激活
     */
    private activate;
    /**
     * 取消激活
     */
    private deactivate;
    /**
     * 当按键按下时
     * @param e
     */
    private onKeyDown;
    /**
     * 弹起按键时事件
     * @param e
     */
    private onKeyUp;
    /**
     * 恢复上个焦点
     * -- 该界面被关闭时
     * -- 退出焦点时
     */
    private recoveryLastFocus;
}
//# sourceMappingURL=FocusButtonsManager.d.ts.map