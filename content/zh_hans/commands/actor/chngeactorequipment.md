---
title: 替换角色的装备
description: 在游戏中佩戴、卸下、移除角色的装备
applicationScope: [199,193,1]
---

## 佩戴装备

选择好指定的角色后，即可让角色佩戴指定的装备。

如果勾选了从玩家背包中穿戴，则会使用玩家背包中的装备，如果没有则生成一个装备。

例: 指定角色 `1-伊斯特` 从背包中佩戴装备 `1-铁剑`

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/actor/chngeactorequipment/image.png)

## 卸下装备

选择好指定的角色后，即可让角色卸下指定的装备，也支持以部位的方式卸下装备。卸下的装备编号可以存储到数值变量上。

例: 指定角色 `1-伊斯特` 卸下 `0-武器` 部位的装备，卸下的装备编号存储至数值变量 `0002`

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/actor/chngeactorequipment/image-1.png)

## 移除装备

与卸下装备不同，移除是直接删除这个装备。

指定角色 `1-伊斯特` 移除 `2-身体` 部位的装备，移除的装备编号存储至数值变量 `0002`

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/actor/chngeactorequipment/image-2.png)
