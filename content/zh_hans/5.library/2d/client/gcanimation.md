---
title: GCAnimation 动画 显示对象
---
>-- 支持绑定目标，可以区分动画层添加到目标层的上方或下方<br>-- 目标效果支持叠加<br>使用方法：<br>var a = new GCAnimation();<br>a.id = 5;<br>stage.addChild(a);<br>绑定目标,由于可以区分添加到目标层的上方或下方，需要有lowLayer和highLayer<br>var a = new GCAnimation();<br>a.id = 5;<br>a.addToGameSprite(target,lowLayer,highLayer);<br>相关事件<br>&nbsp;EventObject.LOADED 资源加载完成时候事件<br>&nbsp;GCAnimation.RENDER  动画播放时派发的事件<br>&nbsp;GCAnimation.PLAY_START 动画播放开始事件<br>&nbsp;GCAnimation.PLAY_STOP 动画停止时事件<br>&nbsp;GCAnimation.PLAY_COMPLETED 动画播放完成时事件<br>&nbsp;GCAnimation.SIGNAL 信号事件<br>关于鼠标事件点击区域：当注册了鼠标事件后，系统会根据当前帧的实际子显示对象自动判断鼠标可响应区域<br><br>
>维护人员：**黑暗之神KDS、feng**  
>创建时间：2019-02-22

