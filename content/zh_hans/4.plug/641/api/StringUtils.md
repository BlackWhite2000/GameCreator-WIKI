---
title: 字符串操作工具 StringUtils
---

## 目录

|                                                 |                                                                |
| ----------------------------------------------- | -------------------------------------------------------------- |
| [snakeCase](#snakecase)                         | 将字符串转换为蛇形命名法（snake_case）。                       |
| [randomString](#randomstring)                   | 随机字符串                                                     |
| [randomColor](#randomcolor)                     | 随机颜色                                                       |
| [parseVariableText](#parsevariabletext)         | 解析文本内变量占位符数据, 可自定义获取数据的方法以及正则表达式 |
| [parseGameVariableText](#parsegamevariabletext) | 解析文本内游戏变量占位符数据                                   |
| [parseFunctionText](#parsefunctiontext)         | 解析文本内函数组合占位符数据                                   |
| [arabicToRoman](#arabictoroman)                 | 将阿拉伯数字转换为罗马数字的函数                               |

## snakeCase

```ts [ts]
/**
* 将字符串转换为蛇形命名法（snake_case）。
*
* 蛇形命名法是一种命名约定，其中每个单词都以小写字母书写，并用下划线（_）字符分隔。
*
* @param {string} str - 要转换为蛇形命名法的字符串。
* @returns {string} - 转换后的蛇形命名法字符串。
*
* @example
* ```ts
* const convertedStr1 = snakeCase('camelCase') // 返回 'camel_case'
* const convertedStr2 = snakeCase('some whitespace') // 返回 'some_whitespace'
* const convertedStr3 = snakeCase('hyphen-text') // 返回 'hyphen_text'
* const convertedStr4 = snakeCase('HTTPRequest') // 返回 'http_request'
* ```
*/
```

## randomString

```ts [ts]
/**
* 随机字符串
* 
* @param {number} length - 字符串长度
* @param {string} str - 随机的字符串
* 
* @example
* ```ts
* const randomStr = randomString(10) // 返回 'a1b2c3d4e5'
* ```
*/
```

## randomColor

```ts [ts]
/**
* 随机颜色
* 
* @example
* ```ts
* const randomColor = randomColor() // 返回 '#ffffff'
* ```
*/
```

## parseVariableText

```ts [ts]
/**
* 解析文本内变量占位符数据, 可自定义获取数据的方法以及正则表达式
* 
* @param {string} text - 文本
* @param {(((s: any) => number) | ((s: any) => string))[]} getData - 获取数据的方法
* @param {RegExp[]} regex - 正则表达式
* 
* @example
* ```ts
* const text = '你好, 我是[@s1], 今年[@v1]岁'
* return parseVariableText(text) // 返回 '你好, 我是黑白, 今年18岁'
* ```
*/
```

## parseGameVariableText

```ts [ts]
/**
* 解析文本内游戏变量占位符数据
* 
* @param {string} text - 文本
* @param {any[]} gameData - 游戏数据
* @param {RegExp[]} regex - 正则表达式
* 
* @example
* ```ts
* const text = '你好, 我是[@gs0], 今年[@gv1]岁'
* // gameData 需要从编辑器中获取, 例如游戏变量组件
* return parseGameVariableText(text, gameData) // 返回 '你好, 我是黑白, 今年18岁'
* ```
*/
```

## parseFunctionText

```ts [ts]
/**
* 解析文本内函数组合占位符数据
* 
* @param {string} text - 文本
* @param {RegExp[]} regex - 正则表达式
* 
* @example
* ```ts
* const text = 'max(1,100)' // 获取最大值
* return parseFunctionText(text) // 返回 '100'
* const text = 'min(1,100)' // 获取最小值
* return parseFunctionText(text) // 返回 '1'
* const text = 'random(1,100)' // 获取随机数
* return parseFunctionText(text) // 返回 '18.1234...' 不会取整
* const text = 'reduce(50,100)' // 获取平均值
* return parseFunctionText(text) // 返回 '75'
* const text = 'abs(-18)' // 获取绝对值
* return parseFunctionText(text) // 返回 '18'
* const text = 'sqrt(18)' // 获取开方
* return parseFunctionText(text) // 返回 '4.2426...' 不会取整
* const text = 'round(1.1234)' // 获取整数
* return parseFunctionText(text) // 返回 '1'
* ```
*/
```

## arabicToRoman

```ts [ts]
/**
* 将阿拉伯数字转换为罗马数字的函数
* 
* @param {number} num - 阿拉伯数字
* 
* @example
* ```ts
* const romanNum = arabicToRoman(2024) // 返回 'MMXXIV'
* ```
*/
```
