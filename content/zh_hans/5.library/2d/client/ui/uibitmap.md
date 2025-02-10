---
title:  UIBitmap 图片组件
---
>用于显示一张图片用的组件，支持绑定玩家字符串变量（字符串变量存放地址）<br>相关事件<br>&nbsp;EventObject.LOADED 资源加载完成时候事件<br>&nbsp;EventObject.CHANGE 当image图像改变时事件<br>使用方法：<br>var a = new UIBitmap();<br>a.image = "asset/image/xxx.jpg"; // 加载固定图片<br>a.image = "$5"; // 绑定5号玩家字符串变量的图片地址<br>stage.addChild(a);<br>// 事件监听示例<br>a.on(EventObject.LOADED,this,this.onLoaded);<br>a.on(EventObject.CHANGE,this,this.onChange);<br>[变量系统]在显示时会自动注册请求同步显示服务器玩家变量<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-10-12

**继承**  →[UIBase](/zh_hans/library/2d/client/ui/uibase)→[GameSprite](/zh_hans/library/2d/client/gamesprite)→[Sprite](/zh_hans/library/2d/client/lib/sprite)→[TreeNode](/zh_hans/library/2d/client/lib/treenode)→[EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                               |
| -------------------------------------------------------------------------------------------------- |
| **[image](#image)** : string;<br>图片地址，支持玩家字符串变量，比如$5 表示使用5号玩家字符串变量    |
| **[texture](#texture)** : Texture;<br>图片源，可通过图源设置图片样式                               |
| **[grid9](#grid9)** : string;<br>九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺） |
| **flip** : boolean;<br>水平翻转 默认值=false                                                       |
| **isTile** : boolean;<br>平铺 默认值=false                                                         |
| **pivotType** : number;<br>原点对齐模式 0-原点 1-中心点 默认值=0                                   |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                     |
| --------------------------------------------------------------------------------------------------------- |
| **[setImageForce](#setimageforce)**(image : string): void<br>设置图片地址（不派发EventObject.CHANGE事件） |

## 详情

### image
###### image : string;
图片地址，支持玩家字符串变量，比如$5 表示使用5号玩家字符串变量<br>
>var img = new UIBitmap();<br>
>img.image = "$5";<br>
>Game.layer.uiLayer.addChild(img);<br>
>


### texture
###### texture : Texture;
图片源，可通过图源设置图片样式<br>
如果手动设置的该属性，卸载该组件时系统不会卸载该贴图，如有需要，可手动卸载
### grid9
###### grid9 : string;
九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）<br>
让素材不再简单拉伸，而是根据九宫格方式进行拉伸 默认值=0,0,0,0,0


## setImageForce
###### **[setImageForce](#setimageforce)**(image : string): void :
设置图片地址（不派发EventObject.CHANGE事件）
##### 参数
	image 图片地址，支持玩家字符串变量，比如$5 表示使用5号玩家字符串变量





