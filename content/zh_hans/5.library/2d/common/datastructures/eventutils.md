---
title:  EventUtils 通用事件管理器
---
>与客户端的EventDispatcher区别是可以支持任意的对象派发和接收事件<br>但需要注意的是销毁对象时需要调用 EventUtils.clear();，否则使用了该事件管理器<br>注册事件的对象会永久在这里记录着从而导致内存泄漏（即无用的资源不断堆积导致内存占用过高）。<br>通用规则：一般格式 EVENT_????? 的事件都使用EventUtils，如CommandTrigger.EVENT_START<br>使用方法一：<br>&nbsp;EventUtils.addEventListener(obj,XXX.EVENT_XXX,Callback.New((参数1,参数2)=>{<br>&nbsp;&nbsp;&nbsp;// 逻辑<br>&nbsp;},this));<br>使用方法二：<br>&nbsp;EventUtils.addEventListenerFunction(obj,XXX.EVENT_XXX,(参数1,参数2)=>{<br>&nbsp;&nbsp;&nbsp;// 逻辑<br>&nbsp;},this);<br>&nbsp;// 在某处满足条件时则：（其中参数可以自定义传递）<br>&nbsp;EventUtils.happen(obj,XXX.EVENT_XXX,[参数1,参数2]);<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-08-22

**继承**  无<br>
**子类**  无<br>


## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[addEventListener](#addeventlistener)**(obj : any,  type : string,  callBack : [Callback](/zh_hans/library/2d/common/datastructures/callback),  isOnce? : boolean): void<br>[静态]注册事件          |
| **[addEventListenerFunction](#addeventlistenerfunction)**(obj : any,  type : string,  onHappen : Function,  thisPtr : any,  args? : any[],  isOnce? : boolean): void<br>[静态]注册事件-函数和作用域版 |
| **[removeEventListener](#removeeventlistener)**(obj : any,  type : string,  callBack : [Callback](/zh_hans/library/2d/common/datastructures/callback)): void<br>[静态]移除事件                        |
| **[removeEventListenerFunction](#removeeventlistenerfunction)**(obj : any,  type : string,  onHappen : Function,  thisPtr : any): void<br>[静态]移除事件-函数和作用域版                               |
| **[happen](#happen)**(obj : any,  type : string,  args? : any[]): void<br>[静态]派发事件，若注册时存在参数的话参数优先为注册的参数，再追加这里派发的参数args                                          |
| **[clear](#clear)**(obj : any,  type? : string): void<br>[静态]清空事件                                                                                                                               |

## 详情



## addEventListener
###### **[addEventListener](#addeventlistener)**(obj : any,  type : string,  callBack : [Callback](/zh_hans/library/2d/common/datastructures/callback),  isOnce? : boolean): void :
[静态]注册事件
##### 参数
	obj 事件对象
	type 类型
	callBack 回调
	isOnce [可选] 默认值=false 是否执行一次 默认 false



## addEventListenerFunction
###### **[addEventListenerFunction](#addeventlistenerfunction)**(obj : any,  type : string,  onHappen : Function,  thisPtr : any,  args? : any[],  isOnce? : boolean): void :
[静态]注册事件-函数和作用域版
##### 参数
	obj 事件对象
	type 类型
	onHappen 回调方法
	thisPtr 回调时作用域
	args [可选] 默认值=null 回调时参数
	isOnce [可选] 默认值=false 是否执行一次



## removeEventListener
###### **[removeEventListener](#removeeventlistener)**(obj : any,  type : string,  callBack : [Callback](/zh_hans/library/2d/common/datastructures/callback)): void :
[静态]移除事件
##### 参数
	obj 事件对象
	type 类型
	callBack 回调



## removeEventListenerFunction
###### **[removeEventListenerFunction](#removeeventlistenerfunction)**(obj : any,  type : string,  onHappen : Function,  thisPtr : any): void :
[静态]移除事件-函数和作用域版
##### 参数
	obj 事件对象
	type 类型
	onHappen 回调方法
	thisPtr 回调时作用域



## happen
###### **[happen](#happen)**(obj : any,  type : string,  args? : any[]): void :
[静态]派发事件，若注册时存在参数的话参数优先为注册的参数，再追加这里派发的参数args
##### 参数
	obj 事件对象
	type 类型
	args [可选] 默认值=null 自定义的参数，传递后可以出现在函数回调中



## clear
###### **[clear](#clear)**(obj : any,  type? : string): void :
[静态]清空事件
##### 参数
	obj 事件对象
	type [可选] 默认值=null 类型，如果为null表示全部





