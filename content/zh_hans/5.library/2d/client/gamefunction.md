# GameFunction 游戏内置功能函数
>即将会被上层自定义事件取缔而不作为GC2D内核中内置的功能<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2019-02-04

**继承**  无<br>
**子类**  无<br>


## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[shake](#shake)**(strength : number,  t : number): void<br>[静态]场景震动:当前帧直接震动，总计震动了t帧
| **[tonal](#tonal)**(r : number,  g : number,  b : number,  gray : number,  t : number,  mr : number,  mg : number,  mb : number,  layer? : number,  tCur? : number): void<br>[静态]更改场景色调:当前帧直接更改色调，总计更改了t帧
| **[cameraMove](#cameramove)**(type : number,  x : number,  y : number,  soIndex : number,  tween : boolean,  t : number,  tCur? : number,  window_width? : number,  window_height? : number): void<br>[静态]场景镜头移动:当前帧直接开始移动，总计移动了t帧
| **[fogSet](#fogset)**(url : string,  sx : number,  sy : number,  dx : number,  dy : number,  alpha : number,  blendMode : number): void<br>[静态]场景雾图形变更

## 详情



## shake
###### **[shake](#shake)**(strength : number,  t : number): void :
[静态]场景震动:当前帧直接震动，总计震动了t帧
##### 参数
	strength 幅度
	t 帧数



## tonal
###### **[tonal](#tonal)**(r : number,  g : number,  b : number,  gray : number,  t : number,  mr : number,  mg : number,  mb : number,  layer? : number,  tCur? : number): void :
[静态]更改场景色调:当前帧直接更改色调，总计更改了t帧
##### 参数
	r 红色
	g 绿色
	b 蓝色
	gray 灰度
	t 时间（帧）
	mr 红色曝光
	mg 绿色曝光
	mb 蓝色曝光
	layer 层次（后期追加的高级特性）
	tCur 当前的T



## cameraMove
###### **[cameraMove](#cameramove)**(type : number,  x : number,  y : number,  soIndex : number,  tween : boolean,  t : number,  tCur? : number,  window_width? : number,  window_height? : number): void :
[静态]场景镜头移动:当前帧直接开始移动，总计移动了t帧
##### 参数
	type 0-直接坐标 1-锁定对象
	x 指定的坐标x
	y 指定的坐标y
	soIndex 锁定的对象
	tween 缓动
	t 帧数
	tCur 当前的帧数（首次为null）



## fogSet
###### **[fogSet](#fogset)**(url : string,  sx : number,  sy : number,  dx : number,  dy : number,  alpha : number,  blendMode : number): void :
[静态]场景雾图形变更
##### 参数
	url
	sx
	sy
	dx
	dy
	alpha
	blendMode





