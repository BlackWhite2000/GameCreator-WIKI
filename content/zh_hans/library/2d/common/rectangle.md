# Rectangle 矩形对象
>根据x、y、width、height确定一个矩形，用于辅助计算<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-08-08

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **x** : number;<br>矩形左上角的坐标x  |
| **y** : number;<br>矩形左上角的坐标y  |
| **width** : number;<br>矩形宽度  |
| **height** : number;<br>矩形高度  |
| **right** : number;<br>[只读]右边坐标x（即x+width的值）  |
| **bottom** : number;<br>[只读]底部坐标y（即y+height的值）  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[constructor](#constructor)**(x? : number,  y? : number,  width? : number,  height? : number)<br>构造函数
| **[setTo](#setto)**(x : number,  y : number,  width : number,  height : number): [Rectangle](/zh_hans/library/2d/common/rectangle)<br>一次设置指定的值
| **[contains](#contains)**(x : number,  y : number): boolean<br>是否包含指定的点
| **[intersects](#intersects)**(rect : [Rectangle](/zh_hans/library/2d/common/rectangle)): boolean<br>是否相交与另一个指定的矩形相交
| **[intersection](#intersection)**(rect : [Rectangle](/zh_hans/library/2d/common/rectangle),  out? : [Rectangle](/zh_hans/library/2d/common/rectangle)): [Rectangle](/zh_hans/library/2d/common/rectangle)<br>获取与指定矩形相交的区域
| **[union](#union)**(source : [Rectangle](/zh_hans/library/2d/common/rectangle),  out? : [Rectangle](/zh_hans/library/2d/common/rectangle)): [Rectangle](/zh_hans/library/2d/common/rectangle)<br>通过填充两个矩形之间的水平和垂直空间，将这两个矩形组合在一起以创建一个新的 Rectangle 对象
| **[clone](#clone)**(out? : [Rectangle](/zh_hans/library/2d/common/rectangle)): [Rectangle](/zh_hans/library/2d/common/rectangle)<br>返回一个克隆的该对象
| **[toString](#tostring)**(): string<br>返回字符串形式的值显示：x,y,width,height
| **[equals](#equals)**(rect : [Rectangle](/zh_hans/library/2d/common/rectangle)): boolean<br>是否与指定的矩形相等
| **[isEmpty](#isempty)**(): boolean<br>确定此 Rectangle 对象是否为空

## 详情



## constructor
###### **[constructor](#constructor)**(x? : number,  y? : number,  width? : number,  height? : number) :
构造函数
##### 参数
	x [可选] 默认值=0
	y [可选] 默认值=0
	width [可选] 默认值=0
	height [可选] 默认值=0



## setTo
###### **[setTo](#setto)**(x : number,  y : number,  width : number,  height : number): [Rectangle](/zh_hans/library/2d/common/rectangle) :
一次设置指定的值
##### 参数
	x x轴的值
	y y轴的值
	width 宽度
	height 高度

##### 返回
[Rectangle]

## contains
###### **[contains](#contains)**(x : number,  y : number): boolean :
是否包含指定的点
##### 参数
	x 指定点的x坐标
	y	指定点的y坐标
	@return	是否包含 true=包含 false=不包含



## intersects
###### **[intersects](#intersects)**(rect : [Rectangle](/zh_hans/library/2d/common/rectangle)): boolean :
是否相交与另一个指定的矩形相交<br>
@param	rect 指定的矩形<br>
@return	是否相交 true=相交 false=不相交



## intersection
###### **[intersection](#intersection)**(rect : [Rectangle](/zh_hans/library/2d/common/rectangle),  out? : [Rectangle](/zh_hans/library/2d/common/rectangle)): [Rectangle](/zh_hans/library/2d/common/rectangle) :
获取与指定矩形相交的区域
##### 参数
	rect 指定的矩形
	out [可选] 默认值=null 如果传入此参数的话则将返回值返回到该对象中以便减少开销

##### 返回
[Rectangle] 相交的区域

## union
###### **[union](#union)**(source : [Rectangle](/zh_hans/library/2d/common/rectangle),  out? : [Rectangle](/zh_hans/library/2d/common/rectangle)): [Rectangle](/zh_hans/library/2d/common/rectangle) :
通过填充两个矩形之间的水平和垂直空间，将这两个矩形组合在一起以创建一个新的 Rectangle 对象<br>
注意：union() 方法忽略高度或宽度值为 0 的矩形，如：var rect2:Rectangle = new Rectangle(300,300,50,0);
##### 参数
	source 要添加到此 Rectangle 对象的 Rectangle 对象。
	out [可选] 默认值=null 如果传入此参数的话则将返回值返回到该对象中以便减少开销

##### 返回
充当两个矩形的联合的新 Rectangle 对象。

## clone
###### **[clone](#clone)**(out? : [Rectangle](/zh_hans/library/2d/common/rectangle)): [Rectangle](/zh_hans/library/2d/common/rectangle) :
返回一个克隆的该对象
##### 参数
	out [可选] 默认值=null 如果传入此参数的话则将返回值返回到该对象中以便减少开销

##### 返回
[Rectangle]

## toString
###### **[toString](#tostring)**(): string :
返回字符串形式的值显示：x,y,width,height

##### 返回
[string]

## equals
###### **[equals](#equals)**(rect : [Rectangle](/zh_hans/library/2d/common/rectangle)): boolean :
是否与指定的矩形相等<br>
@param	rect 指定的矩形<br>
@return	是否相等 true=相等 false=不相等



## isEmpty
###### **[isEmpty](#isempty)**(): boolean :
确定此 Rectangle 对象是否为空

##### 返回
如果 Rectangle 对象的宽度或高度小于等于 0，则返回 true 值，否则返回 false



