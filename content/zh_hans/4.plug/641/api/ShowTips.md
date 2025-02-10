---
title: 通用悬浮框 ShowTips
---

## 目录

|                             |                                |
| --------------------------- | ------------------------------ |
| [addTipEvent](#addtipevent) | 注册鼠标悬浮弹出提示框界面事件 |

## addTipEvent

```ts [ts]
/**
* 注册鼠标悬浮弹出提示框界面事件
* @param ui 需要注册的界面ui
* @param tipId 需要显示的界面id
* @param tipData 数据 如{"name":{text:"千叶不冷","age":{text:"18"}} 当显示提示框时会自动匹配到提示框界面中相同名字的组件并赋值
* @param delayed [可选 默认为0] 延迟显示
* @param expandList [可选 默认为false] 展开列表，当ui为列表时会对里面每个item赋予data.tip的值，即tipData = data.tip
* 
* @example
* ```ts
* OpenAPI.ShowTips.addTipEvent(ui, 1001, {"name":{text:"千叶不冷","age":{text:"18"}}}, 1000, false)
* ```
*/
```
