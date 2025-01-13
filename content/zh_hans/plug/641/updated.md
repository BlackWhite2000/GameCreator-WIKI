---
title: 更新日志
---

## v3.7

整理函数，整理自动生成的文档

## v3.0~v3.6

整理函数，并准备逐渐少用 Method 类, 为了兼容以前的插件，并不会删除

## v2.4~v2.9

### 新增函数

```ts [ts]
OpenAPI.Method.parseCombinedFunctions
OpenAPI.Method.replaceFunctionCombinations
OpenAPI.Method.evaluateComplexExpression
OpenAPI.Method.intToRoman
OpenAPI.Method.shuffleArray
OpenAPI.Method.getFeDataMessage
OpenAPI.Method.getModuleData
OpenAPI.Method.getRange
```

## v2.3

### 新增类

```ts [ts]
OpenAPI.Clipper
```

## v2.2

### 调整函数

```ts [ts]
OpenAPI.Method.sendRequest // 即将弃用
parseVarPlaceholderData // 优化结构
replacePlaceholderData // 优化结构
```

### 移除AES库

## v2.1

### 新增函数

```ts [ts]
OpenAPI.Method.getRandomColor // 随机颜色
OpenAPI.Method.sendRequest // 更简单的HttpRequest
OpenAPI.ShowTips // 通用悬浮框(提示框)
```

## v2.0

### 调整

公开开发仓库并配置CI

修复输出显示不正确

```ts [ts]
OpenAPI.Method.dateToTimestamp // 优化函数
OpenAPI.Method.timestampToDate // 优化函数
OpenAPI.Method.JudgeTypeConstantVariable // 简化参数
OpenAPI.Method.JudgeTypeConstantVariable // 支持获取字符串、开关变量值
```

### 新增函数

```ts [ts]
OpenAPI.GC.isCloudLog // 如果是编辑器则弹窗, 如果是发布后则输出
OpenAPI.UI.listDataInit // 界面列表组件数据初始化
OpenAPI.Method.cursorSystemStyleNam // 光标系统样式名称
OpenAPI.Method.cursorSystemStyleName_spliceName // 基于cursorSystemStyleName来弹出指定名称
OpenAPI.Method.checkTemplateID // 检查当前模板是否是兼容的模板ID
```

## v1.0

发布
