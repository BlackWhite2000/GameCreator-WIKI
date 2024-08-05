# UIAnimation 动画组件
>封装了动画的界面组件<br>相关事件<br>&nbsp;EventObject.LOADED 资源加载完成时候事件<br>&nbsp;GCAnimation.RENDER  动画播放时派发的事件<br>&nbsp;GCAnimation.PLAY_START 动画播放开始事件<br>&nbsp;GCAnimation.PLAY_STOP 动画停止时事件<br>&nbsp;GCAnimation.PLAY_COMPLETED 动画播放完成时事件<br>&nbsp;GCAnimation.SIGNAL 信号事件<br>使用方法：<br>var a = new UIAnimation();<br>a.animationID =5;<br>a.playType = 1;<br>stage.addChild(a);<br>// 事件监听示例<br>a.on(EventObject.LOADED,this,this.onLoaded);<br>a.on(GCAnimation.PLAY_COMPLETED,this,this.onLoaded);<br>关于鼠标事件点击区域：当注册了鼠标事件后，系统会根据当前帧的实际子显示对象自动判断鼠标可响应区域<br><br>
>维护人员：**黑暗之神KDS、feng**  
>创建时间：2019-04-03

**继承**  →UIBase<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **animationID** : number;<br>使用的动画编号  |
| **playType** : number;<br>播放类型 0-不播放 1-播放一次 2-循环播放 默认值=0  |
| **scaleNumberX** : number;<br>水平缩放 1表示100% 默认值=1  |
| **scaleNumberY** : number;<br>垂直缩放 1表示100% 默认值=1  |
| **silentMode** : boolean;<br>禁音模式：播放该动画时忽略音效的播放 默认值=false  |
| **[showHitEffect](#showhiteffect)** : boolean;<br>是否显示命中效果：编辑器中允许对动画层勾选“仅命中时显示”，开启此项将显示包含仅在命中时出现的动画层  |
| **playFps** : number;<br>频率：默认值=Config.ANIMATION_FPS  |
| **aniFrame** : number;<br>起始帧：播放时从该帧开始播放 默认值=1  |
| **animation** : GCAnimation;<br>[只读]获取动画元素  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[constructor](#constructor)**(showCircleWhenInEditor? : boolean)<br>构造函数

## 详情

### showHitEffect
###### showHitEffect : boolean;
是否显示命中效果：编辑器中允许对动画层勾选“仅命中时显示”，开启此项将显示包含仅在命中时出现的动画层<br>
在播放动画前设置此项 默认值=false


## constructor
###### **[constructor](#constructor)**(showCircleWhenInEditor? : boolean) :
构造函数
##### 参数
	showCircleWhenInEditor [可选] 默认值=true 是否显示圆点当在编辑器内显示时





