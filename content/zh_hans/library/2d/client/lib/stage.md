# Stage 舞台类
>只有一个舞台，可通过stage来访问<br>支持事件：<br>EventObject.KEY_DOWN 按键按下<br>EventObject.KEY_UP 按键弹起<br>EventObject.RESIZE 当窗口尺寸改变时<br>EventObject.FULL_SCREEN_CHANGE 当全屏改变时<br>EventObject.FOCUS_CHANGE 当焦点改变时<br>EventObject.FOCUS 当产生焦点时<br>EventObject.BLUR 当失去焦点时<br>EventObject.RENDER 每帧渲染时<br>// 事件监听示例<br>stage.on(EventObject.CLICK,this,this.onClick);<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-01-01

**继承**  →[Sprite](/zh_hans/library/2d/client/lib/sprite)→TreeNode<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **width** : number;<br>当前宽度  |
| **height** : number;<br>当前高度  |
| **[scaleMode](#scalemode)** : string;<br>缩放模式。默认值为 "noscale"  |
| **[alignH](#alignh)** : string;<br>水平对齐方式。默认值为"left"  |
| **[alignV](#alignv)** : string;<br>垂直对齐方式。默认值为"top"  |
| **bgColor** : string;<br>舞台的背景颜色，默认为黑色  |
| **mouseX** : number;<br>[只读]鼠标在 Stage 上的 X 轴坐标  |
| **mouseY** : number;<br>[只读]鼠标在 Stage 上的 Y 轴坐标。  |
| **clientScaleX** : number;<br>[只读]当前视窗由缩放模式导致的 X 轴缩放系数。  |
| **clientScaleY** : number;<br>[只读]当前视窗由缩放模式导致的 Y 轴缩放系数。  |
| **[screenMode](#screenmode)** : string;<br>场景布局类型。  |
| **visible** : boolean;<br>是否显示  |
| **[fullScreenEnabled](#fullscreenenabled)** : boolean;<br>是否开启全屏，用户点击后进入全屏  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[setScreenSize](#setscreensize)**(screenWidth : number,  screenHeight : number): void<br>设置屏幕大小，场景会根据屏幕大小进行适配。可以动态调用此方法，来更改游戏显示的大小
| **[exitFullscreen](#exitfullscreen)**(): void<br>退出全屏模式

## 详情

### scaleMode
###### scaleMode : string;
缩放模式。默认值为 "noscale"<br>
取值范围：<br>
"noscale" ：不缩放<br>
"exactfit" ：全屏不等比缩放<br>
"showall" ：最小比例缩放<br>
"noborder" ：最大比例缩放<br>
"full" ：不缩放，stage的宽高等于屏幕宽高<br>
"fixedwidth" ：宽度不变，高度根据屏幕比缩放<br>
"fixedheight" ：高度不变，宽度根据屏幕比缩放<br>
"fixedauto" ：根据宽高比，自动选择使用fixedwidth或fixedheight
### alignH
###### alignH : string;
水平对齐方式。默认值为"left"<br>
取值范围：<br>
"left" ：居左对齐<br>
"center" ：居中对齐<br>
"right" ：居右对齐
### alignV
###### alignV : string;
垂直对齐方式。默认值为"top"<br>
取值范围：<br>
"top" ：居顶部对齐<br>
"middle" ：居中对齐<br>
"bottom" ：居底部对齐
### screenMode
###### screenMode : string;
场景布局类型。<br>
取值范围：<br>
"none" ：不更改屏幕<br>
"horizontal" ：自动横屏<br>
"vertical" ：自动竖屏
### fullScreenEnabled
###### fullScreenEnabled : boolean;
是否开启全屏，用户点击后进入全屏<br>
兼容性提示：部分浏览器不允许点击进入全屏，比如Iphone等。


## setScreenSize
###### **[setScreenSize](#setscreensize)**(screenWidth : number,  screenHeight : number): void :
设置屏幕大小，场景会根据屏幕大小进行适配。可以动态调用此方法，来更改游戏显示的大小<br>
@param	screenWidth		屏幕宽度。<br>
@param	screenHeight	屏幕高度。



## exitFullscreen
###### **[exitFullscreen](#exitfullscreen)**(): void :
退出全屏模式





