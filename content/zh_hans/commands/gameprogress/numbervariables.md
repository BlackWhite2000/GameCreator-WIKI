---
title: 数值变量设值
description: 一种可以记录数字的值，可以进行公式计算。当记录了内容后，可以在不同的地方进行调用。
applicationScope: [199,3,182,193,1,302,314,325]
---

::card{title="数值变量类型" icon="i-heroicons-cube-transparent"}
一种可以记录数字的值，可以进行公式计算。<br>
可以借助 [条件分歧](../logic/conditionalbranch) 进行数值之间的判断。<br><br>
相同类型的功能：<br>
  ::VariablesList{type=0}
  ::
::

## 基本使用

### 设置数值

数值变量可以通过设置不同的数字来进行计算

通过不同的计算方式来得到最终的结果

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/numbervariables/image.png)

比如这里是等于，因此这个数值变量的值等于12

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/numbervariables/image-1.png)

如果在这个基础上使用加法的话，最终会得到的会是 `12+1=13`

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/numbervariables/image-2.png)

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/numbervariables/image-3.png)

数值变量的值可以互相嵌套，数值变量等于数值变量。

也支持随机数，通过设定最小与最大来生成这个范围内的随机数。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/numbervariables/image-4.png)

## 游戏数值

如果使用游戏数值的话，可以获取游戏中关于数字的值。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/numbervariables/image-5.png)

比如获取玩家当前的金币数量是多少。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/numbervariables/image-6.png)

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/numbervariables/image-7.png)
