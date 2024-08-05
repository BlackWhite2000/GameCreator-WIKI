# Sprite Sprite 显示对象精灵
>显示对象的基类，支持显示图片和事件响应<br>支持通用鼠标事件：<br>EventObject.RIGHT_MOUSE_UP 鼠标右键弹起<br>EventObject.RIGHT_MOUSE_DOWN 鼠标右键按下<br>EventObject.RIGHT_CLICK 鼠标右键点击<br>EventObject.CLICK 鼠标左键点击<br>EventObject.DOUBLE_CLICK 鼠标左键双击<br>EventObject.MOUSE_DOWN 鼠标左键按下<br>EventObject.MOUSE_UP 鼠标左键弹起<br>EventObject.MOUSE_WHEEL 鼠标滚轮<br>EventObject.DRAG_START 鼠标拖拽开始<br>EventObject.DRAG_MOVE 鼠标拖拽移动中<br>EventObject.DRAG_END 鼠标拖拽移动结束<br>// 事件监听示例<br>var sp = new Sprite();<br>sp.on(EventObject.CLICK,this,this.onClick);<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-01-01

**继承**  →TreeNode<br>
**子类**  [GameDialog](/zh_hans/library/2d/client/gamedialog)、[GameSprite](/zh_hans/library/2d/client/gamesprite)<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **x** : number;<br>相对父容器的水平方向坐标  |
| **y** : number;<br>相对父容器的垂直方向坐标  |
| **width** : number;<br>宽度，用于鼠标检测  |
| **height** : number;<br>高度，用于鼠标检测  |
| **hasMouseEvent** : boolean;<br>[只读]是否存在鼠标事件  |
| **scaleX** : number;<br>X轴缩放值  |
| **scaleY** : number;<br>Y轴缩放值  |
| **rotation** : number;<br>旋转角度  |
| **skewX** : number;<br>水平倾斜角度  |
| **skewY** : number;<br>垂直倾斜角度  |
| **transform** : Matrix;<br>对象的矩阵信息。通过设置矩阵可以实现节点旋转，缩放，位移效果。  |
| **pivotX** : number;<br>轴心点的位置X，以轴心点进行缩放、旋转  |
| **pivotY** : number;<br>轴心点的位置Y，以轴心点进行缩放、旋转  |
| **alpha** : number;<br>透明度  |
| **visible** : boolean;<br>是否显示  |
| **blendMode** : string;<br>合成模式 null/lighter/blend1-1 (lighter=加法 数字可以更改，参考地图图层自定义混合模式)  |
| **graphics** : Graphics;<br>绘制对象  |
| **scrollRect** : Rectangle;<br>显示对象的滚动矩形范围，具有裁剪效果  |
| **parent** : TreeNode;<br>父节点  |
| **[stage](#stage)** : Stage;<br>[只读]若该对象在舞台上则返回舞台，否则返回null  |
| **[hitArea](#hitarea)** : any;<br>可以设置一个Rectangle区域作为点击区域，设置后则以该区域作为鼠标事件检测  |
| **[mask](#mask)** : Sprite;<br>遮罩，可以设置一个对象(支持位图和矢量图)，根据对象形状进行遮罩显示，支持像素级遮罩  |
| **[mouseEnabled](#mouseenabled)** : boolean;<br>是否接受鼠标事件  |
| **globalScaleX** : number;<br>[只读]获得相对于stage的全局X轴缩放值（会叠加父亲节点的缩放值）。  |
| **globalScaleY** : number;<br>[只读]获得相对于stage的全局Y轴缩放值（会叠加父亲节点的缩放值）。  |
| **mouseX** : number;<br>[只读]返回鼠标在此对象坐标系上的 X 轴坐标信息。  |
| **mouseY** : number;<br>[只读]返回鼠标在此对象坐标系上的 Y 轴坐标信息。  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[dispose](#dispose)**(): void<br>销毁
| **[getBounds](#getbounds)**(): [Rectangle](/zh_hans/library/2d/common/rectangle)<br>获取本对象在父容器坐标系的矩形显示区域，计算量较大，尽量少用
| **[getSelfBounds](#getselfbounds)**(): [Rectangle](/zh_hans/library/2d/common/rectangle)<br>获取本对象在自己坐标系的矩形显示区域，计算量较大，尽量少用
| **[localToGlobal](#localtoglobal)**(point : [Point](/zh_hans/library/2d/common/point)): [Point](/zh_hans/library/2d/common/point)<br>把本地坐标转换为全局坐标
| **[globalToLocal](#globaltolocal)**(point : [Point](/zh_hans/library/2d/common/point)): [Point](/zh_hans/library/2d/common/point)<br>把全局坐标转换为本地坐标
| **[startDrag](#startdrag)**(area? : [Rectangle](/zh_hans/library/2d/common/rectangle)): void<br>开始拖动此对象
| **[stopDrag](#stopdrag)**(): void<br>停止拖动此对象
| **[hitTestPoint](#hittestpoint)**(x : number,  y : number): boolean<br>检测某个点是否在此对象内
| **[pos](#pos)**(x : number,  y : number,  speedMode? : boolean): [Sprite](/zh_hans/library/2d/client/lib/sprite)<br>设置坐标位置。相当于分别设置x和y属性。

## 详情

### stage
###### stage : Stage;
[只读]若该对象在舞台上则返回舞台，否则返回null<br>
@return [Stage]
### hitArea
###### hitArea : any;
可以设置一个Rectangle区域作为点击区域，设置后则以该区域作为鼠标事件检测<br>
支持类型：HitArea | Rectangle
### mask
###### mask : Sprite;
遮罩，可以设置一个对象(支持位图和矢量图)，根据对象形状进行遮罩显示，支持像素级遮罩<br>
遮罩对象坐标系是相对遮罩对象本身的，即以该对象的0,0点为准
### mouseEnabled
###### mouseEnabled : boolean;
是否接受鼠标事件<br>
默认为false，如果监听鼠标事件，则会自动设置本对象及父节点的属性 mouseEnable 的值都为 true（如果父节点手动设置为false，则不会更改）


## dispose
###### **[dispose](#dispose)**(): void :
销毁



## getBounds
###### **[getBounds](#getbounds)**(): [Rectangle](/zh_hans/library/2d/common/rectangle) :
获取本对象在父容器坐标系的矩形显示区域，计算量较大，尽量少用

##### 返回
矩形区域

## getSelfBounds
###### **[getSelfBounds](#getselfbounds)**(): [Rectangle](/zh_hans/library/2d/common/rectangle) :
获取本对象在自己坐标系的矩形显示区域，计算量较大，尽量少用

##### 返回
矩形区域

## localToGlobal
###### **[localToGlobal](#localtoglobal)**(point : [Point](/zh_hans/library/2d/common/point)): [Point](/zh_hans/library/2d/common/point) :
把本地坐标转换为全局坐标
##### 参数
	point 本地坐标点

##### 返回
[Point] 转换后的全局坐标

## globalToLocal
###### **[globalToLocal](#globaltolocal)**(point : [Point](/zh_hans/library/2d/common/point)): [Point](/zh_hans/library/2d/common/point) :
把全局坐标转换为本地坐标
##### 参数
	point 全局坐标点

##### 返回
[Point] 转换后的坐标的点

## startDrag
###### **[startDrag](#startdrag)**(area? : [Rectangle](/zh_hans/library/2d/common/rectangle)): void :
开始拖动此对象
##### 参数
	area [可选] 默认值=null 拖动限定的区域范围内



## stopDrag
###### **[stopDrag](#stopdrag)**(): void :
停止拖动此对象



## hitTestPoint
###### **[hitTestPoint](#hittestpoint)**(x : number,  y : number): boolean :
检测某个点是否在此对象内<br>
@param	x 全局x坐标<br>
@param	y 全局y坐标。

##### 返回
 表示是否在对象内

## pos
###### **[pos](#pos)**(x : number,  y : number,  speedMode? : boolean): [Sprite](/zh_hans/library/2d/client/lib/sprite) :
设置坐标位置。相当于分别设置x和y属性。<br>
@param	x			X轴坐标。<br>
@param	y			Y轴坐标。
##### 参数
		speedMode	（可选）是否极速模式，正常是调用this.x=value进行赋值，极速模式直接调用内部函数处理，,如果未重写x,y属性，建议设置为急速模式性能更高。
	@return	返回对象本身。





