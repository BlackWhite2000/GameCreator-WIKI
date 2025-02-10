---
title: UIStandAvatar 立绘组件
---
>封装了立绘的界面组件<br>相关事件<br>&nbsp;EventObject.LOADED 加载完成时候事件<br>&nbsp;Avatar.ACTION_PLAY_COMPLETED<br>&nbsp;Avatar.RENDER 当确实到达了新的一帧后派发，本体如果没有实际的帧则不派发<br>使用方法：<br>var a = new UIStandAvatar();<br>a.avatarID =5;<br>stage.addChild(a);<br>// 事件监听示例<br>a.on(EventObject.LOADED,this,this.onLoaded);<br>a.on(Avatar.ACTION_PLAY_COMPLETED,this,this.onActionPlayComplete);<br>a.on(Avatar.RENDER,this,this.onRender);<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2020-01-27

**继承**  →[UIAvatar](/zh_hans/library/2d/client/ui/uiavatar)→[UIBase](/zh_hans/library/2d/client/ui/uibase)→[GameSprite](/zh_hans/library/2d/client/gamesprite)→[Sprite](/zh_hans/library/2d/client/lib/sprite)→[TreeNode](/zh_hans/library/2d/client/lib/treenode)→[EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div> |
| ---------------------------------------------------- |
| **flip** : boolean;<br>是否水平翻转                  |



## 详情





