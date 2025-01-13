# UICheckBox 复选框组件
>复选框是一种拥有选中或未选中状态的基础控件<br>相关事件：<br>&nbsp;EventObject.CHANGE 当selected改变状态时派发<br>&nbsp;EventObject.LOADED 加载完成时候事件<br>使用方法：<br>var a = new UICheckBox();<br>a.image1 = "asset/image/picture/control/check_unselected.png";<br>a.image2 = "asset/image/picture/control/check_selected.png";<br>a.width  = 100;<br>a.height = 100;<br>a.selected = true;<br>stage.addChild(a);<br>// 事件监听示例<br>a.on(EventObject.CHANGE,this,this.onChange);<br>a.on(EventObject.LOADED,this,this.onLoaded);<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2019-04-14

**继承**  →[UIBase](/zh_hans/library/2d/client/ui/uibase)→[GameSprite](/zh_hans/library/2d/client/gamesprite)→[Sprite](/zh_hans/library/2d/client/lib/sprite)→[TreeNode](/zh_hans/library/2d/client/lib/treenode)→[EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **selected** : boolean;<br>更改选中状态  |
| **image1** : string;<br>未选中效果图片路径 即selected=false时  |
| **image2** : string;<br>选中时效果图片路径 即selected=true时  |
| **[grid9img1](#grid9img1)** : string;<br>未选中状态下图片的九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）  |
| **[grid9img2](#grid9img2)** : string;<br>选中状态下图片的九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）  |
| **[onChangeFragEvent](#onchangefragevent)** : string;<br>片段事件内容：当selected更改时触发  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[setSelectedForce](#setselectedforce)**(v : boolean): void<br>更改选中状态，不派发EventObject.CHANGE事件

## 详情

### grid9img1
###### grid9img1 : string;
未选中状态下图片的九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）<br>
让素材不再简单拉伸，而是根据九宫格方式进行拉伸 默认值="0,0,0,0,0"
### grid9img2
###### grid9img2 : string;
选中状态下图片的九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）<br>
让素材不再简单拉伸，而是根据九宫格方式进行拉伸  默认值="0,0,0,0,0"
### onChangeFragEvent
###### onChangeFragEvent : string;
片段事件内容：当selected更改时触发<br>
主动调用方式：CommandPage.startTriggerFragmentEvent


## setSelectedForce
###### **[setSelectedForce](#setselectedforce)**(v : boolean): void :
更改选中状态，不派发EventObject.CHANGE事件
##### 参数
	v





