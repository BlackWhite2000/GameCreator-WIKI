---
title:  ClientScene 客户端游戏场景
---
>场景一般由地图图像和场景上的对象（[ClientSceneObject]）组成<br>-- 图层支持：图块图层和图片图层，可自定义，支持无限层<br>-- 场景对象支持：添加场景对象在场景上<br>-- 镜头控制 Camera<br>【新建场景】 ps:利用相机以及当前的场景还可以很方便的制作小地图<br>&nbsp;// 方法一：创建一个5号场景（不包含场景中预摆放的对象），一个实例仅允许设置一次id<br>&nbsp;var s = new ClientScene();<br>&nbsp;s.id = 5;<br>&nbsp;s.startRender();<br>&nbsp;stage.addChild(s.displayObject); // 游戏显示层参考 GameLayer.d.ts<br>&nbsp;// 方法二：通过ClientScene.createScene来创建场景，无需指定场景的绑定类，系统根据预设自动新建该场景的绑定类<br>&nbsp;ClientScene.createScene(sceneModelID, null, Callback.New(()=>{}, this), true);<br>【其他事件】<br>&nbsp;EventObject.LOADED 地图全部图层资源加载完毕时 如 scene.on(EventObject.LOADED,this,()=>{});<br>【层次】总层次可参考 [GameLayer]<br>以下是引擎默认的游戏显示层次参考：<br>-- 场景层 sceneLayer<br>&nbsp;&nbsp;&nbsp;&nbsp;- 编辑器预设的自定义底层（比对象层更低的图层）<br>&nbsp;&nbsp;&nbsp;&nbsp;- 影子层 shadowLayer<br>&nbsp;&nbsp;&nbsp;&nbsp;- 动画层-底层 animationLowLayer<br>&nbsp;&nbsp;&nbsp;&nbsp;- 对象层-底层 sceneObjectLowLayer 同时开启了[子对象根据Y值自动更换层次]<br>&nbsp;&nbsp;&nbsp;&nbsp;- 对象层-中层 sceneObjectLayer 同时开启了[子对象根据Y值自动更换层次]<br>&nbsp;&nbsp;&nbsp;&nbsp;- 编辑器预设的自定义高层 （比对象层更高的图层）<br>&nbsp;&nbsp;&nbsp;&nbsp;- 对象层-高层 sceneObjectHighLayer 同时开启了[子对象根据Y值自动更换层次]<br>&nbsp;&nbsp;&nbsp;&nbsp;- 动画层-高层 animationHighLayer<br>&nbsp;&nbsp;&nbsp;&nbsp;- 雾层 fogLayer<br>&nbsp;&nbsp;&nbsp;&nbsp;- 天气层 weaterLayer<br>-- 图片层 imageLayer<br>-- UI层 uiLayer<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-07-22

