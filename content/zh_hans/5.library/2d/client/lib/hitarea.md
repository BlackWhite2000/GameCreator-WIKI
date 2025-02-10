---
title:  HitArea 鼠标点击区域
---
>可以设置绘制一系列矢量图作为点击区域和非点击区域（目前只支持圆形，矩形，多边形）<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-01-01

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                              |
| ------------------------------------------------------------------------------------------------- |
| **hit** : Graphics;<br>可点击区域，可以设置绘制一系列矢量图作为点击区域（支持圆形，矩形，多边形） |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **[isHitGraphic](#ishitgraphic)**(x : number,  y : number,  graphic : [Graphics](/zh_hans/library/2d/client/lib/graphics)): boolean<br>[静态]是否击中Graphic |
| **[ptInPolygon](#ptinpolygon)**(x : number,  y : number,  areaPoints : number[]): boolean<br>[静态]坐标是否在多边形内                                        |
| **[isHit](#ishit)**(x : number,  y : number): boolean<br>是否包含某个点                                                                                      |
| **[contains](#contains)**(x : number,  y : number): boolean<br>检测对象是否包含指定的点。                                                                    |
| (): unHit Graphics<br>不可点击区域，可以设置绘制一系列矢量图作为非点击区域（支持圆形，矩形，多边形）                                                         |

## 详情



## isHitGraphic
###### **[isHitGraphic](#ishitgraphic)**(x : number,  y : number,  graphic : [Graphics](/zh_hans/library/2d/client/lib/graphics)): boolean :
[静态]是否击中Graphic
##### 参数
	x x坐标
	y y坐标
	graphic 图形源

##### 返回
[boolean]

## ptInPolygon
###### **[ptInPolygon](#ptinpolygon)**(x : number,  y : number,  areaPoints : number[]): boolean :
[静态]坐标是否在多边形内
##### 参数
	x x坐标
	y y坐标
	areaPoints 格式 [x1,y1,x2,y2...]

##### 返回
[boolean]

## isHit
###### **[isHit](#ishit)**(x : number,  y : number): boolean :
是否包含某个点
##### 参数
	x x坐标
	y y坐标

##### 返回
是否点击到

## contains
###### **[contains](#contains)**(x : number,  y : number): boolean :
检测对象是否包含指定的点。<br>
@param	x	点的 X 轴坐标值（水平位置）。<br>
@param	y	点的 Y 轴坐标值（垂直位置）。<br>
@return	如果包含指定的点，则值为 true；否则为 false。



## unHit:Graphics
###### (): unHit Graphics :
不可点击区域，可以设置绘制一系列矢量图作为非点击区域（支持圆形，矩形，多边形）





