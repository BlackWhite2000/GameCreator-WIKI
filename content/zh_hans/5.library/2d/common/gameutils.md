---
title:  GameUtils 针对游戏相关的常用工具方法
---
>关于朝向<br>&nbsp;--朝向可参考以5为中心的小键盘数字：<br>&nbsp;&nbsp;&nbsp;1-左下 2-下 3-右下 4-左 6-右 7-左上 8-上 9-右上<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-08-08

**继承**  无<br>
**子类**  无<br>


## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[getAssetOri](#getassetori)**(ori : number,  oriMode? : number): number<br>[静态]获取实际资源的面向，由于实际资源未必有指定的面向，这里会做为映射                                                                                                           |
| **[getOriByAngle](#getoribyangle)**(angle : number): number<br>[静态]根据0-360角度获取对应的面向                                                                                                                                                              |
| **[getAngleByOri](#getanglebyori)**(ori : number): number<br>[静态]根据面向获取0-360度                                                                                                                                                                        |
| **[getFlipOri](#getflipori)**(ori : number): number<br>[静态]获取相反的面向                                                                                                                                                                                   |
| **[getGridPostion](#getgridpostion)**(p : Point,  helpP? : Point): Point<br>[静态][实际坐标]->[格子坐标]                                                                                                                                                      |
| **[getGridCenter](#getgridcenter)**(p : Point,  helpP? : Point): Point<br>[静态][实际坐标]->[实际坐标中心点]                                                                                                                                                  |
| **[getGridCenterByGrid](#getgridcenterbygrid)**(gridP : Point,  helpP? : Point): Point<br>[静态][格子坐标] -> [实际坐标中心点]                                                                                                                                |
| **[getSameStateGrid](#getsamestategrid)**(mapData : any[][],  gridX : number,  gridY : number,  width : number,  height : number,  attributes : string[],  limit? : number): Point[]<br>[静态]查询临近的同状态路径，如GameCreator编辑器中油漆桶则使用了该方法 |
| **[getMendingGrids](#getmendinggrids)**(grid1 : Point,  grid2 : Point,  per? : number): Point[]<br>[静态]获取两个格子之间的补间格子                                                                                                                           |
| **[getAutoFitSizePre](#getautofitsizepre)**(rect : Rectangle,  canvasRect : Rectangle): number<br>[静态]获取最小等比适配比例 canvasRect.width/rect.width 与 canvasRect.height/rect.height的最小值                                                             |
| **[isInheritNode](#isinheritnode)**(node : any,  parentNode : any): boolean<br>[静态]判断是否继承于某个节点（节点系统中需要有parent属性来指向父节点）                                                                                                         |
| **[getVarID](#getvarid)**(value : string): number<br>[静态]根据特定字符串$n来获取n，不符合的返回0                                                                                                                                                             |
| **[isLegalVarName](#islegalvarname)**(varName : string): boolean<br>[静态]检查是否合法的变量名                                                                                                                                                                |
| **[getCurveData](#getcurvedata)**(curveStrData : string): any[]<br>[静态]获取曲线数据，根据字符串格式的数据                                                                                                                                                   |
| **[getBezierPoint2ByGroupValue](#getbezierpoint2bygroupvalue)**(groupValue : any[],  x : number): number<br>[静态]根据曲线数据获取其中某个点的值                                                                                                              |
| **[getTransData](#gettransdata)**(transDataStr : string): TransData<br>[静态]根据字符串格式的数据,获取过渡组件Object类型数据                                                                                                                                  |
| **[getValueByTransData](#getvaluebytransdata)**(transData : TransData,  x : number): number<br>[静态]根据传入的参数x,获取过渡对应的值                                                                                                                         |

## 详情



## getAssetOri
###### **[getAssetOri](#getassetori)**(ori : number,  oriMode? : number): number :
[静态]获取实际资源的面向，由于实际资源未必有指定的面向，这里会做为映射<br>
如只有四方向的行走图，获取右上方向的话则映射为方向右
##### 参数
	ori 面向
	oriMode [可选] 默认值=8 面向模式1/2/3/5/8

##### 返回
[number] 替换映射后的面向

## getOriByAngle
###### **[getOriByAngle](#getoribyangle)**(angle : number): number :
[静态]根据0-360角度获取对应的面向
##### 参数
	angle 角度 0-360

##### 返回
[number] 返回面向 1/2/3/4/6/7/8/9

## getAngleByOri
###### **[getAngleByOri](#getanglebyori)**(ori : number): number :
[静态]根据面向获取0-360度
##### 参数
	ori 面向 1/2/3/4/6/7/8/9

##### 返回
[number] 角度 0-360

## getFlipOri
###### **[getFlipOri](#getflipori)**(ori : number): number :
[静态]获取相反的面向
##### 参数
	ori 面向 1/2/3/4/6/7/8/9

##### 返回
返回与ori相反的面向，如2的反方向是8

## getGridPostion
###### **[getGridPostion](#getgridpostion)**(p : Point,  helpP? : Point): Point :
[静态][实际坐标]->[格子坐标]
##### 参数
	p 实际坐标
	helpP [可选] 默认值=null 如果存在则使用该对象来自装载而非创建新的Point对象

##### 返回
[Point] 格子坐标

## getGridCenter
###### **[getGridCenter](#getgridcenter)**(p : Point,  helpP? : Point): Point :
[静态][实际坐标]->[实际坐标中心点]
##### 参数
	p 实际坐标
	helpP [可选] 默认值=null 如果存在则使用该对象来自装载而非创建新的Point对象

##### 返回
[Point]

## getGridCenterByGrid
###### **[getGridCenterByGrid](#getgridcenterbygrid)**(gridP : Point,  helpP? : Point): Point :
[静态][格子坐标] -> [实际坐标中心点]
##### 参数
	gridP 格子坐标
	helpP [可选] 默认值=null 如果存在则使用该对象来自装载而非创建新的Point对象

##### 返回
[Point]

## getSameStateGrid
###### **[getSameStateGrid](#getsamestategrid)**(mapData : any[][],  gridX : number,  gridY : number,  width : number,  height : number,  attributes : string[],  limit? : number): Point[] :
[静态]查询临近的同状态路径，如GameCreator编辑器中油漆桶则使用了该方法
##### 参数
	mapData 图数据
	gridX 起点格子
	gridY 起点格子
	width 总宽度
	height 总高度
	attributes 判断格子状态相同的属性集，即与mapData数据中的有一种属性不同的话也视为不同的状态 null 则表示直接对比
	limit 默认值=100 限制搜索仅在周围limit距离的正方形范围内

##### 返回
[Point]

## getMendingGrids
###### **[getMendingGrids](#getmendinggrids)**(grid1 : Point,  grid2 : Point,  per? : number): Point[] :
[静态]获取两个格子之间的补间格子
##### 参数
	grid1 起点格
	grid2 终点格
	per [可选] 默认值=0.1 每次遍历的比例，如果0.1表示起点格到终点格切分10次后返回不重复的中间格

##### 返回
[Point]

## getAutoFitSizePre
###### **[getAutoFitSizePre](#getautofitsizepre)**(rect : Rectangle,  canvasRect : Rectangle): number :
[静态]获取最小等比适配比例 canvasRect.width/rect.width 与 canvasRect.height/rect.height的最小值
##### 参数
	rect
	canvasRect 画布矩形



## isInheritNode
###### **[isInheritNode](#isinheritnode)**(node : any,  parentNode : any): boolean :
[静态]判断是否继承于某个节点（节点系统中需要有parent属性来指向父节点）
##### 参数
	node 节点
	parentNode 疑似父节点

##### 返回
是否是真正的父节点

## getVarID
###### **[getVarID](#getvarid)**(value : string): number :
[静态]根据特定字符串$n来获取n，不符合的返回0
##### 参数
	value 特殊格式：如$6

##### 返回
变量ID：如6

## isLegalVarName
###### **[isLegalVarName](#islegalvarname)**(varName : string): boolean :
[静态]检查是否合法的变量名
##### 参数
	varName 变量名称

##### 返回
[boolean] 是否合法

## getCurveData
###### **[getCurveData](#getcurvedata)**(curveStrData : string): any[] :
[静态]获取曲线数据，根据字符串格式的数据<br>
返回格式：[[0,0,startY,maxLength,maxHeight],[type,startX,startY,endX,endY,ctrlX,ctrlY],[type,startX,startY,endX,endY,ctrlX,ctrlY],...]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxLength=最大长度（仅供参考） maxHeight=最大高度 起点x始终位于0，终点x始终位于100  type=0-线性线段 1-二次贝塞尔曲线片段(拥有ctrlX,ctrlY)
##### 参数
	curveStrData 曲线数据

##### 返回
groupValue

## getBezierPoint2ByGroupValue
###### **[getBezierPoint2ByGroupValue](#getbezierpoint2bygroupvalue)**(groupValue : any[],  x : number): number :
[静态]根据曲线数据获取其中某个点的值<br>
曲线数据的格式：[[0,0,startY,maxLength,maxHeight],[type,startX,startY,endX,endY,ctrlX,ctrlY],[type,startX,startY,endX,endY,ctrlX,ctrlY],...]<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;maxLength=最大长度（仅供参考） maxHeight=最大高度 起点x始终位于0，终点x始终位于100  type=0-线性线段 1-二次贝塞尔曲线片段(拥有ctrlX,ctrlY)
##### 参数
	groupValue 曲线数据
	x 0~1 0表示曲线头，1表示曲线尾 假设该曲线是只有一段线性曲线，值范围是0-5000，则0.5的值是2500

##### 返回
value 值

## getTransData
###### **[getTransData](#gettransdata)**(transDataStr : string): TransData :
[静态]根据字符串格式的数据,获取过渡组件Object类型数据
##### 参数
	transData 字符串格式数据



## getValueByTransData
###### **[getValueByTransData](#getvaluebytransdata)**(transData : TransData,  x : number): number :
[静态]根据传入的参数x,获取过渡对应的值
##### 参数
	transData 过渡数据
	x 范围 0-1





