# ClientPlayer 客户端玩家类
>每个玩家只有唯一的玩家类实例，可能是该类或其子类的实例（单机版有且只有一个玩家，所以只有一个实例）<br>单机版内核直接监听本地变量的改变<br>网络版内核的监听是通过RPC请求服务器监听变量，服务器每次发现变量改变后会同步给该玩家的客户端<br>&nbsp;&nbsp;-- 没有权限监听其他玩家的变量<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2019-06-03

**继承**  →[Player](/zh_hans/library/2d/common/player)<br>
**子类**  无<br>


## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[constructor](#constructor)**(isMyPlayer? : boolean)<br>构造函数
| **[addListenerPlayerVariable](#addlistenerplayervariable)**(type : number,  varID : number,  onChange : Callback,  isOnce? : boolean,  immediatelyCallback? : boolean): void<br>监听玩家变量
| **[removeListenerPlayerVariable](#removelistenerplayervariable)**(type : number,  varID : number,  onChange : Callback): void<br>取消监听玩家变量

## 详情



## constructor
###### **[constructor](#constructor)**(isMyPlayer? : boolean) :
构造函数
##### 参数
	isMyPlayer [可选] 默认值=false 是否是我的玩家（网络内核会存在其他的玩家）



## addListenerPlayerVariable
###### **[addListenerPlayerVariable](#addlistenerplayervariable)**(type : number,  varID : number,  onChange : Callback,  isOnce? : boolean,  immediatelyCallback? : boolean): void :
监听玩家变量<br>
单机版内核：直接监听本地变量的改变<br>
网络版内核：该变量首次监听时会与服务器-该编号的变量同步，其他非首次的监听直接来自客户端缓存<br>
>// 示例：监听我的玩家的10号数值变量，由于确定是数值变量，所以这里回调使用value:number确定是数值类型<br>
>Game.player.addListenerPlayerVariable(0,10,Callback.New((typeID:number,varID:number,value:number)=>{<br>
>&nbsp;&nbsp;&nbsp;// to do<br>
>},this))<br>
>


##### 参数
	type 0-变量 1-开关 2-字符串
	varID 变量ID
	onChange 当变量改变时回调 onChange(typeID:number,varID:number,value:number|string)
	isOnce [可选] 默认值=false 是否只监听一次
	immediatelyCallback [可选] 默认值=true 是否当前立刻回调一次，否则在下次该变量的值更改时才收到回调事件



## removeListenerPlayerVariable
###### **[removeListenerPlayerVariable](#removelistenerplayervariable)**(type : number,  varID : number,  onChange : Callback): void :
取消监听玩家变量<br>
单机版内核：直接取消监听本地变量的改变<br>
网络版内核：当所有监听该编号的变量都取消了的话则通知服务器-取消该编号变量的监听同步，当该变量改变时将不会发送给客户端同步消息
##### 参数
	type 0-变量 1-开关 2-字符串
	varID 变量ID
	onChange 当变量改变时的回调，必须传入监听玩家变量时的这个回调才能够取消





