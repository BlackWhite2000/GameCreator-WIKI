---
title: Matrix 矩阵
---
>2D变换：表示一个转换矩阵，它确定如何将点从一个坐标空间映射到另一个坐标空间。您可以对一个显示对象执行不同的图形转换，方法是设置 Matrix 对象的属性，<br>将该 Matrix 对象应用于 Transform 对象的 matrix 属性，然后应用该 Transform 对象作为显示对象的 transform 属性。这些转换函数包括平移（x 和 y 重新定位）、旋转、缩放和倾斜<br>a c tx<br>b d ty<br>平移：tx、ty<br>缩放：a(scaleX)、d(scaleY)<br>旋转: q表示弧度<br>cos(q) -sin(q) tx<br>sin(q) cos(q)  ty<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-01-01

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                             |
| ------------------------------------------------------------------------------------------------ |
| **[EMPTY](#empty)** : Matrix;<br>[静态]空矩阵：                                                  |
| **TEMP** : Matrix;<br>[静态]临时用的矩阵辅助体，不用创建实例而是可以重复使用该实例作为辅助计算的 |
| **a** : number;<br>缩放或旋转图像时影响像素沿 x 轴定位的值。                                     |
| **b** : number;<br>旋转或倾斜图像时影响像素沿 y 轴定位的值。                                     |
| **c** : number;<br>旋转或倾斜图像时影响像素沿 x 轴定位的值。                                     |
| **d** : number;<br>缩放或旋转图像时影响像素沿 y 轴定位的值。                                     |
| **tx** : number;<br>沿 x 轴平移每个点的距离。                                                    |
| **ty** : number;<br>沿 y 轴平移每个点的距离。                                                    |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[constructor](#constructor)**(a? : number,  b? : number,  c? : number,  d? : number,  tx? : number,  ty? : number)<br>构造函数                                                                           |
| **[identity](#identity)**(): [Matrix](/zh_hans/library/2d/client/lib/matrix)<br>将本矩阵设置为单位矩阵。                                                                                                   |
| **[setTranslate](#settranslate)**(x : number,  y : number): [Matrix](/zh_hans/library/2d/client/lib/matrix)<br>设置位置：直接设置tx、ty。                                                                  |
| **[translate](#translate)**(x : number,  y : number): [Matrix](/zh_hans/library/2d/client/lib/matrix)<br>平移位置：在原来的tx、ty基础上增加值。                                                            |
| **[scale](#scale)**(x : number,  y : number): void<br>对矩阵应用缩放转换。                                                                                                                                 |
| **[rotate](#rotate)**(angle : number): void<br>对矩阵应用旋转。                                                                                                                                            |
| **[skew](#skew)**(x : number,  y : number): [Matrix](/zh_hans/library/2d/client/lib/matrix)<br>对矩阵应用倾斜转换。                                                                                        |
| **[transformPoint](#transformpoint)**(out : [Point](/zh_hans/library/2d/common/point)): [Point](/zh_hans/library/2d/common/point)<br>将矩阵对象表示的几何转换应用于指定点。                                |
| **[invert](#invert)**(): [Matrix](/zh_hans/library/2d/client/lib/matrix)<br>执行原始矩阵的逆转换。                                                                                                         |
| **[setTo](#setto)**(a : number,  b : number,  c : number,  d : number,  tx : number,  ty : number): [Matrix](/zh_hans/library/2d/client/lib/matrix)<br>将矩阵对象的成员设置为指定值。                      |
| **[concat](#concat)**(matrix : [Matrix](/zh_hans/library/2d/client/lib/matrix)): [Matrix](/zh_hans/library/2d/client/lib/matrix)<br>将指定矩阵与当前矩阵连接，从而将这两个矩阵的几何效果有效地结合在一起。 |
| **[clone](#clone)**(): [Matrix](/zh_hans/library/2d/client/lib/matrix)<br>返回此 Matrix 对象的副本。                                                                                                       |
| **[toString](#tostring)**(): string<br>返回列出该 Matrix 对象属性的文本值。                                                                                                                                |
| **[destroy](#destroy)**(): void<br>销毁此对象。                                                                                                                                                            |

## 详情

### EMPTY
###### EMPTY : Matrix;
[静态]空矩阵：<br>
1 0 0<br>
0 1 0


## constructor
###### **[constructor](#constructor)**(a? : number,  b? : number,  c? : number,  d? : number,  tx? : number,  ty? : number) :
构造函数
##### 参数
	a [可选] 默认值=1 缩放或旋转图像时影响像素沿 x 轴定位的值。
	b [可选] 默认值=0 旋转或倾斜图像时影响像素沿 y 轴定位的值。
	c [可选] 默认值=0 旋转或倾斜图像时影响像素沿 x 轴定位的值。
	d [可选] 默认值=1 缩放或旋转图像时影响像素沿 y 轴定位的值。
	tx [可选] 默认值=0 沿 x 轴平移每个点的距离。
	ty [可选] 默认值=0 沿 y 轴平移每个点的距离。



## identity
###### **[identity](#identity)**(): [Matrix](/zh_hans/library/2d/client/lib/matrix) :
将本矩阵设置为单位矩阵。

##### 返回
返回当前矩形。

## setTranslate
###### **[setTranslate](#settranslate)**(x : number,  y : number): [Matrix](/zh_hans/library/2d/client/lib/matrix) :
设置位置：直接设置tx、ty。<br>
@param	x 沿 x 轴平移每个点的距离。<br>
@param	y 沿 y 轴平移每个点的距离。<br>
@return	返回对象本身



## translate
###### **[translate](#translate)**(x : number,  y : number): [Matrix](/zh_hans/library/2d/client/lib/matrix) :
平移位置：在原来的tx、ty基础上增加值。<br>
@param	x 沿 x 轴向右移动的量（以像素为单位）。<br>
@param	y 沿 y 轴向下移动的量（以像素为单位）。

##### 返回
返回此矩形对象。

## scale
###### **[scale](#scale)**(x : number,  y : number): void :
对矩阵应用缩放转换。<br>
@param	x 用于沿 x 轴缩放对象的乘数。1=100%<br>
@param	y 用于沿 y 轴缩放对象的乘数。1=100%



## rotate
###### **[rotate](#rotate)**(angle : number): void :
对矩阵应用旋转。<br>
@param	angle 以弧度为单位的旋转角度。



## skew
###### **[skew](#skew)**(x : number,  y : number): [Matrix](/zh_hans/library/2d/client/lib/matrix) :
对矩阵应用倾斜转换。<br>
@param	x 沿着 X 轴的 2D 倾斜弧度。<br>
@param	y 沿着 Y 轴的 2D 倾斜弧度。

##### 返回
当前 Matrix 对象。

## transformPoint
###### **[transformPoint](#transformpoint)**(out : [Point](/zh_hans/library/2d/common/point)): [Point](/zh_hans/library/2d/common/point) :
将矩阵对象表示的几何转换应用于指定点。<br>
@param	out 用来设定输出结果的点。<br>
@return	返回out



## invert
###### **[invert](#invert)**(): [Matrix](/zh_hans/library/2d/client/lib/matrix) :
执行原始矩阵的逆转换。

##### 返回
当前矩阵对象。

## setTo
###### **[setTo](#setto)**(a : number,  b : number,  c : number,  d : number,  tx : number,  ty : number): [Matrix](/zh_hans/library/2d/client/lib/matrix) :
将矩阵对象的成员设置为指定值。<br>
@param	a 缩放或旋转图像时影响像素沿 x 轴定位的值。<br>
@param	b 旋转或倾斜图像时影响像素沿 y 轴定位的值。<br>
@param	c 旋转或倾斜图像时影响像素沿 x 轴定位的值。<br>
@param	d 缩放或旋转图像时影响像素沿 y 轴定位的值。<br>
@param	tx 沿 x 轴平移每个点的距离。<br>
@param	ty 沿 y 轴平移每个点的距离。

##### 返回
当前矩阵对象。

## concat
###### **[concat](#concat)**(matrix : [Matrix](/zh_hans/library/2d/client/lib/matrix)): [Matrix](/zh_hans/library/2d/client/lib/matrix) :
将指定矩阵与当前矩阵连接，从而将这两个矩阵的几何效果有效地结合在一起。<br>
@param	matrix 要连接到源矩阵的矩阵。

##### 返回
当前矩阵。

## clone
###### **[clone](#clone)**(): [Matrix](/zh_hans/library/2d/client/lib/matrix) :
返回此 Matrix 对象的副本。

##### 返回
与原始实例具有完全相同的属性的新 Matrix 实例。

## toString
###### **[toString](#tostring)**(): string :
返回列出该 Matrix 对象属性的文本值。

##### 返回
一个字符串，它包含 Matrix 对象的属性值：a、b、c、d、tx 和 ty。

## destroy
###### **[destroy](#destroy)**(): void :
销毁此对象。





