---
title:  SceneObjectEntity 场景对象实体类
---
>所有实际的场景对象实体都继承此类<br>拥有特性：<br>-- 对象开关（存档时系统会自动记录所有场景的对象开关，同时可以影响到出现条件）<br>-- 添加对象行为（详情参考:[SceneObjectBehaviors](/zh_hans/library/2d/common/sceneobjectbehaviors)）<br>-- 携带自定义事件：如RPG模板中可能拥有点击事件、碰触事件多种触发事件<br>-- 状态页：根据满足出现条件决定出现的哪一页状态<br>-- 场景对象模块：可安装多个模块，安装后拥有模块的特性<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2020-02-22

**继承**  →[SceneObject](/zh_hans/library/2d/common/sceneobject)<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[EVENT_BEFORE_CHANGE_STATUS_PAGE](#event_before_change_status_page)** : string;<br>[静态]事件：当切换状态页前，首次创建时不派发该事件。派发对象 SceneObjectEntity 一般用于全局监听所有场景对象的切换状态页事件                            |
| **[EVENT_BEFORE_CHANGE_STATUS_PAGE_FOR_INSTANCE](#event_before_change_status_page_for_instance)** : string;<br>[静态]事件：当切换状态页前，首次创建时不派发该事件。派发对象 [Object SceneObjectEntity] 一般用于对某个对象监听切换状态页事件 |
| **[EVENT_CHANGE_STATUS_PAGE](#event_change_status_page)** : string;<br>[静态]事件：当切换状态页后，首次创建时不派发该事件。派发对象 SceneObjectEntity 一般用于全局监听所有场景对象的切换状态页事件                                          |
| **[EVENT_CHANGE_STATUS_PAGE_FOR_INSTANCE](#event_change_status_page_for_instance)** : string;<br>[静态]事件：当切换状态页后，首次创建时不派发该事件。派发对象 [Object SceneObjectEntity] 一般用于对某个对象监听切换状态页事件               |
| **[EVENT_ON_ADD_MODULE](#event_on_add_module)** : string;<br>[静态]事件：当附加模块时 派发对象=SceneObjectEntity                                                                                                                            |
| **[EVENT_ON_REMOVE_MODULE](#event_on_remove_module)** : string;<br>[静态]事件：当移除模块时 派发对象=SceneObjectEntity onRemoveModule(soe:SceneObjectEntity,soModule:SceneObjectModule)                                                     |
| **isDisposed** : boolean;<br>是否已释放                                                                                                                                                                                                     |
| **isCopy** : boolean;<br>[只读]是否副本                                                                                                                                                                                                     |
| **copyFrom** : <br>[只读]克隆的来源 sceneID=源场景编号 sceneObjectIndex=源对象编号                                                                                                                                                          |
| **inScene** : boolean;<br>是否在场景上 默认值=false                                                                                                                                                                                         |
| **currentStatusPageIndex** : number;<br>当前对应的状态页面索引 0~N                                                                                                                                                                          |
| **triggerLines** : any;<br>事件触发线：全部触发器 { [triggerLineID: number]: CommandTrigger }                                                                                                                                               |
| **triggerSingleLines** : any;<br>事件触发线：单线唯一 { [triggerLineID: string]: CommandTrigger }                                                                                                                                           |
| **customCommandPages** : CommandPage[];<br>场景对象事件页 下标=indexType 0~n                                                                                                                                                                |
| **[moduleLength](#modulelength)** : number;<br>[只读]获取所有模块的数目                                                                                                                                                                     |
## **Protected 属性**
| <div style="width:1000px;text-align:left">属性</div>                  |
| --------------------------------------------------------------------- |
| **behaviors** : SceneObjectBehaviors[];<br>行为集，由多个行为组合而成 |
## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[getSwitch](#getswitch)**(varID : number): number<br>获取对象的开关                                                                                                                                                                                                                                                                                                                                                                                                     |
| **[setSwitch](#setswitch)**(varID : number,  value : number): void<br>设置对象的开关：存档时系统会自动记录全场景中所有对象的对象开关数据，同时可以影响到出现条件。                                                                                                                                                                                                                                                                                                        |
| **[installSwitchs](#installswitchs)**(switchs : number[]): void<br>安装开关，一般用于读取数据后一次写入                                                                                                                                                                                                                                                                                                                                                                   |
| **[getCustomAttrs](#getcustomattrs)**(): string[]<br>获取自定义属性名称集                                                                                                                                                                                                                                                                                                                                                                                                 |
| **[addBehavior](#addbehavior)**(behaviorData : any[],  loop : boolean,  targetSceneObject : [SceneObject](/zh_hans/library/2d/common/sceneobject),  onOver : Callback,  cover : boolean,  startIndex? : number,  Immediate? : boolean,  forceStopLastBehavior? : boolean,  delayFrame? : number,  executor? : [SceneObjectEntity](/zh_hans/library/2d/common/sceneobjectentity)): [SceneObjectBehaviors](/zh_hans/library/2d/common/sceneobjectbehaviors)<br>添加一组行为 |
| **[clearBehaviors](#clearbehaviors)**(): void<br>清理行为组，清理后对象不在拥有设定的任何行为                                                                                                                                                                                                                                                                                                                                                                             |
| **[getCommandTrigger](#getcommandtrigger)**(mainType : number,  indexType : number,  scene : [Scene](/zh_hans/library/2d/common/scene),  executor : [SceneObjectEntity](/zh_hans/library/2d/common/sceneobjectentity)): [CommandTrigger](/zh_hans/library/2d/common/commandtrigger)<br>获取事件触发器:单线事件拿到的是唯一触发器，而多线事件则新生成触发器                                                                                                                |
| **[addModule](#addmodule)**(soModule : SceneObjectModule,  sendEvent? : boolean): boolean<br>添加模块                                                                                                                                                                                                                                                                                                                                                                     |
| **[addModuleAt](#addmoduleat)**(soModule : SceneObjectModule,  index : number,  sendEvent? : boolean): boolean<br>添加模块-到指定的位置上                                                                                                                                                                                                                                                                                                                                 |
| **[addModuleByID](#addmodulebyid)**(moduleID : number,  sendEvent? : boolean): SceneObjectModule<br>添加模块-根据模块编号                                                                                                                                                                                                                                                                                                                                                 |
| **[addModuleByIDAt](#addmodulebyidat)**(moduleID : number,  index : number,  sendEvent? : boolean): SceneObjectModule<br>添加模块-到指定的位置上-根据模块的编号                                                                                                                                                                                                                                                                                                           |
| **[removeAllModules](#removeallmodules)**(isDispose? : boolean,  sendEvent? : boolean): void<br>移除所有模块                                                                                                                                                                                                                                                                                                                                                              |
| **[removeModuleByID](#removemodulebyid)**(moduleID : number,  isDispose? : boolean,  sendEvent? : boolean): SceneObjectModule<br>移除指定编号的模块                                                                                                                                                                                                                                                                                                                       |
| **[removeModule](#removemodule)**(soModule : SceneObjectModule,  isDispose? : boolean,  sendEvent? : boolean): boolean<br>移除模块-根据其拥有的模块                                                                                                                                                                                                                                                                                                                       |
| **[removeModuleAt](#removemoduleat)**(index : number,  isDispose? : boolean,  sendEvent? : boolean): boolean<br>移除模块-根据指定的位置                                                                                                                                                                                                                                                                                                                                   |
| **[setModuleIndex](#setmoduleindex)**(soModule : SceneObjectModule,  toIndex : number): boolean<br>设置已拥有的模块到指定位置                                                                                                                                                                                                                                                                                                                                             |
| **[setModuleIndexByID](#setmoduleindexbyid)**(moduleID : number,  toIndex : number): boolean<br>设置已拥有的模块到指定位置-根据模块编号                                                                                                                                                                                                                                                                                                                                   |
| **[setModuleIndexByIndex](#setmoduleindexbyindex)**(fromIndex : number,  toIndex : number): boolean<br>调整模块位置                                                                                                                                                                                                                                                                                                                                                       |
| **[getModule](#getmodule)**(moduleID : number): SceneObjectModule<br>获取已拥有的模块-根据模块编号                                                                                                                                                                                                                                                                                                                                                                        |
| **[getModuleByName](#getmodulebyname)**(moduleName : string): SceneObjectModule<br>获取已拥有的模块-根据模块名称                                                                                                                                                                                                                                                                                                                                                          |
| **[getModuleAt](#getmoduleat)**(index : number): SceneObjectModule<br>获取已拥有的模块-根据模块位置                                                                                                                                                                                                                                                                                                                                                                       |
| **[getModuleIndex](#getmoduleindex)**(soModule : SceneObjectModule): number<br>获取已拥有的模块的位置                                                                                                                                                                                                                                                                                                                                                                     |
| **[getModuleIndexByID](#getmoduleindexbyid)**(moduleID : number): number<br>获取已拥有的模块位置-根据模块的编号                                                                                                                                                                                                                                                                                                                                                           |

## 详情

### EVENT_BEFORE_CHANGE_STATUS_PAGE
###### EVENT_BEFORE_CHANGE_STATUS_PAGE : string;
[静态]事件：当切换状态页前，首次创建时不派发该事件。派发对象 SceneObjectEntity 一般用于全局监听所有场景对象的切换状态页事件<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前仅在服务端使用<br>
>// 监听状态页更改时<br>
>EventUtils.addEventListenerFunction(SceneObjectEntity, SceneObjectEntity.EVENT_BEFORE_CHANGE_STATUS_PAGE, (soe: SceneObjectEntity) => {<br>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// to do<br>
>}, this);<br>
>


### EVENT_BEFORE_CHANGE_STATUS_PAGE_FOR_INSTANCE
###### EVENT_BEFORE_CHANGE_STATUS_PAGE_FOR_INSTANCE : string;
[静态]事件：当切换状态页前，首次创建时不派发该事件。派发对象 [Object SceneObjectEntity] 一般用于对某个对象监听切换状态页事件<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;目前仅在服务端使用<br>
>// 监听状态页更改时<br>
>EventUtils.addEventListenerFunction(soe, SceneObjectEntity.EVENT_BEFORE_CHANGE_STATUS_PAGE_FOR_INSTANCE, (soe: SceneObjectEntity) => {<br>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// to do<br>
>}, this);<br>
>


### EVENT_CHANGE_STATUS_PAGE
###### EVENT_CHANGE_STATUS_PAGE : string;
[静态]事件：当切换状态页后，首次创建时不派发该事件。派发对象 SceneObjectEntity 一般用于全局监听所有场景对象的切换状态页事件<br>
>// 监听玩家的状态页更改时<br>
>EventUtils.addEventListenerFunction(SceneObjectEntity, SceneObjectEntity.EVENT_CHANGE_STATUS_PAGE, (soe: SceneObjectEntity) => {<br>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// to do<br>
>}, this);<br>
>


### EVENT_CHANGE_STATUS_PAGE_FOR_INSTANCE
###### EVENT_CHANGE_STATUS_PAGE_FOR_INSTANCE : string;
[静态]事件：当切换状态页后，首次创建时不派发该事件。派发对象 [Object SceneObjectEntity] 一般用于对某个对象监听切换状态页事件<br>
>// 监听玩家的状态页更改时<br>
>EventUtils.addEventListenerFunction(soe, SceneObjectEntity.EVENT_CHANGE_STATUS_PAGE_FOR_INSTANCE, (soe: SceneObjectEntity) => {<br>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// to do<br>
>}, this);<br>
>


### EVENT_ON_ADD_MODULE
###### EVENT_ON_ADD_MODULE : string;
[静态]事件：当附加模块时 派发对象=SceneObjectEntity<br>
>// 监听玩家添加模块时事件<br>
>EventUtils.addEventListenerFunction(SceneObjectEntity, SceneObjectEntity.EVENT_ON_ADD_MODULE, (soe:SceneObjectEntity,soModule:SceneObjectModule) => {<br>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// to do<br>
>}, this);<br>
>


### EVENT_ON_REMOVE_MODULE
###### EVENT_ON_REMOVE_MODULE : string;
[静态]事件：当移除模块时 派发对象=SceneObjectEntity onRemoveModule(soe:SceneObjectEntity,soModule:SceneObjectModule)<br>
>// 监听玩家移除模块时事件<br>
>EventUtils.addEventListenerFunction(SceneObjectEntity, SceneObjectEntity.EVENT_ON_REMOVE_MODULE, (soe:SceneObjectEntity,soModule:SceneObjectModule) => {<br>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// to do<br>
>}, this);<br>
>


### moduleLength
###### moduleLength : number;
[只读]获取所有模块的数目<br>
@return [number] 模块的数目


## getSwitch
###### **[getSwitch](#getswitch)**(varID : number): number :
获取对象的开关
##### 参数
	varID 对象开关编号 0-N

##### 返回
[number]

## setSwitch
###### **[setSwitch](#setswitch)**(varID : number,  value : number): void :
设置对象的开关：存档时系统会自动记录全场景中所有对象的对象开关数据，同时可以影响到出现条件。
##### 参数
	varID 对象开关编号 0-N
	value 开关值 0/1



## installSwitchs
###### **[installSwitchs](#installswitchs)**(switchs : number[]): void :
安装开关，一般用于读取数据后一次写入



## getCustomAttrs
###### **[getCustomAttrs](#getcustomattrs)**(): string[] :
获取自定义属性名称集

##### 返回
[string]

## addBehavior
###### **[addBehavior](#addbehavior)**(behaviorData : any[],  loop : boolean,  targetSceneObject : [SceneObject](/zh_hans/library/2d/common/sceneobject),  onOver : Callback,  cover : boolean,  startIndex? : number,  Immediate? : boolean,  forceStopLastBehavior? : boolean,  delayFrame? : number,  executor? : [SceneObjectEntity](/zh_hans/library/2d/common/sceneobjectentity)): [SceneObjectBehaviors](/zh_hans/library/2d/common/sceneobjectbehaviors) :
添加一组行为
##### 参数
	behaviorData 行为数据 [[行为1-ID,参数1,参数2],[行为2-ID,参数1,参数2],....]
	loop 是否循环
	targetSceneObject 参考的目标对象
	onOver 当行为结束时回调
	cover 覆盖旧的行为
	startIndex [可选] 默认值=0 该行为组的开始播放的行为索引，默认0，表示从最开头开始播放
	Immediate [可选] 默认值=true 是否立即刷新，否则会等待下一帧才刷新
	forceStopLastBehavior [可选] 默认值=false 是否强制停止正在执行的行为，由项目层实现，以便当前行为组能够立即执行
	delayFrame [可选] 默认值=0 行为内部的需要等待的帧数
	executor [可选] 默认值=null 执行事件者（也是行为派发者）

##### 返回
对象行为处理器

## clearBehaviors
###### **[clearBehaviors](#clearbehaviors)**(): void :
清理行为组，清理后对象不在拥有设定的任何行为



## getCommandTrigger
###### **[getCommandTrigger](#getcommandtrigger)**(mainType : number,  indexType : number,  scene : [Scene](/zh_hans/library/2d/common/scene),  executor : [SceneObjectEntity](/zh_hans/library/2d/common/sceneobjectentity)): [CommandTrigger](/zh_hans/library/2d/common/commandtrigger) :
获取事件触发器:单线事件拿到的是唯一触发器，而多线事件则新生成触发器<br>
同一个触发器表示一条线路执行，所以多线事件新生成触发器则代表一个事件页可以同时执行多次
##### 参数
	mainType 0-场景相关的事件类别 1-场景对象相关的事件类别 2-界面相关的事件类别 3-事件库的事件类别 4-片段事件的事件类别 （对应CommandTrigger.COMMAND_MAIN_TYPE_XXX）
	indexType 对应的小类别 0-N 如：这是一个场景对象的自定义触发类型事件-“点击事件”
	scene 场景
	executor 执行者：当前事件的执行者

##### 返回
事件触发器

## addModule
###### **[addModule](#addmodule)**(soModule : SceneObjectModule,  sendEvent? : boolean): boolean :
添加模块
##### 参数
	soModule 模块
	sendEvent [可选] 默认值=true 是否添加成功

##### 返回
[boolean] 是否添加成功

## addModuleAt
###### **[addModuleAt](#addmoduleat)**(soModule : SceneObjectModule,  index : number,  sendEvent? : boolean): boolean :
添加模块-到指定的位置上
##### 参数
	soModule 模块
	index 指定的位置
	sendEvent [可选] 默认值=true 是否派发事件

##### 返回
[boolean] 是否添加成功

## addModuleByID
###### **[addModuleByID](#addmodulebyid)**(moduleID : number,  sendEvent? : boolean): SceneObjectModule :
添加模块-根据模块编号<br>
-- 模块的属性为默认值
##### 参数
	moduleID 模块编号
	sendEvent [可选] 默认值=true 是否派发事件

##### 返回
[SceneObjectModule] 被添加的模块，如果不成功则返回null

## addModuleByIDAt
###### **[addModuleByIDAt](#addmodulebyidat)**(moduleID : number,  index : number,  sendEvent? : boolean): SceneObjectModule :
添加模块-到指定的位置上-根据模块的编号
##### 参数
	moduleID 模块编号
	index 指定的位置
	sendEvent [可选] 默认值=true 是否派发事件

##### 返回
[SceneObjectModule] 被添加的模块，如果不成功则返回null

## removeAllModules
###### **[removeAllModules](#removeallmodules)**(isDispose? : boolean,  sendEvent? : boolean): void :
移除所有模块
##### 参数
	isDispose [可选] 默认值=true 是否销毁模块
	sendEvent [可选] 默认值=true 是否派发事件



## removeModuleByID
###### **[removeModuleByID](#removemodulebyid)**(moduleID : number,  isDispose? : boolean,  sendEvent? : boolean): SceneObjectModule :
移除指定编号的模块
##### 参数
	moduleID 模块的编号
	isDispose [可选] 默认值=true 是否销毁模块
	sendEvent [可选] 默认值=true 是否派发事件

##### 返回
[SceneObjectModule] 被移除的模块，如果不成功则返回null

## removeModule
###### **[removeModule](#removemodule)**(soModule : SceneObjectModule,  isDispose? : boolean,  sendEvent? : boolean): boolean :
移除模块-根据其拥有的模块
##### 参数
	soModule 拥有的模块
	isDispose [可选] 默认值=true 是否销毁模块
	sendEvent [可选] 默认值=true 是否派发事件

##### 返回
[boolean] 是否移除成功

## removeModuleAt
###### **[removeModuleAt](#removemoduleat)**(index : number,  isDispose? : boolean,  sendEvent? : boolean): boolean :
移除模块-根据指定的位置
##### 参数
	index 指定的位置
	isDispose [可选] 默认值=true 是否销毁
	sendEvent [可选] 默认值=true 是否派发事件

##### 返回
[boolean] 是否移除成功

## setModuleIndex
###### **[setModuleIndex](#setmoduleindex)**(soModule : SceneObjectModule,  toIndex : number): boolean :
设置已拥有的模块到指定位置
##### 参数
	soModule 拥有的模块
	toIndex 设置到达指定的位置

##### 返回
[boolean] 是否成功

## setModuleIndexByID
###### **[setModuleIndexByID](#setmoduleindexbyid)**(moduleID : number,  toIndex : number): boolean :
设置已拥有的模块到指定位置-根据模块编号
##### 参数
	moduleID 已拥有的模块的编号
	toIndex 设置到达指定的位置

##### 返回
[boolean] 是否成功

## setModuleIndexByIndex
###### **[setModuleIndexByIndex](#setmoduleindexbyindex)**(fromIndex : number,  toIndex : number): boolean :
调整模块位置
##### 参数
	fromIndex 模块的原始位置
	toIndex 模块的新位置

##### 返回
[boolean] 是否成功

## getModule
###### **[getModule](#getmodule)**(moduleID : number): SceneObjectModule :
获取已拥有的模块-根据模块编号
##### 参数
	moduleID 模块编号

##### 返回
[SceneObjectModule] 返回拥有的该模块，如果未拥有则返回null

## getModuleByName
###### **[getModuleByName](#getmodulebyname)**(moduleName : string): SceneObjectModule :
获取已拥有的模块-根据模块名称
##### 参数
	moduleName 模块名称

##### 返回
[SceneObjectModule] 返回拥有的该模块，如果未拥有则返回null

## getModuleAt
###### **[getModuleAt](#getmoduleat)**(index : number): SceneObjectModule :
获取已拥有的模块-根据模块位置
##### 参数
	index 模块位置

##### 返回
[SceneObjectModule] 返回拥有的该模块，如果未拥有则返回null

## getModuleIndex
###### **[getModuleIndex](#getmoduleindex)**(soModule : SceneObjectModule): number :
获取已拥有的模块的位置
##### 参数
	soModule 模块

##### 返回
[number] 已拥有的该模块的位置，如果未拥有则返回-1

## getModuleIndexByID
###### **[getModuleIndexByID](#getmoduleindexbyid)**(moduleID : number): number :
获取已拥有的模块位置-根据模块的编号
##### 参数
	moduleID 模块编号

##### 返回
[number] 已拥有的该模块的位置，如果未拥有则返回-1



