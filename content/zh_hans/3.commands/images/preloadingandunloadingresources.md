---
title: 预加载资源和卸载资源
description: 通过此指令可提前加载/卸载缓存游戏中指定的资源，提升玩家的游戏体验
navigation:
    applicationScope: [199,3,182,193,1,302,325]
---

> 该指令又名 `预加载资源`
> <br>如果指令名为 `预加载资源` 而不是  `预加载资源和卸载资源` 就表示没有卸载资源功能。

## 预加载资源

指定资源，就可以提前加载这些这样。

这种方式可以提前让用户去加载资源文件从而提升游戏的整体游玩体验。

尤其是如果要发布到在线平台上，则更要考虑预加载的问题。因为线上游玩的话，用户的加载速度是取决于宽带的。

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/images/preloadingandunloadingresources/image.png)

### 加载进度条

勾选 `显示加载界面` 然后可以指定任意组件来可视化显示加载情况。

通常会指定 `滑块组件` 的属性 `value`

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/images/preloadingandunloadingresources/image-1.png)

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/images/preloadingandunloadingresources/image-2.png)

## 卸载资源

> 该功能并不是所有模板都有
> <br>如果指令名为 `预加载资源` 而不是  `预加载资源和卸载资源` 就表示没有卸载资源功能。

通过卸载资源，可以将已经加载的资源从缓存中清除掉。

![alt text](https://cdn.gcw.wiki.wiki/gcw/image/zh_hans/commands/images/preloadingandunloadingresources/image-3.png)
