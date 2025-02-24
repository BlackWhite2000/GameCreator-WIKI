---
title: 循环
description: 循环顾名思义，可以将指令重复执行多次。合理的使用能够提高游戏的制作效率
navigation:
    applicationScope: [199,3,182,193,1,302,314,325]
---

## 示例

想停止循环的执行，可使用指令 [中断循环](./breakloop)

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/loop/image.png)

一个无脑的小技巧：可以先写完循环后看是否会死循环，如果会再去插入指令 [等待](./wait)

## 占进程

由于循环是一直执行的存在，所以使用过程中会出现进程占用的可能。

就像排队一样，一直有人在队伍前面，导致队伍后面的“人”无法前进。

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/loop/image-1.png)

遇到这种情况可以考虑使用指令 [事件页片段#独立事件片段]() 或者指令 [调用事件库#独立事件]()

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/logic/loop/image-2.png)
