---
title: 修改场景对象模块属性
description: 	可以通过此指令实现在游戏中修改场景对象的模块属性
applicationScope: [199,3,193,1,302,325]
---

## 与增减场景对象的模块区别?

增减场景对象的模块是新增、移除场景对象模块。

而想修改，就必须保证场景对象模块存在

## 使用

以修改玩家对象的影子宽度为案例

选择 `0-玩家的场景对象` 指定模块为 `1-影子`

宽度的属性名为 `shadowWidth` ，类型为 `数值`

最后的值便是希望修改为多少，这里填写 `50`

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/sceneobject/modifyobjectmodule/image.png)

## 如何获取属性名？

此处获取的是属性变量名，通常为英文

获取方法也很简单，只需要将鼠标悬停到对应属性的名称上即可

会弹出一个tips。弹出的便是属性变量名

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/sceneobject/modifyobjectmodule/image-1.png)
