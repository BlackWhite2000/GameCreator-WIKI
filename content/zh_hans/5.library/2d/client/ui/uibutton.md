---
title: UIButton 按钮组件
---
>拥有三种状态的按钮组件（正常状态、按下时、鼠标悬停时）<br>相关事件<br>&nbsp;EventObject.LOADED 资源加载完成时候事件<br>使用方法：<br>var a = new UIButton();<br>a.image1 = "asset/image/picture/control/btn_normal.png";<br>a.image2 = "asset/image/picture/control/btn_over.png";<br>a.image3 = "asset/image/picture/control/btn_click.png";<br>a.width = 200;<br>a.height = 100;<br>stage.addChild(a);<br>// 事件监听示例<br>a.on(EventObject.LOADED,this,this.onLoaded);<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-10-12

**继承**  →[UIBase](/zh_hans/library/2d/client/ui/uibase)→[GameSprite](/zh_hans/library/2d/client/gamesprite)→[Sprite](/zh_hans/library/2d/client/lib/sprite)→[TreeNode](/zh_hans/library/2d/client/lib/treenode)→[EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                                       |
| -------------------------------------------------------------------------------------------------------------------------- |
| **image1** : string;<br>正常状态下图片路径 mouse_out                                                                       |
| **image2** : string;<br>鼠标悬停时图片路径 mouse_over                                                                      |
| **image3** : string;<br>鼠标按下时图片路径 mouse_down                                                                      |
| **[grid9img1](#grid9img1)** : string;<br>正常状态下图片的九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺） |
| **[grid9img2](#grid9img2)** : string;<br>鼠标移入时图片的九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺） |
| **[grid9img3](#grid9img3)** : string;<br>鼠标点击时图片的九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺） |
| **label** : string;<br>按钮上显示的文本                                                                                    |
| **align** : number;<br>文本水平对齐方式 0-居左 1-居中 2-居右 默认值=1                                                      |
| **valign** : number;<br>文本垂直对齐方式 0-居上 1-居中 2-居下 默认值=1                                                     |
| **bold** : boolean;<br>文本粗体 默认值=false                                                                               |
| **italic** : boolean;<br>斜体 默认值=false                                                                                 |
| **smooth** : boolean;<br>平滑 默认值=false                                                                                 |
| **font** : string;<br>文本字体，默认值是预设的默认字体                                                                     |
| **color** : string;<br>文本颜色 默认值="#999999"                                                                           |
| **overColor** : string;<br>鼠标悬停时文本颜色 默认值="#999999"                                                             |
| **clickColor** : string;<br>鼠标点击时文本颜色 默认值="#999999"                                                            |
| **fontSize** : number;<br>文本字体大小 默认值=16                                                                           |
| **textDx** : number;<br>文本水平偏移量，默认值=0                                                                           |
| **textDy** : number;<br>文本垂直偏移量，默认值=0                                                                           |



## 详情

### grid9img1
###### grid9img1 : string;
正常状态下图片的九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）<br>
让素材不再简单拉伸，而是根据九宫格方式进行拉伸 默认值="0,0,0,0,0"
### grid9img2
###### grid9img2 : string;
鼠标移入时图片的九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）<br>
让素材不再简单拉伸，而是根据九宫格方式进行拉伸 默认值="0,0,0,0,0"
### grid9img3
###### grid9img3 : string;
鼠标点击时图片的九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）<br>
让素材不再简单拉伸，而是根据九宫格方式进行拉伸 默认值="0,0,0,0,0"




