---
title: UI操作工具 InterfaceUtils
---

## 目录

|                             |                      |
| --------------------------- | -------------------- |
| [initList](#initlist)       | 初始化一个空白的列表 |
| [NumberInput](#numberinput) | 封装数值类型的输入值 |

## initList

```ts [ts]
/**
* 初始化一个空白的列表
* @param ui UI根节点
* @param list 列表组件
* @param model 列表项模型
* @param len 列表长度
* @param isFocus 是否设置焦点
* 
* @example
* ```ts
* OpenAPI.InterfaceUtils.initList(ui, list, model, 10, true);
* ```
*/
```

## NumberInput

```ts [ts]
 /**
* 封装数值类型的输入值
* @param ui UI根节点
* @param comp 输入组件
* @param value 输入值
* @param min 最小值
* @param max 最大值
* @param sub 减少按钮
* @param add 增加按钮
* @param minBtn 最小值按钮
* @param maxBtn 最大值按钮
* 
* @example
* ```ts
* OpenAPI.InterfaceUtils.NumberInput(ui, comp, 10, 0, 100, sub, add, minBtn, maxBtn);
* ```
*/
```
