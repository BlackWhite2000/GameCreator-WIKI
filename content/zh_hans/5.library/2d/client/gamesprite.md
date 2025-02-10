---
title: GameSprite 游戏精灵类
---
>各种高级显示对象的基类（子类包含Avatar、Animation、各种UI控件等）<br>-- 滤镜叠加实现（即父子级滤镜不会被覆盖而是叠加）<br>-- 色调（R+,B+,G+,GRAY,Rx,Gx,Bx）<br>-- 色相（采用ColorMatrix）<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2019-02-01

**继承**  →Sprite<br>
**子类**  [GCAnimation](/zh_hans/library/2d/client/gcanimation)、[Avatar](/zh_hans/library/2d/client/avatar)、[ClientSceneLayer](/zh_hans/library/2d/client/clientscenelayer)、[GameImageLayer](/zh_hans/library/2d/client/gameimagelayer)、[GameLayer](/zh_hans/library/2d/client/gamelayer)<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                           |
| -------------------------------------------------------------------------------------------------------------- |
| **[ON_DISPOSE](#on_dispose)** : string;<br>[静态]事件：当销毁前派发的事件                                      |
| **objectID** : number;<br>唯一ID                                                                               |
| **isDisposed** : boolean;<br>是否已释放                                                                        |
| **data** : any;<br>装载的自定义数据，此外作为List的项显示对象界面时，该变量会记录其对应的UIListItemData        |
| **opacity** : number;<br>透明度 最终透明度alpha = opacity * dpOpacity * opacityPer(目前仅用于编辑器内)         |
| **rotation1** : number;<br>旋转度1 最终旋转度rotation = rotation1 + rotation2 默认值=0                         |
| **rotation2** : number;<br>旋转度2 最终旋转度rotation = rotation1 + rotation2 默认值=0                         |
| **filterEnabled** : boolean;<br>是否允许使用滤镜（允许使用时材质效果才会生效） 默认值 = true                   |
| **[hue](#hue)** : number;<br>色相 -180~180                                                                     |
| **[blur](#blur)** : number;<br>模糊度 0~N                                                                      |
| **disabled** : boolean;<br>不可用状态，将禁用鼠标响应并且调整为灰度                                            |
| **dpX** : number;<br>深度坐标系：水平坐标                                                                      |
| **dpY** : number;<br>深度坐标系：垂直坐标                                                                      |
| **dpZ** : number;<br>深度坐标系：深度，该值与相机深度的距离决定实际显示效果，如近大远小                        |
| **dpWidth** : number;<br>深度坐标系：高度（像素）                                                              |
| **dpHeight** : number;<br>深度坐标系：宽度（像素）                                                             |
| **dpOpacity** : number;<br>深度坐标系：透明度，最终透明度会乘以这个值                                          |
| **dpScaleX** : number;<br>深度坐标系：水平缩放比例 默认值=1 表示100%                                           |
| **dpScaleY** : number;<br>深度坐标系：垂直缩放比例 默认值=1 表示100%                                           |
| **useDPCoordScaleMode** : boolean;<br>是否使用缩放模式，图片一般更改尺寸，而界面、动画、立绘则一般更改缩放倍率 |
| **dpDisplayPriority** : number;<br>显示优先度，用于同深度dpZ时区分显示，越大，显示在越前面                     |
| **_dpDirty** : boolean;<br>用于项目层实现深度坐标系代码用变量：脏标记                                          |
| **_dpCameraX** : number;<br>用于项目层实现深度坐标系代码用变量：相机水平坐标                                   |
| **_dpCameraY** : number;<br>用于项目层实现深度坐标系代码用变量：相机垂直坐标                                   |
| **_dpCameraZ** : number;<br>用于项目层实现深度坐标系代码用变量：相机深度坐标                                   |
| **_dpTextureWidth** : number;<br>用于项目层实现深度坐标系代码用变量：图片实际尺寸宽度                          |
| **_dpTextureHeight** : number;<br>用于项目层实现深度坐标系代码用变量：图片实际尺寸高度                         |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[setTonal](#settonal)**(r : number,  g : number,  b : number,  gray : number,  mr? : number,  mg? : number,  mb? : number): void<br>更改色调                                                                      |
| **[getTonal](#gettonal)**(): number[]<br>获取色调参数：r g b gray mr mg mb                                                                                                                                          |
| **[isInherit](#isinherit)**(sp : TreeNode): boolean<br>是否继承于指定的对象                                                                                                                                         |
| **[dpCoordToRealCoord](#dpcoordtorealcoord)**(): void<br>根据【深度坐标】计算并设置【实际坐标】                                                                                                                     |
| **[realCoordToDPCoord](#realcoordtodpcoord)**(calcCoord : boolean,  calcSize : boolean): any<br>根据【实际的坐标】转换为【深度坐标】                                                                                |
| **[installMaterialData](#installmaterialdata)**(materialData : any,  resetTime? : boolean): void<br>安装材质数据                                                                                                    |
| **[getAllMaterialDatas](#getallmaterialdatas)**(): any[]<br>获取当前拥有的全材质数据，可用于储存，同时可使用 installMaterialData 安装该材质数据                                                                     |
| **[addMaterial](#addmaterial)**(materialData : MaterialData,  passage? : number): boolean<br>添加材质，根据材质数据                                                                                                 |
| **[addMaterialAt](#addmaterialat)**(materialData : MaterialData,  index : number,  passage? : number): boolean<br>添加材质到指定的位置上，根据材质数据                                                              |
| **[addMaterialByID](#addmaterialbyid)**(materialID : number,  passage? : number): boolean<br>添加材质，根据材质ID，材质参数使用默认值                                                                               |
| **[addMaterialAtByID](#addmaterialatbyid)**(materialID : number,  index : number,  passage? : number): boolean<br>添加材质，根据材质ID，材质参数使用默认值                                                          |
| **[removeMaterial](#removematerial)**(materialData : MaterialData,  passage? : number): boolean<br>移除材质，根据材质数据，如若该数据已存在里面则会被移除                                                           |
| **[removeMaterialAt](#removematerialat)**(index : number,  passage? : number): boolean<br>移除材质，根据材质所在的位置                                                                                              |
| **[removeMaterialByID](#removematerialbyid)**(materialID : number,  passage? : number): boolean<br>移除材质，根据材质ID                                                                                             |
| **[getMaterialByID](#getmaterialbyid)**(materialID : number,  passage? : number): MaterialData<br>获取材质数据，根据ID                                                                                              |
| **[getMaterialAt](#getmaterialat)**(index : number,  passage? : number): MaterialData<br>获取材质数据，根据位置索引                                                                                                 |
| **[getMaterialLength](#getmateriallength)**(passage? : number): number<br>获取指定通道内的材质数据总数                                                                                                              |
| **[getMaterialPassLength](#getmaterialpasslength)**(): number<br>获取材质通道总数                                                                                                                                   |
| **[clearMaterials](#clearmaterials)**(): void<br>清空所有材质                                                                                                                                                       |
| **[clearMaterialsInPass](#clearmaterialsinpass)**(passage : number,  deletePass? : boolean): void<br>清空指定通道里的材质                                                                                           |
| **[setMaterialIndex](#setmaterialindex)**(material : MaterialData,  toIndex : number,  passage? : number): boolean<br>更换同一个通道内的材质位置                                                                    |
| **[swapMaterialIndex](#swapmaterialindex)**(fromIndex : number,  toIndex : number,  passage? : number): boolean<br>更换材质位置                                                                                     |
| **[swapMaterialPass](#swapmaterialpass)**(passFromIndex : number,  passToIndex : number): boolean<br>更换通道顺序，通道顺序影响渲染先后顺序                                                                         |
| **[setMaterialsByGameSprite](#setmaterialsbygamesprite)**(gameSprite : [GameSprite](/zh_hans/library/2d/client/gamesprite),  cloneMode : boolean): void<br>设置为指定的GameSprite相同的材质                         |
| **[setMaterialDirty](#setmaterialdirty)**(): void<br>调用此函数表示更改了材质，让系统根据最新的材质计算来进行渲染                                                                                                   |
| **[setMaterialValueFast](#setmaterialvaluefast)**(materialValues : any,  passage? : number): void<br>调用此函数快速设置传递给shader的值，比直接修改材质后调用setMaterialDirty效率要更高一些，减少了数据的转换计算。 |

## 详情

### ON_DISPOSE
###### ON_DISPOSE : string;
[静态]事件：当销毁前派发的事件<br>
>// 创建对象<br>
>var sp = new GameSprite();<br>
>// 监听当销毁时事件<br>
>sp.once(GameSprite.ON_DISPOSE,this,()=>{<br>
>&nbsp;&nbsp;// to do<br>
>});<br>
>// 销毁该对象<br>
>sp.dispose();<br>
>


### hue
###### hue : number;
色相 -180~180<br>
内部使用色调滤镜实现
### blur
###### blur : number;
模糊度 0~N<br>
内部使用模糊滤镜实现


## setTonal
###### **[setTonal](#settonal)**(r : number,  g : number,  b : number,  gray : number,  mr? : number,  mg? : number,  mb? : number): void :
更改色调
##### 参数
	r 红色+ -255~255
	g 绿色+ -255~255
	b 蓝色+ -255~255
	gray 灰度 0-100
	mr [可选] 默认值=1 0~5
	mg [可选] 默认值=1 0~5
	mb [可选] 默认值=1 0~5



## getTonal
###### **[getTonal](#gettonal)**(): number[] :
获取色调参数：r g b gray mr mg mb



## isInherit
###### **[isInherit](#isinherit)**(sp : TreeNode): boolean :
是否继承于指定的对象
##### 参数
	sp 指定的对象



## dpCoordToRealCoord
###### **[dpCoordToRealCoord](#dpcoordtorealcoord)**(): void :
根据【深度坐标】计算并设置【实际坐标】<br>
由项目上层实现<br>
如更改了dpX、dpY、dpWidth、dpHeight，根据当前深度dpZ以及镜头设置实际的x、y、width、height（或scaleX、scaleY）



## realCoordToDPCoord
###### **[realCoordToDPCoord](#realcoordtodpcoord)**(calcCoord : boolean,  calcSize : boolean): any :
根据【实际的坐标】转换为【深度坐标】<br>
由项目上层实现<br>
如更改了x、y、width、height后想要获取其对应当前深度下的dpX、dpY、dpWidth、dpHeight（或dpScaleX、dpScaleY）
##### 参数
	calcCoord 是否计算坐标，若计算则会转换并将dpX和dpY设置为转换值
	calcSize 是否计算尺寸，若计算则会转换并将dpWidth和dpHeight设置为转换值(useDPCoordScaleMode模式下则是dpScaleX和dpScaleY)

##### 返回
[any] 返回 { dpX: number, dpy: number, dpScaleX: number, dpScaleY: number, dpWidth: number, dpHeight: number }

## installMaterialData
###### **[installMaterialData](#installmaterialdata)**(materialData : any,  resetTime? : boolean): void :
安装材质数据
##### 参数
	materialData  类型 { materials: MaterialData[] }[]
	resetTime [可选] 默认值=true 是否重置材质数据内的过渡时间



## getAllMaterialDatas
###### **[getAllMaterialDatas](#getallmaterialdatas)**(): any[] :
获取当前拥有的全材质数据，可用于储存，同时可使用 installMaterialData 安装该材质数据

##### 返回
{ materials: MaterialData[] }[]

## addMaterial
###### **[addMaterial](#addmaterial)**(materialData : MaterialData,  passage? : number): boolean :
添加材质，根据材质数据
##### 参数
	material 材质数据
	passage [可选] 默认值=0 所在的通道

##### 返回
[boolean] 是否成功

## addMaterialAt
###### **[addMaterialAt](#addmaterialat)**(materialData : MaterialData,  index : number,  passage? : number): boolean :
添加材质到指定的位置上，根据材质数据
##### 参数
	material 材质数据
	index 位置
	passage [可选] 默认值=0 所在的通道

##### 返回
[boolean] 是否成功

## addMaterialByID
###### **[addMaterialByID](#addmaterialbyid)**(materialID : number,  passage? : number): boolean :
添加材质，根据材质ID，材质参数使用默认值
##### 参数
	material 材质数据
	passage [可选] 默认值=0 所在的通道

##### 返回
[boolean] 是否成功

## addMaterialAtByID
###### **[addMaterialAtByID](#addmaterialatbyid)**(materialID : number,  index : number,  passage? : number): boolean :
添加材质，根据材质ID，材质参数使用默认值
##### 参数
	material 材质数据
	index 位置
	passage [可选] 默认值=0 所在的通道

##### 返回
[boolean] 是否成功

## removeMaterial
###### **[removeMaterial](#removematerial)**(materialData : MaterialData,  passage? : number): boolean :
移除材质，根据材质数据，如若该数据已存在里面则会被移除
##### 参数
	materialData 材质数据
	passage [可选] 默认值=0 所在的通道

##### 返回
[boolean] 是否成功

## removeMaterialAt
###### **[removeMaterialAt](#removematerialat)**(index : number,  passage? : number): boolean :
移除材质，根据材质所在的位置
##### 参数
	index 材质数据所在的位置索引
	passage [可选] 默认值=0 所在的通道

##### 返回
[boolean] 是否成功

## removeMaterialByID
###### **[removeMaterialByID](#removematerialbyid)**(materialID : number,  passage? : number): boolean :
移除材质，根据材质ID
##### 参数
	materialID 材质数据ID
	passage [可选] 默认值=0 所在的通道

##### 返回
[boolean] 是否成功

## getMaterialByID
###### **[getMaterialByID](#getmaterialbyid)**(materialID : number,  passage? : number): MaterialData :
获取材质数据，根据ID
##### 参数
	materialID 材质数据ID
	passage [可选] 默认值=0 所在的通道

##### 返回
[MaterialData] 材质数据

## getMaterialAt
###### **[getMaterialAt](#getmaterialat)**(index : number,  passage? : number): MaterialData :
获取材质数据，根据位置索引
##### 参数
	index 所在的位置索引
	passage [可选] 默认值=0 所在的通道

##### 返回
[MaterialData] 材质数据

## getMaterialLength
###### **[getMaterialLength](#getmateriallength)**(passage? : number): number :
获取指定通道内的材质数据总数
##### 参数
	passage [可选] 默认值=0 所在的通道

##### 返回
[number]

## getMaterialPassLength
###### **[getMaterialPassLength](#getmaterialpasslength)**(): number :
获取材质通道总数

##### 返回
[number]

## clearMaterials
###### **[clearMaterials](#clearmaterials)**(): void :
清空所有材质



## clearMaterialsInPass
###### **[clearMaterialsInPass](#clearmaterialsinpass)**(passage : number,  deletePass? : boolean): void :
清空指定通道里的材质
##### 参数
	passage 所在的通道
	deletePass 删除通道



## setMaterialIndex
###### **[setMaterialIndex](#setmaterialindex)**(material : MaterialData,  toIndex : number,  passage? : number): boolean :
更换同一个通道内的材质位置
##### 参数
	material 材质数据
	toIndex 所在的位置索引
	passage [可选] 默认值=0 所在的通道

##### 返回
[boolean] 是否更换成功

## swapMaterialIndex
###### **[swapMaterialIndex](#swapmaterialindex)**(fromIndex : number,  toIndex : number,  passage? : number): boolean :
更换材质位置
##### 参数
	fromIndex 材质所在的原始位置
	toIndex 材质需要更换至的新位置
	passage [可选] 默认值=0 所在的通道

##### 返回
[boolean] 是否更换成功

## swapMaterialPass
###### **[swapMaterialPass](#swapmaterialpass)**(passFromIndex : number,  passToIndex : number): boolean :
更换通道顺序，通道顺序影响渲染先后顺序
##### 参数
	passFromIndex 材质通道所在的原始位置
	passToIndex 材质通道需要更换至的新位置

##### 返回
[boolean] 是否更换成功

## setMaterialsByGameSprite
###### **[setMaterialsByGameSprite](#setmaterialsbygamesprite)**(gameSprite : [GameSprite](/zh_hans/library/2d/client/gamesprite),  cloneMode : boolean): void :
设置为指定的GameSprite相同的材质
##### 参数
	gameSprite 指定的参考GameSprite
	cloneMode 是否克隆模式，如果是则表示使用克隆的方式复制材质数据（MaterialData），否则是引用



## setMaterialDirty
###### **[setMaterialDirty](#setmaterialdirty)**(): void :
调用此函数表示更改了材质，让系统根据最新的材质计算来进行渲染<br>
通常情况下无需主动调用此函数，但如果修改了MaterialData内部的数据的话可调用该函数让对象刷新



## setMaterialValueFast
###### **[setMaterialValueFast](#setmaterialvaluefast)**(materialValues : any,  passage? : number): void :
调用此函数快速设置传递给shader的值，比直接修改材质后调用setMaterialDirty效率要更高一些，减少了数据的转换计算。<br>
比如需要帧刷只更新少数几个数值时可以调用该函数进行优化计算。<br>
<br>
【关于变量名】<br>
-- 变量名规格：mu材质编号_变量属性<br>
<br>
【关于值】<br>
-- number 类型的属性直接设置<br>
-- 颜色属性请设置为 [r,g,b] 其中r/g/b取值范围为0~1<br>
-- 不支持贴图设置，更改贴图仍然需要<br>
<br>
【materialValues参数规格】<br>
{<br>
&nbsp;&nbsp;&nbsp;mu2_abc: 1,<br>
&nbsp;&nbsp;&nbsp;mu3_color: [0.5,0.5,1]<br>
}<br>

##### 参数
	materialValues 需要更新的材质数据
	passage [可选] 默认值=0 所在的通道





