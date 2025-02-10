---
title: SyncTask 同步任务工具类
---
>任务类型相同的只能按照顺序执行下去，在当前任务未完成前后面的任务都处于等待状态<br>使用方式：<br>var taskName = "我的同步任务1";<br>// 第1个同步任务，同类型的任务会等待该任务执行完毕再接着执行<br>new SyncTask(taskName, function () {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 第1个顺序任务逻辑<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xxxxxxxxxxxxx<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 第1个顺序任务执行完毕<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SyncTask.taskOver(taskName);<br>});<br>// 第2个同步任务，同类型的任务会等待该任务执行完毕再接着执行<br>new SyncTask(taskName, function () {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 第2个顺序任务逻辑<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;xxxxxxxxxxxxx<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 第2个顺序任务执行完毕<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SyncTask.taskOver(taskName);<br>});<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-01-01

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div> |
| ---------------------------------------------------- |
| **func** : Function;<br>方法                         |
| **arg** : any[];<br>参数                             |
| **thisPtr** : any;<br>this指针                       |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[constructor](#constructor)**(taskName : string,  func? : Function,  arg? : any[],  thisPtr? : any,  isConver? : boolean,  jumpQuere? : boolean)<br>同步任务执行 构造函数 |
| **[taskOver](#taskover)**(taskName : string): void<br>[静态]通知某个类型任务完成，直接进行同类型的下一个任务                                                                |
| **[clear](#clear)**(taskName : string): void<br>[静态]清除任务                                                                                                              |

## 详情



## constructor
###### **[constructor](#constructor)**(taskName : string,  func? : Function,  arg? : any[],  thisPtr? : any,  isConver? : boolean,  jumpQuere? : boolean) :
同步任务执行 构造函数
##### 参数
	taskName 任务名称
	func 执行的方法 [可选] 默认值=null
	arg 参数 [可选] 默认值=null 回调函数携带的参数
	thisPtr 作用域 [可选] 默认值=null
	isConver [可选] 默认值=false 会否重复的任务覆盖掉
	jumpQuere [可选] 默认值=false 是否插队，插队的话则插到最前方



## taskOver
###### **[taskOver](#taskover)**(taskName : string): void :
[静态]通知某个类型任务完成，直接进行同类型的下一个任务
##### 参数
	taskName 任务名称



## clear
###### **[clear](#clear)**(taskName : string): void :
[静态]清除任务
##### 参数
	taskName 任务名称





