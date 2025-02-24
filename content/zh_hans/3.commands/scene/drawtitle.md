---
title: 绘制图块
description: 通过此指令可以在游戏中为场景添加图块
navigation:
    applicationScope: [199,3,193,1,302,325]
---

> 在使用该命令前确保当前地图已使用了该图块,或者使用 [预加载资源](../images/preloadingandunloadingresources) 加载过该图块贴图。

## 1.指定图块源的图块

首先需要指定图块源的坐标来确定绘制的图块是什么

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/scene/drawtitle/image.png)

对应 `1-地表1` 中 `x第3格 y第1格`

也就是如下图红圈的位置

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/scene/drawtitle/image-1.png)

### 如何计算图源坐标？

#### X的计算方式

从左往右开始算，第一个图块坐标为0，之后不断+1便是此图块X的格子坐标。

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/scene/drawtitle/image-2.png)

#### Y的计算方式

从上往下开始算，第一个图块坐标为0，之后不断+1便是此图块Y的格子坐标。

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/scene/drawtitle/image-3.png)

## 2.指定绘制到场景上的坐标以及图层

通过填写图层编号以及场景的格子坐标来确定绘制的地方

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/scene/drawtitle/image-4.png)

### 图层

由于是图块，所以请确保指定的图层是图块层。图片层无法绘制图块。

如果无法确定自己图块层编号是多少，可以鼠标悬停对应图块层来查看tips信息，最前面的 2 便是编号。

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/scene/drawtitle/image-5.png)

### 格子坐标

场景地图的格子坐标，可以直接通过提示信息查看具体坐标是多少。

如下图中我将鼠标停留在了红框位置上，红色箭头所指的 1,2 便是提示此处格子坐标为 X:1 Y:2

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/scene/drawtitle/image-6.png)

## 效果

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/scene/drawtitle/1.gif)
