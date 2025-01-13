---
title: 使用方式
---

## 特色功能

```ts
 — 装备属性样式完全由组件控制
 — 提供了预设，安装即用
 — 完全兼容新增的自定义属性
 — 自动兼容属性面板映射
 — 支持自动排列
 — 支持多种显示模式
 — 支持容器高度自适应
 — 属性组件自由删除、新增
 — 抛出了是否选中装备的开关
```

## 快速上手

安装完插件后，在界面模块 16号分类 中找到 **EquipDeScriptCustom_Root**

![](https://oss.gcw.wiki/docs/202411122046945.png)

将预设的 **EquipDeScriptCustom_Root** 全部复制粘贴到 4-背包界面、11-商店界面、16-队伍编成。接下来请根据自己的实际情况调整组件的位置。

![](https://oss.gcw.wiki/docs/202411122047318.png)

![](https://oss.gcw.wiki/docs/202411122047163.png)

![](https://oss.gcw.wiki/docs/202411122047036.png)

这样就完成了！效果将与演示效果一样！

## 更多配置细节

### 组件属性 EqCust

现在显示的组件属性完全由文本组件的组件名称控制，通过前缀 EqCust_ + 属性变量名 来显示。如：EqCust_maxHP 表示 最大生命值 属性。

这些属性都是基于模板的装备属性来的，如下图中的白色悬浮框（鼠标悬停到属性上就会出现）

该组件可自由删除、新增。

![](https://oss.gcw.wiki/docs/202411122047320.png)

#### EqCust_intro

EqCust_intro 是专门用来显示装备描述的组件名称。

### 组件属性 EqCustTitle

EqCustTitle 不是属性相关的组件，是表示了一个标题。如预设中就通过 EqCustTitle 显示了 基本信息、一般属性、杰出属性。

通过前缀 EqCustTitle + 编号 来显示。如 EqCustTitle_1、EqCustTitle_2。最大可支持到50，也就是 EqCustTitle_50。

该组件可自由删除、新增。

需要注意的是 EqCustTitle 不参与自动排列。

### 属性值是0的情况

在世界设定中，找到 如果装备属性是0的情况下 的下拉菜单，可以修改不同情况下的显示效果。

![](https://oss.gcw.wiki/docs/202411122048702.png)

### 自动排列

开启自动排列后，属性组件会根据 组件高度+间距 来进行上下排列。

自动排列是基于父组件 EquipDeScriptCustom_Root 来的，自动排列只会修改组件 y 的属性。

同时推荐开启自动排列情况下，EqCustTitle 组件隐藏，因为 EqCustTitle 组件设计之初就不是为自动排列考虑的。

![](https://oss.gcw.wiki/docs/202411122048416.png)

### 容器高度自适应

如果需要让容器的高度自适应，请将属性组件放在 EquipDeScriptCustom_Root 内。

EquipDeScriptCustom_Root 会自动去重新计算高度。

请注意：当选中装备情况下 EquipDeScriptCustom_Root 容器会显示，如果是道具情况下 EquipDeScriptCustom_Root  会隐藏。

### 显示自定义新增属性

#### 情况一

如果你是通过下图开始新增属性的，那么本插件将会自动适配，直接新增 EqCust 组件即可。

![](https://oss.gcw.wiki/docs/202411122048862.png)

#### 情况二

如果你是在其他地方新增的属性，例如新增属性 new

![](https://oss.gcw.wiki/docs/202411122048731.png)

那么在世界设定中的 附加属性 中填写 new ，之后去新增 EqCust 组件即可。

![](https://oss.gcw.wiki/docs/202411122048358.png)

![](https://oss.gcw.wiki/docs/202411122048592.png)

![](https://oss.gcw.wiki/docs/202411122048159.png)

![](https://oss.gcw.wiki/docs/202411122049585.png)

## 装备描述调用变量

现在装备描述支持调用变量了，输入对应占位符即可。

[@v1] = 数值变量编号1

[@s2] = 字符串变量编号2

[$v3] = 二周目数值变量编号3

[$s4] = 二周目字符串变量编号4

![](https://oss.gcw.wiki/docs/202411122049369.png)
