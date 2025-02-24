---
title: "显示选项"
description: 选项是游戏中场景的表现显示，不同的选项执行不同的指令
navigation:
    applicationScope: [199,3,182,193,1,302,325]
---

## 选项使用

> 可以创建多个选项，如RPG中常见的 对话、购买。支持调用字符串变量。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showchoices/image.png)

效果

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showchoices/image-1.png)

选择 `我在学习` 则执行该选项内设定的指令

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showchoices/image-2.png)

## 选项设置

### 设为默认选项

指定一个选项设置后，显示选项时焦点默认选择设置的选项。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showchoices/image-3.png)

### 设为取消的场合

指定一个选项设置后，当关闭当前选项(如：快捷键ESC)则表示执行此选项

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showchoices/image-4.png)

### 设置出现条件

类似指令:条件分歧。当满足了设置的条件后，指定的选项出现，否则隐藏

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showchoices/image-5.png)

## 对话框样式

对话最终的样式排版都取决于指定的对话样式。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showchoices/image-6.png)

## 自定义对话框样式

如果想要自定义对话框样式，可通过 `数据库(快捷键F10) -> 对话框样式` 进行增改。

直接选择对应组件然后替换素材、修改位置即可。步骤全程可视化，所以请大胆尝试。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showchoices/image-7.png)
