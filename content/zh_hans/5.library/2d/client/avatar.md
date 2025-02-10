---
title:  Avatar 行走图显示对象
---
>通过动作、部位、方向、帧来显示当前的图像<br>-- 支持的方向：1方向、2方向、3方向、4方向、5方向、8方向，其中1、3、5方向素材会自动水平翻转以便节约素材使用<br>-- 支持辅助体，以便项目层可视化制作动画击中点、不同方向弹道发射点等辅助用的数据<br>-- 支持换部件（换装）<br>-- 支持的通用事件：EventObject.LOADED<br>-- 方向系统参考小键盘以5为中心面向其他数字的方向： 1-左下 2-下 3-右下 4-左 6-右 7-左上 8-上 9-右上<br>&nbsp;&nbsp;&nbsp;7 8 9<br>&nbsp;&nbsp;&nbsp;4 5 6<br>&nbsp;&nbsp;&nbsp;1 2 3<br>使用方式：<br>var a = new Avatar();<br>a.id = 5;<br>相关事件<br>&nbsp;EventObject.LOADED 资源加载完成时候事件<br>&nbsp;Avatar.ACTION_PLAY_COMPLETED 动作播放完毕时<br>&nbsp;Avatar.CHANGE_ACTION 更改动作时 参数1：更改前的动作ID  参数2：更改后的动作ID<br>&nbsp;Avatar.RENDER 当确实到达了新的一帧后派发，本体如果没有实际的帧则不派发<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-12-06

