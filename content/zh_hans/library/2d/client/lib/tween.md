# Tween 缓动类
>使用此类能够实现对目标对象属性的渐变。一般配合[Ease](/zh_hans/library/2d/client/lib/ease)使用<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-01-01

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **update** : Callback;<br>更新回调，缓动数值发生变化时，回调变化的值  |
| **progress** : number;<br>设置当前执行比例  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[to](#to)**(target : any,  props : any,  duration : number,  ease? : Function,  complete? : [Callback](/zh_hans/library/2d/common/datastructures/callback),  delay? : number,  coverBefore? : boolean): [Tween](/zh_hans/library/2d/client/lib/tween)<br>[静态]缓动对象的props属性到目标值。
| **[from](#from)**(target : any,  props : any,  duration : number,  ease? : Function,  complete? : [Callback](/zh_hans/library/2d/common/datastructures/callback),  delay? : number,  coverBefore? : boolean): [Tween](/zh_hans/library/2d/client/lib/tween)<br>[静态]从props属性，缓动到当前状态。
| **[to](#to)**(target : any,  props : any,  duration : number,  ease? : Function,  complete? : [Callback](/zh_hans/library/2d/common/datastructures/callback),  delay? : number,  coverBefore? : boolean): [Tween](/zh_hans/library/2d/client/lib/tween)<br>缓动对象的props属性到目标值。
| **[from](#from)**(target : any,  props : any,  duration : number,  ease? : Function,  complete? : [Callback](/zh_hans/library/2d/common/datastructures/callback),  delay? : number,  coverBefore? : boolean): [Tween](/zh_hans/library/2d/client/lib/tween)<br>从props属性，缓动到当前状态。
| **[complete](#complete)**(): void<br>立即结束缓动并到终点。
| **[pause](#pause)**(): void<br>暂停缓动，可以通过resume或restart重新开始。
| **[setStartTime](#setstarttime)**(startTime : number): void<br>设置开始时间。
| **[clearAll](#clearall)**(target : any): void<br>[静态]清理指定目标对象上的所有缓动。
| **[clear](#clear)**(tween : [Tween](/zh_hans/library/2d/client/lib/tween)): void<br>[静态]清理某个缓动。
| **[clear](#clear)**(): void<br>停止并清理当前缓动。
| **[restart](#restart)**(): void<br>重新开始暂停的缓动。
| **[resume](#resume)**(): void<br>恢复暂停的缓动。

## 详情



## to
###### **[to](#to)**(target : any,  props : any,  duration : number,  ease? : Function,  complete? : [Callback](/zh_hans/library/2d/common/datastructures/callback),  delay? : number,  coverBefore? : boolean): [Tween](/zh_hans/library/2d/client/lib/tween) :
[静态]缓动对象的props属性到目标值。<br>
@param	target 目标对象(即将更改属性值的对象)。<br>
@param	props 变化的属性列表，比如<br>
@param	duration 花费的时间，单位毫秒。<br>
@param	ease 缓动类型，默认为匀速运动。默认值=null<br>
@param	complete 结束回调函数。默认值=null<br>
@param	delay 延迟执行时间。默认值=0<br>
@param	coverBefore 是否覆盖之前的缓动。默认值=false<br>
@return	返回Tween对象。



## from
###### **[from](#from)**(target : any,  props : any,  duration : number,  ease? : Function,  complete? : [Callback](/zh_hans/library/2d/common/datastructures/callback),  delay? : number,  coverBefore? : boolean): [Tween](/zh_hans/library/2d/client/lib/tween) :
[静态]从props属性，缓动到当前状态。<br>
@param	target 目标对象(即将更改属性值的对象)。<br>
@param	props 变化的属性列表，比如<br>
@param	duration 花费的时间，单位毫秒。<br>
@param	ease 缓动类型，默认为匀速运动。默认值=null<br>
@param	complete 结束回调函数。默认值=null<br>
@param	delay 延迟执行时间。默认值=0<br>
@param	coverBefore 是否覆盖之前的缓动。默认值=false<br>
@return	返回Tween对象。



## to
###### **[to](#to)**(target : any,  props : any,  duration : number,  ease? : Function,  complete? : [Callback](/zh_hans/library/2d/common/datastructures/callback),  delay? : number,  coverBefore? : boolean): [Tween](/zh_hans/library/2d/client/lib/tween) :
缓动对象的props属性到目标值。<br>
@param	target 目标对象(即将更改属性值的对象)。<br>
@param	props 变化的属性列表，比如<br>
@param	duration 花费的时间，单位毫秒。<br>
@param	ease 缓动类型，默认为匀速运动。默认值=null<br>
@param	complete 结束回调函数。默认值=null<br>
@param	delay 延迟执行时间。默认值=0<br>
@param	coverBefore 是否覆盖之前的缓动。默认值=false<br>
@return	返回Tween对象。



## from
###### **[from](#from)**(target : any,  props : any,  duration : number,  ease? : Function,  complete? : [Callback](/zh_hans/library/2d/common/datastructures/callback),  delay? : number,  coverBefore? : boolean): [Tween](/zh_hans/library/2d/client/lib/tween) :
从props属性，缓动到当前状态。<br>
@param	target 目标对象(即将更改属性值的对象)。<br>
@param	props 变化的属性列表，比如<br>
@param	duration 花费的时间，单位毫秒。<br>
@param	ease 缓动类型，默认为匀速运动。默认值=null<br>
@param	complete 结束回调函数。默认值=null<br>
@param	delay 延迟执行时间。默认值=0<br>
@param	coverBefore 是否覆盖之前的缓动。默认值=0<br>
@return	返回Tween对象。



## complete
###### **[complete](#complete)**(): void :
立即结束缓动并到终点。



## pause
###### **[pause](#pause)**(): void :
暂停缓动，可以通过resume或restart重新开始。



## setStartTime
###### **[setStartTime](#setstarttime)**(startTime : number): void :
设置开始时间。<br>
@param	startTime 开始时间。



## clearAll
###### **[clearAll](#clearall)**(target : any): void :
[静态]清理指定目标对象上的所有缓动。<br>
@param	target 目标对象。



## clear
###### **[clear](#clear)**(tween : [Tween](/zh_hans/library/2d/client/lib/tween)): void :
[静态]清理某个缓动。<br>
@param	tween 缓动对象。



## clear
###### **[clear](#clear)**(): void :
停止并清理当前缓动。



## restart
###### **[restart](#restart)**(): void :
重新开始暂停的缓动。



## resume
###### **[resume](#resume)**(): void :
恢复暂停的缓动。





