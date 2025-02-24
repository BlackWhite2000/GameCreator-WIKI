---
title: 等待玩家输入文本
description: 最常见的应用场景为自定义玩家的名称，可通过输入值获取玩家输入的内容
navigation:
    applicationScope: [199,3,182,193,1,302,325]
---

## 基本使用

> 通过指定希望弹出的界面，玩家在弹出的界面内输入值后会自动将值赋值给输入值0

最常见的案例是 `自定义名称`

由于名称是各种各样都有，所以选择文本输入界面

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/news/waitplayerentertext/image.png)

因为玩家输入内容并提交后，会自动赋值给输入值0

但是需要注意 `输入值0是临时变量`，因此建议是再用字符串获取输入值0

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/news/waitplayerentertext/image-1.png)

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/news/waitplayerentertext/image-2.png)

## 游戏效果

输入名称

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/news/waitplayerentertext/image-3.png)

最终通过字符串 `此字符串是上面通过输入值0设值得到` 获取到了玩家输入的信息

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/news/waitplayerentertext/image-4.png)

## 使用规范

等待玩家输入文本所指定的界面是根据 `可输入文本组件(UIInput)` 来的

因此请确保所指定的界面拥有该组件

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/news/waitplayerentertext/image-5.png)

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/news/waitplayerentertext/image-6.png)

玩家可以输入的值是根据 `可输入文本组件(UIInput)` 属性面板中的 输入类型 来的

> 数字模式=只能输入数值<br>
> 密码模式=以星号代替显示<br>
> 文本模式=可以输入字符串，也就是任意内容

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/news/waitplayerentertext/image-7.png)

模板预设了三种类型的输入界面，可供参考

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/news/waitplayerentertext/image-8.png)
