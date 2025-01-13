# UIVariable 显示变量组件
>可以选定一个变量绑定后即显示该变量的组件，当变量改变时该组件的文本会自动更新<br>相关事件<br>EventObject.CHANGE 文本改变时<br>[变量系统]在显示时会同步显示数值变量<br>使用方式：<br>var a = new UIVariable();<br>a.varID = 2; // 数值变量ID<br>stage.addChild(a);<br>// 事件监听示例<br>a.on(EventObject.CHANGE,this,this.onChange);<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-10-12

**继承**  →[UIString](/zh_hans/library/2d/client/ui/uistring)→[UIBase](/zh_hans/library/2d/client/ui/uibase)→[GameSprite](/zh_hans/library/2d/client/gamesprite)→[Sprite](/zh_hans/library/2d/client/lib/sprite)→[TreeNode](/zh_hans/library/2d/client/lib/treenode)→[EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **varID** : string;<br>数值变量ID  |



## 详情





