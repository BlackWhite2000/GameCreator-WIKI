# Graphics 图像绘制
>系统根据绘制命令来渲染图像，一次命令会产生一次渲染绘制（drawcall）。<br>渲染次数对性能影响较大，一般整个游戏每帧全局渲染次数控制在1000以内会较为合适<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-01-01

**继承**  无<br>
**子类**  无<br>


## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[dispose](#dispose)**(): void<br>销毁该对象
| **[clear](#clear)**(): void<br>清空全部绘制命令。
| **[drawTexture](#drawtexture)**(tex : Texture,  x? : number,  y? : number,  width? : number,  height? : number,  m? : Matrix,  alpha? : number): void<br>绘制整张贴图
| **[fillTexture](#filltexture)**(tex : Texture,  x : number,  y : number,  width? : number,  height? : number,  type? : string,  offset? : [Point](/zh_hans/library/2d/common/point)): void<br>填充贴图，可裁剪只显示贴图的一部分
| **[fillText](#filltext)**(text : string,  x : number,  y : number,  font : string,  color : string,  textAlign : string): void<br>绘制文本
| **[drawLine](#drawline)**(fromX : number,  fromY : number,  toX : number,  toY : number,  lineColor : string,  lineWidth? : number): void<br>绘制线
| **[drawLines](#drawlines)**(x : number,  y : number,  points : number[],  lineColor : string,  lineWidth? : number): void<br>绘制一系列线段
| **[drawCurves](#drawcurves)**(x : number,  y : number,  points : number[],  lineColor : string,  lineWidth? : number): void<br>绘制一系列曲线
| **[drawRect](#drawrect)**(x : number,  y : number,  width : number,  height : number,  fillColor : any,  lineColor? : string,  lineWidth? : number): void<br>绘制矩形
| **[drawCircle](#drawcircle)**(x : number,  y : number,  radius : number,  fillColor : string,  lineColor? : string,  lineWidth? : number): void<br>绘制圆形
| **[drawPie](#drawpie)**(x : number,  y : number,  radius : number,  startAngle : number,  endAngle : number,  fillColor : string,  lineColor? : string,  lineWidth? : number): void<br>绘制扇形
| **[drawPoly](#drawpoly)**(x : number,  y : number,  points : number[],  fillColor : any,  lineColor? : string,  lineWidth? : number): void<br>绘制多边形

## 详情



## dispose
###### **[dispose](#dispose)**(): void :
销毁该对象



## clear
###### **[clear](#clear)**(): void :
清空全部绘制命令。



## drawTexture
###### **[drawTexture](#drawtexture)**(tex : Texture,  x? : number,  y? : number,  width? : number,  height? : number,  m? : Matrix,  alpha? : number): void :
绘制整张贴图
##### 参数
	tex 贴图
	x [可选] 默认值=0 X轴偏移量
	y [可选] 默认值=0 Y轴偏移量
	width [可选] 默认值=0 宽度 默认根据贴图宽度
	height [可选] 默认值=0 高度 默认根据贴图高度
	m [可选] 默认值=null 矩阵信息
	alpha [可选] 默认值=1 透明度



## fillTexture
###### **[fillTexture](#filltexture)**(tex : Texture,  x : number,  y : number,  width? : number,  height? : number,  type? : string,  offset? : [Point](/zh_hans/library/2d/common/point)): void :
填充贴图，可裁剪只显示贴图的一部分
##### 参数
	tex 贴图
	x X轴偏移量
	y Y轴偏移量
	width [可选] 默认值=0 宽度 默认根据贴图宽度
	height [可选] 默认值=0 高度 默认根据贴图高度
	type [可选] 默认值="repeat" 填充类型 repeat|repeat-x|repeat-y|no-repeat 表示平铺的循环方式
	offset [可选] 默认值=null 贴图取样的偏移量，如只绘制贴图中间的部分，则该值不是0,0点



## fillText
###### **[fillText](#filltext)**(text : string,  x : number,  y : number,  font : string,  color : string,  textAlign : string): void :
绘制文本
##### 参数
	text 文本内容
	x X轴偏移量
	y Y轴偏移量
	font 字号和字体 如"20px 宋体"
	color 文本颜色 如"#FFFF00"
	textAlign 对齐方式 "left"，"center"，"right"



## drawLine
###### **[drawLine](#drawline)**(fromX : number,  fromY : number,  toX : number,  toY : number,  lineColor : string,  lineWidth? : number): void :
绘制线
##### 参数
	fromX X轴开始位置
	fromY Y轴开始位置
	toX X轴结束位置
	toY Y轴结束位置
	lineColor 颜色
	lineWidth [可选] 默认值=1 线条宽度



## drawLines
###### **[drawLines](#drawlines)**(x : number,  y : number,  points : number[],  lineColor : string,  lineWidth? : number): void :
绘制一系列线段
##### 参数
	x 开始绘制的X轴位置
	y 开始绘制的Y轴位置
	points 线段的点集合 格式:[x1,y1,x2,y2,x3,y3...]
	lineColor 线段颜色
	lineWidth [可选] 默认值=1



## drawCurves
###### **[drawCurves](#drawcurves)**(x : number,  y : number,  points : number[],  lineColor : string,  lineWidth? : number): void :
绘制一系列曲线
##### 参数
	x 开始绘制的 X 轴位置
	y 开始绘制的 Y 轴位置
	points 线段的点集合，格式[startx,starty,ctrx,ctry,startx,starty...]
	lineColor 线段颜色，或者填充绘图的渐变对象
	lineWidth [可选] 默认值=1



## drawRect
###### **[drawRect](#drawrect)**(x : number,  y : number,  width : number,  height : number,  fillColor : any,  lineColor? : string,  lineWidth? : number): void :
绘制矩形
##### 参数
	x 开始绘制的 X 轴位置
	y 开始绘制的 Y 轴位置
	width 矩形宽度
	height 矩形高度
	fillColor 填充颜色
	lineColor [可选] 默认值=null 边框颜色
	lineWidth [可选] 默认值=1 边框宽度



## drawCircle
###### **[drawCircle](#drawcircle)**(x : number,  y : number,  radius : number,  fillColor : string,  lineColor? : string,  lineWidth? : number): void :
绘制圆形
##### 参数
	x 圆点X 轴位置
	y 圆点Y 轴位置
	radius 半径
	fillColor 填充颜色，或者填充绘图的渐变对象
	lineColor [可选] 默认值=null 边框颜色
	lineWidth [可选] 默认值=1 边框宽度



## drawPie
###### **[drawPie](#drawpie)**(x : number,  y : number,  radius : number,  startAngle : number,  endAngle : number,  fillColor : string,  lineColor? : string,  lineWidth? : number): void :
绘制扇形<br>
>var sp = new Sprite();<br>
>sp.graphics.drawPie(0,0,30,-90,90,"#FF0000");<br>
>stage.addChild(sp);<br>
>sp.x = 500;<br>
>sp.y = 500;<br>
>


##### 参数
	x 开始绘制的 X 轴位置
	y 开始绘制的 Y 轴位置
	radius 扇形半径
	startAngle 开始角度 -90度在12点方向，90度在6点钟方向，按照顺时针开始绘制
	endAngle 结束角度
	fillColor 填充颜色
	lineColor [可选] 默认值=null 边框颜色
	lineWidth [可选] 默认值=1 边框宽度



## drawPoly
###### **[drawPoly](#drawpoly)**(x : number,  y : number,  points : number[],  fillColor : any,  lineColor? : string,  lineWidth? : number): void :
绘制多边形<br>
>var sp = new Sprite();<br>
>sp.graphics.drawPoly(0,0,[100,100,200,200,100,300,50,250],"#FF0000");<br>
>stage.addChild(sp);<br>
>sp.x = 300;<br>
>sp.y = 300;<br>
>


##### 参数
	x 开始绘制的 X 轴位置
	y 开始绘制的 Y 轴位置
	points 多边形的点集合 格式[x1,y1,x2,y2...]
	fillColor 填充颜色
	lineColor [可选] 默认值=null 边框颜色
	lineWidth [可选] 默认值=1 边框宽度





