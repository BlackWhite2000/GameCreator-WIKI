---
title: 字符串设值
description: 一种可以记录文字内容的值。当记录了内容后，可以在不同的地方进行调用。
navigation:
    applicationScope: [199,3,182,193,1,302,314,325]
---

::card{title="字符串变量类型" icon="i-heroicons-cube-transparent"}
一种可以记录文字内容的值。<br>
可以借助 [条件分歧](../logic/conditionalbranch) 进行内容之间的判断。<br><br>
相同类型的功能：<br>
  ::VariablesList{type=1}
  ::
::

## 基本使用

### 设置字符串

字符串可以存储各种各样的值，比如文字、字符串、特殊符号。

![alt text](https://assbak.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/stringvariables/image.png)

字符串还可以互相嵌套，以及插入其他的变量、函数

![alt text](https://assbak.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/stringvariables/image-1.png)

![alt text](https://assbak.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/stringvariables/image-2.png)

### 使用字符串

只要是支持字符串调用的地方都可以使用，比如 [显示对话](/zh_hans/commands/news/showdialog)

`[@s1]`表示调用了编号为 1 的字符串

![alt text](https://assbak.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/stringvariables/image-3.png)

![alt text](https://assbak.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/stringvariables/image-4.png)

## 设置为游戏字符串

> 游戏字符串顾名思义，就是关于游戏中的某些值。<br>
> 如果想获取游戏中的内容，比如游戏的场景名称就可以考虑使用游戏字符串。

当勾选 设置为游戏字符串 后， 原本的输入区域变为了一个按钮。

![alt text](https://assbak.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/stringvariables/image-5.png)

通过点击按钮然后去获取对应游戏中的值即可，比如获取游戏的当前场景地图名称。

![alt text](https://assbak.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/stringvariables/image-6.png)

![alt text](https://assbak.gcw.wiki/gcw/image/zh_hans/commands/gameprogress/stringvariables/image-7.png)
