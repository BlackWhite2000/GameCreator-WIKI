---
title:  Command 事件指令
---
>该类是事件页（[CommandPage]）中的事件指令数据类<br>支持自定义事件指令<br>相关类：[Command](/zh_hans/library/2d/common/command)、[CommandPage]、[CommandTrigger]<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-10-09

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[EVENT_SYSTEM_COMMAND_START](#event_system_command_start)** : string;<br>[静态]事件：系统指令事件开始，可以通过监听玩家的场景对象                   |
| **type** : number;<br>指令类型 系统指令10000以内，自定义指令10000以上，如10001表示1号自定义指令                                                       |
| **customID** : number;<br>自定义指令的ID（如果该指令是自定义指令的话，否则返回null）                                                                  |
| **params** : any[];<br>指令参数，储存事件编辑器中输入的参数值                                                                                         |
| **paramsCompiled** : any[];<br>预编译后的指令参数：一般用于预编译后自定义储存，以便在执行指令时可以调用，提升事件执行性能（如缓存一些事先计算好的值） |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                                                           |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[callExecuteFunction](#callexecutefunction)**(triggerLineID : number,  player : Player,  params : any[],  gameFunc? : string): void<br>调用执行客户端方法：需要执行客户端效果或让玩家输入信息时需要使用该方法 |

## 详情

### EVENT_SYSTEM_COMMAND_START
###### EVENT_SYSTEM_COMMAND_START : string;
[静态]事件：系统指令事件开始，可以通过监听玩家的场景对象<br>
>// so = [SceneObjectEntity] 玩家的场景对象实例<br>
>// sysType = 回调参数:指令类别 0-对话框显示时 1-对话选择框显示时 2-场景更换<br>
>EventUtils.addEventListenerFunction(so, Command.EVENT_SYSTEM_COMMAND_START, (sysType:number)=>{<br>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// to do<br>
>}, this);<br>
>




## callExecuteFunction
###### **[callExecuteFunction](#callexecutefunction)**(triggerLineID : number,  player : Player,  params : any[],  gameFunc? : string): void :
调用执行客户端方法：需要执行客户端效果或让玩家输入信息时需要使用该方法<br>
一般主要用于调用客户端方法，客户端设置为等待玩家输入的状态以便阻塞客户端输入，<br>
多个事件同时让玩家输入时，应该以排队的方式让玩家一一提交输入结果。<br>
<br>
客户端执行的自定义指令函数必须在CommandExecuteGame模块中：<br>
>module CommandExecuteGame {<br>
>&nbsp;&nbsp;&nbsp;export function customCommand_1(param1:any,param2:any): void {<br>
>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return GameCommand.COMMAND_STATE_NEED_INPUT;<br>
>&nbsp;&nbsp;&nbsp;}<br>
>}<br>
>

<br>
// 关于返回值状态：通常情况下<br>
GameCommand.COMMAND_STATE_CONTINUE; 表示指令继续【默认】<br>
GameCommand.COMMAND_STATE_STOP; 表示指令终止<br>
GameCommand.COMMAND_STATE_NEED_INPUT; 表示指令需要等待玩家输入才能继续<br>

##### 参数
	triggerLineID 触发线ID，使用trigger的ID（关于触发线的概念可以参考CommandTrigger）
	player 玩家对象
	params 参数 执行的方法按顺序排列这些参数，比如[param1,param2] 则对应 customCommand_1(param1:any,param2:any)
	gameFunc [可选] 默认值=null 若存在，则会执行GameFunction里面的方法，否则需要创建相应的CommandExecuteGame函数





