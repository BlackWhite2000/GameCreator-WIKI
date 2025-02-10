---
title: ClientSceneLayer 场景图层-显示对象
---
>包含图片图层和图块图层<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-07-22

**继承**  →GameSprite<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------- |
| **scene** : ClientScene;<br>对应的地图对象                                                                                         |
| **dx** : number;<br>偏移值-X 默认值=0                                                                                              |
| **dy** : number;<br>偏移值-Y 默认值=0                                                                                              |
| **xMove** : number;<br>X方向自动滚动 默认值=0                                                                                      |
| **yMove** : number;<br>Y方向自动滚动 默认值=0                                                                                      |
| **[isChangeChildZOrder](#ischangechildzorder)** : boolean;<br>是否自动更换子显示对象层次 根据显示对象Y坐标刷新                     |
| **xLoop** : boolean;<br>x循环（平铺） 中途更改此项后需要调用refreshLoopShow刷新                                                    |
| **yLoop** : boolean;<br>y循环（平铺） 中途更改此项后需要调用refreshLoopShow刷新                                                    |
| **prospectsPerX** : number;<br>远景比例X轴 默认值=1.0 表示 100% 普通地图是100%，值越小则移动越慢，多重远景一般通过更改此属性来制作 |
| **prospectsPerY** : number;<br>远景比例Y轴 默认值=1.0 表示 100% 普通地图是100%，值越小则移动越慢，多重远景一般通过更改此属性来制作 |
| **mapUrl** : string;<br>[只读]地图层的图片资源地址                                                                                 |
| **drawMode** : boolean;<br>是否是绘图模式（图块），在创建时需要设定好才可使用图块模式绘制                                          |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                                                                                           |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[constructor](#constructor)**(scene : [ClientScene](/zh_hans/library/2d/client/clientscene))<br>构造函数                                                                                                                                      |
| **[refreshLoopShow](#refreshloopshow)**(): void<br>刷新循环显示，中途更改了xLoop或yLoop后调用此项以便刷新                                                                                                                                       |
| **[drawTile](#drawtile)**(xGrid : number,  yGrid : number,  tileData : { tex): void<br>绘制图块，绘制后需要调用flushTile进行冲印，同时绘制多个图块时可以在绘制完毕后统一冲印，以便节约不必要的性能耗损。                                        |
| **[drawAutoTile](#drawautotile)**(xGrid : number,  yGrid : number,  autoTileID : number,  texture : Texture): void<br>绘制自动图块元件，绘制后需要调用flushTile进行冲印，同时绘制多个图块时可以在绘制完毕后统一冲印，以便节约不必要的性能耗损。 |
| **[flushTile](#flushtile)**(): void<br>刷新图块：将此前绘制过的图块统一显示出来                                                                                                                                                                 |
| **[clearTile](#cleartile)**(): void<br>清理图块，将当前图块全部清空                                                                                                                                                                             |
| **[setBigImage](#setbigimage)**(imgURL : string): void<br>设置完整图片作为该层地图图像，仅图片图层可用                                                                                                                                          |
| **[setBigTexture](#setbigtexture)**(t : Texture): void<br>根据texture设置背景，仅图片图层可用                                                                                                                                                   |

## 详情

### isChangeChildZOrder
###### isChangeChildZOrder : boolean;
是否自动更换子显示对象层次 根据显示对象Y坐标刷新<br>
比如在一般RPG游戏中，A在B的下方会遮挡B，而当A移动到B上方时会被B遮挡住，开启此项会自动计算


## constructor
###### **[constructor](#constructor)**(scene : [ClientScene](/zh_hans/library/2d/client/clientscene)) :
构造函数
##### 参数
	scene 所属的场景



## refreshLoopShow
###### **[refreshLoopShow](#refreshloopshow)**(): void :
刷新循环显示，中途更改了xLoop或yLoop后调用此项以便刷新



## drawTile
###### **[drawTile](#drawtile)**(xGrid : number,  yGrid : number,  tileData : { tex): void :
绘制图块，绘制后需要调用flushTile进行冲印，同时绘制多个图块时可以在绘制完毕后统一冲印，以便节约不必要的性能耗损。<br>
图层必须是绘制模式（drawMode==true）
##### 参数
	xGrid 格子坐标x
	yGrid 格子坐标y
	tileData 贴图对象、图块ID、图块的采样（x,y,width,height） 如果为null则表示擦除



## drawAutoTile
###### **[drawAutoTile](#drawautotile)**(xGrid : number,  yGrid : number,  autoTileID : number,  texture : Texture): void :
绘制自动图块元件，绘制后需要调用flushTile进行冲印，同时绘制多个图块时可以在绘制完毕后统一冲印，以便节约不必要的性能耗损。<br>
图层必须是绘制模式（drawMode==true）
##### 参数
	xGrid 格子坐标x
	yGrid 格子坐标y
	autoTileID 自动元件的ID
	texture 自动元件的贴图



## flushTile
###### **[flushTile](#flushtile)**(): void :
刷新图块：将此前绘制过的图块统一显示出来



## clearTile
###### **[clearTile](#cleartile)**(): void :
清理图块，将当前图块全部清空



## setBigImage
###### **[setBigImage](#setbigimage)**(imgURL : string): void :
设置完整图片作为该层地图图像，仅图片图层可用
##### 参数
	imgURL 完整图片地址



## setBigTexture
###### **[setBigTexture](#setbigtexture)**(t : Texture): void :
根据texture设置背景，仅图片图层可用
##### 参数
	t 贴图




# 相关代码示例
创建一个图片图层添加到当前场景上<br>
>创建一个图层，并设置图片，添加到场景上，默认在左上角（0,0）<br>
>var layer = new ClientSceneLayer(Game.currentScene);<br>
>layer.setBigImage("asset/image/xxxx.png");<br>
>Game.currentScene.addLayer(layer);<br>
>

<br>
创建一个图块图层，绘制图块<br>
>// 创建一个图块图层<br>
>var layer = new ClientSceneLayer(Game.currentScene);<br>
>layer.drawMode = true;<br>
>layer.graphics.drawRect(0,0,100,100,"#FF0000");<br>
>// 加载指定的贴图作为图块素材<br>
>AssetManager.loadImage("asset/image/tile/矿洞.png", Callback.New((tex: Texture) => {<br>
>&nbsp;&nbsp;&nbsp;&nbsp;// 从图源0,0中取得48x48的图绘制到格子3,0的位置上<br>
>&nbsp;&nbsp;&nbsp;&nbsp;layer.drawTile(3, 0, { tex: tex, texID: 1, x: 0, y: 0, w: 48, h: 48 });<br>
>&nbsp;&nbsp;&nbsp;&nbsp;// 从图源96,0中取得48x48的图绘制到格子4,0的位置上<br>
>&nbsp;&nbsp;&nbsp;&nbsp;layer.drawTile(4, 0, { tex: tex, texID: 1, x: 96, y: 0, w: 48, h: 48 });<br>
>&nbsp;&nbsp;&nbsp;&nbsp;// 提交绘制<br>
>&nbsp;&nbsp;&nbsp;&nbsp;layer.flushTile();<br>
>}, this));<br>
><br>
>// 加载指定的自动元件贴图作为自动元件素材<br>
>AssetManager.loadImage("asset/image/tile/GCAT1a.png", Callback.New((tex: Texture) => {<br>
>&nbsp;&nbsp;&nbsp;// 绘制到坐标3,3，作为自动元件6号<br>
>&nbsp;&nbsp;&nbsp;layer.drawAutoTile(3, 3, 6, tex);<br>
>&nbsp;&nbsp;&nbsp;// 提交绘制<br>
>&nbsp;&nbsp;&nbsp;layer.flushTile();<br>
>}, this));<br>
><br>
>// 添加到场景上<br>
>Game.currentScene.addLayer(layer);<br>
>


