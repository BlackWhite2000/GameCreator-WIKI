# UIRoot 容器组件
>一般用于装载子显示对象，并可以裁剪区域，只显示一部分内容<br>相关事件<br>&nbsp;EventObject.LOADED 加载完成时候事件，仅作为界面本身（根容器）时派发<br>使用方式：<br>var a = new UIRoot();<br>a.addChild(b);<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-10-12

**继承**  →[UIBase](/zh_hans/library/2d/client/ui/uibase)→[GameSprite](/zh_hans/library/2d/client/gamesprite)→[Sprite](/zh_hans/library/2d/client/lib/sprite)→[TreeNode](/zh_hans/library/2d/client/lib/treenode)→[EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>
**子类**  [UIList](/zh_hans/library/2d/client/ui/uilist)<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **[SCROLL](#scroll)** : string;<br>[静态]事件：当界面滚动时派发的事件 SCROLL(isVertical);  |
| **enabledLimitView** : boolean;<br>是否限制区域内显示 默认值=false  |
| **scrollShowType** : number;<br>滚动条显示模式 0-不显示 1-显示 2-自动显示 3-仅显示竖滚动条 4-仅显示横滚动条 默认值=2  |
| **scrollWidth** : number;<br>滚动条宽度 默认值=16  |
| **vScrollBg** : string;<br>垂直滚动条背景皮肤  |
| **vScrollBar** : string;<br>垂直滚动条皮肤  |
| **hScrollBg** : string;<br>横向滚动条背景皮肤  |
| **hScrollBar** : string;<br>横向滚动条皮肤  |
| **[slowmotionType](#slowmotiontype)** : number;<br>用鼠标或手滑动容器内区域可以滚动内部的内容区域（需要开启限制显示在区域内并实际内部内容尺寸已超出显示区域）  |
| **vScrollValue** : number;<br>垂直方向滚动值(0~100)  |
| **hScrollValue** : number;<br>水平方向滚动值(0~100)  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[refresh](#refresh)**(): void<br>刷新滚动条根据内容区域大小，如果更改了容器内子对象的尺寸

## 详情

### SCROLL
###### SCROLL : string;
[静态]事件：当界面滚动时派发的事件 SCROLL(isVertical);<br>
isVertical true为纵向，false为横向
### slowmotionType
###### slowmotionType : number;
用鼠标或手滑动容器内区域可以滚动内部的内容区域（需要开启限制显示在区域内并实际内部内容尺寸已超出显示区域）<br>
0=仅移动端启用此效果,1=始终启用此效果,2=无 默认值=0


## refresh
###### **[refresh](#refresh)**(): void :
刷新滚动条根据内容区域大小，如果更改了容器内子对象的尺寸<br>
则需要调用此方法重新计算以便刷新滚动条。





