# GlowFilter 发光滤镜
>也可以当成阴影滤使用<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-01-01

**继承**  →[Filter](/zh_hans/library/2d/client/lib/filter)<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **offY** : number;<br>X轴方向的偏移  |
| **offX** : number;<br>Y轴方向的偏移  |
| **blur** : number;<br>模糊程度  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[constructor](#constructor)**(color : string,  blur? : number,  offX? : number,  offY? : number)<br>创建发光滤镜
| **[getColor](#getcolor)**(): Array<any><br>获取数组形式的颜色格式 [R,G,B,A] 范围0~1

## 详情



## constructor
###### **[constructor](#constructor)**(color : string,  blur? : number,  offX? : number,  offY? : number) :
创建发光滤镜<br>
@param	color	滤镜的颜色<br>
@param	blur	边缘模糊的大小 默认值=4<br>
@param	offX	X轴方向的偏移 默认值=6<br>
@param	offY	Y轴方向的偏移 默认值=6



## getColor
###### **[getColor](#getcolor)**(): Array<any> :
获取数组形式的颜色格式 [R,G,B,A] 范围0~1

##### 返回
[Array]



