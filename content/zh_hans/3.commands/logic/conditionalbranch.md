---
title: 条件分歧
description: 用于判断处理不同情况的指令，是常用的指令之一。
navigation:
    applicationScope: [199,3,182,193,1,302,314,325]
---

> 每个模板的条件分歧显示内容的不同，请根据自己模板实际情况来判断
> <br>以下内容仅取用部分内容举例子

## 说明

条件分歧通过设置比较方式来判断是否满足条件，如果条件成立则执行包裹的事件。

其中常用的比较方式是通过数值、字符串、开关来进行。

## 数值

通过数学比较符方式来对比 数值1 与 数值2 是否满足条件

支持调用数值变量来进行比较

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/conditionalbranch/image.png)

此处通过比较符等于的方式来判断0是否等于0

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/conditionalbranch/image-1.png)

### 否则

开启 当不满足条件时的设置 可以执行不满足条件下的指令，即判断的相反情况

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/conditionalbranch/image-2.png)

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/conditionalbranch/image-3.png)

## 开关

通过 [开关变量](../gameprogress/switchs) 的当前状态来判断是否满足条件

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/conditionalbranch/image-4.png)

此处判断 `变量0001-拥有生命药水` 开关是否开启

### 否则

开启 当不满足条件时的设置 可以执行不满足条件下的指令，即判断的相反情况

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/conditionalbranch/image-5.png)

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/conditionalbranch/image-6.png)

## 字符串

通过判断 `字符串变量` 的值是否等于、包含、不包含某些内容来进行判断

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/conditionalbranch/image-7.png)

此处判断 `变量0001-玩家名称` 值是否等于 请输入你的名称

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/conditionalbranch/image-8.png)

### 否则

开启 `当不满足条件时的设置` 可以执行不满足条件下的指令，即判断的相反情况

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/conditionalbranch/image-9.png)

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/conditionalbranch/image-10.png)


## 脚本

由于本站更偏向于可视化教程，脚本教程请查看官方文档或自行研究

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/conditionalbranch/image-11.png)


## 界面

通过选择下拉框来判断界面是否满足条件

支持判断 `界面本体` 以及 `界面的组件`

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/conditionalbranch/image-12.png)

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/conditionalbranch/image-13.png)


### 否则

开启 `当不满足条件时的设置` 可以执行不满足条件下的指令，即判断的相反情况

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/conditionalbranch/image-14.png)

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/conditionalbranch/image-15.png)

## 系统信息

通过选择下拉框来判断玩家游玩游戏时候是否满足条件

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/conditionalbranch/image-16.png)

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/conditionalbranch/image-17.png)

### 否则

开启 `当不满足条件时的设置` 可以执行不满足条件下的指令，即判断的相反情况

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/conditionalbranch/image-18.png)

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/conditionalbranch/image-19.png)
