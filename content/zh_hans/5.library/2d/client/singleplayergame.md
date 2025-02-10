---
title: SinglePlayerGame 单机游戏类
---
>对于单机游戏追加的初始化、存档取档等功能<br>-- 全局信息在游戏启动时会自动读取：如二周目变量、存档数信息、自定义全局数据等<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2020-02-02

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[EVENT_RECOVER_TRIGGER](#event_recover_trigger)** : string;<br>[静态]事件：读档后恢复的事件触发线                                                                                    |
| **[EVENT_ON_BEFORE_RECOVERY_DATA](#event_on_before_recovery_data)** : string;<br>[静态]事件：调用recoveryData前派发                                                                    |
| **[EVENT_ON_AFTER_RECOVERY_DATA](#event_on_after_recovery_data)** : string;<br>[静态]事件：调用recoveryData后派发                                                                      |
| **[syncSaveMode](#syncsavemode)** : boolean;<br>[静态]同步储存模式：存档时保证当前帧打包好存档数据，以便保证不会出现异步储存时数据发生了改变导致储存信息不太正确的问题（但也会更耗时） |
| **[saveConfig](#saveconfig)** : any;<br>[静态]存档配置 系统根据该存档配置进行储存一些基础的信息                                                                                        |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[newGame](#newgame)**(): void<br>[静态]新的游戏：新游戏会进入一个预设好的出生点场景，所有玩家变量和属性等都是初始值                                                                                            |
| **[getSaveInfo](#getsaveinfo)**()<br>[静态]获取全档案信息，返回全部存档列表信息                                                                                                                                  |
| **[getSaveInfoByID](#getsaveinfobyid)**(id : number)<br>[静态]获取档案列表中指定的存档信息                                                                                                                       |
| **[saveGlobalData](#saveglobaldata)**(onFin : Callback): void<br>[静态]储存自定义全局信息，全局数据在任何新的游戏、存档都通用的数据（比如用于储存用户的按键设置或多周目数据）                                    |
| **[deleteGlobalData](#deleteglobaldata)**(onFin? : Callback): void<br>[静态]删除全局自定义数据信息，同时也会删除二周目变量信息                                                                                   |
| **[saveGame](#savegame)**(index : number,  onFin : Callback,  indexInfo? : any): void<br>[静态]存档：支持事件执行中调用存档                                                                                      |
| **[loadGame](#loadgame)**(index : number,  onFin : Callback): void<br>[静态]读档 调用此函数会派发ClientScene.EVENT_IN_NEW_SCENE事件以便项目层实现进入相应的场景                                                  |
| **[delSaveFile](#delsavefile)**(index : number,  onFin : Callback): void<br>[静态]删除存档                                                                                                                       |
| **[getSceneObjectSwitch](#getsceneobjectswitch)**(sceneID : number,  soIndex : number): number[]<br>[静态]获取对象开关，一般用于更换场景后安装对象的开关，对象开关并不会随着切换场景而重置，并且也会存入至存档中 |
| **[recoveryData](#recoverydata)**(): void<br>[静态]恢复存档数据，一般以读档形式进入场景后恢复数据，包含：                                                                                                        |
| **[regSaveCustomData](#regsavecustomdata)**(dataName : string,  dataFunction : Callback): void<br>[静态]注册与存档绑定的自定义数据                                                                               |
| **[regSaveCustomGlobalData](#regsavecustomglobaldata)**(globalDataName : string,  globalDataFunction : Callback): void<br>[静态]注册与游戏绑定的自定义数据（与存档无关，游戏启动即会自动加载的数据 GC-LifeData） |
| **[getSaveCustomData](#getsavecustomdata)**(dataName : string): any<br>[静态]获取当前存档的自定义数据，读档后才能够获取                                                                                          |
| **[getSaveCustomGlobalData](#getsavecustomglobaldata)**(globalDataName : string): any<br>[静态]读取自定义全局数据                                                                                                |

## 详情

### EVENT_RECOVER_TRIGGER
###### EVENT_RECOVER_TRIGGER : string;
[静态]事件：读档后恢复的事件触发线<br>
可以在SinglePlayerGame.recoveryData调用前监听<br>
>EventUtils.addEventListenerFunction(SinglePlayerGame,SinglePlayerGame.EVENT_RECOVER_TRIGGER,(trigger:CommandTrigger)=>{<br>
>&nbsp;&nbsp;&nbsp;// to do<br>
>},this);<br>
>


### EVENT_ON_BEFORE_RECOVERY_DATA
###### EVENT_ON_BEFORE_RECOVERY_DATA : string;
[静态]事件：调用recoveryData前派发<br>
>EventUtils.addEventListenerFunction(SinglePlayerGame,SinglePlayerGame.EVENT_ON_BEFORE_RECOVERY_DATA,()=>{<br>
>&nbsp;&nbsp;&nbsp;// to do<br>
>},this);<br>
>


### EVENT_ON_AFTER_RECOVERY_DATA
###### EVENT_ON_AFTER_RECOVERY_DATA : string;
[静态]事件：调用recoveryData后派发<br>
>EventUtils.addEventListenerFunction(SinglePlayerGame,SinglePlayerGame.EVENT_ON_AFTER_RECOVERY_DATA,()=>{<br>
>&nbsp;&nbsp;&nbsp;// to do<br>
>},this);<br>
>


### syncSaveMode
###### syncSaveMode : boolean;
[静态]同步储存模式：存档时保证当前帧打包好存档数据，以便保证不会出现异步储存时数据发生了改变导致储存信息不太正确的问题（但也会更耗时）<br>
默认值 = true
### saveConfig
###### saveConfig : any;
[静态]存档配置 系统根据该存档配置进行储存一些基础的信息<br>
event: boolean; // 事件：存档时记录当前正在执行的事件，在读档时会恢复<br>
audioVolume: booean; // 全局音量：BGM/BGS/SE/TS 音量<br>
bgm: true; // 当前正在播放的BGM<br>
bgs: true; // 当前正在播放的BGS


## newGame
###### **[newGame](#newgame)**(): void :
[静态]新的游戏：新游戏会进入一个预设好的出生点场景，所有玩家变量和属性等都是初始值<br>
项目层可以通过监听事件来以新游戏的方式进入到场景里，参考[ClientScene](/zh_hans/library/2d/client/clientscene)的EVENT_IN_NEW_SCENE事件<br>
新游戏并不会清空全局数据：如二周目变量、自定义全局数据、存档目录信息等<br>
在调用该函数之前，默认的场景：Game.currentScene=ClientScene.EMPTY



## getSaveInfo
###### **[getSaveInfo](#getsaveinfo)**() :
[静态]获取全档案信息，返回全部存档列表信息

##### 返回
格式：<br>-- id = 存档的唯一编号，如[1,3,61] 表示存档了1号、3号、61号文件<br>-- now = 存档时unix时间戳<br>-- indexInfo = 自定义信息（比如存放地图名称，方便档案列表中玩家可以快速识别）

## getSaveInfoByID
###### **[getSaveInfoByID](#getsaveinfobyid)**(id : number) :
[静态]获取档案列表中指定的存档信息
##### 参数
	指定的存档信息（目录中的简单信息），null 表示无该存档

##### 返回
格式：<br>-- indexInfo 自定义信息<br>-- id = 存档的唯一编号，如[1,3,61] 表示对应存档1号、3号、61号<br>-- now = 存档时unix时间戳

## saveGlobalData
###### **[saveGlobalData](#saveglobaldata)**(onFin : Callback): void :
[静态]储存自定义全局信息，全局数据在任何新的游戏、存档都通用的数据（比如用于储存用户的按键设置或多周目数据）<br>
调用此函数也会同时储存二周目变量信息<br>
储存时会额外储存SinglePlayerGame.regSaveCustomGlobalData注册的自定义存档数据
##### 参数
	onFin 当储存完毕时 onFin(success:boolean)



## deleteGlobalData
###### **[deleteGlobalData](#deleteglobaldata)**(onFin? : Callback): void :
[静态]删除全局自定义数据信息，同时也会删除二周目变量信息
##### 参数
	onFin [可选] 默认值=null 删除完毕后回调



## saveGame
###### **[saveGame](#savegame)**(index : number,  onFin : Callback,  indexInfo? : any): void :
[静态]存档：支持事件执行中调用存档<br>
储存时会额外储存SinglePlayerGame.regSaveCustomData注册的自定义存档数据<br>
同时会储存全局数据（同调用了SinglePlayerGame.saveGlobalData）<br>
-- 设备储存（PC、移动端等设备以文件形式的储存）<br>
-- cookies 缓存（Web支持LocalStorage的形式储存）<br>
-- 云存档（GC游戏平台自动支持云存档服务）
##### 参数
	index 存档位置
	onFin 存档完毕时回调 onFin(success:boolean)
	indexInfo [可选] 默认值=null 存档目录用的信息，可被JSON化的信息（写入至LIFE-DATA，用于在读档列表中看到一些自定义的信息，可以使用SinglePlayerGame.getSaveInfo来获取）



## loadGame
###### **[loadGame](#loadgame)**(index : number,  onFin : Callback): void :
[静态]读档 调用此函数会派发ClientScene.EVENT_IN_NEW_SCENE事件以便项目层实现进入相应的场景
##### 参数
	index 读档位置
	onFin 读档完毕回调 onFin(success:boolean);



## delSaveFile
###### **[delSaveFile](#delsavefile)**(index : number,  onFin : Callback): void :
[静态]删除存档
##### 参数
	onFin 回调是否删除成功 onFin(success:boolean)



## getSceneObjectSwitch
###### **[getSceneObjectSwitch](#getsceneobjectswitch)**(sceneID : number,  soIndex : number): number[] :
[静态]获取对象开关，一般用于更换场景后安装对象的开关，对象开关并不会随着切换场景而重置，并且也会存入至存档中
##### 参数
	sceneID 场景ID
	soIndex 对象ID

##### 返回
[number]

## recoveryData
###### **[recoveryData](#recoverydata)**(): void :
[静态]恢复存档数据，一般以读档形式进入场景后恢复数据，包含：<br>
-- 所有对象的属性和行为（进行到一半的行为会接着继续执行）<br>
-- 所有图像系统的图片、立绘、动画的状态，正在执行中的任务也会得到恢复继续中途继续执行<br>
-- 所有正在执行的事件会恢复中途继续执行<br>
-- 所有已打开的界面和层次<br>
-- 恢复之前正在播放的BGM和BGS（背景音乐、场景音效）<br>
-- 恢复之前的场景雾效果、色调、镜头状态（即将调整，由于该功能会放到项目层实现，后期会以自定义储存数据的形式储存读取）



## regSaveCustomData
###### **[regSaveCustomData](#regsavecustomdata)**(dataName : string,  dataFunction : Callback): void :
[静态]注册与存档绑定的自定义数据<br>
&nbsp;&nbsp;--尽可能只储存数据而非图片等资源，以免导致存档文件过大，对部分环境造成影响（如steam云存档）
##### 参数
	dataName 数据名
	dataFunction 数据函数回调，通过此回调获取需要储存的数据



## regSaveCustomGlobalData
###### **[regSaveCustomGlobalData](#regsavecustomglobaldata)**(globalDataName : string,  globalDataFunction : Callback): void :
[静态]注册与游戏绑定的自定义数据（与存档无关，游戏启动即会自动加载的数据 GC-LifeData）<br>
&nbsp;&nbsp;--尽可能只储存数据而非图片等资源，以免导致存档文件过大，对部分环境造成影响（如steam云存档）
##### 参数
	globalDataName 全局数据名称
	globalDataFunction 数据函数回调，通过此回调获取需要储存的数据



## getSaveCustomData
###### **[getSaveCustomData](#getsavecustomdata)**(dataName : string): any :
[静态]获取当前存档的自定义数据，读档后才能够获取
##### 参数
	dataName 数据名



## getSaveCustomGlobalData
###### **[getSaveCustomGlobalData](#getsavecustomglobaldata)**(globalDataName : string): any :
[静态]读取自定义全局数据
##### 参数
	全局数据名称





