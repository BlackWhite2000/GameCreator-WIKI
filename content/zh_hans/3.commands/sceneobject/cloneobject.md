---
title: 克隆对象
description: 可以将一个场景对象克隆多份生成在场景上
navigation:
    applicationScope: [199,3,193,1,302,325]
---

## 使用

克隆对象可以在场景地图上将一个场景对象克隆多份然后生成出来。

克隆对象非常的好用，十分推荐各位多了解。通过克隆对象可以实现比如种田/砍树等等有意思的系统。

### 设定克隆地图以及克隆的对象

首先比较建议的方式是创建一个克隆专属地图。

这样的话可以方便管理被克隆的场景对象，有点类似游戏中的作者房间。

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/sceneobject/cloneobject/image.png)

然后在这个地图上设定希望克隆的场景对象。

克隆对象会把克隆的场景对象携带的属性/事件等等设定都克隆上，比如下图中场景对象的显示对象指令也会一起被克隆。

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/sceneobject/cloneobject/image-1.png)

### 设定克隆参数

首先选择刚才创建的克隆专属地图【1-克隆地图】。

然后指定被克隆的场景对象编号。

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/sceneobject/cloneobject/image-2.png)

接下来设置场景对象克隆后的坐标即可。

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/sceneobject/cloneobject/image-3.png)

## 效果

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/sceneobject/cloneobject/1.gif)


## 其他参数

### 存储生成后的对象编号

克隆对象生成后，自然会拥有一个对象编号。

如果想清楚知道克隆后的对象编号可以通过绑定变量来实现。

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/sceneobject/cloneobject/image-4.png)

### 生成对象后执行事件

克隆对象生成后，如果希望还能执行事件可以在此处事件页上写事件。

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/sceneobject/cloneobject/image-5.png)
