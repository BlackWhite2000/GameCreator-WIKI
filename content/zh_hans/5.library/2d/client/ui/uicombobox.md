# UIComboBox 下拉框组件
>下拉框是一种点击后可弹出一组选项并允许选择一个的组件<br>相关事件：<br>&nbsp;EventObject.CHANGE 当改变状态时派发<br>&nbsp;EventObject.LOADED 加载完成时候事件<br>&nbsp;UIComboBox.OPEN 当下拉框打开时派发<br>&nbsp;UIComboBox.CLOSE 当下拉框关闭时派发<br>使用方法：<br>var a = new UIComboBox();<br>a.bgSkin = "asset/image/picture/control/tab_selected.png";<br>a.itemLabels = "1,2,3,4,5"<br>stage.addChild(a);<br>// 事件监听示例<br>a.on(EventObject.CHANGE,this,this.onChange);<br>a.on(EventObject.LOADED,this,this.onLoaded);<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2019-11-11

**继承**  →[UIBase](/zh_hans/library/2d/client/ui/uibase)→[GameSprite](/zh_hans/library/2d/client/gamesprite)→[Sprite](/zh_hans/library/2d/client/lib/sprite)→[TreeNode](/zh_hans/library/2d/client/lib/treenode)→[EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **OPEN** : string;<br>[静态]事件：当下拉框打开时派发事件  |
| **CLOSE** : string;<br>[静态]事件：当下拉框关闭时派发事件  |
| **isComboBoxOpen** : boolean;<br>是否打开中  |
| **bgSkin** : string;<br>显示框的背景图片路径  |
| **[bgGrid9](#bggrid9)** : string;<br>显示框的背景图片九宫格设置 默认值="0,0,0,0,0"  |
| **align** : number;<br>文本水平对齐 0-居左 1-居中 2-居右 默认值=1  |
| **valign** : number;<br>文本垂直对齐 0-居上 1-居中 2-居下 默认值=1  |
| **bold** : boolean;<br>文本是否粗体 默认值=false  |
| **italic** : boolean;<br>斜体 默认值=false  |
| **smooth** : boolean;<br>平滑 默认值=false  |
| **font** : string;<br>文本字体，默认值是预设的默认字体  |
| **color** : string;<br>文本颜色 默认值="#FFFFFF"  |
| **fontSize** : number;<br>文本字体尺寸 默认值=16  |
| **textDx** : number;<br>文本水平方向偏移量 默认值=0  |
| **textDy** : number;<br>文本垂直方向偏移量 默认值=0  |
| **selectedIndex** : number;<br>当前选中项 默认值=0  |
| **itemLabels** : string;<br>下拉框列表中的文本选项集，格式：1,2,3,4,5 表示5个选项  |
| **itemHeight** : number;<br>下拉框列表中的单位选项的高度 默认值=20  |
| **displayItemSize** : number;<br>下拉框列表中同时显示的最大选项数 默认值=5  |
| **listScrollBg** : string;<br>下拉框列表中滚动条背景图片路径 默认值="asset/image/picture/UI/uicomboboxbg.png"  |
| **listScrollBar** : string;<br>下拉框列表中滚动轴背景图片路径 默认值="asset/image/picture/UI/uicomboboxslider.png"  |
| **listBgColor** : string;<br>下拉框列表的背景颜色 默认值="#FFFFFF"  |
| **itemAlign** : number;<br>下拉框列表的文本水平对齐 0-居左 1-居中 2-居右 默认值=0  |
| **itemValign** : number;<br>下拉框列表的垂直水平对齐 0-居上 1-居中 2-居下 默认值=1  |
| **itemBold** : boolean;<br>下拉框列表的文本是否粗体 默认值=false  |
| **itemFont** : string;<br>下拉框列表的文本字体，默认值是预设的默认字体  |
| **itemColor** : string;<br>下拉框列表的文本颜色 默认值="#000000"  |
| **itemOverColor** : string;<br>下拉框列表的选中时的文本颜色 默认值="#FFFFFF"  |
| **itemOverBgColor** : string;<br>下拉框列表的选中时的背景文本颜色 默认值="#000000"  |
| **itemFontSize** : number;<br>下拉框列表的文本字体尺寸 默认值=12  |
| **itemTextDx** : number;<br>下拉框列表的文本水平方向偏移 默认值=0  |
| **itemTextDy** : number;<br>下拉框列表的文本垂直方向偏移 默认值=0  |
| **[onChangeFragEvent](#onchangefragevent)** : string;<br>片段事件内容：当选中项被更改时触发  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[setSelectedForce](#setselectedforce)**(V : number): void<br>当前选中项，不派发 EventObject.CHANGE 事件

## 详情

### bgGrid9
###### bgGrid9 : string;
显示框的背景图片九宫格设置 默认值="0,0,0,0,0"<br>
九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）<br>
让素材不再简单拉伸，而是根据九宫格方式进行拉伸
### onChangeFragEvent
###### onChangeFragEvent : string;
片段事件内容：当选中项被更改时触发<br>
主动调用方式：CommandPage.startTriggerFragmentEvent


## setSelectedForce
###### **[setSelectedForce](#setselectedforce)**(V : number): void :
当前选中项，不派发 EventObject.CHANGE 事件
##### 参数
	v 选中项值





