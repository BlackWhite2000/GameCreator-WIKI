/**
 * 项目层工具类
 * Created by 黑暗之神KDS on 2020-09-13 22:48:37.
 */
declare class ProjectUtils {
    static mouseWhileValue: number;
    /**
     * 回调函数辅助者：重用实例
     */
    static callbackHelper: Callback;
    /**
     * 点辅助者：重用实例
     */
    static pointHelper: Point;
    /**
     * 矩形辅助者：重用实例
     */
    static rectangleHelper: Rectangle;
    /**
     * 当前按键的事件对象
     */
    static keyboardEvent: EventObject;
    static keyboardEvents: {
        keyCode: number;
    }[];
    /**
     * 最近的操控方式 0-鼠标 1-按键 2-手柄
     */
    static lastControl: number;
    /**
     * 当前按键来自手柄
     */
    static fromGamePad: boolean;
    /**
     * 矩形对象池
     */
    private static rectanglePool;
    static init(): void;
    /**
     * 创建Rectangle
     */
    static takeoutRect(): Rectangle;
    /**
     * 返还Rectangle
     * @param rect
     */
    static freeRect(rect: Rectangle): void;
    /**
     * 格式化日期
     * @param fmt 格式化字符串规格 如
     * @param date
     * @return [String]
     */
    static dateFormat(fmt: string, date: Date): string;
    /**
     * 格式化计时器
     * @param time 时间段（毫秒）
     * @return [string]
     */
    static timerFormat(time: number): string;
    /**
     * 元素组索引移动
     * 根据相对的方位和距离计算
     * @param groupElements 元素组信息
     * @param currentIndex 索引
     * @param moveDir 2=下 4=左 6=右 8=上
     * @param fuzzySearch [可选] 默认值=false 模糊搜索，如果启用则在相对方位还会搜索临近的两个方向
     */
    static groupElementsMoveIndex(groupElements: {
        x: number;
        y: number;
    }[], currentIndex: number, moveDir: number, limitSecondAxis?: number): number;
}
//# sourceMappingURL=ProjectUtils.d.ts.map