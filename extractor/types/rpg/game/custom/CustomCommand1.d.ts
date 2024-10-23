/**
 * 自定义事件命令
 * Created by 黑暗之神KDS on 2020-09-09 19:47:24.
 */
declare namespace CommandExecute {
    /**
     * 预加载
     * @param commandPage 事件页
     * @param cmd 当前的事件命令
     * @param trigger 触发器
     * @param triggerPlayer 触发器对应的玩家
     * @param playerInput 玩家输入值（如有）
     * @param p 自定义命令参数
     */
    function customCommand_1(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_1): void;
    /**
     * 等待玩家输入文本
     */
    function customCommand_2(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_2): void;
    function customCommand_3(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_3): void;
    function customCommand_4(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_4): void;
    /**
     * 设置界面属性
     */
    function customCommand_5(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_5): void;
    function customCommand_6(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_6): void;
    /**
     * 关闭界面焦点
     */
    function customCommand_7(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_7): void;
    /**
     * 取消按键事件
     */
    function customCommand_8(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_8): void;
    /**
     * 取消鼠标事件
     */
    function customCommand_9(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_9): void;
    /**
     * 模拟按键
     */
    function customCommand_10(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_10): void;
    /**
     * 提交信息
     */
    function customCommand_11(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_11): void;
    /**
     * 选中列表焦点
     */
    function customCommand_12(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_12): void;
    let countDownNowTime: number;
    function customCommand_13(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_13): void;
    /**
     * 设置数据层
     */
    function customCommand_1001(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_1001): void;
    /**
     * 绘制图块
     */
    function customCommand_1002(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_1002): void;
    /**
     * 绘制自动元件
     */
    function customCommand_1003(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_1003): void;
    /**
     * 清除图块
     */
    function customCommand_1004(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_1004): void;
    /**
     * 设置图层属性
     */
    function customCommand_1005(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_1005): void;
    /**
     * 显示动画
     */
    function customCommand_1006(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_1006): void;
    /**
     * 镜头缩放
     */
    function customCommand_1007(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_1007): void;
    /**
     * 镜头旋转
     */
    function customCommand_1008(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_1008): void;
    /**
     * 金币
     */
    function customCommand_2001(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_2001): void;
    /**
     * 道具
     */
    function customCommand_2002(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_2002): void;
    /**
     * 克隆对象
     */
    function customCommand_2003(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_2003): void;
    /**
     * 销毁克隆的对象
     */
    function customCommand_2004(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_2004): void;
    /**
     * 暂时隐藏对象，从场景上移除但记录列表中仍然存在，可以通过index获取到该对象
     */
    function customCommand_2005(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_2005): void;
    /**
     * 停止移动
     */
    function customCommand_2006(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_2006): void;
    /**
     * 记录移动路径
     */
    function customCommand_2007(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_2007): void;
    /**
     * 恢复移动路径
     */
    function customCommand_2008(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_2008): void;
    /**
     * 修改场景对象的自定义属性
     */
    function customCommand_2009(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_2009): void;
    /**
     * 修改场景对象的行走图的部件
     */
    function customCommand_2011(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_2011): void;
    /**
     * 商店
     */
    function customCommand_2012(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_2012): void;
    /**
     * 清除对象行为
     */
    function customCommand_2013(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_2013): void;
    /**
     * 允许玩家控制
     */
    function customCommand_4001(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_4001): void;
    /**
     * 禁止玩家控制
     */
    function customCommand_4002(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_4002): void;
    /**
     * 允许使用菜单
     */
    function customCommand_4003(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_4003): void;
    /**
     * 禁止使用菜单
     */
    function customCommand_4004(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_4004): void;
    function customCommand_4005(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_4005): void;
    /**
     * 存档
     */
    function customCommand_4006(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_4006): void;
    /**
     *  音量
     */
    function customCommand_4007(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_4007): void;
    /**
     *  返回标题
     */
    function customCommand_4008(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_4008): void;
    /**
     *  暂停游戏
     */
    function customCommand_4009(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_4009): void;
    /**
     *  恢复游戏
     */
    function customCommand_4010(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_4010): void;
    /**
     *  关闭窗口
     */
    function customCommand_4011(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_4011): void;
    /**
     *  对话框音效设置
     */
    function customCommand_4012(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_4012): void;
    /**
     *  设置世界属性
     */
    function customCommand_4013(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_4013): void;
    /**
     *  设置玩家属性
     */
    function customCommand_4014(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_4014): void;
    /**
     * 增减场景对象模块
     */
    function customCommand_8001(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_8001): void;
    /**
     * 设置场景对象模块的属性
     */
    function customCommand_8002(commandPage: CommandPage, cmd: Command, trigger: CommandTrigger, triggerPlayer: ClientPlayer, playerInput: any[], p: CustomCommandParams_8002): void;
}
//# sourceMappingURL=CustomCommand1.d.ts.map