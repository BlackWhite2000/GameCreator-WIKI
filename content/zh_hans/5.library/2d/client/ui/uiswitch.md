---
title:  UISwitch 开关组件
---
>用于绑定玩家开关的一种复选框组件，当玩家开关开启时，该组件处于选中状态，反之则处于未选中状态<br>相关事件：<br>&nbsp;EventObject.LOADED 加载完成时候事件<br>[变量系统]在显示时会同步显示开关变量<br>使用方法：<br>var a = new UISwitch();<br>a.image1 = "asset/image/picture/control/check_unselected.png";<br>a.image2 = "asset/image/picture/control/check_selected.png";<br>a.width = 100;<br>a.height = 100;<br>a.switchID = "5"; // 绑定5号玩家开关<br>stage.addChild(a);<br>// 事件监听示例<br>a.on(EventObject.LOADED,this,this.onLoaded);<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2019-04-14

**继承**  →[UIBase](/zh_hans/library/2d/client/ui/uibase)→[GameSprite](/zh_hans/library/2d/client/gamesprite)→[Sprite](/zh_hans/library/2d/client/lib/sprite)→[TreeNode](/zh_hans/library/2d/client/lib/treenode)→[EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------- |
| **switchID** : number;<br>指定绑定的玩家开关ID                                                                               |
| **image1** : string;<br>未选中效果图片                                                                                       |
| **image2** : string;<br>选中时效果图片 默认值="asset/image/picture/control/check_selected.png"                               |
| **[grid9img1](#grid9img1)** : string;<br>未选中状态下图片的九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺） |
| **[grid9img2](#grid9img2)** : string;<br>选中状态下图片的九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）   |
| **[onChangeFragEvent](#onchangefragevent)** : string;<br>片段事件内容：当选中状态被更改时触发                                |



## 详情

### grid9img1
###### grid9img1 : string;
未选中状态下图片的九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）<br>
让素材不再简单拉伸，而是根据九宫格方式进行拉伸 默认值="0,0,0,0,0"
### grid9img2
###### grid9img2 : string;
选中状态下图片的九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）<br>
让素材不再简单拉伸，而是根据九宫格方式进行拉伸 默认值="0,0,0,0,0"
### onChangeFragEvent
###### onChangeFragEvent : string;
片段事件内容：当选中状态被更改时触发<br>
主动调用方式：CommandPage.startTriggerFragmentEvent