**继承**  →GameSprite<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[ACTION_PLAY_COMPLETED](#action_play_completed)** : string;<br>[静态]事件：动作播放完毕事件，每当该动作播放完一次则抛出此事件，只有最后一帧确实按照帧率播放完毕了才抛出事件 |
| **[CHANGE_ACTION](#change_action)** : string;<br>[静态]事件：每当更换动作时派发                                                                                               |
| **[RENDER](#render)** : string;<br>[静态]事件：执行 onRender 时派发，当到达了新的一帧后派发该事件                                                                             |
| **[id](#id)** : number;<br>AVATAR唯一ID，对应编辑器中的预设制作数据ID，设置后当资源载入完毕后会抛出EventObject.LOADED                                                         |
| **[syncLoadWhenAssetExist](#syncloadwhenassetexist)** : boolean;<br>同步加载，当资源存在时，当前帧则立刻显示，默认为true                                                      |
| **[prerender](#prerender)** : boolean;<br>预渲染：开启此项保证在派发EventObject.LOADED前预先渲染一次以便保证此后能够立即呈现画面，不会因为资源较大而首次渲染卡顿一下          |
| **oriMode** : number;<br>[只读]方向模式 1 2 3 4 5 8 其中1、3、5会自动镜像翻转，来自编辑器中预设                                                                               |
| **isPlaying** : boolean;<br>[只读]获取是否处于播放中                                                                                                                          |
| **isLoading** : boolean;<br>[只读]获取是否处于加载中，设置id后如果资源未能加载完成则该状态为true                                                                              |
| **fps** : number;<br>帧率：每秒播放的帧数，比如fps=12则表示每秒播放12帧                                                                                                       |
| **fixedOrientation** : boolean;<br>固定朝向，开启此项后忽略更换朝向的请求，即设置orientation无效                                                                              |
| **[refObjs](#refobjs)** : {<br>辅助体 id => Helper 默认值={}                                                                                                                  |
| **[helperType](#helpertype)** : number;<br>辅助体模式                                                                                                                         |
| **picUrls** : string[];<br>使用到的全部图集，AvatarFrameImage中的index即对应该数组的位置 默认值=[]                                                                            |
| **currentFrameImage** : AvatarFrameImage;<br>当前的帧图（如有）                                                                                                               |
| **currentFrame** : number;<br>设置和获取当前帧：例如1则表示第一帧                                                                                                             |
| **totalFrame** : number;<br>[只读]总帧数（根据当前动作-方向来计算）                                                                                                           |
| **topAvatar** : Avatar;<br>根节点：部件可以使用此项获得自己的根节点，根节点的该属性是根节点自身                                                                               |
| **[orientation](#orientation)** : number;<br>设置朝向，参考小键盘方向，以5为中心面向其他数字的方向：1-左下 2-下 3-右下 4-左 6-右 7-左上 8-上 9-右上                           |
| **[actionIndex](#actionindex)** : number;<br>设置动作，根据索引，设置一个无效的动作将忽略此次更改                                                                             |
| **[actionID](#actionid)** : number;<br>设置动作，根据动作ID，设置一个无效的动作将忽略此次更改                                                                                 |
| **actionList** : AvatarAction[];<br>[只读]获取动作列表，必须加载完成才能够获取                                                                                                |
| **selfCenterlineAlignMode** : boolean;<br>根据自身中线对齐模式，启用后部件在该行走图因方向自动水平翻转时根据该行走图的中线对齐而非各自的中线                                  |
| **forceFlip** : boolean;<br>强制水平翻转                                                                                                                                      |
| **[PartLength](#partlength)** : number;<br>[只读]返回部位的个数（包含本体，如果只有本体则返回1）                                                                              |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[hasActionID](#hasactionid)**(actionID : number): boolean<br>是否存在动作                                                                                                                    |
| **[addPartByAvatar](#addpartbyavatar)**(partID : number,  part : [Avatar](/zh_hans/library/2d/client/avatar),  partIndex? : number): boolean<br>添加部位，根据部件对象，如果该部位已存在则忽略 |
| **[addPartByID](#addpartbyid)**(partID : number,  avatarID : number,  partIndex? : number): boolean<br>添加部位：根据指定的部件对应的数据库ID，如果该部位已存在则忽略                          |
| **[removePartByPartID](#removepartbypartid)**(partID : number,  disposeOldPart? : boolean): [Avatar](/zh_hans/library/2d/client/avatar)<br>移除部位：根据指定的部位ID                          |
| **[removePartByAvatar](#removepartbyavatar)**(part : [Avatar](/zh_hans/library/2d/client/avatar),  disposeOldPart? : boolean): boolean<br>移除部位：根据部件对象                               |
| **[changePartByAvatar](#changepartbyavatar)**(newPart : [Avatar](/zh_hans/library/2d/client/avatar),  partID : number): boolean<br>更换部位：根据新的部件和部位ID                              |
| **[changePartByAvatarID](#changepartbyavatarid)**(newAvatarID : number,  partID : number): boolean<br>更换部位：根据新的部件对应的数据库ID和部位ID                                             |
| **[getPartByPartID](#getpartbypartid)**(partID : number): [Avatar](/zh_hans/library/2d/client/avatar)<br>获取部位：根据部位ID                                                                  |
| **[getPartAt](#getpartat)**(partIndex : number): [Avatar](/zh_hans/library/2d/client/avatar)<br>根据部件所在的位置索引获取部件                                                                 |
| **[getPartByID](#getpartbyid)**(avatarID : number): [Avatar](/zh_hans/library/2d/client/avatar)<br>根据部位对应的数据库ID获取部件                                                              |
| **[getPartIndex](#getpartindex)**(avatar : [Avatar](/zh_hans/library/2d/client/avatar)): number<br>根据部件获取所在的索引                                                                      |
| **[gotoAndPlay](#gotoandplay)**(frame? : number): void<br>跳转某帧进行播放，越界会自动取模（如帧长度10，播放13则是播放3）                                                                      |
| **[play](#play)**(): void<br>在当前帧数开始播放                                                                                                                                                |
| **[stop](#stop)**(frame? : number): void<br>停止播放                                                                                                                                           |
| **[hitTestPoint](#hittestpoint)**(stageX : number,  stageY : number): boolean<br>像素级点击碰触检测                                                                                            |
| **[onRender](#onrender)**(autoPlay : boolean,  useMapping : boolean,  playFrame : number,  sendEvent : boolean,  forceRender : boolean): boolean<br>渲染（通常情况下无需主动调用）             |

## 详情

### ACTION_PLAY_COMPLETED
###### ACTION_PLAY_COMPLETED : string;
[静态]事件：动作播放完毕事件，每当该动作播放完一次则抛出此事件，只有最后一帧确实按照帧率播放完毕了才抛出事件<br>
>var a = new Avatar();<br>
>a.id = 5;<br>
>a.on(Avatar.ACTION_PLAY_COMPLETED,this,()=>{<br>
>&nbsp;&nbsp;&nbsp;&nbsp;// to do<br>
>});<br>
>


### CHANGE_ACTION
###### CHANGE_ACTION : string;
[静态]事件：每当更换动作时派发<br>
onChangeAction(lastActID:number,nowActID:number); lastActID=更改前的动作ID nowActID=更改后的动作ID<br>
>var a = new Avatar();<br>
>a.id = 5;<br>
>a.on(Avatar.CHANGE_ACTION,this,(lastActID:number,nowActID:number)=>{<br>
>&nbsp;&nbsp;&nbsp;&nbsp;// to do<br>
>});<br>
>a.actionID = 2;<br>
>


### RENDER
###### RENDER : string;
[静态]事件：执行 onRender 时派发，当到达了新的一帧后派发该事件<br>
>var a = new Avatar();<br>
>a.id = 5;<br>
>a.on(Avatar.RENDER,this,()=>{<br>
>&nbsp;&nbsp;&nbsp;&nbsp;// to do<br>
>});<br>
>


### id
###### id : number;
AVATAR唯一ID，对应编辑器中的预设制作数据ID，设置后当资源载入完毕后会抛出EventObject.LOADED<br>
>var a = new Avatar();<br>
>a.on(EventObject.LOADED,this,()=>{<br>
>&nbsp;&nbsp;&nbsp;&nbsp;// to do<br>
>});<br>
>a.id = 5;<br>
>


### syncLoadWhenAssetExist
###### syncLoadWhenAssetExist : boolean;
同步加载，当资源存在时，当前帧则立刻显示，默认为true<br>
为了确保能够监听到EventObject.LOADED事件，建议在设置id之前监听该事件
### prerender
###### prerender : boolean;
预渲染：开启此项保证在派发EventObject.LOADED前预先渲染一次以便保证此后能够立即呈现画面，不会因为资源较大而首次渲染卡顿一下<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预渲染会消耗一定的性能，可以选择在行走图资源较大较多的情况下使用此项，开启此项会有额外的性能和内存开销
### refObjs
###### refObjs : {
辅助体 id => Helper 默认值={}<br>
可以使用编辑器预设的各种辅助体信息来制作项目层的一些逻辑
### helperType
###### helperType : number;
辅助体模式<br>
0-统一模式 该模式下的辅助体统一为一个<br>
1-逐帧模式 该模式下的辅助体每一帧都是单独存在的
### orientation
###### orientation : number;
设置朝向，参考小键盘方向，以5为中心面向其他数字的方向：1-左下 2-下 3-右下 4-左 6-右 7-左上 8-上 9-右上<br>
设置一个无效的朝向将忽略此次更改<br>
7 8 9<br>
4 5 6<br>
1 2 3
### actionIndex
###### actionIndex : number;
设置动作，根据索引，设置一个无效的动作将忽略此次更改<br>
@param index 动作索引
### actionID
###### actionID : number;
设置动作，根据动作ID，设置一个无效的动作将忽略此次更改<br>
@param id 动作ID
### PartLength
###### PartLength : number;
[只读]返回部位的个数（包含本体，如果只有本体则返回1）<br>
需要该行走图加载完毕后才允许使用


## hasActionID
###### **[hasActionID](#hasactionid)**(actionID : number): boolean :
是否存在动作
##### 参数
	actionID 存在的动作ID

##### 返回
[boolean]

## addPartByAvatar
###### **[addPartByAvatar](#addpartbyavatar)**(partID : number,  part : [Avatar](/zh_hans/library/2d/client/avatar),  partIndex? : number): boolean :
添加部位，根据部件对象，如果该部位已存在则忽略<br>
需要该行走图加载完毕后才允许使用<br>
添加进来的部件无需手动卸载
##### 参数
	partID 部位ID
	part 部件
	partIndex [可选] 默认值=-1 插入的位置，默认值-1表示自动插入至最上层

##### 返回
[boolean] 是否添加成功

## addPartByID
###### **[addPartByID](#addpartbyid)**(partID : number,  avatarID : number,  partIndex? : number): boolean :
添加部位：根据指定的部件对应的数据库ID，如果该部位已存在则忽略<br>
需要该行走图加载完毕后才允许使用<br>
添加进来的部件无需手动卸载
##### 参数
	partID 部位ID
	avatarID 部件对应的数据库ID
	partIndex [可选] 默认值=-1 插入的位置，默认值-1表示自动插入至最上层

##### 返回
[boolean] 是否添加成功

## removePartByPartID
###### **[removePartByPartID](#removepartbypartid)**(partID : number,  disposeOldPart? : boolean): [Avatar](/zh_hans/library/2d/client/avatar) :
移除部位：根据指定的部位ID<br>
需要该行走图加载完毕后才允许使用<br>
可选择是否卸载的参数，「如果未选择自动卸载则需要手动卸载」
##### 参数
	partID 部位ID
	disposeOldPart [可选] 默认值=true 是否卸载旧部件，如果设置为false则要自行手动卸载

##### 返回
[Avatar] 部件

## removePartByAvatar
###### **[removePartByAvatar](#removepartbyavatar)**(part : [Avatar](/zh_hans/library/2d/client/avatar),  disposeOldPart? : boolean): boolean :
移除部位：根据部件对象<br>
需要该行走图加载完毕后才允许使用<br>
可选择是否卸载的参数，「如果未选择自动卸载则需要手动卸载」
##### 参数
	part 部件
	disposeOldPart [可选] 默认值=true 是否卸载旧部件，如果设置为false则要自行手动卸载

##### 返回
[boolean] 是否移除成功

## changePartByAvatar
###### **[changePartByAvatar](#changepartbyavatar)**(newPart : [Avatar](/zh_hans/library/2d/client/avatar),  partID : number): boolean :
更换部位：根据新的部件和部位ID<br>
需要该行走图加载完毕后才允许使用<br>
新部件会自动继承原部件的设定（如位置、缩放、色调、透明度等设定）<br>
原部件会自动卸载
##### 参数
	newPart 新的部件
	partID 部位ID

##### 返回
[boolean]

## changePartByAvatarID
###### **[changePartByAvatarID](#changepartbyavatarid)**(newAvatarID : number,  partID : number): boolean :
更换部位：根据新的部件对应的数据库ID和部位ID<br>
需要该行走图加载完毕后才允许使用<br>
新部件会自动继承原部件的设定（如位置、缩放、色调、透明度等设定）<br>
原部件会自动卸载
##### 参数
	newAvatarID 新的部件对应的数据库ID
	partID 部位ID

##### 返回
[boolean]

## getPartByPartID
###### **[getPartByPartID](#getpartbypartid)**(partID : number): [Avatar](/zh_hans/library/2d/client/avatar) :
获取部位：根据部位ID<br>
需要该行走图加载完毕后才允许使用
##### 参数
	partID 部位ID

##### 返回
[Avatar] 部件

## getPartAt
###### **[getPartAt](#getpartat)**(partIndex : number): [Avatar](/zh_hans/library/2d/client/avatar) :
根据部件所在的位置索引获取部件<br>
需要该行走图加载完毕后才允许使用
##### 参数
	partIndex 部件所在的索引（索引范围0~PartLength-1）

##### 返回
[Avatar] 部件

## getPartByID
###### **[getPartByID](#getpartbyid)**(avatarID : number): [Avatar](/zh_hans/library/2d/client/avatar) :
根据部位对应的数据库ID获取部件<br>
需要该行走图加载完毕后才允许使用
##### 参数
	avatarID 部件对应的数据库ID

##### 返回
[Avatar] 部件，不存在则返回null

## getPartIndex
###### **[getPartIndex](#getpartindex)**(avatar : [Avatar](/zh_hans/library/2d/client/avatar)): number :
根据部件获取所在的索引<br>
需要该行走图加载完毕后才允许使用
##### 参数
	avatar 部件

##### 返回
[number] 索引范围0~PartLength-1，不存在则返回-1

## gotoAndPlay
###### **[gotoAndPlay](#gotoandplay)**(frame? : number): void :
跳转某帧进行播放，越界会自动取模（如帧长度10，播放13则是播放3）<br>
@frame [可选] 跳转的帧数，默认帧=1，1表示第一帧



## play
###### **[play](#play)**(): void :
在当前帧数开始播放



## stop
###### **[stop](#stop)**(frame? : number): void :
停止播放
##### 参数
	frame [可选] 默认值=0 指定停留的帧数



## hitTestPoint
###### **[hitTestPoint](#hittestpoint)**(stageX : number,  stageY : number): boolean :
像素级点击碰触检测
##### 参数
	stageX 相对舞台的坐标x
	stageY 相对舞台的坐标y

##### 返回
[boolean] 是否点击中

## onRender
###### **[onRender](#onrender)**(autoPlay : boolean,  useMapping : boolean,  playFrame : number,  sendEvent : boolean,  forceRender : boolean): boolean :
渲染（通常情况下无需主动调用）<br>
@chancelai autoPlay [可选] 默认值=true 自动推进播放<br>
@chancelai useMapping [可选] 默认值=true 表示遇到没有的朝向和帧使用映射值<br>
@chancelai playFrame [可选] 默认值=null 指定播放帧<br>
@chancelai sendEvent [可选] 默认值=true 派发事件<br>
@chancelai forceRender [可选] 默认值=false 强制渲染，表示无论是否处于等待间隔中都将进行渲染





