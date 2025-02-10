---
title:  MathUtils 数学工具类
---
>GC内部封装的常用的一些数学相关的函数<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-08-22

**继承**  无<br>
**子类**  无<br>


## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                                                                                                                                                             |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[angle2Radian](#angle2radian)**(angle : number): number<br>[静态]角度转弧度。                                                                                                                                                                                                                                   |
| **[radian2Angle](#radian2angle)**(radian : number): number<br>[静态]弧度转换为角度。                                                                                                                                                                                                                              |
| **[rand](#rand)**(n : number): number<br>[静态]返回0~n-1的正整数                                                                                                                                                                                                                                                  |
| **[direction360](#direction360)**(x1 : number,  y1 : number,  x2 : number,  y2 : number): number<br>[静态]获取两点之间的角度 0-360                                                                                                                                                                                |
| **[fixIntDigit](#fixintdigit)**(s : any,  fixDigit? : number): string<br>[静态]固定整数位，未满则补充0                                                                                                                                                                                                            |
| **[int](#int)**(v : any): number<br>[静态]强制转化为整数                                                                                                                                                                                                                                                          |
| **[float](#float)**(v : any): number<br>[静态]转化为浮点数                                                                                                                                                                                                                                                        |
| **[inAngleRange](#inanglerange)**(limitMax : number,  limitMin : number,  angle : number): boolean<br>[静态]判断是否在度数范围内                                                                                                                                                                                  |
| **[isPowerOfTwo](#ispoweroftwo)**(x : number): boolean<br>[静态]判断一个数是否是2的n次幂                                                                                                                                                                                                                          |
| **[nextHighestPowerOfTwo](#nexthighestpoweroftwo)**(x : number): number<br>[静态]获取离x最近的一个2的次幂数                                                                                                                                                                                                       |
| **[getBezierPoint2](#getbezierpoint2)**(startX : number,  startY : number,  CtrlX : number,  CtrlY : number,  endX : number,  endY : number,  t : number,  resultPoint? : [Point](/zh_hans/library/2d/common/point)): [Point](/zh_hans/library/2d/common/point)<br>[静态]计算获取二次贝塞尔曲线上的某个点具体位置 |

## 详情



## angle2Radian
###### **[angle2Radian](#angle2radian)**(angle : number): number :
[静态]角度转弧度。<br>
@param	angle 角度值。<br>
@return	返回弧度值。



## radian2Angle
###### **[radian2Angle](#radian2angle)**(radian : number): number :
[静态]弧度转换为角度。<br>
@param	radian 弧度值。<br>
@return	返回角度值。



## rand
###### **[rand](#rand)**(n : number): number :
[静态]返回0~n-1的正整数
##### 参数
	n

##### 返回
[number]

## direction360
###### **[direction360](#direction360)**(x1 : number,  y1 : number,  x2 : number,  y2 : number): number :
[静态]获取两点之间的角度 0-360
##### 参数
	x1 起点x
	y1 起点y
	x2 终点x
	y2 终点y

##### 返回
[number] 终点相对于起点的角度

## fixIntDigit
###### **[fixIntDigit](#fixintdigit)**(s : any,  fixDigit? : number): string :
[静态]固定整数位，未满则补充0<br>
如 fixIntDigit(2,3)  -->  003
##### 参数
	s 数值 string | number
	fixDigit [可选] 默认值=4 固定的位数

##### 返回
[string]

## int
###### **[int](#int)**(v : any): number :
[静态]强制转化为整数
##### 参数
	v 对于不符合要求的参数则转为0



## float
###### **[float](#float)**(v : any): number :
[静态]转化为浮点数
##### 参数
	v 对于不符合要求的参数则转为0



## inAngleRange
###### **[inAngleRange](#inanglerange)**(limitMax : number,  limitMin : number,  angle : number): boolean :
[静态]判断是否在度数范围内
##### 参数
	limitMax 上限 -360~360
	limitMin 下线 -360~360
	angle 指定的角度

##### 返回
[boolean]

## isPowerOfTwo
###### **[isPowerOfTwo](#ispoweroftwo)**(x : number): boolean :
[静态]判断一个数是否是2的n次幂
##### 参数
	x 一个数

##### 返回
[boolean]

## nextHighestPowerOfTwo
###### **[nextHighestPowerOfTwo](#nexthighestpoweroftwo)**(x : number): number :
[静态]获取离x最近的一个2的次幂数
##### 参数
	x

##### 返回
[number]

## getBezierPoint2
###### **[getBezierPoint2](#getbezierpoint2)**(startX : number,  startY : number,  CtrlX : number,  CtrlY : number,  endX : number,  endY : number,  t : number,  resultPoint? : [Point](/zh_hans/library/2d/common/point)): [Point](/zh_hans/library/2d/common/point) :
[静态]计算获取二次贝塞尔曲线上的某个点具体位置
##### 参数
	startX 起点x
	startY 起点y
	CtrlX 控制点x
	CtrlY 控制点y
	endX 终点x
	endY 终点y
	t 0~1 表示起点到终点间某个点的位置信息 0表示起点，1表示终点，0.5则表示起点-终点的一半
	resultPoint [可选] 默认值=null 如存在则将数据装入到该点中

##### 返回
计算点的具体位置



