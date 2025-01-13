# ClientWorld 游戏世界-客户端
>拥有特性：<br>-- 自定义世界属性：编辑器支持自定义设置世界属性，在这里通过ClientWorld.data访问<br>-- 访问全局变量（单机版内核表示二周目变量，网络版表示全体玩家公共的变量）<br>-- 单机内核对于事件库、全界面事件的管理<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2019-06-02

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **EVENT_INITED** : string;<br>[静态]事件：引擎初始化完毕（仅限于游戏运行时）默认值="ClientMain_EVENT_INITED"  |
| **EVENT_BEHAVIOR_VIEW_INITED** : string;<br>[静态]事件：行为编辑器预览端初始化完毕 默认值="BehaviorViewClientWorldInited"  |
| **data** : typeof WorldData;<br>[静态]世界自定义数据  |
| **variable** : Variable;<br>[静态]全局变量  |
| **commonEventPages** : CommandPage[];<br>[静态]事件库的事件集  |
| **[uiCustomCommandPages](#uicustomcommandpages)** : {<br>[静态]界面自定义事件集 id-CommandPage 0~N  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[addListenerVariable](#addlistenervariable)**(type : number,  varID : number,  onChange : Callback): void<br>[静态]监听当全局变量的改变时
| **[removeListenerVariable](#removelistenervariable)**(type : number,  varID : number,  onChange : Callback): void<br>[静态]取消监听：当全局变量改变时

## 详情

### uiCustomCommandPages
###### uiCustomCommandPages : {
[静态]界面自定义事件集 id-CommandPage 0~N<br>
比如界面拥有点击事件、鼠标悬停事件，那么同一个控件支持两个事件页 默认值={}


## addListenerVariable
###### **[addListenerVariable](#addlistenervariable)**(type : number,  varID : number,  onChange : Callback): void :
[静态]监听当全局变量的改变时<br>
>// 监听2号全局数值变量<br>
>ClientWorld.addListenerVariable(0, 2, Callback.New((type: number, varID: number, value: number) => {<br>
>&nbsp;&nbsp;&nbsp;// to do<br>
>}, this));<br>
>


##### 参数
	type 0-变量 1-开关 2-字符串
	onChange onChange(type:number,varID:number,value:number|string);



## removeListenerVariable
###### **[removeListenerVariable](#removelistenervariable)**(type : number,  varID : number,  onChange : Callback): void :
[静态]取消监听：当全局变量改变时<br>
>// 监听2号全局数值变量<br>
>var cb = Callback.New((type: number, varID: number, value: number) => {<br>
>&nbsp;&nbsp;&nbsp;// to do<br>
>}, this)<br>
>// 取消监听<br>
>ClientWorld.addListenerVariable(0, 2, cb);<br>
>


##### 参数
	type 0-变量 1-开关 2-字符串
	onChange





