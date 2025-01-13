# UIString 文本组件
>显示文本的组件，支持绑定玩家字符串变量<br>相关事件<br>EventObject.CHANGE 文本改变时<br>[变量系统]在显示时会自动同步显示字符串变量<br>使用方法：<br>var a = new UIString();<br>a.text = "kds"; // 固定的文本<br>a.text = "$6"; // 绑定6号玩家字符串变量<br>stage.addChild(a);<br>// 事件监听示例<br>a.on(EventObject.CHANGE,this,this.onChange);<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-10-12

**继承**  →[UIBase](/zh_hans/library/2d/client/ui/uibase)→[GameSprite](/zh_hans/library/2d/client/gamesprite)→[Sprite](/zh_hans/library/2d/client/lib/sprite)→[TreeNode](/zh_hans/library/2d/client/lib/treenode)→[EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>
**子类**  [UIInput](/zh_hans/library/2d/client/ui/uiinput)<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **text** : string;<br>文本内容 $5 表示使用5号玩家字符串变量  |
| **fontSize** : number;<br>字体大小 默认值=16  |
| **color** : string;<br>字体颜色 默认值="#000000"  |
| **bold** : boolean;<br>粗体 默认值=false  |
| **italic** : boolean;<br>斜体 默认值=false  |
| **smooth** : boolean;<br>平滑 默认值=false  |
| **leading** : number;<br>行间距 默认值=0  |
| **letterSpacing** : number;<br>字间距 默认值=0  |
| **font** : string;<br>字体，默认是预设的默认字体  |
| **wordWrap** : boolean;<br>是否自动换行 默认值=true  |
| **overflow** : number;<br>文本超出时处理方式 0-显示 1-隐藏 默认值=0  |
| **align** : number;<br>横向对齐方式 0-左对齐 1-中对齐 2-右对齐 默认值=0  |
| **valign** : number;<br>垂直对齐方式 0-上对齐 1-中对齐 2-右对齐 默认值=0  |
| **shadowEnabled** : boolean;<br>是否开启阴影  |
| **shadowColor** : string;<br>阴影颜色 默认值="#000000"  |
| **shadowDx** : number;<br>阴影水平偏移量（像素）默认值=1  |
| **shadowDy** : number;<br>阴影垂直偏移量（像素）默认值=1  |
| **stroke** : number;<br>描边像素尺寸：如果效果不理想可以使用大号字体和粗体的配合，或者尝试别的字体 默认值=0  |
| **strokeColor** : string;<br>描边颜色，当描边像素尺寸不为0时显示 默认值="#000000"  |
| **textWidth** : number;<br>[只读]获取实际文本内容宽度  |
| **textHeight** : number;<br>[只读]获取实际文本内容高度  |
| **textLength** : number;<br>[只读]获取实际文本内容长度  |
| **[onChangeFragEvent](#onchangefragevent)** : string;<br>片段事件内容：当更改文本时触发  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[setTextForce](#settextforce)**(v : string): void<br>设置文本（不派发EventObject.CHANGE事件）

## 详情

### onChangeFragEvent
###### onChangeFragEvent : string;
片段事件内容：当更改文本时触发<br>
主动调用方式：CommandPage.startTriggerFragmentEvent


## setTextForce
###### **[setTextForce](#settextforce)**(v : string): void :
设置文本（不派发EventObject.CHANGE事件）
##### 参数
	v 文本内容 $5 表示使用5号玩家字符串变量





