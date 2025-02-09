---
title: 按键事件
description: 可以将事件绑定到键盘的按键上，来实现快捷键操作
navigation:
    applicationScope: [199,3,182,193,1,302,314,325]
---

## 示例

如果希望将事件绑定到键盘按键上则可以使用此指令。

如图示中就是设置了 `按键R` `按下时` 触发事件

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/event/keyboardevent/image.png)

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/event/keyboardevent/image-1.png)

## 按键模式

支持绑定单按键以及多按键，根据实际情况进行选择即可。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/event/keyboardevent/image-2.png)

## 生命周期

判断按键事件有效时间的设置

## 特定周期

通过下拉框选择按键事件有效时间

| **名称**               | **说明**                                             |
| ---------------------- | ---------------------------------------------------- |
| 0-永久                 | 按键的绑定将会一直生效                               |
| 1-执行一次             | 执行一次按键事件后，按键事件将无法触发第二次         |
| 2-当前事件页执行完毕前 | 当前事件页事件未全部执行完毕前，都可以触发该按键事件 |

## 记录监听

勾选后，将会出现一个新界面，可以将本次按键事件记录至指定的变量

之后可以配合指令 [取消按键事件](./cancelkeyboardevent) 将该按键事件移除

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/commands/event/keyboardevent/image-3.png)
