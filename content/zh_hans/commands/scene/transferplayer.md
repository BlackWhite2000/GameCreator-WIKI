---
title: 场所移动
description: 使用后可更改玩家所在的场景地图
applicationScope: [199,3,193,1,302,325]
---

## 使用

示例

①：选择希望传送的场景地图

②：鼠标左键来选择玩家传送后的位置

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/scene/transferplayer/image.png)

## 变量模式

除了直接选择外，也支持使用 [数值变量](../gameprogress/numbervariables)

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/scene/transferplayer/image-1.png)

| 名称      | 说明                                                                    |
| --------- | ----------------------------------------------------------------------- |
| 场景      | 使用数值变量当前数值作为场景ID，参考 1-新的地图 其中最前面的1就是场景ID |
| 像素坐标x | 使用数值变量的当前数值作为传送后玩家所在的场景像素坐标x                 |
| 像素坐标y | 使用数值变量的当前数值作为传送后玩家所在的场景像素坐标y                 |
