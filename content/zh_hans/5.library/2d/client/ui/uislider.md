---
title:  UISlider 滑块组件
---
>用于指定一个范围min和max，在min和max之间滑动取得一个值的组件<br>相关事件：<br>&nbsp;EventObject.CHANGE 当改变value值时派发<br>&nbsp;EventObject.LOADED 资源加载完成时候事件<br>使用方式：<br>var a = new UISlider();<br>a.image1 = "asset/image/picture/control/slider_bg.png";<br>a.image2 = "asset/image/picture/control/slider_block.png";<br>a.image3 = "asset/image/picture/control/slider_bgfill.png";<br>a.value = 45;<br>stage.addChild(a);<br>// 事件监听示例<br>a.on(EventObject.CHANGE,this,this.onChange);<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-10-12

**继承**  →[UIBase](/zh_hans/library/2d/client/ui/uibase)→[GameSprite](/zh_hans/library/2d/client/gamesprite)→[Sprite](/zh_hans/library/2d/client/lib/sprite)→[TreeNode](/zh_hans/library/2d/client/lib/treenode)→[EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                                           |
| ------------------------------------------------------------------------------------------------------------------------------ |
| **image1** : string;<br>背景图                                                                                                 |
| **image2** : string;<br>滑块图                                                                                                 |
| **image3** : string;<br>滑块填充图                                                                                             |
| **transverseMode** : boolean;<br>横向模式 默认值=true                                                                          |
| **min** : number;<br>最小值 默认值=0                                                                                           |
| **max** : number;<br>最大值 默认值=100                                                                                         |
| **value** : number;<br>设置和获取当前值 默认值=50                                                                              |
| **step** : number;<br>步进值 默认值=1                                                                                          |
| **[bgGrid9](#bggrid9)** : string;<br>背景图片九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）                 |
| **[blockGrid9](#blockgrid9)** : string;<br>滑块图片九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）           |
| **[blockFillGrid9](#blockfillgrid9)** : string;<br>滑块填充图九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺） |
| **blockFillMode** : number;<br>显示模式：0-仅显示滑块 1-填充模式 2-显示滑块的填充模式 默认值=2                                 |
| **isBindingVarID** : boolean;<br>是否绑定数值变量                                                                              |
| **bindingVarID** : number;<br>设置绑定数值变量的编号                                                                           |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                       |
| ----------------------------------------------------------------------------------------------------------- |
| **[setValueForce](#setvalueforce)**(value : number): void<br>设置当前值，该函数不派发EventObject.CHANGE事件 |

## 详情

### bgGrid9
###### bgGrid9 : string;
背景图片九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）<br>
让素材不再简单拉伸，而是根据九宫格方式进行拉伸 默认值="0,0,0,0,0"
### blockGrid9
###### blockGrid9 : string;
滑块图片九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）<br>
让素材不再简单拉伸，而是根据九宫格方式进行拉伸 默认值="0,0,0,0,0"
### blockFillGrid9
###### blockFillGrid9 : string;
滑块填充图九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）<br>
让素材不再简单拉伸，而是根据九宫格方式进行拉伸 默认值="0,0,0,0,0"


## setValueForce
###### **[setValueForce](#setvalueforce)**(value : number): void :
设置当前值，该函数不派发EventObject.CHANGE事件
##### 参数
	value 值





