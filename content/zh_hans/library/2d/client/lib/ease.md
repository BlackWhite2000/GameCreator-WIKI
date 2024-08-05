# Ease 缓动函数
>定义了缓动函数，以便实现[Tween]中的缓动效果，使用Tween方式的相关代码可以参考Tween<br>== 相关代码 ==<br>// 获取线性过渡中在100~1000中的50%时的状态值<br>var totalTime = 1000;<br>var currentTime = 500; // 即进行到了50%的程度，同时该值也可以大于totalTime，即超过100%<br>var start = 100;<br>var end = 1000;<br>var v = Ease.linearNone(currentTime,start,end-start,totalTime);<br>alert(v); // 550，即（1000-100）*(500/1000) + 100 = 550<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-01-01

**继承**  无<br>
**子类**  无<br>


## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[linearNone](#linearnone)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]定义无加速持续运动。
| **[linearIn](#linearin)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]定义无加速持续运动。
| **[linearInOut](#linearinout)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]定义无加速持续运动。
| **[linearOut](#linearout)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]定义无加速持续运动。
| **[bounceIn](#bouncein)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]方法以零速率开始运动，然后在执行时加快运动速度。
| **[bounceInOut](#bounceinout)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
| **[bounceOut](#bounceout)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
| **[backIn](#backin)**(t : number,  b : number,  c : number,  d : number,  s? : number): number<br>[静态]开始时往后运动，然后反向朝目标移动。
| **[backInOut](#backinout)**(t : number,  b : number,  c : number,  d : number,  s? : number): number<br>[静态]开始运动时是向后跟踪，再倒转方向并朝目标移动，稍微过冲目标，然后再次倒转方向，回来朝目标移动。
| **[backOut](#backout)**(t : number,  b : number,  c : number,  d : number,  s? : number): number<br>[静态]开始运动时是朝目标移动，稍微过冲，再倒转方向回来朝着目标。
| **[elasticIn](#elasticin)**(t : number,  b : number,  c : number,  d : number,  a? : number,  p? : number): number<br>[静态]方法以零速率开始运动，然后在执行时加快运动速度。
| **[elasticInOut](#elasticinout)**(t : number,  b : number,  c : number,  d : number,  a? : number,  p? : number): number<br>[静态]开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
| **[elasticOut](#elasticout)**(t : number,  b : number,  c : number,  d : number,  a? : number,  p? : number): number<br>[静态]以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
| **[strongIn](#strongin)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]以零速率开始运动，然后在执行时加快运动速度。
| **[strongInOut](#stronginout)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
| **[strongOut](#strongout)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
| **[sineInOut](#sineinout)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
| **[sineIn](#sinein)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]以零速率开始运动，然后在执行时加快运动速度。
| **[sineOut](#sineout)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
| **[quintIn](#quintin)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]以零速率开始运动，然后在执行时加快运动速度。
| **[quintInOut](#quintinout)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
| **[quintOut](#quintout)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
| **[quartIn](#quartin)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]方法以零速率开始运动，然后在执行时加快运动速度。
| **[quartInOut](#quartinout)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
| **[quartOut](#quartout)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
| **[cubicIn](#cubicin)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]方法以零速率开始运动，然后在执行时加快运动速度。
| **[cubicInOut](#cubicinout)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
| **[cubicOut](#cubicout)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
| **[quadIn](#quadin)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]方法以零速率开始运动，然后在执行时加快运动速度。
| **[quadInOut](#quadinout)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
| **[quadOut](#quadout)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
| **[expoIn](#expoin)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]方法以零速率开始运动，然后在执行时加快运动速度。
| **[expoInOut](#expoinout)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
| **[expoOut](#expoout)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。
| **[circIn](#circin)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]方法以零速率开始运动，然后在执行时加快运动速度。
| **[circInOut](#circinout)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]开始运动时速率为零，先对运动进行加速，再减速直到速率为零。
| **[circOut](#circout)**(t : number,  b : number,  c : number,  d : number): number<br>[静态]以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。

## 详情



## linearNone
###### **[linearNone](#linearnone)**(t : number,  b : number,  c : number,  d : number): number :
[静态]定义无加速持续运动。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## linearIn
###### **[linearIn](#linearin)**(t : number,  b : number,  c : number,  d : number): number :
[静态]定义无加速持续运动。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## linearInOut
###### **[linearInOut](#linearinout)**(t : number,  b : number,  c : number,  d : number): number :
[静态]定义无加速持续运动。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## linearOut
###### **[linearOut](#linearout)**(t : number,  b : number,  c : number,  d : number): number :
[静态]定义无加速持续运动。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## bounceIn
###### **[bounceIn](#bouncein)**(t : number,  b : number,  c : number,  d : number): number :
[静态]方法以零速率开始运动，然后在执行时加快运动速度。<br>
它的运动是类似一个球落向地板又弹起后，几次逐渐减小的回弹运动。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## bounceInOut
###### **[bounceInOut](#bounceinout)**(t : number,  b : number,  c : number,  d : number): number :
[静态]开始运动时速率为零，先对运动进行加速，再减速直到速率为零。<br>
它的运动是类似一个球落向地板又弹起后，几次逐渐减小的回弹运动。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## bounceOut
###### **[bounceOut](#bounceout)**(t : number,  b : number,  c : number,  d : number): number :
[静态]以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。<br>
它的运动是类似一个球落向地板又弹起后，几次逐渐减小的回弹运动。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## backIn
###### **[backIn](#backin)**(t : number,  b : number,  c : number,  d : number,  s? : number): number :
[静态]开始时往后运动，然后反向朝目标移动。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。<br>
@param	s 指定过冲量，此处数值越大，过冲越大。

##### 返回
指定时间的插补属性的值。

## backInOut
###### **[backInOut](#backinout)**(t : number,  b : number,  c : number,  d : number,  s? : number): number :
[静态]开始运动时是向后跟踪，再倒转方向并朝目标移动，稍微过冲目标，然后再次倒转方向，回来朝目标移动。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。<br>
@param	s 指定过冲量，此处数值越大，过冲越大。

##### 返回
指定时间的插补属性的值。

## backOut
###### **[backOut](#backout)**(t : number,  b : number,  c : number,  d : number,  s? : number): number :
[静态]开始运动时是朝目标移动，稍微过冲，再倒转方向回来朝着目标。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。<br>
@param	s 指定过冲量，此处数值越大，过冲越大。

##### 返回
指定时间的插补属性的值。

## elasticIn
###### **[elasticIn](#elasticin)**(t : number,  b : number,  c : number,  d : number,  a? : number,  p? : number): number :
[静态]方法以零速率开始运动，然后在执行时加快运动速度。<br>
其中的运动由按照指数方式衰减的正弦波来定义。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。<br>
@param	a 指定正弦波的幅度。<br>
@param	p 指定正弦波的周期。

##### 返回
指定时间的插补属性的值。

## elasticInOut
###### **[elasticInOut](#elasticinout)**(t : number,  b : number,  c : number,  d : number,  a? : number,  p? : number): number :
[静态]开始运动时速率为零，先对运动进行加速，再减速直到速率为零。<br>
其中的运动由按照指数方式衰减的正弦波来定义。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。<br>
@param	a 指定正弦波的幅度。<br>
@param	p 指定正弦波的周期。

##### 返回
指定时间的插补属性的值。

## elasticOut
###### **[elasticOut](#elasticout)**(t : number,  b : number,  c : number,  d : number,  a? : number,  p? : number): number :
[静态]以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。<br>
其中的运动由按照指数方式衰减的正弦波来定义。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。<br>
@param	a 指定正弦波的幅度。<br>
@param	p 指定正弦波的周期。

##### 返回
指定时间的插补属性的值。

## strongIn
###### **[strongIn](#strongin)**(t : number,  b : number,  c : number,  d : number): number :
[静态]以零速率开始运动，然后在执行时加快运动速度。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## strongInOut
###### **[strongInOut](#stronginout)**(t : number,  b : number,  c : number,  d : number): number :
[静态]开始运动时速率为零，先对运动进行加速，再减速直到速率为零。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## strongOut
###### **[strongOut](#strongout)**(t : number,  b : number,  c : number,  d : number): number :
[静态]以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## sineInOut
###### **[sineInOut](#sineinout)**(t : number,  b : number,  c : number,  d : number): number :
[静态]开始运动时速率为零，先对运动进行加速，再减速直到速率为零。<br>
Sine 缓动方程中的运动加速度小于 Quad 方程中的运动加速度。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## sineIn
###### **[sineIn](#sinein)**(t : number,  b : number,  c : number,  d : number): number :
[静态]以零速率开始运动，然后在执行时加快运动速度。<br>
Sine 缓动方程中的运动加速度小于 Quad 方程中的运动加速度。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## sineOut
###### **[sineOut](#sineout)**(t : number,  b : number,  c : number,  d : number): number :
[静态]以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。<br>
Sine 缓动方程中的运动加速度小于 Quad 方程中的运动加速度。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## quintIn
###### **[quintIn](#quintin)**(t : number,  b : number,  c : number,  d : number): number :
[静态]以零速率开始运动，然后在执行时加快运动速度。<br>
Quint 缓动方程的运动加速大于 Quart 缓动方程。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## quintInOut
###### **[quintInOut](#quintinout)**(t : number,  b : number,  c : number,  d : number): number :
[静态]开始运动时速率为零，先对运动进行加速，再减速直到速率为零。<br>
Quint 缓动方程的运动加速大于 Quart 缓动方程。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## quintOut
###### **[quintOut](#quintout)**(t : number,  b : number,  c : number,  d : number): number :
[静态]以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。<br>
Quint 缓动方程的运动加速大于 Quart 缓动方程。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## quartIn
###### **[quartIn](#quartin)**(t : number,  b : number,  c : number,  d : number): number :
[静态]方法以零速率开始运动，然后在执行时加快运动速度。<br>
Quart 缓动方程的运动加速大于 Cubic 缓动方程。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## quartInOut
###### **[quartInOut](#quartinout)**(t : number,  b : number,  c : number,  d : number): number :
[静态]开始运动时速率为零，先对运动进行加速，再减速直到速率为零。<br>
Quart 缓动方程的运动加速大于 Cubic 缓动方程。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## quartOut
###### **[quartOut](#quartout)**(t : number,  b : number,  c : number,  d : number): number :
[静态]以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。<br>
Quart 缓动方程的运动加速大于 Cubic 缓动方程。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## cubicIn
###### **[cubicIn](#cubicin)**(t : number,  b : number,  c : number,  d : number): number :
[静态]方法以零速率开始运动，然后在执行时加快运动速度。<br>
Cubic 缓动方程的运动加速大于 Quad 缓动方程。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## cubicInOut
###### **[cubicInOut](#cubicinout)**(t : number,  b : number,  c : number,  d : number): number :
[静态]开始运动时速率为零，先对运动进行加速，再减速直到速率为零。<br>
Cubic 缓动方程的运动加速大于 Quad 缓动方程。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## cubicOut
###### **[cubicOut](#cubicout)**(t : number,  b : number,  c : number,  d : number): number :
[静态]以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。<br>
Cubic 缓动方程的运动加速大于 Quad 缓动方程。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## quadIn
###### **[quadIn](#quadin)**(t : number,  b : number,  c : number,  d : number): number :
[静态]方法以零速率开始运动，然后在执行时加快运动速度。<br>
Quad 缓动方程中的运动加速度等于 100% 缓动的时间轴补间的运动加速度，并且显著小于 Cubic 缓动方程中的运动加速度。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## quadInOut
###### **[quadInOut](#quadinout)**(t : number,  b : number,  c : number,  d : number): number :
[静态]开始运动时速率为零，先对运动进行加速，再减速直到速率为零。<br>
Quad 缓动方程中的运动加速度等于 100% 缓动的时间轴补间的运动加速度，并且显著小于 Cubic 缓动方程中的运动加速度。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## quadOut
###### **[quadOut](#quadout)**(t : number,  b : number,  c : number,  d : number): number :
[静态]以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。<br>
Quad 缓动方程中的运动加速度等于 100% 缓动的时间轴补间的运动加速度，并且显著小于 Cubic 缓动方程中的运动加速度。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## expoIn
###### **[expoIn](#expoin)**(t : number,  b : number,  c : number,  d : number): number :
[静态]方法以零速率开始运动，然后在执行时加快运动速度。<br>
其中每个时间间隔是剩余距离减去一个固定比例部分。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## expoInOut
###### **[expoInOut](#expoinout)**(t : number,  b : number,  c : number,  d : number): number :
[静态]开始运动时速率为零，先对运动进行加速，再减速直到速率为零。<br>
其中每个时间间隔是剩余距离减去一个固定比例部分。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## expoOut
###### **[expoOut](#expoout)**(t : number,  b : number,  c : number,  d : number): number :
[静态]以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。<br>
其中每个时间间隔是剩余距离减去一个固定比例部分。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## circIn
###### **[circIn](#circin)**(t : number,  b : number,  c : number,  d : number): number :
[静态]方法以零速率开始运动，然后在执行时加快运动速度。<br>
缓动方程的运动加速会产生突然的速率变化。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## circInOut
###### **[circInOut](#circinout)**(t : number,  b : number,  c : number,  d : number): number :
[静态]开始运动时速率为零，先对运动进行加速，再减速直到速率为零。<br>
缓动方程的运动加速会产生突然的速率变化。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。

## circOut
###### **[circOut](#circout)**(t : number,  b : number,  c : number,  d : number): number :
[静态]以较快速度开始运动，然后在执行时减慢运动速度，直至速率为零。<br>
缓动方程的运动加速会产生突然的速率变化。<br>
@param	t 指定当前时间，介于 0 和持续时间之间（包括二者）。<br>
@param	b 指定动画属性的初始值。<br>
@param	c 指定动画属性的更改总计。<br>
@param	d 指定运动的持续时间。

##### 返回
指定时间的插补属性的值。



