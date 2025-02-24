---
title: 使用方式
---

## 特色功能

```ts
 — 鼠标悬停到特定对话文字颜色显示悬浮框
 — 自由的显示任意界面（悬浮框）
 — 自由的新增图片、文本组件
 — 只要颜色不同，即使相同的文字也可以显示不同悬浮框
 — 显示的界面取决于文字的颜色
```

## 使用限制

因为是根据标识符来判断的，因此不支持标识符被换行。也不支持部分文本材质效果。

### 举例子

> 带有颜色的标识符，换行了，那程序就无法判断这个标识符了。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/plug/gamedialogcolorshowui/index/image.png)

> 带有颜色的标识符没有换行，所以悬浮框正常显示

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/plug/gamedialogcolorshowui/index/image-1.png)

> 不兼容部分材质效果。

如：淡入淡出，使用了淡入淡出的话，标识符就无法被判断了。

因为这个材质会把文本拆分出来，因此请将材质删掉。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/plug/gamedialogcolorshowui/index/image-2.png)

## 使用方法

### 第一步：绑定界面

只需要在 `世界设定` 中找到 `文本颜色显示界面绑定` 然后进行指定颜色以及界面即可。

这样只要文本的颜色是 黄色，就会显示界面 15001-悬浮框1。

同时还提供了两种事件页，方便写一些过渡之类的事件。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/plug/gamedialogcolorshowui/index/image-3.png)

### 第二步：设定模块数据

插件提供了一个叫 `对话悬浮框` 的模块，在模块中创建希望显示的数据即可。

需要注意 `标识符` 以及 `标识色`，需要对应显示对话的文本内容以及文本颜色。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/plug/gamedialogcolorshowui/index/image-4.png)

### 第三步：创建界面组件

本插件提供了两种组件名称：`dialogImage`、`dialogText`。分别对应图片组件与文本组件。

只需要在悬浮框界面中创建并命名好即可。

`dialogImage` 数据来源基于 `对话悬浮框` 模块中的 `图片`。

`dialogText` 数据来源基于 `对话悬浮框` 模块中的 `文本`。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/plug/gamedialogcolorshowui/index/image-5.png)

### 最终：显示对话的内容

基于以上的步骤，那么这句话的 `鼠标悬停到这句话` 将会拥有悬浮框的效果。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/plug/gamedialogcolorshowui/index/image-6.png)

## 更多配置细节

### 更多数据拓展

除了默认提供的两种数据来源外，插件还支持自行创建多个图片、文本。

开启模块中的 `更多数据拓展` 即可自行创建需要的图片、文本。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/plug/gamedialogcolorshowui/index/image-7.png)

之后需要在悬浮框界面中创建名为 `dialogImage_0`、`dialogText_0` 的组件。

0 是编号，对应列表中前面的数字

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/plug/gamedialogcolorshowui/index/image-8.png)

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/plug/gamedialogcolorshowui/index/image-9.png)

## 文本调用变量

现在文本模块支持调用变量了，输入对应占位符即可。

```ts
[@v1] = 数值变量编号1
[@s2] = 字符串变量编号2
[$v3] = 二周目数值变量编号3
[$s4] = 二周目字符串变量编号4
```

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/plug/gamedialogcolorshowui/index/image-10.png)

## 对话框最前方才显示悬浮框

在 `世界设定` 开启 `对话框最前方才显示悬浮框` 后，只有对话框在界面最前方时，才会显示悬浮框。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/plug/gamedialogcolorshowui/index/image-13.png)

考虑到个别情况可能对话框不一定在最前方，如对话菜单在最前方情况。

因此可以设置白名单，指定的界面最前方显示时，悬浮框依然显示。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/plug/gamedialogcolorshowui/index/image-14.png)

## 拓展组件的数量

拓展组件就是上面讲到的 `更多数据拓展` 用到的界面组件。

如果使用的拓展组件有明确的数量，可以在这里修改。输入的数量越精确，对程序的优化越好。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/plug/gamedialogcolorshowui/index/image-11.png)

## 当对话文本播放完毕时、播放时

世界设定提供了两种显示悬浮框的模式，默认是等待对话文本播放完毕时才可以显示悬浮框。

你也可以修改成在播放过程中就可以显示，不过我个人推荐播放完毕时。

![alt text](https://cdn.gcw.wiki/gcw/image/zh_hans/plug/gamedialogcolorshowui/index/image-12.png)
