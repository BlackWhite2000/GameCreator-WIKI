---
title: GameImageLayer 图像层
---
><br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2020-11-30

**继承**  →GameSprite<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                               |
| ---------------------------------------------------------------------------------- |
| **camera** : Camera;<br>相机                                                       |
| **[imageSprites](#imagesprites)** : any;<br>[静态]记录全部通道的显示对象 默认值={} |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[updateFrame](#updateframe)**(force? : boolean): void<br>刷新帧，如果更改了相机设置希望在当前帧立刻刷新的话可自行调用该函数，否则会在帧刷中自动每帧调用（意味着下一帧才调用）          |
| **[setImageSprite](#setimagesprite)**(passageID : number,  sp : GameSprite): void<br>[静态]设置通道显示对象                                                                              |
| **[getImageSprite](#getimagesprite)**(passageID : number): GameSprite<br>[静态]获取占用该通道的显示对象                                                                                  |
| **[deletePassage](#deletepassage)**(passageID : number): void<br>[静态]删除通道                                                                                                          |
| **[regPassageFrameUpdate](#regpassageframeupdate)**(passageID : number,  onUpdate : Function,  thisPtr : any,  args? : any[],  sign? : string): void<br>[静态]注册帧刷效果，支持注册多个 |
| **[clearPassageFrameUpdate](#clearpassageframeupdate)**(passageID : number,  sign? : string): void<br>[静态]清理通道的帧刷函数效果                                                       |
| **[getPassageFrameUpdates](#getpassageframeupdates)**(): any<br>[静态]获取通道帧刷函数                                                                                                   |

## 详情

### imageSprites
###### imageSprites : any;
[静态]记录全部通道的显示对象 默认值={}<br>
格式 { [passageID: string]: { displayObject: GameSprite } }


## updateFrame
###### **[updateFrame](#updateframe)**(force? : boolean): void :
刷新帧，如果更改了相机设置希望在当前帧立刻刷新的话可自行调用该函数，否则会在帧刷中自动每帧调用（意味着下一帧才调用）
##### 参数
	force [可选] 默认值=false 强制刷新，让图层内的对象全部刷新相机的设置
	&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（默认情况下系统会自动根据是否更新了相机来决定是否刷新子对象相对于相机的位置）



## setImageSprite
###### **[setImageSprite](#setimagesprite)**(passageID : number,  sp : GameSprite): void :
[静态]设置通道显示对象
##### 参数
	passageID 通道编号
	sp 显示对象



## getImageSprite
###### **[getImageSprite](#getimagesprite)**(passageID : number): GameSprite :
[静态]获取占用该通道的显示对象
##### 参数
	passageID 通道编号



## deletePassage
###### **[deletePassage](#deletepassage)**(passageID : number): void :
[静态]删除通道<br>
-- 清理显示对象
##### 参数
	passageID 通道编号



## regPassageFrameUpdate
###### **[regPassageFrameUpdate](#regpassageframeupdate)**(passageID : number,  onUpdate : Function,  thisPtr : any,  args? : any[],  sign? : string): void :
[静态]注册帧刷效果，支持注册多个
##### 参数
	passageID 通道编号
	onUpdate 帧刷函数
	thisPtr 作用域
	args [可选] 默认值=null 自定义参数
	sign [可选] 默认值=null 标识，清理时可清理指定的标识



## clearPassageFrameUpdate
###### **[clearPassageFrameUpdate](#clearpassageframeupdate)**(passageID : number,  sign? : string): void :
[静态]清理通道的帧刷函数效果
##### 参数
	passageID 通道编号
	sign [可选] 默认值=null 标识，清理时可清理指定的标识



## getPassageFrameUpdates
###### **[getPassageFrameUpdates](#getpassageframeupdates)**(): any :
[静态]获取通道帧刷函数<br>
-- passageID 通道编号<br>
-- onUpdate 帧刷函数<br>
-- thisPtr 作用域<br>
-- sign 标识<br>
-- args 自定义参数

##### 返回
{ [passageID: string]: { onUpdate: Function, thisPtr: any, sign: string, args: any[] }[] }



