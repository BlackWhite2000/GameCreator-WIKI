# UITabBox 标签栏组件
>用于显示标签栏的一种组件，支持横向排列的标签和纵向排列的标签<br>在编辑器中的使用方法：如果标签组件中有N个标签的话，那么该组件的子对象放3个即可自动切换显示<br>相关事件：<br>&nbsp;EventObject.CHANGE 当改变状态时派发<br>&nbsp;EventObject.LOADED 加载完成时候事件<br>使用方式：<br>var a = new UITabBox();<br>a.itemWidth = 100;<br>a.itemHeight = 20;<br>a.itemImage1 = "asset/image/picture/control/tab_unselected.png";<br>a.itemImage2 = "asset/image/picture/control/tab_selected.png";<br>a.items = "标签1,标签2";<br>stage.addChild(a);<br>// 添加两张图片，分别对应两个标签<br>var img1 = new UIBitmap;<br>img1.image = "asset/image/image1.png";<br>a.addChild(img1);<br>img1.y = 20;<br>var img2 = new UIBitmap;<br>img2.image = "asset/image/image2.png";<br>a.addChild(img2);<br>img2.y = 20;<br>// 事件监听示例<br>a.on(EventObject.LOADED,this,this.onLoaded);<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2019-04-14

**继承**  →[UIBase](/zh_hans/library/2d/client/ui/uibase)→[GameSprite](/zh_hans/library/2d/client/gamesprite)→[Sprite](/zh_hans/library/2d/client/lib/sprite)→[TreeNode](/zh_hans/library/2d/client/lib/treenode)→[EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **selectedIndex** : number;<br>选中项 默认值=-1  |
| **items** : string;<br>标签项 逗号隔开  |
| **length** : number;<br>[只读]项总数  |
| **itemImage1** : string;<br>标签项选中时的图片样式  |
| **itemImage2** : string;<br>标签项移入时的图片样式  |
| **rowMode** : boolean;<br>排列为行的模式 默认值=false  |
| **itemWidth** : number;<br>标签项长度 默认值=177  |
| **itemHeight** : number;<br>标签项高度 默认值=71  |
| **spacing** : number;<br>标签项间距 默认值=5  |
| **labelDx** : number;<br>标签水平偏移 默认值=0  |
| **labelDy** : number;<br>标签垂直偏移 默认值=0  |
| **labelSelectedColor** : string;<br>文本颜色 标签项选中时 默认值="#FFFFFF"  |
| **labelColor** : string;<br>文本颜色 标签项未选中时 默认值="#666666"  |
| **labelSize** : number;<br>文本字体大小 默认值=16  |
| **labelFont** : string;<br>文本字体，默认是预设的默认字体  |
| **labelAlign** : number;<br>文本字体对齐模式 0-居左 1-居中 2-居右 默认值=1  |
| **labelBold** : boolean;<br>文本字体粗体模式 默认值=false  |
| **labelItalic** : boolean;<br>斜体 默认值=false  |
| **smooth** : boolean;<br>平滑 默认值=false  |
| **[grid9img1](#grid9img1)** : string;<br>标签项选中时图片的九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）  |
| **[grid9img2](#grid9img2)** : string;<br>标签项移入时图片的九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）  |
| **[onChangeFragEvent](#onchangefragevent)** : string;<br>片段事件内容：当selectedIndex更改时触发  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[setSelectedForce](#setselectedforce)**(v : number): void<br>设置选中项，不派发EventObject.CHANGE事件

## 详情

### grid9img1
###### grid9img1 : string;
标签项选中时图片的九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）<br>
让素材不再简单拉伸，而是根据九宫格方式进行拉伸 默认值="0,0,0,0,0"
### grid9img2
###### grid9img2 : string;
标签项移入时图片的九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）<br>
让素材不再简单拉伸，而是根据九宫格方式进行拉伸 默认值="0,0,0,0,0"
### onChangeFragEvent
###### onChangeFragEvent : string;
片段事件内容：当selectedIndex更改时触发<br>
主动调用方式：CommandPage.startTriggerFragmentEvent


## setSelectedForce
###### **[setSelectedForce](#setselectedforce)**(v : number): void :
设置选中项，不派发EventObject.CHANGE事件





