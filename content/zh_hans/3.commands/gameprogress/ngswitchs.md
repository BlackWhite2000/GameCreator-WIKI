---
title: 二周目开关设置
description: 与其他变量不同，二周目变量可以跨存档调用，即全局生效的变量。
navigation:
    applicationScope: [199,3,182,193,1,302,314,325]
---

::card{title="开关变量类型" icon="i-heroicons-cube-transparent"}
记录开和关两种状态的一种变量。<br>
可以借助 [条件分歧](../logic/conditionalbranch) 进行开启关闭之间的判断。<br><br>
相同类型的功能：<br>
  ::VariablesList{type=2}
  ::
::

## 基本用法

二周目开关设置的用法基本与 [开关设置](/zh_hans/commands/gameprogress/switchs) 一致，因此具体用法请查阅开关设置

![alt text](https://assbak.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/ngswitchs/image.png)

## 存储

为了确保二周目变量能全局生效，使用后需执行一次 [存档#全局数据](../system/save#全局数据)

![alt text](https://assbak.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/ngnumbervariables/image-1.png)
