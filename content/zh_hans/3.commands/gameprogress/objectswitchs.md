---
title: 对象开关设置
description: 需指定场景对象来使用，与其他变量的区别是场景对象不存在时，变量不存在。
navigation:
    applicationScope: [199,3,193,1,302,325]
---

::card{title="开关变量类型" icon="i-heroicons-cube-transparent"}
记录开和关两种状态的一种变量。<br>
可以借助 [条件分歧](../logic/conditionalbranch) 进行开启关闭之间的判断。<br><br>
相同类型的功能：<br>
  ::VariablesList{type=2}
  ::
::

## 基本使用

### 区别性

> 与 [开关设置](./switchs.md) 不同的是，对象开关设置是基于场景对象来分类的。<br>
> 因此对象开关的状态变更也仅限于当前场景地图上指定的场景对象。

### 可以这样理解

[开关设置](./switchs) 适用范围是当前的游戏存档。

[二周目开关设置](./ngswitchs) 适用范围是全局。

**对象开关设置** 适用范围是当前的场景地图。

### 使用

场景对象开关的编号A、B、C，类似其他变量的编号ID。

![alt text](https://assbak.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/objectswitchs/image.png)

设置指定场景对象编号A的开关状态，之后就可以借助如 [条件分歧](../logic/conditionalbranch) 来判断。

![alt text](https://assbak.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/objectswitchs/image-1.png)

![alt text](https://assbak.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/objectswitchs/image-2.png)

其他用法

其他用法与 [开关设置](./switchs) 一致。
