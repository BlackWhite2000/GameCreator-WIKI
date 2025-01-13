---
title: 二周目字符串设值
description: 与其他变量不同，二周目变量可以跨存档调用，即全局生效的变量。
applicationScope: [199,3,182,193,1,302,314,325]
---

::card{title="字符串变量类型" icon="i-heroicons-cube-transparent"}
一种可以记录文字内容的值。<br>
可以借助 [条件分歧](../logic/conditionalbranch) 进行内容之间的判断。<br><br>
相同类型的功能：<br>
  ::VariablesList{type=1}
  ::
::

## 基本用法

二周目字符串设值的用法基本与 [字符串设值](/zh_hans/commands/gameprogress/stringvariables) 一致，因此具体用法请查阅字符串设值

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/ngstringvariables/image.png)

## 存储

为了确保二周目变量能全局生效，使用后需执行一次 [存档#全局数据](../system/save#全局数据)

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/ngnumbervariables/image-1.png)