**继承**  →GameSprite<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[RENDER](#render)** : string;<br>[静态]事件：执行 onRender 时派发的事件                                                                                            |
| **[PLAY_START](#play_start)** : string;<br>[静态]事件：动画播放开始事件                                                                                              |
| **[PLAY_STOP](#play_stop)** : string;<br>[静态]事件：动画停止时事件                                                                                                  |
| **[PLAY_COMPLETED](#play_completed)** : string;<br>[静态]事件：动画播放完成事件，非循环播放的动画播放完毕后派发                                                      |
| **[SIGNAL](#signal)** : string;<br>[静态]事件：信号事件                                                                                                              |
| **id** : number;<br>动画ID                                                                                                                                           |
| **[syncLoadWhenAssetExist](#syncloadwhenassetexist)** : boolean;<br>是否同步加载，当资源存在时，当前帧则立刻显示                                                     |
| **[prerender](#prerender)** : boolean;<br>预渲染：开启此项保证在派发EventObject.LOADED前预先渲染一次以便保证此后能够立即呈现画面，不会因为资源较大而首次渲染卡顿一下 |
| **fps** : number;<br>频率，默认值=Config.ANIMATION_FPS                                                                                                               |
| **silentMode** : boolean;<br>禁音模式：播放该动画时忽略音效的播放 默认值=false                                                                                       |
| **sceneObject** : ClientSceneObject;<br>绑定场景对象，会根据该对象与镜头中心点的距离影响声音更大                                                                     |
| **offsetX** : number;<br>水平偏移量，如果存在的话则水平偏移offsetX像素                                                                                               |
| **offsetY** : number;<br>垂直偏移量，如果存在的话则水平偏移offsetY像素                                                                                               |
| **preAnimationLowLayers** : GameSprite[];<br>预设层：比目标层更低的层次                                                                                              |
| **preAnimationHighLayers** : GameSprite[];<br>预设层：比目标层更高的层次                                                                                             |
| **[showHitEffect](#showhiteffect)** : boolean;<br>是否显示命中效果：编辑器中允许对动画层勾选“仅命中时显示”，开启此项将显示包含仅在命中时出现的动画层                 |
| **currentFrame** : number;<br>当前帧：获取和设置当前帧                                                                                                               |
| **loop** : boolean;<br>当前播放的动画是否循环 默认值=false                                                                                                           |
| **isPlaying** : boolean;<br>[只读]是否正在播放中                                                                                                                     |
| **isLoading** : boolean;<br>[只读]获取是否处于加载中                                                                                                                 |
| **[target](#target)** : GameSprite;<br>目标对象：动画的目标效果的作用目标。                                                                                          |
| **totalFrame** : number;<br>[只读]动画总帧数                                                                                                                         |
| **isParticle** : boolean;<br>[只读]是否是粒子动画                                                                                                                    |
| **refObjs** : <br>[只读]辅助体                                                                                                                                       |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[addToGameSprite](#addtogamesprite)**(target : GameSprite,  lowLayer : Sprite,  highLayer : Sprite): void<br>添加到显示对象，同时可以将一部分动画层在目标下方显示，一部分动画层在目标上方显示，并支持目标效果 |
| **[removeFromGameSprite](#removefromgamesprite)**(): void<br>移除动画绑定，addToGameSprite后可使用该函数进行清理                                                                                                |
| **[gotoAndPlay](#gotoandplay)**(frame? : number): void<br>跳转某帧进行播放，越界会自动取模（如帧长度10，播放13则是播放3）                                                                                       |
| **[play](#play)**(): void<br>在当前帧数开始播放                                                                                                                                                                 |
| **[stop](#stop)**(frame? : number): void<br>停止动画                                                                                                                                                            |

## 详情

### RENDER
###### RENDER : string;
[静态]事件：执行 onRender 时派发的事件<br>
>var ani = new GCAnimation();<br>
>ani.id = 1;<br>
>ani.on(GCAnimation.RENDER,this,()=>{<br>
>&nbsp;&nbsp;&nbsp;&nbsp;// to do<br>
>});<br>
>


### PLAY_START
###### PLAY_START : string;
[静态]事件：动画播放开始事件<br>
>var ani = new GCAnimation();<br>
>ani.id = 1;<br>
>ani.on(GCAnimation.PLAY_START,this,()=>{<br>
>&nbsp;&nbsp;&nbsp;&nbsp;// to do<br>
>});<br>
>


### PLAY_STOP
###### PLAY_STOP : string;
[静态]事件：动画停止时事件<br>
>var ani = new GCAnimation();<br>
>ani.id = 1;<br>
>ani.on(GCAnimation.PLAY_STOP,this,()=>{<br>
>&nbsp;&nbsp;&nbsp;&nbsp;// to do<br>
>});<br>
>


### PLAY_COMPLETED
###### PLAY_COMPLETED : string;
[静态]事件：动画播放完成事件，非循环播放的动画播放完毕后派发<br>
>var ani = new GCAnimation();<br>
>ani.id = 1;<br>
>ani.on(GCAnimation.PLAY_COMPLETED,this,()=>{<br>
>&nbsp;&nbsp;&nbsp;&nbsp;// to do<br>
>});<br>
>


### SIGNAL
###### SIGNAL : string;
[静态]事件：信号事件<br>
动画编辑器中可以自定义信号，设定经过哪个关键帧后抛出<br>
>var ani = new GCAnimation();<br>
>ani.id = 1;<br>
>ani.on(GCAnimation.SIGNAL,this,(signalID:number)=>{<br>
>&nbsp;&nbsp;&nbsp;&nbsp;// to do<br>
>});<br>
>


### syncLoadWhenAssetExist
###### syncLoadWhenAssetExist : boolean;
是否同步加载，当资源存在时，当前帧则立刻显示<br>
为了确保能够监听到EventObject.LOADED事件，建议在设置id之前监听该事件
### prerender
###### prerender : boolean;
预渲染：开启此项保证在派发EventObject.LOADED前预先渲染一次以便保证此后能够立即呈现画面，不会因为资源较大而首次渲染卡顿一下<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预渲染会消耗一定的性能，可以选择在动画资源较大较多的情况下使用此项，开启此项会有额外的性能和内存开销
### showHitEffect
###### showHitEffect : boolean;
是否显示命中效果：编辑器中允许对动画层勾选“仅命中时显示”，开启此项将显示包含仅在命中时出现的动画层<br>
在播放动画前设置此项
### target
###### target : GameSprite;
目标对象：动画的目标效果的作用目标。<br>
如果需要一部分动画层在目标下方，一部分动画层在目标上方，则可以使用 addToGameSprite 方法


## addToGameSprite
###### **[addToGameSprite](#addtogamesprite)**(target : GameSprite,  lowLayer : Sprite,  highLayer : Sprite): void :
添加到显示对象，同时可以将一部分动画层在目标下方显示，一部分动画层在目标上方显示，并支持目标效果
##### 参数
	target 目标对象
	lowLayer 动画底层（动画编辑器中低于目标层的显示层次会添加到这里）
	highLayer 动画高层（动画编辑器中高于目标层的显示层次会添加到这里）



## removeFromGameSprite
###### **[removeFromGameSprite](#removefromgamesprite)**(): void :
移除动画绑定，addToGameSprite后可使用该函数进行清理



## gotoAndPlay
###### **[gotoAndPlay](#gotoandplay)**(frame? : number): void :
跳转某帧进行播放，越界会自动取模（如帧长度10，播放13则是播放3）<br>
@frame [可选] 默认值=1 跳转到指定的帧数 单位：帧 默认从头开始



## play
###### **[play](#play)**(): void :
在当前帧数开始播放



## stop
###### **[stop](#stop)**(frame? : number): void :
停止动画
##### 参数
	frame [可选] 默认值=1 帧动画的情况指定停留的帧数





