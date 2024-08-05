# GameCommand 游戏客户端指令处理
>主要功能：<br>-- 用于配合自定义指令的制作<br>-- 触发事件：场景事件、场景对象事件、界面事件、独立的事件库事件（而片段事件的触发参考[CommandPage](/zh_hans/library/2d/common/commandpage)）<br>-- 提交玩家的输入<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2019-01-12

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **COMMAND_STATE_CONTINUE** : number;<br>[静态]指令状态：继续  |
| **COMMAND_STATE_STOP** : number;<br>[静态]指令状态：终止  |
| **COMMAND_STATE_NEED_INPUT** : number;<br>[静态]指令状态：需要玩家输入  |
| **isNeedPlayerInput** : boolean;<br>[静态]是否玩家输入中  |
| **inputTriggerLine** : number;<br>[静态]当前需要输入的触发线ID  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[start](#start)**(triggerLineID? : number): void<br>[静态]启动
| **[startSceneCommand](#startscenecommand)**(indexType : number,  inputMessage? : any[],  onCommandExecuteOver? : Callback): boolean<br>[静态][场景-事件] 主动开始触发该事件
| **[startSceneObjectCommand](#startsceneobjectcommand)**(sceneObjectIndex : number,  indexType : number,  inputMessage? : any[],  onCommandExecuteOver? : Callback,  triggerSceneObject? : [ClientSceneObject](/zh_hans/library/2d/client/clientsceneobject)): boolean<br>[静态][场景对象-事件] 主动开始新触发该事件
| **[startUICommand](#startuicommand)**(comp : UIBase,  indexType : number,  inputMessage? : any[],  onCommandExecuteOver? : Callback): boolean<br>[静态][界面-事件] 主动开始执行
| **[startCommonCommand](#startcommoncommand)**(id : number,  inputMessage? : any[],  onCommandExecuteOver? : Callback,  triggerSceneObject? : [ClientSceneObject](/zh_hans/library/2d/client/clientsceneobject),  executorSceneObject? : [ClientSceneObject](/zh_hans/library/2d/client/clientsceneobject)): void<br>[静态][独立事件-事件库事件] 主动开始执行
| **[inputMessageAndContinueExecute](#inputmessageandcontinueexecute)**(inputMessage? : any[],  force? : boolean,  delayFrame? : number,  triggerLineID? : number): void<br>[静态]输入信息并继续执行下去，事件页的等待玩家输入，将接收到输入的参数。

## 详情



## start
###### **[start](#start)**(triggerLineID? : number): void :
[静态]启动<br>
一般自定义指令返回COMMAND_STATE_STOP后可以主动调用start重新启动<br>
比如网络内核中为了优化，事件中的等待支持了客户端等待，其实现就是先COMMAND_STATE_STOP，然后等待N帧后调用此方法继续执行事件
##### 参数
	triggerLineID [可选] 默认值=null 触发线：当存在时则仅停止该触发线的事件执行，否则停止全部



## startSceneCommand
###### **[startSceneCommand](#startscenecommand)**(indexType : number,  inputMessage? : any[],  onCommandExecuteOver? : Callback): boolean :
[静态][场景-事件] 主动开始触发该事件
##### 参数
	indexType 事件类别，0~N 对应自定义的场景中的事件类别
	inputMessage [可选] 默认值=null 玩家输入值（等同调用事件时传递的参数）
	onCommandExecuteOver [可选] 默认值=null 当指令执行完毕时回调

##### 返回
是否触发执行成功

## startSceneObjectCommand
###### **[startSceneObjectCommand](#startsceneobjectcommand)**(sceneObjectIndex : number,  indexType : number,  inputMessage? : any[],  onCommandExecuteOver? : Callback,  triggerSceneObject? : [ClientSceneObject](/zh_hans/library/2d/client/clientsceneobject)): boolean :
[静态][场景对象-事件] 主动开始新触发该事件
##### 参数
	sceneObjectIndex 场景对象索引（sceneObject.index）
	indexType 事件类别，0~N 对应自定义的场景对象中的事件类别
	inputMessage [可选] 默认值=null 玩家输入值（等同调用事件时传递的参数）
	onCommandExecuteOver [可选] 默认值=null 当指令执行完毕时回调
	triggerSceneObject [可选] 默认值=null 触发事件的对象，null则表示玩家的场景对象作为触发事件者

##### 返回
是否触发执行成功

## startUICommand
###### **[startUICommand](#startuicommand)**(comp : UIBase,  indexType : number,  inputMessage? : any[],  onCommandExecuteOver? : Callback): boolean :
[静态][界面-事件] 主动开始执行
##### 参数
	comp 组件，比如界面中的某个按钮
	indexType 子事件类别，0~N 对应UI的对象中的事件类别
	inputMessage [可选] 默认值=null 玩家输入值（等同调用事件时传递的参数）
	onCommandExecuteOver [可选] 默认值=null 当指令执行完毕时回调

##### 返回
是否触发执行成功

## startCommonCommand
###### **[startCommonCommand](#startcommoncommand)**(id : number,  inputMessage? : any[],  onCommandExecuteOver? : Callback,  triggerSceneObject? : [ClientSceneObject](/zh_hans/library/2d/client/clientsceneobject),  executorSceneObject? : [ClientSceneObject](/zh_hans/library/2d/client/clientsceneobject)): void :
[静态][独立事件-事件库事件] 主动开始执行<br>
独立事件会启动一条单独的触发线独立运作，并支持跨场景，直到其执行完毕。
##### 参数
	id 事件库事件的ID
	inputMessage [可选] 默认值=null 玩家输入值（等同调用事件时传递的参数）
	onCommandExecuteOver [可选] 默认值=null 当指令执行完毕时回调
	triggerSceneObject [可选] 默认值=null 触发事件者，如果为null则表示玩家的场景对象
	executorSceneObject [可选] 默认值=null 执行事件者，如果为null则表示玩家的场景对象



## inputMessageAndContinueExecute
###### **[inputMessageAndContinueExecute](#inputmessageandcontinueexecute)**(inputMessage? : any[],  force? : boolean,  delayFrame? : number,  triggerLineID? : number): void :
[静态]输入信息并继续执行下去，事件页的等待玩家输入，将接收到输入的参数。<br>
可以制作如输入名字、密码、QTE系统等等<br>
事件页制作流程：<br>
&nbsp;-- 比如通过调用脚本的方式：inputMessageAndContinueExecute([123]);<br>
&nbsp;-- 事件：等待玩家输入<br>
&nbsp;-- 事件：可以通过变量赋值=玩家输入值  或  文本中显示玩家输入值等等来接收
##### 参数
	inputMessage [可选] 默认值=null 输入的信息
	force [可选] 默认值=false 是否强制模式（非强制模式只有客户端判定需要输入时才发送）
	delayFrame [可选] 默认值=1 延迟多少帧发送
	triggerLineID [可选] 默认值=-1 表示将信息提交到指定的触发器线上，-1表示默认是GameCommand.inputTriggerLine,即当前系统等待玩家输入的触发线





