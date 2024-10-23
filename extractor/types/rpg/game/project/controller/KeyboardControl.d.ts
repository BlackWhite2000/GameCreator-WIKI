/**
 * 按键控制器
 * -- 移动
 * -- 调查/对话
 * -- 其他
 *
 * Created by 黑暗之神KDS on 2018-10-08 19:21:25.
 */
declare class KeyboardControl {
    /**
     * 方向
     */
    private static dir;
    /**
     * 最近的按键
     */
    private static lastKeyDown;
    /**
     * 是否更改了方向
     */
    private static isChangeDir;
    /**
     * 方向按键储存：DOWN/UP/LEFT/RIGHT
     */
    private static dirKeyDown;
    /**
     * 方向偏移
     */
    static dirOffsetArr: number[][];
    /**
     * 辅助计算
     */
    private static clickNpc3Mode;
    private static lastDx;
    private static lastDy;
    private static lastJoyAngle;
    private static onKeyUpdateCB;
    /**
     * 是否已启动
     */
    /**
     * 初始化
     */
    static init(): void;
    /**
     * 启动
     */
    static start(): void;
    /**
     * 停止
     */
    static stop(): void;
    /**
     * 设置按键方向根据指定的方向
     * @param dir 方向
     */
    static setDirKeyDown(dir: number): void;
    /**
     * 当键盘按下时
     * @param e
     */
    private static onKeyDown;
    /**
     * 当按键弹起时
     * @param e
     */
    private static onKeyUp;
    /**
     * 尝试触发场景对象点击事件
     * -- 第一判断：然后按照本这个格子触发
     * -- 第二判断：优先按照方向前一格
     */
    private static tryTriggerSceneObjectClickEvent;
    /**
     * 刷新：方向键移动人物
     * -- 当面向0时不响应
     * -- 当没有改变按键方向的话，检测未到达目的地就不再请求移动
     */
    private static update;
    /**
     * 开启按键后持续移动用的清除
     */
    private static clearKeyDown;
    /**
     * 确定按键按下状态
     * @param keyCode 按键值
     * @param isDown 是否按下
     * @return [boolean]
     */
    private static dirKeyDownTrue;
    /**
     * 根据按键按下状态刷新方向
     */
    private static updateDir;
    /**
     * 获取左方向键是否按下
     * @return [boolean]
     */
    private static get leftDown();
    /**
     * 获取右方向键是否按下
     */
    private static get rightDown();
    /**
     * 获取下方向键是否按下
     */
    private static get downDown();
    /**
     * 获取上方向键是否按下
     */
    private static get upDown();
    /**
     * 移动至指定的格子中心点
     * @param xGrid 格子坐标点x
     * @param yGrid 格子坐标点y
     */
    static moveDirectGrid(xGrid: number, yGrid: number): void;
    /**
     * 移动至指定坐标
     * @param x 像素点x
     * @param y 像素点y
     * @param trySingleDir 尝试单方向移动，斜方向可能走不通的情况，变为只移动x或只移动y来尝试滑动
     */
    static moveDirect(x: number, y: number, trySingleDir?: boolean): boolean;
    /**
     * 取消移动结束后触发点击事件（空白事件）
     */
    private static offMoveOverTriggerClickEvent;
}
//# sourceMappingURL=KeyboardControl.d.ts.map