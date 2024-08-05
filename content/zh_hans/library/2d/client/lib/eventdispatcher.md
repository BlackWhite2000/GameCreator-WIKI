# EventDispatcher 事件调度器
>可调度事件的所有类的基类。<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-01-01

**继承**  无<br>
**子类**  [TreeNode](/zh_hans/library/2d/client/lib/treenode)<br>


## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[hasListener](#haslistener)**(type : string): boolean<br>检查 EventDispatcher 对象是否为特定事件类型注册了任何侦听器。
| **[event](#event)**(type : string,  data? : any): boolean<br>派发事件。
| **[on](#on)**(type : string,  caller : any,  listener : Function,  args? : Array<any>): [EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知。
| **[once](#once)**(type : string,  caller : any,  listener : Function,  args? : Array<any>): [EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知，此侦听事件响应一次后自动移除。
| **[off](#off)**(type : string,  caller : any,  listener : Function,  onceOnly? : boolean): [EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>从 EventDispatcher 对象中删除侦听器。
| **[offAll](#offall)**(type? : string): [EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>从 EventDispatcher 对象中删除指定事件类型的所有侦听器。
| **[isMouseEvent](#ismouseevent)**(type : string): boolean<br>检测指定事件类型是否是鼠标事件。

## 详情



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
	data	（可选）回调数据。默认值=null 注意：如果是需要传递多个参数 p1,p2,p3,...可以使用数组结构如：[p1,p2,p3,...] ；如果需要回调单个参数 p 是一个数组，则需要使用结构如：[p]，其他的单个参数 p ，可以直接传入参数 p。

##### 返回
此事件类型是否有侦听者，如果有侦听者则值为 true，否则值为 false。

## on
###### **[on](#on)**(type : string,  caller : any,  listener : Function,  args? : Array<any>): [EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher) :
使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知。
##### 参数
	type		事件的类型。
	caller	事件侦听函数的执行域。
	listener	事件侦听函数。
	args		（可选）事件侦听函数的回调参数。默认值=null

##### 返回
此 EventDispatcher 对象。

## once
###### **[once](#once)**(type : string,  caller : any,  listener : Function,  args? : Array<any>): [EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher) :
使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知，此侦听事件响应一次后自动移除。
##### 参数
	type		事件的类型。
	caller	事件侦听函数的执行域。
	listener	事件侦听函数。
	args		（可选）事件侦听函数的回调参数。默认值=null

##### 返回
此 EventDispatcher 对象。

## off
###### **[off](#off)**(type : string,  caller : any,  listener : Function,  onceOnly? : boolean): [EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher) :
从 EventDispatcher 对象中删除侦听器。
##### 参数
	type		事件的类型。
	caller	事件侦听函数的执行域。
	listener	事件侦听函数。
	onceOnly	（可选）如果值为 true ,则只移除通过 once 方法添加的侦听器。默认值=false

##### 返回
此 EventDispatcher 对象。

## offAll
###### **[offAll](#offall)**(type? : string): [EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher) :
从 EventDispatcher 对象中删除指定事件类型的所有侦听器。
##### 参数
	type	（可选）事件类型，如果值为 null，则移除本对象所有类型的侦听器。默认值=null

##### 返回
此 EventDispatcher 对象。

## isMouseEvent
###### **[isMouseEvent](#ismouseevent)**(type : string): boolean :
检测指定事件类型是否是鼠标事件。<br>
@param	type 事件的类型。<br>
@return	如果是鼠标事件，则值为 true;否则，值为 false。





