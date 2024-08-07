---
title: 接口
---

## System

```ts [OpenAPI.ts]
/**
 * 当前插件版本号
 */
OpenAPI.System.Version: number;

/**
 * 是否安装本插件
 */
OpenAPI.System.Installed: boolean;
```

## Method

```ts [OpenAPI.ts]
/**
 * 当前页面协议
 * @ "http://" : "https://"
 */
OpenAPI.Method.Origin: string;

/**
 * 随机字符串
 * @param {number} len 随机字符串的长度
 */
OpenAPI.Method.getRandomString(len: number): string;

/**
 * 日期转时间戳, 格式 1970/1/1 00:00:00
 * @param {string} date 日期
 */
OpenAPI.Method.dateToTimestamp(date: string): number;

/**
 * 时间戳转日期, 格式 1609459200。 支持获取特定时间 
 * @param {number} data 时间戳
 * @param {string} data_type 【可选】获取时间类型 y、m、d、h、i、s。如 s = 获取时间戳中的秒
 */
OpenAPI.Method.timestampToDate(data: number, data_type?: string): number;

/**
 * 判断常量变量类型
 * @param {any} constant 常量
 * @param {number} variable 变量
 * @param {number} index_type 选项类型 0 = 常量 1 = 变量
 * @param {number} variable_type 【默认数值】变量类型 0 = 数值, 1 = 字符串, 2 = 开关(返回 0 = 关闭, 1 = 开启)
 */
OpenAPI.Method.JudgeTypeConstantVariable(constant: any, variable: number, index_type: number, variable_type?: number): any;
/**
 * 光标系统样式名称
 * 'default', 'auto', 'pointer', 'text', 'wait', 'help', 'crosshair', 'move', 'n-resize', 's-resize', 'w-resize', 'e-resize', 'nw-resize', 'sw-resize', 'ne-resize', 'se-resize'
 */
OpenAPI.Method.cursorSystemStyleName: string[];

/**
 * 基于cursorSystemStyleName来弹出指定名称
 * @param {string[]} name 弹出指定的名称
 */
OpenAPI.Method.cursorSystemStyleName_spliceName(name: string[]): string[];

/**
 * 检查当前模板是否是兼容的模板ID。 false = 不兼容, true = 兼容
 * @param {number[]} templateID 兼容的模板ID合集
 */
OpenAPI.Method.checkTemplateID(templateID: number[]): boolean;

/**
 * 随机颜色
 */
OpenAPI.Method.getRandomColor(): string;

/**
 * 更简单的HttpRequest - 即将弃用
 * @param {string} url 请求地址 
 * @param {any} json 数据, get写null即可 
 * @param {any} completeText 完成事件 
 * @param {any} errorText 发生错误时事件 
 * @param {any} trigger 触发器
 */
OpenAPI.Method.sendRequest(url: string, json: any, completeText: any, errorText: any, trigger?: any): void;

/**
 * 解析文本内变量占位符
 * @param {string} text 文本
 */
OpenAPI.Method.parseVarPlaceholderData(text: string): string;

/**
 * 替换占位符数据
 * @param {string} text 文本
 * @param {RegExp} regex 正则表达式
 * @param {any} getData 解析占位符数据
 * @param {number} start 起始位
 * @param {string} end 结束符号
 */
OpenAPI.Method.replacePlaceholderData(text: string, regex: RegExp, getData: any, start = 3, end = ']'): string | null;

/**
 * 解析文本内函数组合
 * @param {string} text 文本
 * @param {RegExp[]} regex 正则表达式
 */
OpenAPI.Method.parseCombinedFunctions(text: string, regex: RegExp[] | null = null): string;

/**
 * 替换函数组合数据
 * @param {string} text 文本
 * @param {RegExp} regex 正则表达式
 * @param {any} getData 解析函数组合数据
 */
OpenAPI.Method.replaceFunctionCombinations(text: string, regex: RegExp, getData: any): string | null;

/**
 * 解析并计算复杂表达式的函数
 * @param {string} expression - 要解析的表达式
 * @returns {any} 计算结果，如果表达式无效则返回 null
 * @returns {operators} 正则表达式
 */
OpenAPI.Method.evaluateComplexExpression(expression: string, operators: any[]): any;

/**
 * 将阿拉伯数字转换为罗马数字的函数
 * @param {number} num - 要转换的阿拉伯数字
 * @returns {string} 对应的罗马数字
 */
OpenAPI.Method.intToRoman(num: number): string;

/**
 * 打乱数组
 * @param array - 需要打乱的数组。
 * @returns 返回一个新的打乱顺序的数组。
 */
OpenAPI.Method.shuffleArray<T>(array: T[]): T[];

/**
 * 获取事件页名称
 * @param eventPage 事件页
 * @returns 
 */
OpenAPI.Method.getFeDataMessage(eventPage: string): string | null;

/**
 * 获得模块数据
 * @param id 模块id
 * @param comp 回调
 * @param length 类别长度 默认16
 */
OpenAPI.Method.getModuleData(id: number, comp: Callback, length = 16);


/**
 * 获取两个数之间的范围，包括起始和结束数字
 * @param start - 范围的起始数字
 * @param end - 范围的结束数字
 * @returns 包含从起始数字到结束数字之间所有数字的数组
 */
OpenAPI.Method.getRange(start: number, end: number): number[] | null;
```

## UI

```ts [OpenAPI.ts]
/**
 * 界面列表组件数据初始化
 * @param {UIList} list 指定列表
 * @param {any} list_modelGUI 项模型数据,如：ListItem_1
 * @param {number} list_len 列表长度
 * @param {boolean} isFocus 【默认关闭】是否设置焦点
 */
OpenAPI.UI.listDataInit(list: UIList, list_modelGUI: any, list_len: number, isFocus?: boolean): void;

/**
 * 注册鼠标悬浮弹出提示框界面事件
 * @param ui 需要注册的界面ui
 * @param tipId 需要显示的界面id
 * @param tipData 数据 如{"name":{text:"千叶不冷","age":{text:"18"}} 当显示提示框时会自动匹配到提示框界面中相同名字的组件并赋值
 * @param delayed [可选 默认为0] 延迟显示
 * @param expandList [可选 默认为false] 展开列表，当ui为列表时会对里面每个item赋予data.tip的值，即tipData = data.tip
 */
OpenAPI.ShowTips.addTipEvent(ui: UIBase, tipId: number, tipData: any, delayed?: number, expandList?: boolean): void;
```

## GC

```ts [OpenAPI.ts]
/**
 * 是否是GC平台
 */
OpenAPI.GC.Cloud.isInGCCloud: boolean;

/**
 * 游戏ID
 */
OpenAPI.GC.Cloud.GameID: number;

/**
 * 游戏名称
 */
OpenAPI.GC.Cloud.GameName: string;

/**
 * 当前游戏版本号
 */
OpenAPI.GC.Cloud.GameVersion: number;

/**
 * 作者ID
 */
OpenAPI.GC.Cloud.AuthorUID: number;

/**
 * 作者名称
 */
OpenAPI.GC.Cloud.AuthorName: string;

/**
 * 如果是编辑器则弹窗, 如果是发布后则输出
 */
OpenAPI.GC.isCloudLog(text: any): void;
```
