---
title: Callback 回调方法
---
>一般用于各种回调函数中为了携带执行域和参数<br>【使用方法】：<br>Callback.New(this.xxx,this,[1,2,3]);<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-01-01

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                    |
| ----------------------------------------------------------------------- |
| **EMPTY** : Callback;<br>[静态]空的单一实例，一般用于必须回调中的空实现 |
| **caller** : any;<br>调用者执行域                                       |
| **callbackFunc** : Function;<br>回调方法                                |
| **args** : any[];<br>回调参数                                           |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                                                                        |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[run](#run)**(): any<br>运行                                                                                                                                                                                               |
| **[runWith](#runwith)**(addArgs : any[]): any<br>运行追加额外的参数 追加的参数在回调时总是在后面                                                                                                                             |
| **[delayRun](#delayrun)**(delay : number,  delayFunc? : Function,  args? : any[]): [Callback](/zh_hans/library/2d/common/datastructures/callback)<br>延迟执行                                                                |
| **[delayRunConver](#delayrunconver)**(delay : number,  delayFunc? : Function,  clearDelayFunc? : Function,  args? : any[]): [Callback](/zh_hans/library/2d/common/datastructures/callback)<br>延迟执行，但会覆盖掉之前的延迟 |
| **[stopDelay](#stopdelay)**(clearDelayFunc? : Function): void<br>停止延期                                                                                                                                                    |
| **[New](#new)**(callbackFunc : Function,  caller : any,  args? : any[]): [Callback](/zh_hans/library/2d/common/datastructures/callback)<br>[静态]新建回调对象，同new CallBack                                                |
| **[CallLater](#calllater)**(func : Function,  caller : any,  args? : any[],  delay? : number): void<br>[静态]延迟到下一帧执行，保证相同的方法和作用域只能执行一次，可用于优化效率                                            |
| **[CallLaterBeforeRender](#calllaterbeforerender)**(func : Function,  caller : any,  args? : any[]): void<br>[静态]延迟到下一次渲染时执行，保证相同的方法和作用域只能执行一次，可用于优化效率                                |

## 详情



## run
###### **[run](#run)**(): any :
运行
##### 参数
	addArgs [可选] 默认值=null 追加的参数



## runWith
###### **[runWith](#runwith)**(addArgs : any[]): any :
运行追加额外的参数 追加的参数在回调时总是在后面
##### 参数
	addArgs  追加的参数



## delayRun
###### **[delayRun](#delayrun)**(delay : number,  delayFunc? : Function,  args? : any[]): [Callback](/zh_hans/library/2d/common/datastructures/callback) :
延迟执行
##### 参数
	delay 延迟的ms数
	delayFunc [可选] 默认值=null 延迟使用的函数，默认setTimeout，可更换,如setFrameout
	args [可选] 默认值=null 参数

##### 返回
[Callback]

## delayRunConver
###### **[delayRunConver](#delayrunconver)**(delay : number,  delayFunc? : Function,  clearDelayFunc? : Function,  args? : any[]): [Callback](/zh_hans/library/2d/common/datastructures/callback) :
延迟执行，但会覆盖掉之前的延迟
##### 参数
	delay 延迟的ms数
	delayFunc [可选] 默认值=null 延迟使用的函数，默认setTimeout，可更换,如setFrameout
	clearDelayFunc [可选] 默认值=null 清理的延迟函数，默认 clearTimeout，可更换,如setFrameout
	args [可选] 默认值=null 参数

##### 返回
[Callback]

## stopDelay
###### **[stopDelay](#stopdelay)**(clearDelayFunc? : Function): void :
停止延期
##### 参数
	clearDelayFunc [可选] 默认值=null 清理的延迟函数，默认 clearTimeout，可更换



## New
###### **[New](#new)**(callbackFunc : Function,  caller : any,  args? : any[]): [Callback](/zh_hans/library/2d/common/datastructures/callback) :
[静态]新建回调对象，同new CallBack
##### 参数
	callbackFunc 回调方法
	caller 执行域
	args [可选] 默认值=null 携带的参数

##### 返回
[Callback]

## CallLater
###### **[CallLater](#calllater)**(func : Function,  caller : any,  args? : any[],  delay? : number): void :
[静态]延迟到下一帧执行，保证相同的方法和作用域只能执行一次，可用于优化效率<br>
相同的方法和作用域调用此方法，只有第一次生效，其中args参数会替换成最近一次调用的参数<br>
该方法可能在下一次渲染前也可能在下一帧渲染后执行，如果必须确定在下次渲染前就要执行可使用CallLaterBeforeRender<br>
内部使用setTimeout-0ms实现
##### 参数
	func 执行的方法
	caller 作用域
	args [可选] 默认值=null 附带的参数
	delay [可选] 默认值=0 延迟的ms



## CallLaterBeforeRender
###### **[CallLaterBeforeRender](#calllaterbeforerender)**(func : Function,  caller : any,  args? : any[]): void :
[静态]延迟到下一次渲染时执行，保证相同的方法和作用域只能执行一次，可用于优化效率<br>
相同的方法和作用域调用此方法，只有第一次生效，其中args参数会替换成最近一次调用的参数
##### 参数
	func 执行的方法
	caller 作用域
	args [可选] 默认值=null 附带的参数





