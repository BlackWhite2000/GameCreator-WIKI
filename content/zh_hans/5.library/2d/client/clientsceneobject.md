---
title:  ClientSceneObject 场景对象-客户端基类
---
>实际在游戏画面中出现的场景对象类，所有客户端场景对象实现类都继承于该类<br>【内部的显示层次】<br>-- 动画层：底层 animationLowLayer 使用playAnimation播放的动画比目标效果层更低的层次会添加到这里<br>-- 自定义底层（预设中比行走图低的层，包括行走图） customLayer<br>-- 动画层：高层 animationHighLayer 使用playAnimation播放的动画比目标效果层更高的层次会添加到这里<br>-- 自定义高层（预设中比行走图更高的层次）customHighLayer<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-07-24

**继承**  →[SceneObjectEntity](/zh_hans/library/2d/common/sceneobjectentity)→[SceneObject](/zh_hans/library/2d/common/sceneobject)<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                                  |
| --------------------------------------------------------------------------------------------------------------------- |
| **player** : ClientPlayer;<br>所属的玩家                                                                              |
| **root** : GameSprite;<br>显示对象的根容器，在场景上的场景对象实际上是将该容器添加到场景的显示容器（displayObject）上 |
| **shadow** : GameSprite;<br>影子，默认是添加在场景的影子层上，以便比所有对象低                                        |
| **animationLowLayer** : GameSprite;<br>底层动画层 使用playAnimation播放的动画比目标效果层更低的层次会添加到这里       |
| **avatar** : Avatar;<br>行走图                                                                                        |
| **avatarContainer** : GameSprite;<br>行走图容器，装载行走图的父节点                                                   |
| **customLayer** : GameSprite;<br>自定义层 预设中比行走图低的层，包括行走图（avatar）                                  |
| **animationHighLayer** : GameSprite;<br>高层动画层 使用playAnimation播放的动画比目标效果层更高的层次会添加到这里      |
| **customHighLayer** : GameSprite;<br>模型对象预设高层（预设中比行走图更高的层次）                                     |
| **systemUILayer** : GameSprite;<br>最高层系统UI层                                                                     |
| **scene** : ClientScene;<br>所在的场景，在添加到场景时会设置此值，移除时并不会被置空                                  |
| **lockDrag** : boolean;<br>【编辑器预览用】拖拽对象锁定                                                               |
| **lockDelete** : boolean;<br>【编辑器预览用】删除对象锁定                                                             |
| **lockKeyMove** : boolean;<br>【编辑器预览用】按键移动对象锁定                                                        |
| **[actionIndex](#actionindex)** : number;<br>根据动作索引播放动作                                                     |
| **animations** : Animation[];<br>[只读]动画集合                                                                       |
## **Protected 属性**
| <div style="width:1000px;text-align:left">属性</div> |
| ---------------------------------------------------- |
| **_x** : number;<br>水平坐标                         |
| **_y** : number;<br>垂直坐标                         |
## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[constructor](#constructor)**(soData? : [SceneObject](/zh_hans/library/2d/common/sceneobject),  scene? : [ClientScene](/zh_hans/library/2d/client/clientscene))<br>构造函数                                                                                                      |
| **[dispose](#dispose)**(): void<br>释放                                                                                                                                                                                                                                            |
| **[drawShadow](#drawshadow)**(scalePer? : number): void<br>绘制影子，比如当需要缩放影子时调用此函数                                                                                                                                                                                |
| **[stopRender](#stoprender)**(stopCurrentFrame? : boolean): void<br>停止渲染，Game.pause 时会自动调用场景中对象的此函数                                                                                                                                                            |
| **[recoveryRender](#recoveryrender)**(continueCurrentFrame? : boolean): void<br>恢复渲染，Game.pause 时会自动调用场景中对象的此函数                                                                                                                                                |
| **[refreshCoordinate](#refreshcoordinate)**(): void<br>进入新的坐标后应调用此函数                                                                                                                                                                                                  |
| **[update](#update)**(nowTime : number): void<br>刷新：场景会调用所有场景上面的场景对象的该函数，执行逻辑应由子类实现，该类下此函数无任何代码实现                                                                                                                                  |
| **[playAnimation](#playanimation)**(aniID : number,  loop : boolean,  isHit : boolean,  fps? : number,  superposition? : boolean,  ignoreReplay? : boolean): [GCAnimation](/zh_hans/library/2d/client/gcanimation)<br>播放动画，目标对象是行走图                                   |
| **[stopAnimation](#stopanimation)**(aniID : any): void<br>停止动画                                                                                                                                                                                                                 |
| **[stopAllAnimation](#stopallanimation)**(): void<br>停止所有动画                                                                                                                                                                                                                  |
| **[hasListener](#haslistener)**(type : string): boolean<br>检查 EventDispatcher 对象是否为特定事件类型注册了任何侦听器。                                                                                                                                                           |
| **[event](#event)**(type : string,  data? : any): boolean<br>派发事件。                                                                                                                                                                                                            |
| **[on](#on)**(type : string,  caller : any,  listener : Function,  args? : Array<any>): [ClientSceneObject](/zh_hans/library/2d/client/clientsceneobject)<br>使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知。                                   |
| **[once](#once)**(type : string,  caller : any,  listener : Function,  args? : Array<any>): [ClientSceneObject](/zh_hans/library/2d/client/clientsceneobject)<br>使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知，此侦听事件响应一次后自动移除。 |
| **[off](#off)**(type : string,  caller : any,  listener : Function,  onceOnly? : boolean): [ClientSceneObject](/zh_hans/library/2d/client/clientsceneobject)<br>从 EventDispatcher 对象中删除侦听器。                                                                              |
| **[offAll](#offall)**(type? : string): [ClientSceneObject](/zh_hans/library/2d/client/clientsceneobject)<br>从 EventDispatcher 对象中删除指定事件类型的所有侦听器。                                                                                                                |
## Protected 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                              |
| ------------------------------------------------------------------------------------------------------------------ |
| **[updateShadow](#updateshadow)**(): void<br>刷新影子，更新影子坐标，refreshCoordinate会调用此函数以便更新影子坐标 |
## 详情

### actionIndex
###### actionIndex : number;
根据动作索引播放动作<br>
@return [number]


## constructor
###### **[constructor](#constructor)**(soData? : [SceneObject](/zh_hans/library/2d/common/sceneobject),  scene? : [ClientScene](/zh_hans/library/2d/client/clientscene)) :
构造函数
##### 参数
	soData [可选] 默认值=null 场景对象数据
	scene [可选] 默认值=null 场景



## dispose
###### **[dispose](#dispose)**(): void :
释放



## drawShadow
###### **[drawShadow](#drawshadow)**(scalePer? : number): void :
绘制影子，比如当需要缩放影子时调用此函数
##### 参数
	scalePer [可选] 默认值=1.0 缩放率



## stopRender
###### **[stopRender](#stoprender)**(stopCurrentFrame? : boolean): void :
停止渲染，Game.pause 时会自动调用场景中对象的此函数<br>
停止行走图的播放以及所有动画的播放
##### 参数
	stopCurrentFrame [可选] 默认值=false 是否停止在当前帧 true=当前帧 false=初始设定帧



## recoveryRender
###### **[recoveryRender](#recoveryrender)**(continueCurrentFrame? : boolean): void :
恢复渲染，Game.pause 时会自动调用场景中对象的此函数<br>
恢复行走图的播放以及所有动画的播放
##### 参数
	continueCurrentFrame [可选] 默认值=false 行走图是否从当前帧开始恢复播放 true=当前帧 false=初始设定帧



## refreshCoordinate
###### **[refreshCoordinate](#refreshcoordinate)**(): void :
进入新的坐标后应调用此函数<br>
-- 场景中添加了场景对象后调用了该函数<br>
-- 该函数调用了updateShadow，子类重写可实现更多功能



## update
###### **[update](#update)**(nowTime : number): void :
刷新：场景会调用所有场景上面的场景对象的该函数，执行逻辑应由子类实现，该类下此函数无任何代码实现
##### 参数
	nowTime 游戏时间戳（Game.pause会暂停游戏时间戳）



## playAnimation
###### **[playAnimation](#playanimation)**(aniID : number,  loop : boolean,  isHit : boolean,  fps? : number,  superposition? : boolean,  ignoreReplay? : boolean): [GCAnimation](/zh_hans/library/2d/client/gcanimation) :
播放动画，目标对象是行走图<br>

##### 参数
	aniID 动画编号，指定的是动画编辑器预设的编号
	loop 是否循环播放
	isHit 是否显示被击中的效果，动画编辑器支持动画层仅命中时显示，如果设置为true即表示该动画所有层均显示
	fps [可选] 默认值=null 帧率，如果无则使用Config.ANIMATION_FPS
	superposition [可选] 默认值=false 叠加，默认不叠加，即同一个ID播放会重新播放该动画，停止该动画无法使用ID来停止而必须传入Animation对象
	ignoreReplay  [可选] 默认值=false 忽略而非重头播放。默认重头播放，即非叠加时同一个ID播放会重新播放该动画

##### 返回
[GCAnimation]

## stopAnimation
###### **[stopAnimation](#stopanimation)**(aniID : any): void :
停止动画
##### 参数
	aniID 动画编号/对象 number | [GCAnimation]



## stopAllAnimation
###### **[stopAllAnimation](#stopallanimation)**(): void :
停止所有动画



## hasListener
###### **[hasListener](#haslistener)**(type : string): boolean :
检查 EventDispatcher 对象是否为特定事件类型注册了任何侦听器。<br>
@param	type 事件的类型。

##### 返回
如果指定类型的侦听器已注册，则值为 true；否则，值为 false。

## event
###### **[event](#event)**(type : string,  data? : any): boolean :
派发事件。
##### 参数
	type	事件类型。
	data	（可选）回调数据。<b>注意：</b>如果是需要传递多个参数 p1,p2,p3,...可以使用数组结构如：[p1,p2,p3,...] ；如果需要回调单个参数 p 是一个数组，则需要使用结构如：[p]，其他的单个参数 p ，可以直接传入参数 p。

##### 返回
此事件类型是否有侦听者，如果有侦听者则值为 true，否则值为 false。

## on
###### **[on](#on)**(type : string,  caller : any,  listener : Function,  args? : Array<any>): [ClientSceneObject](/zh_hans/library/2d/client/clientsceneobject) :
使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知。
##### 参数
	type		事件的类型。
	caller	事件侦听函数的执行域。a
	listener	事件侦听函数。
	args		（可选）事件侦听函数的回调参数。

##### 返回
此 EventDispatcher 对象。a

## once
###### **[once](#once)**(type : string,  caller : any,  listener : Function,  args? : Array<any>): [ClientSceneObject](/zh_hans/library/2d/client/clientsceneobject) :
使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知，此侦听事件响应一次后自动移除。
##### 参数
	type		事件的类型。
	caller	事件侦听函数的执行域。
	listener	事件侦听函数。
	args		（可选）事件侦听函数的回调参数。

##### 返回
此 EventDispatcher 对象。

## off
###### **[off](#off)**(type : string,  caller : any,  listener : Function,  onceOnly? : boolean): [ClientSceneObject](/zh_hans/library/2d/client/clientsceneobject) :
从 EventDispatcher 对象中删除侦听器。
##### 参数
	type		事件的类型。
	caller	事件侦听函数的执行域。
	listener	事件侦听函数。
	onceOnly	（可选）如果值为 true ,则只移除通过 once 方法添加的侦听器。

##### 返回
此 EventDispatcher 对象。

## offAll
###### **[offAll](#offall)**(type? : string): [ClientSceneObject](/zh_hans/library/2d/client/clientsceneobject) :
从 EventDispatcher 对象中删除指定事件类型的所有侦听器。
##### 参数
	type	（可选）事件类型，如果值为 null，则移除本对象所有类型的侦听器。

##### 返回
此 EventDispatcher 对象。


## updateShadow
###### **[updateShadow](#updateshadow)**(): void :
刷新影子，更新影子坐标，refreshCoordinate会调用此函数以便更新影子坐标




