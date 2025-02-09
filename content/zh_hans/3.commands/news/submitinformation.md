---
title: 提交信息
description: 用于批量获取游戏中的值，如获取玩家填写的表格信息
navigation:
    applicationScope: [199,3,182,193,1,302,325]
---

## 批量玩家输入的表格信息

> [等待玩家输入文本](/zh_hans/commands/news/waitplayerentertext) 一次只能获取玩家输入的一种值，如果想批量获取多种输入值就可以用提交信息指令。

### 创建表格界面

因为是需要玩家输入内容，所以使用可输入文本组件来创建输入框。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/submitinformation/image.png)

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/submitinformation/image-1.png)

### 设置获取输入值

直接以类别字符串，然后获取这个表格界面上的组件属性即可。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/submitinformation/image-2.png)

最终是获取以下三个值

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/submitinformation/image-3.png)

获取的值将会分别赋值到`输入值0`、`输入值1`、`输入值2`上。对应类别前面的数字。

### 填写事件

请注意，提交信息指令需要配合[等待玩家提交信息](/zh_hans/commands/news/waitingplayerinput)使用。

在打开表格输入界面后面写上等待玩家提交信息，这样后续的事件只有等玩家提交信息后才会继续执行。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/submitinformation/image-4.png)

之后在表格输入界面找个提交按钮，写上提交信息即可。执行完毕是否要关闭界面，就取决于自己的实际需求了。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/submitinformation/image-5.png)

### 游戏效果

玩家开始填写

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/submitinformation/image-6.png)

点击提交后，成功弹出了刚才输入的值。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/submitinformation/image-7.png)

## 输入值是临时变量

输入值是临时的变量，因此建议如果有重要的值的话，请考虑将值赋予常规的变量上。

## 获取其他值

除了获取输入值外，提交信息还能获取游戏变量相关的值，但是因为要配合等待玩家提交信息指令，所以没有单纯使用变量去获取游戏数值灵活。

具体是否要获取就根据自身实际需求来了。
