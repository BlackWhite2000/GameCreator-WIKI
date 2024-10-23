/**
 * 该文件为GameCreator编辑器自动生成的代码，请勿修改
 */
/**
* 自定义条件 1-场景对象
*/
class CustomConditionParams_1 {
    soType: number; // = 0; 场景对象
    soIndex: number; // = 0; 编号
    type: number; // = 0; 匹配
    useVar: number; // = 0; 使用变量指定
    soIndexVarID: number; // = 0; 编号
    soCustomAttr: CustomCompData; // 属性
    soModuleAttr: CustomCompData; // 属性
}
/**
* 自定义条件 2-界面
*/
class CustomConditionParams_2 {
    checkType: number; // = 0; 类别
    uiIDVarID: number; // = 1; 界面
    uiID: number; // = 1; 界面
    useVarID: number; // = 0; 使用变量指定
    type: number; // = 0;
    uiComp: { uiID: number, compName:string, compID:string, varName:string }; // 选择界面组件并指定属性
}
/**
* 自定义条件 3-系统信息
*/
class CustomConditionParams_3 {
    type: number; // = 0; 匹配名字
    systemKey: number; // = 0; 系统按键
    worldAttrName: string; // = ""; 属性名
}
/**
* 自定义条件 4-模块
*/
class CustomConditionParams_4 {
    modelData: CustomCompData; // 模块数据的布尔值属性
}
/**
* 自定义条件 5-世界
*/
class CustomConditionParams_5 {
    worldData: CustomCompData; // 世界设定的布尔值属性
}
/**
* 自定义条件 6-玩家
*/
class CustomConditionParams_6 {
    playerData: CustomCompData; // 玩家设定的布尔值属性
}
/**
* 自定义条件 7-Steam
*/
class CustomConditionParams_7 {
    type: number; // = 0;
    dlcID: number; // = 0;
}
/**
* 自定义条件 8-高级条件分歧
*/
class CustomConditionParams_8 {
    comparison: string; // = ""; 判断方式
    setGameVar: boolean; // = false; 定义游戏变量
    debug: boolean; // = false; Debug
    gameVar: DataStructure_定义游戏变量[]; // = [];
}