**继承**  →[Scene](/zh_hans/library/2d/common/scene)<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                                                                                                                                 |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[BASE_DATA_LOADED](#base_data_loaded)** : string;<br>[静态]事件：基础数据加载完毕（可用于快速切入场景，而后再加载动态相关资源）回调参数：onBaseDataLoaded(scene:ClientScene) 默认值="ClientScene_BASE_DATA_LOADED" |
| **[EVENT_IN_NEW_SCENE](#event_in_new_scene)** : string;<br>[静态]事件：进入新的场景 onInNewScene(sceneID:number,state:number) state:0-切换场景 1-新游戏 2-读取存档                                                   |
| **EMPTY** : ClientScene;<br>[静态]空的场景，游戏启动时则为空场景状态，可用于判定                                                                                                                                     |
| **isDisposed** : boolean;<br>是否已卸载                                                                                                                                                                              |
| **mapSupportPause** : boolean;<br>支持暂停（支持Game.pause效果，暂停后场景停止渲染）                                                                                                                                 |
| **sceneObjects** : ClientSceneObject[];<br>场景对象列表：场景上全部的场景对象 [场景对象.index] -> [场景对象]                                                                                                         |
| **settingLayers** : ClientSceneLayer[];<br>预先设定的图层显示对象集合(来自地图编辑器中预设)                                                                                                                          |
| **displayObject** : GameSprite;<br>场景的显示对象（根容器）                                                                                                                                                          |
| **shadowLayer** : ClientSceneLayer;<br>影子层                                                                                                                                                                        |
| **animationLowLayer** : ClientSceneLayer;<br>动画层：底层                                                                                                                                                            |
| **sceneObjectLowLayer** : ClientSceneLayer;<br>对象层：底层                                                                                                                                                          |
| **sceneObjectLayer** : ClientSceneLayer;<br>对象层：中间层                                                                                                                                                           |
| **sceneObjectHighLayer** : ClientSceneLayer;<br>场景对象：最高层                                                                                                                                                     |
| **animationHighLayer** : ClientSceneLayer;<br>动画层：高层                                                                                                                                                           |
| **fogLayer** : ClientSceneLayer;<br>雾层                                                                                                                                                                             |
| **weaterLayer** : ClientSceneLayer;<br>天气层                                                                                                                                                                        |
| **camera** : Camera;<br>场景的镜头                                                                                                                                                                                   |
| **localX** : number;<br>[只读]获取鼠标X所在的场景位置（单位：像素）                                                                                                                                                  |
| **localY** : number;<br>[只读]获取鼠标Y所在的场景位置（单位：像素）                                                                                                                                                  |
| **globalPos** : Point;<br>[只读]获取鼠标绝对位置（相对于舞台）（单位：像素）                                                                                                                                         |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[createScene](#createscene)**(sceneID : number,  onBaseDataLoaded? : Callback,  onLoaded? : Callback,  syncCallbackWhenAssetExist? : boolean): void<br>[静态]创建场景，会根据预设的实现类来创建对应的实例场景                                     |
| **[dispose](#dispose)**(): void<br>释放当前的场景                                                                                                                                                                                                   |
| **[addLayer](#addlayer)**(layer : ClientSceneLayer): void<br>添加图层                                                                                                                                                                               |
| **[addLayerAt](#addlayerat)**(layer : ClientSceneLayer,  index : number): void<br>添加图层到指定层                                                                                                                                                  |
| **[removeLayer](#removelayer)**(layer : ClientSceneLayer): void<br>移除图层                                                                                                                                                                         |
| **[removeLayerAt](#removelayerat)**(index : number): void<br>指定移除某一层的图层                                                                                                                                                                   |
| **[setLayerIndex](#setlayerindex)**(layer : ClientSceneLayer,  index : number): void<br>设置图层到指定的层，该层必须已经在场景上                                                                                                                    |
| **[getLayerLength](#getlayerlength)**(): number<br>获取当前的图层总数                                                                                                                                                                               |
| **[getLayer](#getlayer)**(index : number): ClientSceneLayer<br>获取层，根据实际层次索引                                                                                                                                                             |
| **[getLayerByPreset](#getlayerbypreset)**(id : number): ClientSceneLayer<br>获取层，根据预设层次                                                                                                                                                    |
| **[getLayerByName](#getlayerbyname)**(name : string): ClientSceneLayer<br>获取层根据名称                                                                                                                                                            |
| **[getPresetSceneObjectDatas](#getpresetsceneobjectdatas)**(): SceneObject[]<br>获取场景预设的场景对象数据（不包含出生点）                                                                                                                          |
| **[addSceneObject](#addsceneobject)**(soData : [SceneObject](/zh_hans/library/2d/common/sceneobject),  isEntity? : boolean,  useModelClass? : boolean,  className? : string): ClientSceneObject<br>场景对象添加到场景上                             |
| **[removeSceneObject](#removesceneobject)**(so : [SceneObject](/zh_hans/library/2d/common/sceneobject),  removeFromList? : boolean): ClientSceneObject<br>从场景上移除场景对象                                                                      |
| **[addNewSceneObject](#addnewsceneobject)**(modelID : number,  presetSceneObjectData? : any): ClientSceneObject<br>添加新对象，以默认值生成新的对象，同时也可以追加修改属性（presetSceneObjectData）                                                |
| **[addSceneObjectFromClone](#addsceneobjectfromclone)**(fromSceneID : number,  fromSceneObjectindex : number,  isCopy? : boolean,  presetSceneObjectData? : any): ClientSceneObject<br>克隆并添加场景对象                                           |
| **[getGlobalPos](#getglobalpos)**(localX : number,  localY : number): [Point](/zh_hans/library/2d/common/point)<br>获取绝对鼠标位置（相对于舞台）根据指定的场景位置                                                                                 |
| **[updateCamera](#updatecamera)**(): void<br>立刻刷新镜头（默认情况下场景会逐帧刷新镜头，如绑定的场景对象在移动时）                                                                                                                                 |
| **[startRender](#startrender)**(): void<br>开始渲染，场景如果未调用的话则处于静止状态，运动的图层等都不播放                                                                                                                                         |
| **[stopRender](#stoprender)**(LayerMoveToZero? : boolean): void<br>停止渲染                                                                                                                                                                         |
| **[hasListener](#haslistener)**(type : string): boolean<br>检查场景是否为特定事件类型注册了任何侦听器                                                                                                                                               |
| **[event](#event)**(type : string,  data? : any): boolean<br>场景派发事件                                                                                                                                                                           |
| **[on](#on)**(type : string,  caller : any,  listener : Function,  args? : Array<any>): [ClientScene](/zh_hans/library/2d/client/clientscene)<br>使用场景注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知                                   |
| **[once](#once)**(type : string,  caller : any,  listener : Function,  args? : Array<any>): [ClientScene](/zh_hans/library/2d/client/clientscene)<br>使用场景注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知，此侦听事件响应一次后自动移除 |
| **[off](#off)**(type : string,  caller : any,  listener : Function,  onceOnly? : boolean): [ClientScene](/zh_hans/library/2d/client/clientscene)<br>从场景中删除侦听器                                                                              |
| **[offAll](#offall)**(type? : string): [ClientScene](/zh_hans/library/2d/client/clientscene)<br>从场景中删除指定事件类型的所有侦听器                                                                                                                |
## Protected 方法
| <div style="width:1000px;text-align:left" >方法</div>                           |
| ------------------------------------------------------------------------------- |
| **[onRender](#onrender)**(): void<br>渲染：当Game.pause时则不处理刷新（update） |
## 详情

### BASE_DATA_LOADED
###### BASE_DATA_LOADED : string;
[静态]事件：基础数据加载完毕（可用于快速切入场景，而后再加载动态相关资源）回调参数：onBaseDataLoaded(scene:ClientScene) 默认值="ClientScene_BASE_DATA_LOADED"<br>
监听基础资源加载完毕示例：<br>
>&nbsp;var s = new ClientScene();<br>
>&nbsp;s.id = 5;<br>
>&nbsp;s.on(ClientScene.BASE_DATA_LOADED)<br>
>&nbsp;s.startRender(ClientScene.BASE_DATA_LOADED,this,(s:ClientScene)=>{<br>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// to do<br>
>&nbsp;});<br>
>&nbsp;stage.addChild(s.displayObject);<br>
>


### EVENT_IN_NEW_SCENE
###### EVENT_IN_NEW_SCENE : string;
[静态]事件：进入新的场景 onInNewScene(sceneID:number,state:number) state:0-切换场景 1-新游戏 2-读取存档<br>
监听来自切换场景事件、新游戏、读取存档的事件，以便项目层实现更换场景的效果 默认值="ClientSceneEVENT_IN_NEW_SCENE"<br>
>&nbsp;// sceneModelID = 场景模型ID，对应编辑器的场景ID（如果是网络版可能是副本场景，但模型来源仍然是预设的场景）<br>
>&nbsp;EventUtils.addEventListenerFunction(ClientScene, ClientScene.EVENT_IN_NEW_SCENE, (sceneModelID: number, state: number)=>{<br>
>&nbsp;&nbsp;&nbsp;// to do<br>
>&nbsp;}, this);<br>
>




## createScene
###### **[createScene](#createscene)**(sceneID : number,  onBaseDataLoaded? : Callback,  onLoaded? : Callback,  syncCallbackWhenAssetExist? : boolean): void :
[静态]创建场景，会根据预设的实现类来创建对应的实例场景
##### 参数
	sceneID 场景ID
	onBaseDataLoaded [可选] 默认值=null 当基础数据加载完毕时回调 onBaseDataLoaded(scene)
	onLoaded [可选] 默认值=null onLoaded(scene)
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）

##### 返回
[ClientScene]

## dispose
###### **[dispose](#dispose)**(): void :
释放当前的场景



## addLayer
###### **[addLayer](#addlayer)**(layer : ClientSceneLayer): void :
添加图层
##### 参数
	layer 图层对象



## addLayerAt
###### **[addLayerAt](#addlayerat)**(layer : ClientSceneLayer,  index : number): void :
添加图层到指定层
##### 参数
	layer 图层对象
	index 指定层索引



## removeLayer
###### **[removeLayer](#removelayer)**(layer : ClientSceneLayer): void :
移除图层
##### 参数
	layer 图层对象



## removeLayerAt
###### **[removeLayerAt](#removelayerat)**(index : number): void :
指定移除某一层的图层
##### 参数
	index 指定层索引



## setLayerIndex
###### **[setLayerIndex](#setlayerindex)**(layer : ClientSceneLayer,  index : number): void :
设置图层到指定的层，该层必须已经在场景上
##### 参数
	layer 图层
	index 指定的层索引



## getLayerLength
###### **[getLayerLength](#getlayerlength)**(): number :
获取当前的图层总数

##### 返回
[number]

## getLayer
###### **[getLayer](#getlayer)**(index : number): ClientSceneLayer :
获取层，根据实际层次索引
##### 参数
	index 层次索引

##### 返回
图层

## getLayerByPreset
###### **[getLayerByPreset](#getlayerbypreset)**(id : number): ClientSceneLayer :
获取层，根据预设层次
##### 参数
	id 对应地图层预览中的序号



## getLayerByName
###### **[getLayerByName](#getlayerbyname)**(name : string): ClientSceneLayer :
获取层根据名称
##### 参数
	name 图层的名称

##### 返回
[ClientSceneLayer]

## getPresetSceneObjectDatas
###### **[getPresetSceneObjectDatas](#getpresetsceneobjectdatas)**(): SceneObject[] :
获取场景预设的场景对象数据（不包含出生点）

##### 返回
场景对象数据集

## addSceneObject
###### **[addSceneObject](#addsceneobject)**(soData : [SceneObject](/zh_hans/library/2d/common/sceneobject),  isEntity? : boolean,  useModelClass? : boolean,  className? : string): ClientSceneObject :
场景对象添加到场景上<br>
由于对象涉及了参数默认值、状态页、预设的对象模块，通常情况下是使用 addNewSceneObject/addSceneObjectFromClone 来创建对象<br>
通常在当前场景上则用于添加已存在的实体对象进来。<br>
示例：<br>
>// soc = [object ClientSceneObject]<br>
>Game.currentScene.addChild(soc,true,true);<br>
>


##### 参数
	soData 场景对象数据（可以是纯数据SceneObject或实体对象）
	isEntity [可选] 默认值=false 是否是实体对象而非数据，如果是数据则会根据数据重新创建一个实体对象
	useModelClass [可选] 默认值=false 是否使用场景对象模型的实现类，项目层通常该值为true
	className [可选] 默认值=false 如果存在则根据className创建实例

##### 返回
[ClientSceneObject] 添加的场景对象实例

## removeSceneObject
###### **[removeSceneObject](#removesceneobject)**(so : [SceneObject](/zh_hans/library/2d/common/sceneobject),  removeFromList? : boolean): ClientSceneObject :
从场景上移除场景对象
##### 参数
	so 场景对象数据，保证场景对象的index是你需要移除的那个即可
	removeFromList [可选] 默认值=false 是否从列表中移除

##### 返回
[ClientSceneObject] 移除的场景对象实例

## addNewSceneObject
###### **[addNewSceneObject](#addnewsceneobject)**(modelID : number,  presetSceneObjectData? : any): ClientSceneObject :
添加新对象，以默认值生成新的对象，同时也可以追加修改属性（presetSceneObjectData）
##### 参数
	modelID 模型ID
	presetSceneObjectData [可选] 默认值=null 预设数据，以便生成时使用该数据作为参考，如 {x:500,y:500} className可根据className创建实例

##### 返回
[ClientSceneObject]

## addSceneObjectFromClone
###### **[addSceneObjectFromClone](#addsceneobjectfromclone)**(fromSceneID : number,  fromSceneObjectindex : number,  isCopy? : boolean,  presetSceneObjectData? : any): ClientSceneObject :
克隆并添加场景对象<br>
从指定的预设好的场景中指定一个对象为克隆源，然后复制这个对象到当前的场景上。<br>
优先使用fromSceneObjectindex位置存放场景对象，如果该位置已存在对象，则自动计算空位置插入到（this.sceneObjects）<br>
如果来源一个非当前场景，必须在克隆之前有预加载过该场景或创建过该场景：<br>
&nbsp;-- 预加载场景资源 AssetManager.preLoadSceneAsset 或 创建场景 ClientScene.createScene
##### 参数
	fromSceneID 来源的场景ID
	fromSceneObjectindex 来源场景中的场景对象ID
	isCopy [可选] 默认值=true 是否克隆（用于记录这个对象来自克隆）
	presetSceneObjectData [可选] 默认值=null 预设的数据（SceneObject属性），如修改x,y等，在最初即赋值。

##### 返回
[ClientSceneObject] 场景对象实例，如果没有找到模型的话创建失败返回null

## getGlobalPos
###### **[getGlobalPos](#getglobalpos)**(localX : number,  localY : number): [Point](/zh_hans/library/2d/common/point) :
获取绝对鼠标位置（相对于舞台）根据指定的场景位置
##### 参数
	localX 场景的坐标x（单位：像素）
	localY 场景的坐标y（单位：像素）

##### 返回
[Point]

## updateCamera
###### **[updateCamera](#updatecamera)**(): void :
立刻刷新镜头（默认情况下场景会逐帧刷新镜头，如绑定的场景对象在移动时）



## startRender
###### **[startRender](#startrender)**(): void :
开始渲染，场景如果未调用的话则处于静止状态，运动的图层等都不播放



## stopRender
###### **[stopRender](#stoprender)**(LayerMoveToZero? : boolean): void :
停止渲染
##### 参数
	LayerMoveToZero [可选] 默认值=false 是否图层移动归零，是的话就归零，否则推进移动一帧



## hasListener
###### **[hasListener](#haslistener)**(type : string): boolean :
检查场景是否为特定事件类型注册了任何侦听器<br>
@param	type 事件的类型。

##### 返回
如果指定类型的侦听器已注册，则值为 true；否则，值为 false。

## event
###### **[event](#event)**(type : string,  data? : any): boolean :
场景派发事件
##### 参数
	type	事件类型。
	data	[可选] 默认值=null 回调数据。如果是需要传递多个参数 p1,p2,p3,...可以使用数组结构如：[p1,p2,p3,...] ；如果需要回调单个参数 p 是一个数组，则需要使用结构如：[p]，其他的单个参数 p ，可以直接传入参数 p。

##### 返回
此事件类型是否有侦听者，如果有侦听者则值为 true，否则值为 false。

## on
###### **[on](#on)**(type : string,  caller : any,  listener : Function,  args? : Array<any>): [ClientScene](/zh_hans/library/2d/client/clientscene) :
使用场景注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知
##### 参数
	type		事件的类型。
	caller	事件侦听函数的执行域。a
	listener	事件侦听函数。
	args		[可选] 默认值=null 事件侦听函数的回调参数。

##### 返回
此场景对象。

## once
###### **[once](#once)**(type : string,  caller : any,  listener : Function,  args? : Array<any>): [ClientScene](/zh_hans/library/2d/client/clientscene) :
使用场景注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知，此侦听事件响应一次后自动移除
##### 参数
	type		事件的类型。
	caller	事件侦听函数的执行域。
	listener	事件侦听函数。
	args		[可选] 默认值=null 事件侦听函数的回调参数。

##### 返回
此场景对象。

## off
###### **[off](#off)**(type : string,  caller : any,  listener : Function,  onceOnly? : boolean): [ClientScene](/zh_hans/library/2d/client/clientscene) :
从场景中删除侦听器
##### 参数
	type		事件的类型。
	caller	事件侦听函数的执行域。
	listener	事件侦听函数。
	onceOnly	[可选] 默认值=false 如果值为 true ,则只移除通过 once 方法添加的侦听器。

##### 返回
此场景对象。

## offAll
###### **[offAll](#offall)**(type? : string): [ClientScene](/zh_hans/library/2d/client/clientscene) :
从场景中删除指定事件类型的所有侦听器
##### 参数
	type	[可选] 默认值=null 事件类型，如果值为 null，则移除本对象所有类型的侦听器。

##### 返回
此场景对象。


## onRender
###### **[onRender](#onrender)**(): void :
渲染：当Game.pause时则不处理刷新（update）<br>
支持子类重写该方法以便编写专有的游戏逻辑<br>
当前方法功能：<br>
-- 刷新镜头<br>
-- 刷新图层<br>
-- 刷新场景对象（update）




