# SceneObjectBehaviors 对象行为处理器-基类
>实现了对象行为的框架，具体行为应配合自定义行为编辑器和子类实现实际作用效果，必须设置implClass以便行为编辑器支持<br>对象的行为层概念：每添加一组行为即作为新的一层，只有该层执行完毕才会回到上一层继续执行行为（循环的行为无法回到上一层）<br>需要主动调用update才会执行行为，利用此特性可以制作比如进入战斗后不执行默认的行为，离开战斗后继续执行行为的逻辑<br>关于自定义行为的制作：<br>1.可视化制作行为界面：GC编辑器-菜单-自定义编辑器-自定义行为<br>2.项目层继承此类实现具体行为：比如6号自定义行为，拥有两个参数<br>&nbsp;&nbsp;private behavior6(a:number,b:number):void{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 行为实现<br>&nbsp;&nbsp;}<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2020-02-20

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **[EVENT_INDEX_CHANGE](#event_index_change)** : string;<br>[静态]当前行为层索引变更时派发 EventUtils.happen(this, SceneObjectBehaviors.EVENT_INDEX_CHANGE, [v]);  |
| **implClass** : typeof SceneObjectBehaviors;<br>[静态]实现类，即子类，目前用于行为编辑器能够正确的找到实现类以便实时预览项目层编写的自定义行为  |
| **so** : SceneObjectEntity;<br>执行行为者（可能是执行事件者或触发事件者或者其他指定的对象）  |
| **targetSceneObject** : SceneObjectEntity;<br>触发事件者  |
| **executor** : SceneObjectEntity;<br>执行事件者（派发行为者）  |
| **index** : number;<br>当前行为的索引，更改时会派发事件 SceneObjectBehaviors.EVENT_INDEX_CHANGE  |
| **loop** : boolean;<br>是否循环  |
| **[ignoreProcess](#ignoreprocess)** : boolean;<br>[编辑器预览用]是否忽略过程（表示直接跳转到最终结果而不播放过程）  |
## **Protected 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **behaviors** : [Function, any[]][];<br>行为 对应的方法 对应的参数 默认值=[]  |
| **behaviorData** : any;<br>行为数据：记录原始行为数据，如[[行为1-ID,参数1,参数2],[行为2-ID,参数1,参数2],....]  |
| **[logicPause](#logicpause)** : boolean;<br>逻辑用的暂停标识，比如行为在运动结束前不在执行下一步动作（如配合Game.pause的效果）  |
## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[toBehaviorData](#tobehaviordata)**(behaviorStr : string)<br>[静态]数据转换：将字符串格式的数据转为可使用格式，通常自定义属性中的行为数据需要使用该方法转换后使用
| **[constructor](#constructor)**(so : SceneObjectEntity,  loop : boolean,  targetSceneObject : [SceneObject](/zh_hans/library/2d/common/sceneobject),  onOver : Callback,  startIndex? : number,  executor? : SceneObjectEntity)<br>构造函数
| **[dispose](#dispose)**(): void<br>释放函数，当不再使用时调用此函数以便销毁
| **[setBehaviors](#setbehaviors)**(behaviorData : any[],  delayFrame? : number): void<br>设置行为数据并且解析，会将以前的行为全部清空
| **[reset](#reset)**(defSceneObejct : [SceneObject](/zh_hans/library/2d/common/sceneobject)): void<br>[编辑器预览用]重置：还原到最初始的状态
| **[waitFrame](#waitframe)**(frame : number): void<br>等待指定帧数后继续执行
| **[update](#update)**(): boolean<br>更新行为，需要主动调用该函数才会执行行为，一般情况下每帧调用此函数以便更新对象的行为

## 详情

### EVENT_INDEX_CHANGE
###### EVENT_INDEX_CHANGE : string;
[静态]当前行为层索引变更时派发 EventUtils.happen(this, SceneObjectBehaviors.EVENT_INDEX_CHANGE, [v]);<br>
比如该对象当前的行为组有5个行为，执行完第2个行为后开始执行第3个行为前派发此事件<br>
>// behavior是SceneObjectBehaviors子类实例<br>
>// newIndex是新的索引<br>
>EventUtils.addEventListenerFunction(behavior,SceneObjectBehaviors.EVENT_INDEX_CHANGE,(newIndex:number)=>{<br>
>&nbsp;&nbsp;// 逻辑<br>
>},this);<br>
>


### ignoreProcess
###### ignoreProcess : boolean;
[编辑器预览用]是否忽略过程（表示直接跳转到最终结果而不播放过程）<br>
比如行为是从A点移动到B点，而由于行为编辑器中编辑模式下忽略过程直接显示结果的，<br>
所以行为的实现中可以根据ignoreProcess来实现，即：<br>
当ignoreProcess=true时，由A点平滑移动到B点，有播放效果。<br>
当ignoreProcess=false时，直接出现在B点，忽略过程。

### logicPause
###### logicPause : boolean;
逻辑用的暂停标识，比如行为在运动结束前不在执行下一步动作（如配合Game.pause的效果）<br>
实现类可以根据具体的游戏规则重写该属性，以便能够正确的暂停下一步行为执行<br>
如RPG中处于移动中的对象只有等待执行完毕后再继续执行：<br>
>// 重载为get方法<br>
>protected get logicPause(): boolean {<br>
>&nbsp;&nbsp;&nbsp;return this.so.isMoving ? true : false;<br>
>}<br>
>



## toBehaviorData
###### **[toBehaviorData](#tobehaviordata)**(behaviorStr : string) :
[静态]数据转换：将字符串格式的数据转为可使用格式，通常自定义属性中的行为数据需要使用该方法转换后使用

##### 返回
targetSceneObjectIndex 0-对象 -2玩家 -1当前对象 0-N 指定对象编号<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;behaviorData 行为数据<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;loop 是否循环<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cover 是否覆盖行为<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;forceStopLastBehavior 是否强行停止正在执行的行为

## constructor
###### **[constructor](#constructor)**(so : SceneObjectEntity,  loop : boolean,  targetSceneObject : [SceneObject](/zh_hans/library/2d/common/sceneobject),  onOver : Callback,  startIndex? : number,  executor? : SceneObjectEntity) :
构造函数
##### 参数
	so 执行行为的场景对象
	loop 是否循环
	targetSceneObject 事件触发者
	onOver 当行为执行完毕时回调 onOver(soBehavior:SceneObjectBehaviors)
	startIndex [可选] 默认值=0 起始行为索引行
	executor [可选] 默认值=null 事件执行者（也是行为派发者）



## dispose
###### **[dispose](#dispose)**(): void :
释放函数，当不再使用时调用此函数以便销毁



## setBehaviors
###### **[setBehaviors](#setbehaviors)**(behaviorData : any[],  delayFrame? : number): void :
设置行为数据并且解析，会将以前的行为全部清空<br>
比如添加3号行为
##### 参数
	behaviorData 行为数据 [[行为1-ID,参数1,参数2],[行为2-ID,参数1,参数2],....]
	delayFrame [可选] 默认值=0 行为内部的需要等待的帧数



## reset
###### **[reset](#reset)**(defSceneObejct : [SceneObject](/zh_hans/library/2d/common/sceneobject)): void :
[编辑器预览用]重置：还原到最初始的状态<br>
仅在行为编辑器预览使用，项目层需要实现行为的重置，以便预览时能够正确显示效果
##### 参数
	defSceneObejct 默认的场景对象



## waitFrame
###### **[waitFrame](#waitframe)**(frame : number): void :
等待指定帧数后继续执行<br>
如果已处于等待帧的情况下时：当调用update行为的时候会推进一帧
##### 参数
	frame 等待的帧数



## update
###### **[update](#update)**(): boolean :
更新行为，需要主动调用该函数才会执行行为，一般情况下每帧调用此函数以便更新对象的行为<br>
利用此特性可以制作一些效果，比如：<br>
-- 进入战斗后不执行默认的行为，离开战斗后继续执行行为的逻辑<br>
-- 全局暂停时不执行该函数以便停止推进行为

##### 返回
[boolean] 是否播放结束



