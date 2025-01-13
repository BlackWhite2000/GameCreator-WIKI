# Point 点对象
>表示二维坐标系的x,y，用于辅助计算<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-06-03

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **x** : number;<br>水平坐标  |
| **y** : number;<br>垂直坐标  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[constructor](#constructor)**(x? : number,  y? : number)<br>构造函数
| **[setTo](#setto)**(x : number,  y : number): [Point](/zh_hans/library/2d/common/point)<br>一次设置水平和垂直坐标
| **[distance](#distance)**(x : number,  y : number): number<br>计算当前点和指定点(x，y)的距离。
| **[toString](#tostring)**(): string<br>返回字符串形式的值显示：x,y
| **[interpolate](#interpolate)**(to : [Point](/zh_hans/library/2d/common/point),  from : [Point](/zh_hans/library/2d/common/point),  per : number): [Point](/zh_hans/library/2d/common/point)<br>[静态]返回from-to两点中间的点
| **[interpolate2](#interpolate2)**(toX : number,  toY : number,  fromX : number,  fromY : number,  per : number): number[]<br>[静态]返回from-to两点中间的点
| **[distance](#distance)**(from : [Point](/zh_hans/library/2d/common/point),  to : [Point](/zh_hans/library/2d/common/point)): number<br>[静态]返回from-to两点中间的距离
| **[distance2](#distance2)**(fromX : number,  fromY : number,  toX : number,  toY : number): number<br>[静态]返回from-to两点中间的距离
| **[distanceSquare](#distancesquare)**(p1 : [Point](/zh_hans/library/2d/common/point),  p2 : [Point](/zh_hans/library/2d/common/point)): number<br>[静态]距离的平方
| **[distanceSquare2](#distancesquare2)**(ax : number,  ay : number,  bx : number,  by : number): number<br>[静态]距离的平方

## 详情



## constructor
###### **[constructor](#constructor)**(x? : number,  y? : number) :
构造函数
##### 参数
	x [可选] 默认值=0 水平坐标
	y [可选] 默认值=0 垂直坐标



## setTo
###### **[setTo](#setto)**(x : number,  y : number): [Point](/zh_hans/library/2d/common/point) :
一次设置水平和垂直坐标
##### 参数
	x 水平坐标
	y 垂直坐标

##### 返回
[Point] 当前对象

## distance
###### **[distance](#distance)**(x : number,  y : number): number :
计算当前点和指定点(x，y)的距离。<br>
@param	x 指定点的水平坐标。<br>
@param	y 指定点的垂直坐标。<br>
@return	返回当前点和指定点之间的距离。



## toString
###### **[toString](#tostring)**(): string :
返回字符串形式的值显示：x,y

##### 返回
[string]

## interpolate
###### **[interpolate](#interpolate)**(to : [Point](/zh_hans/library/2d/common/point),  from : [Point](/zh_hans/library/2d/common/point),  per : number): [Point](/zh_hans/library/2d/common/point) :
[静态]返回from-to两点中间的点
##### 参数
	to 目标点
	from 起点
	per 所在from-to的比例 0~1，0则等于from，1则等于to

##### 返回
[Point]

## interpolate2
###### **[interpolate2](#interpolate2)**(toX : number,  toY : number,  fromX : number,  fromY : number,  per : number): number[] :
[静态]返回from-to两点中间的点
##### 参数
	toX 目标点x
	toY 目标点y
	fromX 起点x
	fromY 起点y
	per 所在from-to的比例 0~1，0则等于from，1则等于to

##### 返回
[number]

## distance
###### **[distance](#distance)**(from : [Point](/zh_hans/library/2d/common/point),  to : [Point](/zh_hans/library/2d/common/point)): number :
[静态]返回from-to两点中间的距离
##### 参数
	from 起点
	to 终点

##### 返回
[number]

## distance2
###### **[distance2](#distance2)**(fromX : number,  fromY : number,  toX : number,  toY : number): number :
[静态]返回from-to两点中间的距离
##### 参数
	fromX 起点X
	fromY 起点Y
	toX 到达点X
	toY 到达点Y

##### 返回
[number]

## distanceSquare
###### **[distanceSquare](#distancesquare)**(p1 : [Point](/zh_hans/library/2d/common/point),  p2 : [Point](/zh_hans/library/2d/common/point)): number :
[静态]距离的平方<br>
有时候为了优化计算，只是比较两个距离的长度而不需要具体值，可以调用此函数，比distance减少了开方的计算
##### 参数
	p1 起点
	p2 终点

##### 返回
[number] 起点-终点距离的平方

## distanceSquare2
###### **[distanceSquare2](#distancesquare2)**(ax : number,  ay : number,  bx : number,  by : number): number :
[静态]距离的平方<br>
有时候为了优化计算，只是比较两个距离的长度而不需要具体值，可以调用此函数，比distance减少了开方的计算
##### 参数
	ax 起点x
	ay 起点y
	bx 终点x
	by 终点y

##### 返回
[number] 起点-终点距离的平方



