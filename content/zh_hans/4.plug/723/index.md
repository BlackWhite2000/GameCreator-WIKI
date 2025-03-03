---
title: 使用方式
---

## 特色功能

```ts
 — 图鉴内现在有线索与立绘差分了
 — 自由的组合线索来变成一个图鉴系统
 — 当有解锁线索或者谜题时，会有NEW提示
 — 自带多种未解锁/解锁样式
 — 自带词汇功能，可为档案、立绘标签命名
```

## 前置插件

v2.0版本开始，本插件需要安装前置插件 [OpenAPI 大于等于v3.5版本](https://www.gamecreator.com.cn/plug/det/641?reid=161)

## 使用教程

在图鉴的基础上新增了档案与立绘，而在档案内又存在线索。

只需要在模块中根据实际情况设置好图鉴信息即可

![](https://cdn.gcw.wiki/docs/202411122035393.png)

档案内具体的线索是基于图鉴线索模块来的。

![](https://cdn.gcw.wiki/docs/202411122036207.png)

接下来只需要使用指令解锁图鉴中的线索或者立绘即可。

### 解锁线索

![](https://cdn.gcw.wiki/docs/202411122037878.png)

#### 档案编号

档案编号对应档案模块的编号，根据实际情况选择即可。

![](https://cdn.gcw.wiki/docs/202411122037132.png)

解锁的档案需要图鉴也拥有，如此处图鉴拥有档案1、档案2，因此可以解锁。

![](https://cdn.gcw.wiki/docs/202411122037650.png)

#### 线索编号

对应图鉴线索中的线索信息编号（红箭头处）

![](https://cdn.gcw.wiki/docs/202411122037957.png)

#### 立绘编号

对应图鉴立绘中的指定立绘编号

![](https://cdn.gcw.wiki/docs/202411122038095.png)

### 图鉴分类

世界设定拥有图鉴分类功能，开启后即可根据实际情况来分类（默认启用）

![](https://cdn.gcw.wiki/docs/202411122038347.png)

具体的分类由图鉴信息模块控制

![](https://cdn.gcw.wiki/docs/202411122038256.png)

开启后，图鉴列表界面将显示分类标签。

![](https://cdn.gcw.wiki/docs/202411122038443.png)

### 打开指定的图鉴

如果想不通过图鉴界面来打开某个图鉴信息的话，可通过指令 **打开指定图鉴** 来直接打开指定的图鉴。

![](https://cdn.gcw.wiki/docs/202411122038977.png)

### 全局图鉴功能

原本的图鉴只能跟随存档，玩家必须开始游戏之后才能使用。

通过勾选启用全局图鉴功能后，即可无视存档，全局生效。类似AVG模板中的CG鉴赏功能。

![](https://cdn.gcw.wiki/docs/202411122039104.png)

## 更多配置细节

### 未解锁时候的弹出框

在图鉴界面中找到tipBox，默认是隐藏显示的。

修改这个界面内的组件即可，英文名的组件不要删除。

![](https://cdn.gcw.wiki/docs/202411122039592.png)

### 标签词汇

立绘与档案标签的命名可通过世界设定中来定义

规则是 名称A,名称B 以符号 , 区分

如：立绘A,立绘B

![](https://cdn.gcw.wiki/docs/202411122039239.png)

### NEW的提示

界面中可以看到存在NEW的提示，可以在 **图鉴详情_item** **、图鉴信息详情_item** 里面修改NEW的图标

![](https://cdn.gcw.wiki/docs/202411122039520.png)