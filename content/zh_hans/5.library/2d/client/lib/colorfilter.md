# ColorFilter 颜色滤镜
>使用 ColorFilter 类可以将 4 x 5 矩阵转换应用于输入图像上的每个像素的 RGBA 颜色和 Alpha 值，<br>以生成具有一组新的 RGBA 颜色和 Alpha 值的结果。该类允许饱和度更改、色相旋转、亮度转 Alpha 以及各种其他效果。<br>您可以将滤镜应用于任何显示对象（即，从 Sprite 类继承的对象）。<br>注意：对于 RGBA 值，最高有效字节代表红色通道值，其后的有效字节分别代表绿色、蓝色和 Alpha 通道值。<br>利用此颜色矩阵可以制作：色相、明暗、灰度、色调等效果<br>// 默认值<br>1,0,0,0,0,<br>0,1,0,0,0,<br>0,0,1,0,0,<br>0,0,0,1,0<br>// 原理<br>a[0]  a[1]  a[2]  a[3]  a[4]<br>a[5]  a[6]  a[7]  a[8]  a[9]<br>a[10] a[11] a[12] a[13] a[14]<br>a[15] a[16] a[17] a[18] a[19]<br>redResult   = (a[0]  * srcR) + (a[1]  * srcG) + (a[2]  * srcB) + (a[3]  * srcA) + a[4]<br>greenResult = (a[5]  * srcR) + (a[6]  * srcG) + (a[7]  * srcB) + (a[8]  * srcA) + a[9]<br>blueResult  = (a[10] * srcR) + (a[11] * srcG) + (a[12] * srcB) + (a[13] * srcA) + a[14]<br>alphaResult = (a[15] * srcR) + (a[16] * srcG) + (a[17] * srcB) + (a[18] * srcA) + a[19]<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-01-01

**继承**  →[Filter](/zh_hans/library/2d/client/lib/filter)<br>
**子类**  无<br>


## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[constructor](#constructor)**(mat? : Array<any>)<br>构造函数 默认值=4

## 详情



## constructor
###### **[constructor](#constructor)**(mat? : Array<any>) :
构造函数 默认值=4





