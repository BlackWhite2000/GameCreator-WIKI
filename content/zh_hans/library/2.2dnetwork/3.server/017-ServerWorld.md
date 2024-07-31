---
title: ServerWorld 服务器世界
description: 包含世界自定义数据、全局变量等
---

> 主要维护人员：[Karson.DS](https://www.gamecreator.com.cn/user/1)<br>
> 创建时间：2018-07-18

## 关联性

- `继承` 无
- `子类` 无

## 说明

包含世界自定义数据、全局变量等

## Public 属性

|                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **[EVENT_STARTUP_COMPLETE](#event_startup_complete)** : string;<br>【静态】事件：服务器世界启动完毕 每个线程都会派发此事件，同时系统会开启允许登录 ServerWorld.isOpenGate=true |
| **isOpenGate** : boolean;<br>【静态】是否打开大门：允许登录 默认值=true                                                                                                        |
| **isStop** : boolean;<br>【静态】【只读】世界是否停止：当已执行重启或关闭服务器时                                                                                              |
| **[data](#data)** : typeof WorldData;<br>【静态】世界数据                                                                                                                      |
| **commonEventPages** : CommandPage[];<br>【静态】事件库事件的集合 id-CommandPage 默认值=[]                                                                                     |
| **uiCustomCommandPages** <br>【静态】ui事件集 id-CommandPage 0~N 默认值={}                                                                                                     |
| **[whenNoScene](#whennoscene)** : Callback;<br>【静态】当玩家进入的场景不存在时的回调函数 whenNoScene(player:ServerPlayer);                                                    |

## Public 方法

|                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **[dataWrite](#datawrite)**(func : Function,  args : any[]): void<br>【静态】世界自定义数据写入（即写ServerWorld.data）                                            |
| **[close](#close)**(onFin? : Callback): void<br>【静态】关闭世界                                                                                                   |
| **[restart](#restart)**(): void<br>【静态】重启世界                                                                                                                |
| **[kickPlayer](#kickplayer)**(uid : number): void<br>【静态】踢出玩家：从服务器将该玩家断开连接                                                                    |
| **[addPlayerToBlackList](#addplayertoblacklist)**(uid : number): void<br>【静态】玩家加入黑名单，无法登陆                                                          |
| **[removePlayerToBlackList](#removeplayertoblacklist)**(uid : number): void<br>【静态】玩家从黑名单移除                                                            |
| **[addServerFunction](#addserverfunction)**(classDomain : string,  functionName? : string): void<br>【静态】增加客户端允许RPC调用的服务器方法                      |
| **[setWorldVariableAccessible](#setworldvariableaccessible)**(type : number,  varID : number,  accessible : boolean): void<br>【静态】设置变量可获取至客户端的权限 |
| **[getWorldVariableAccessible](#getworldvariableaccessible)**(type : number,  varID : number): boolean<br>【静态】获得变量可获取至客户端的权限                     |
| **[setWorldVariable](#setworldvariable)**(varID : number,  value : number,  isNotice? : boolean): void<br>【静态】写入世界数值变量                                 |
| **[getWorldVariable](#getworldvariable)**(varID : number): number<br>【静态】读取世界变量                                                                          |
| **[setWorldSwitch](#setworldswitch)**(varID : number,  value : number,  isNotice? : boolean): void<br>【静态】写入世界开关                                         |
| **[getWorldSwitch](#getworldswitch)**(varID : number): number<br>【静态】读取世界开关                                                                              |
| **[setWorldString](#setworldstring)**(varID : number,  value : string,  isNotice? : boolean): void<br>【静态】写入世界字符串变量                                   |
| **[getWorldString](#getworldstring)**(varID : number): string<br>【静态】读取世界字符串变量                                                                        |
| **[addListenerVariable](#addlistenervariable)**(type : number,  verID : number,  onChange : Callback): void<br>【静态】监听当世界变量的改变时                      |
| **[removeListenerVariable](#removelistenervariable)**(type : number,  verID : number,  onChange : Callback): void<br>【静态】取消监听：当世界变量改变时            |

## 详情

### EVENT_STARTUP_COMPLETE

```ts
EVENT_STARTUP_COMPLETE : string;
```

【静态】事件：服务器世界启动完毕 每个线程都会派发此事件，同时系统会开启允许登录 ServerWorld.isOpenGate=true

如果执行的逻辑需要等待异步返回结果，则可以通过监听该事件执行逻辑时设置ServerWorld.isOpenGate=false，先关闭大门，

等待逻辑全部执行完毕再开门允许玩家登陆。（比如项目需要在游戏服务器启动时追加一些额外的逻辑处理）

```ts
EventUtils.addEventListener(ServerWorld,ServerWorld.EVENT_STARTUP_COMPLETE,Callback.New(()=>{
// to do
},this));
```

### data

```ts
data : typeof WorldData;
```

【静态】世界数据

可以直接读取，而写入的话需要通过 ServerWorld.dataWrite 否则写入未同步线程仅作为该线程临时数据使用（重启服务器则重置了）

### whenNoScene

```ts
whenNoScene : Callback;
```

【静态】当玩家进入的场景不存在时的回调函数 whenNoScene(player:ServerPlayer);

根据player.sceneID获取其当前所在的场景编号

## dataWrite

```ts
dataWrite(func : Function,  args : any[]): void :
```

【静态】世界自定义数据写入（即写ServerWorld.data）

由于GC内置的自定义世界数据每个线程都有一份，所以需要同步一下每个线程，而如果直接更改ServerWorld.data只能是临时写入，不会存档。

【注意事项】

- 方法内代码在其他线程是独立运行，所以不能依赖外部的变量，需要使用外部的数据应通过args传递过来
- 方法内不应该含有随机的因素，必须是确定的，否则同步有误
- 参数必须可经过JSON打包复制的纯数据

示例：

```ts
var a = new DataStructure_数据结构2();
a.AAA = MathUtils.rand(1000000000) + 1000000000;
a.BBB = 22222222
a.CCC = 33333333
var aaa = Math.random();
ServerWorld.dataWrite(function (a: DataStructure_数据结构2,aaa) {
ServerWorld.data.arr2.push(a);
ServerWorld.data.arr2[ServerWorld.data.arr2.length - 1].AAA = aaa;
}, [a,aaa]);
```

- #### 参数

  - `func` 执行的方法： 会在全线程都执行此方法
  - `args` 方法的参数

### close

```ts
close(onFin? : Callback): void :
```

【静态】关闭世界

- 玩家数据储存
- 场景数据储存
- 世界数据储存
- 关闭服务器

- #### 参数

  - `onFin` 关闭完成后回调

## restart

```ts
restart(): void :
```

【静态】重启世界

- 关闭世界
- 调用外部脚本以便重新启动

## kickPlayer

```ts
kickPlayer(uid : number): void :
```

【静态】踢出玩家：从服务器将该玩家断开连接

- #### 参数

  - `uid` 玩家唯一ID

## addPlayerToBlackList

```ts
addPlayerToBlackList(uid : number): void :
```

【静态】玩家加入黑名单，无法登陆

- #### 参数

  - `uid` 玩家唯一ID

## removePlayerToBlackList

```ts
removePlayerToBlackList(uid : number): void :
```

【静态】玩家从黑名单移除

- #### 参数

  - `uid` 玩家唯一ID

## addServerFunction

```ts
addServerFunction(classDomain : string,  functionName? : string): void :
```

【静态】增加客户端允许RPC调用的服务器方法

客户端可以通过ClientMsgSender.rpc直接调用服务器的方法并可以得到返回值，但需要服务器预先用此函数设置允许访问的权限

- #### 参数

  - `classDomain` 允许的域（类）
  - `functionName` [可选] 默认值=null 允许的方法，null则表示该域下所有方法均可使用

## setWorldVariableAccessible

```ts
setWorldVariableAccessible(type : number,  varID : number,  accessible : boolean): void :
```

【静态】设置变量可获取至客户端的权限

- #### 参数

  - `type` 0-全局变量 1-全局开关 2-全局字符串
  - `varID` 全局数值变量ID
  - `accessible` 是否可获取至客户端

## getWorldVariableAccessible

```ts
getWorldVariableAccessible(type : number,  varID : number): boolean :
```

【静态】获得变量可获取至客户端的权限

- #### 参数

  - `type` 0-全局变量 1-全局开关 2-全局字符串
  - `varID` 全局数值变量ID

- #### 返回

  - `boolean` 是否可获取至客户端

## setWorldVariable

```ts
setWorldVariable(varID : number,  value : number,  isNotice? : boolean): void :
```

【静态】写入世界数值变量

- #### 参数

  - `varID` 全局数值变量ID
  - `value` 值
  - `isNotice` [可选] 默认值=true 是否通知全部线程，以便全线程同步

## getWorldVariable

```ts
getWorldVariable(varID : number): number :
```

【静态】读取世界变量

- #### 参数

  - `varID` 全局数值变量ID

## setWorldSwitch

```ts
setWorldSwitch(varID : number,  value : number,  isNotice? : boolean): void :
```

【静态】写入世界开关

- #### 参数

  - `varID` 全局开关变量ID
  - `value` 值
  - `isNotice` [可选] 默认值=true 是否通知全部线程，以便全线程同步

## getWorldSwitch

```ts
getWorldSwitch(varID : number): number :
```

【静态】读取世界开关

- #### 参数

  - `varID` 全局开关变量ID

## setWorldString

```ts
setWorldString(varID : number,  value : string,  isNotice? : boolean): void :
```

【静态】写入世界字符串变量

- #### 参数

  - `varID` 全局字符串变量ID
  - `value` 值
  - `isNotice` [可选] 默认值=true 是否通知全部线程，以便全线程同步

## getWorldString

```ts
getWorldString(varID : number): string :
```

【静态】读取世界字符串变量

- #### 参数

  - `varID` 全局字符串变量ID

## addListenerVariable

```ts
addListenerVariable(type : number,  verID : number,  onChange : Callback): void :
```

【静态】监听当世界变量的改变时

- #### 参数

  - `type` 0-数值变量 1-开关变量 2-字符串变量
  - `verID` 变量ID
  - `onChange` onChange(type:number,varID:number,value:number|string);

## removeListenerVariable

```ts
removeListenerVariable(type : number,  verID : number,  onChange : Callback): void :
```

【静态】取消监听：当世界变量改变时

- #### 参数

  - `type` 0-数值变量 1-开关变量 2-字符串变量
  - `verID` 变量ID
  - `onChange` onChange(type:number,varID:number,value:number|string);
