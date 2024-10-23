/**
 * 自定义条件分歧
 * Created by 黑暗之神KDS on 2020-09-16 19:47:24.
 */
declare namespace CustomCondition {
    /**
     * 场景对象
     * @param trigger 事件触发器
     * @param p 自定义参数
     * @return [boolean]
     */
    function f1(trigger: CommandTrigger, p: CustomConditionParams_1): boolean;
    /**
     * 界面
     * @param trigger 事件触发器
     * @param p 自定义参数
     * @return [boolean]
     */
    function f2(trigger: CommandTrigger, p: CustomConditionParams_2): boolean;
    /**
     * 系统信息
     */
    function f3(trigger: CommandTrigger, p: CustomConditionParams_3): boolean;
    /**
     * 自定义模块 - 布尔值属性
     */
    function f4(trigger: CommandTrigger, p: CustomConditionParams_4): boolean;
    /**
     * 世界属性 - 布尔值属性
     */
    function f5(trigger: CommandTrigger, p: CustomConditionParams_5): boolean;
    /**
     * 玩家属性 - 布尔值属性
     */
    function f6(trigger: CommandTrigger, p: CustomConditionParams_6): boolean;
}
//# sourceMappingURL=CustomCondition.d.ts.map