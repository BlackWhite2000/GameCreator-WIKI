---
title: 显示对话
description: 通过该指令可在游戏中显示剧情对话，只需要填写相关对话文本即可
applicationScope: [199,3,182,193,1,302,325]
---

## 基本使用

直接在内容区域输入对应文案即可，支持修改文本颜色、支持调用变量、函数等

你可以像使用word文档一样轻松的使用它

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showdialog/1.png)

## 名称

直接在输入框填写即可。支持修改名称颜色。

也支持显示变量，如图中的`[@s1]`表示编号为1的字符串变量。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showdialog/2.png)

关于变量如何调用，可通过插入了解。内容区调用变量的方法也同理。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showdialog/3.png)

## 气泡对话(漫画对话框模式)

> 拥有场景对象的模板拥有漫画对话框功能

如果希望将对话框跟随在场景对象的某个位置上，则可以开启漫画对话框模式。

指定希望跟随的场景对象即可。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showdialog/4.png)

但是使用漫画对话框的情况下，最好调整好样式。

否则一整个对话框都显示在了场景对象上，这并不好看。

如： 

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showdialog/5.png)

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showdialog/6.png)

模板默认预设里提供了漫画对话框模式下专用的样式，可供参考：

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showdialog/7.png)

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showdialog/8.png)

## 对话框样式

对话最终的样式排版都取决于指定的对话样式。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showdialog/9.png)

## 自定义对话框样式

如果想要自定义对话框样式，可通过 `数据库(快捷键F10) -> 对话框样式` 进行增改。

直接选择对应组件然后替换素材、修改位置即可。步骤全程可视化，所以请大胆尝试。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showdialog/10.png)

## 预览漫画模式

开启预览漫画模式可以获取行走图来当参考目标。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showdialog/11.png)


## 对话与选项一起出现

默认情况下，只有执行完显示对话指令后才会执行后续指令，这种情况下没办法让对话与选项同时出现。

而如果希望同时出现也很简单，只需要使用文字效果 `跳过本次对话` 即可

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showdialog/12.png)

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showdialog/13.png)

## 预览对话

开启预览对话可以直接在指令界面中预览游戏的效果。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/news/showdialog/14.png)

