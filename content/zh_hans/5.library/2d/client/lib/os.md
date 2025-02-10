---
title:  os 系统
---
>使用该类让渲染引擎初始化以及一些常用的函数（如发布后的窗口操作）<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-01-16

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                   |
| -------------------------------------------------------------------------------------- |
| **defaultFamily** : string;<br>[静态]默认字体                                          |
| **[canvas](#canvas)** : HTMLCanvasElement;<br>[静态][只读]获取canvas元素对象           |
| **MAX_TEXTURE_SIZE** : number;<br>[静态][只读]支持的贴图最大尺寸                       |
| **[platform](#platform)** : number;<br>[静态][只读]获取所在平台                        |
| **fullscreen** : boolean;<br>[静态]【仅PC端和Android端】设置全屏或取消全屏，发布后支持 |
| **horizontalScreen** : boolean;<br>[静态]设备横屏显示                                  |
| **insomnia** : boolean;<br>[静态]设备允许常亮（目前仅支持安卓设备）                    |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                        |
| -------------------------------------------------------------------------------------------------------------------------------------------- |
| **[init](#init)**(stageWidth? : number,  stageHeight? : number,  isWebGL? : boolean,  is3D? : boolean): void<br>[静态]系统初始化             |
| **[add_ENTERFRAME](#add_enterframe)**(onHappen : Function,  thisPtr : any,  args? : any[]): void<br>[静态]添加帧循环，让函数逐帧执行（帧刷） |
| **[remove_ENTERFRAME](#remove_enterframe)**(onHappen : Function,  thisPtr : any): void<br>[静态]移除帧循环                                   |
| **[setCursor](#setcursor)**(style : string): void<br>[静态]当前鼠标样式 如 os.setCursor("wait");                                             |
| **[restoreCursor](#restorecursor)**(): void<br>[静态]恢复更改前的记录光标                                                                    |
| **[detectOS](#detectos)**(): string<br>[静态]获取操作系统                                                                                    |
| **[resizeTo](#resizeto)**(width : number,  height : number): void<br>[静态]【仅PC端】设置窗口尺寸（单位：像素），发布后支持                  |
| **[moveTo](#moveto)**(x : number,  y : number): void<br>[静态]【仅PC端】设置窗口位置（单位：像素），发布后支持                               |
| **[setResizable](#setresizable)**(resizable : boolean): void<br>[静态]【仅PC端】设置是否允许更改窗口尺寸，发布后支持                         |
| **[setAlwaysOnTop](#setalwaysontop)**(alwaysOnTop : boolean): void<br>[静态]【仅PC端】设置是否允许窗口显示在最前方，发布后支持               |
| **[maximize](#maximize)**(): void<br>[静态]【仅PC端】最大化窗口，发布后支持                                                                  |
| **[minimize](#minimize)**(): void<br>[静态]【仅PC端和Android端】最小化窗口，发布后支持                                                       |
| **[restore](#restore)**(): void<br>[静态]【仅PC端】还原窗口（用于最大化或最小化后调用可还原），发布后支持                                    |
| **[closeWindow](#closewindow)**(): void<br>[静态]【仅PC端和Android端】关闭当前窗口，在编辑器中也可以关闭                                     |
| **[inGC](#ingc)**(): boolean<br>[静态]是否在GC环境中                                                                                         |
| **[showFPS](#showfps)**(): void<br>[静态]显示FPS，必须在引擎初始化之后才生效                                                                 |
| **[hideFPS](#hidefps)**(): void<br>[静态]隐藏FPS，必须在引擎初始化之后才生效                                                                 |
| **[shake](#shake)**(time : number                                                                                                            | number[]): voi<br>[静态]设备震动（目前仅支持安卓设备） |

## 详情

### canvas
###### canvas : HTMLCanvasElement;
[静态][只读]获取canvas元素对象<br>
必须在os初始化后才能够获得
### platform
###### platform : number;
[静态][只读]获取所在平台<br>
&nbsp;0-GameCreator Web GC-网站平台<br>
&nbsp;1-GameCreator App GC-APP<br>
&nbsp;2-PC 电脑端<br>
&nbsp;3-Web/Mobile phone Web 普通网页端（包括移动版）<br>
@return


## init
###### **[init](#init)**(stageWidth? : number,  stageHeight? : number,  isWebGL? : boolean,  is3D? : boolean): void :
[静态]系统初始化
##### 参数
	[可选]stageWidth 舞台宽 默认是页面大小 默认值=0
	[可选]stageHeight 舞台高 默认是页面大小 默认值=0,@isWebGL [可选]是否webgl模式，默认true
	@is3D [可选]是否3D模式 目前暂未支持



## add_ENTERFRAME
###### **[add_ENTERFRAME](#add_enterframe)**(onHappen : Function,  thisPtr : any,  args? : any[]): void :
[静态]添加帧循环，让函数逐帧执行（帧刷）<br>
>var i =0;<br>
>os.add_ENTERFRAME(() => {<br>
>&nbsp;&nbsp;trace(++i);<br>
>}, this);<br>
>


##### 参数
	onHappen onHappen(arg1,arg2,...)
	thisPtr 作用域
	args [可选]参数集合 默认值=null



## remove_ENTERFRAME
###### **[remove_ENTERFRAME](#remove_enterframe)**(onHappen : Function,  thisPtr : any): void :
[静态]移除帧循环<br>
比如添加帧刷后一定概率移除掉帧刷<br>
>function gameUpdate(){<br>
>&nbsp;&nbsp;&nbsp;if(Math.random()<0.2){<br>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;os.remove_ENTERFRAME(gameUpdate, this);<br>
>&nbsp;&nbsp;&nbsp;}<br>
>}<br>
>os.add_ENTERFRAME(gameUpdate, this);<br>
>


##### 参数
	onHappen 利用add_ENTERFRAME注册的回调方法
	thisPtr 作用域



## setCursor
###### **[setCursor](#setcursor)**(style : string): void :
[静态]当前鼠标样式 如 os.setCursor("wait");<br>
比如游戏中需要更换鼠标样式可以使用该方法更换，支持自定义的图片和.cur格式光标文件（cur格式支持偏移中心点）<br>
url 自定义图片 如 os.setCursor("url('icon.png'),pointer"); os.setCursor("url('icon.png'),default");<br>
default	默认光标（通常是一个箭头）<br>
auto	默认。浏览器设置的光标。<br>
crosshair	光标呈现为十字线。<br>
pointer	光标呈现为指示链接的指针（一只手）<br>
move	此光标指示某对象可被移动。<br>
e-resize	此光标指示矩形框的边缘可被向右（东）移动。<br>
ne-resize	此光标指示矩形框的边缘可被向上及向右移动（北/东）。<br>
nw-resize	此光标指示矩形框的边缘可被向上及向左移动（北/西）。<br>
n-resize	此光标指示矩形框的边缘可被向上（北）移动。<br>
se-resize	此光标指示矩形框的边缘可被向下及向右移动（南/东）。<br>
sw-resize	此光标指示矩形框的边缘可被向下及向左移动（南/西）。<br>
s-resize	此光标指示矩形框的边缘可被向下移动（南）。<br>
w-resize	此光标指示矩形框的边缘可被向左移动（西）。<br>
text	此光标指示文本。<br>
wait	此光标指示程序正忙（通常是一只表或沙漏）。<br>
help	此光标指示可用的帮助（通常是一个问号或一个气球）。



## restoreCursor
###### **[restoreCursor](#restorecursor)**(): void :
[静态]恢复更改前的记录光标



## detectOS
###### **[detectOS](#detectos)**(): string :
[静态]获取操作系统

##### 返回
Mac/Unix/Linux/Win2000/WinXP/Win2003/WinVista/Win7/Win10/Android/iPhone/other

## resizeTo
###### **[resizeTo](#resizeto)**(width : number,  height : number): void :
[静态]【仅PC端】设置窗口尺寸（单位：像素），发布后支持
##### 参数
	width 宽度
	height 高度



## moveTo
###### **[moveTo](#moveto)**(x : number,  y : number): void :
[静态]【仅PC端】设置窗口位置（单位：像素），发布后支持
##### 参数
	x 水平坐标
	y 垂直坐标



## setResizable
###### **[setResizable](#setresizable)**(resizable : boolean): void :
[静态]【仅PC端】设置是否允许更改窗口尺寸，发布后支持
##### 参数
	resizable 是否允许



## setAlwaysOnTop
###### **[setAlwaysOnTop](#setalwaysontop)**(alwaysOnTop : boolean): void :
[静态]【仅PC端】设置是否允许窗口显示在最前方，发布后支持
##### 参数
	alwaysOnTop 是否允许



## maximize
###### **[maximize](#maximize)**(): void :
[静态]【仅PC端】最大化窗口，发布后支持



## minimize
###### **[minimize](#minimize)**(): void :
[静态]【仅PC端和Android端】最小化窗口，发布后支持



## restore
###### **[restore](#restore)**(): void :
[静态]【仅PC端】还原窗口（用于最大化或最小化后调用可还原），发布后支持



## closeWindow
###### **[closeWindow](#closewindow)**(): void :
[静态]【仅PC端和Android端】关闭当前窗口，在编辑器中也可以关闭



## inGC
###### **[inGC](#ingc)**(): boolean :
[静态]是否在GC环境中



## showFPS
###### **[showFPS](#showfps)**(): void :
[静态]显示FPS，必须在引擎初始化之后才生效



## hideFPS
###### **[hideFPS](#hidefps)**(): void :
[静态]隐藏FPS，必须在引擎初始化之后才生效



## shake
###### **[shake](#shake)**(time : number | number[]): voi :
[静态]设备震动（目前仅支持安卓设备）
##### 参数
	time (number | number[]) number类型表示震动持续时间 number[]类型表示自定义交替的震动、暂停、震动





