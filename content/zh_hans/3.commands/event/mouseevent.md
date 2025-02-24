---
title: 鼠标事件
description: 通过绑定鼠标操作，来实现鼠标快捷键操作
navigation:
    applicationScope: [199,3,182,193,1,302,314,325]
---

## 示例

如果希望将事件绑定至鼠标按键上则可以使用此指令。

如图示中就是设置了 `鼠标右键` `按下时` 触发事件。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/event/mouseevent/image.png)

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/event/mouseevent/image-1.png)

## 按键模式

支持设置多种触发情况，根据实际情况进行选择即可。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/event/mouseevent/image-2.png)

## 仅限于场景上使用

勾选后，只有在游戏场景上才会触发鼠标事件。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/event/mouseevent/image-3.png)

## 生命周期

判断鼠标事件有效时间的设置

## 特定周期

通过下拉框选择鼠标事件有效时间

| 名称                             | 说明                                                 |
| -------------------------------- | ---------------------------------------------------- |
| 0-永久                           | 按键的绑定将会一直生效                               |
| 1-执行一次                       | 执行一次鼠标事件后，鼠标事件将无法触发第二次         |
| 2-调用该命令时执行的事件完毕为止 | 当前事件页事件未全部执行完毕前，都可以触发该鼠标事件 |

## 记录监听

勾选后，将会出现一个新界面，可以将本次鼠标事件记录至指定的变量

之后可以配合指令 [取消鼠标事件](./cancelmouseevent) 将该鼠标事件移除

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/event/mouseevent/image-4.png)
