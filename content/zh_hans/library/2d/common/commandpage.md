# CommandPage 事件页
>包含该事件页下的所有指令行（[Command](/zh_hans/library/2d/common/command)）<br>相关类：[Command](/zh_hans/library/2d/common/command)、[CommandPage](/zh_hans/library/2d/common/commandpage)、[CommandTrigger]<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-10-09

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **id** : number;<br>唯一ID  |
| **commands** : Command[];<br>指令对象集合 默认值=[]  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[startTriggerEvent](#starttriggerevent)**(trigger : CommandTrigger,  playerInput? : any[]): void<br>开始触发事件（首次）如果已在执行中则会自动忽略
| **[executeEvent](#executeevent)**(trigger : CommandTrigger,  playerInput? : any[]): void<br>[静态]执行事件，一般用于制作自定义指令时中途暂停了事件执行后恢复事件执行
| **[startTriggerFragmentEvent](#starttriggerfragmentevent)**(feData : string,  trigger : SceneObjectEntity,  execute : SceneObjectEntity,  onCommandExecuteOver? : Callback): CommandTrigger<br>[静态]开始执行片段事件

## 详情



## startTriggerEvent
###### **[startTriggerEvent](#starttriggerevent)**(trigger : CommandTrigger,  playerInput? : any[]): void :
开始触发事件（首次）如果已在执行中则会自动忽略
##### 参数
	trigger 事件触发器
	playerInput [可选] 默认值=[] 玩家提交的自定义输入信息



## executeEvent
###### **[executeEvent](#executeevent)**(trigger : CommandTrigger,  playerInput? : any[]): void :
[静态]执行事件，一般用于制作自定义指令时中途暂停了事件执行后恢复事件执行
##### 参数
	trigger 事件触发器
	playerInput [可选] 默认值=[] 玩家提交的自定义输入信息



## startTriggerFragmentEvent
###### **[startTriggerFragmentEvent](#starttriggerfragmentevent)**(feData : string,  trigger : SceneObjectEntity,  execute : SceneObjectEntity,  onCommandExecuteOver? : Callback): CommandTrigger :
[静态]开始执行片段事件<br>
该片段事件事件会启动一条单独的触发线独立运作，并支持跨场景（必须触发者是玩家的场景对象），直到其执行完毕。
##### 参数
	feData 片段事件数据
	trigger 触发者-场景对象
	execute 执行者-场景对象
	onCommandExecuteOver [可选] 默认值=null 当指令执行完毕时回调

##### 返回
[CommandTrigger] 触发器



