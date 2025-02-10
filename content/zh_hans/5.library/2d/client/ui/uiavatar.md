---
title:  UIAvatar 行走图组件
---
>封装了行走图的界面组件<br>相关事件<br>&nbsp;EventObject.LOADED 资源加载完成时候事件<br>&nbsp;Avatar.ACTION_PLAY_COMPLETED<br>&nbsp;Avatar.RENDER 当确实到达了新的一帧后派发，本体如果没有实际的帧则不派发<br>使用方法：<br>var a = new UIAvatar();<br>a.avatarID = 5;<br>stage.addChild(a);<br>// 事件监听示例<br>a.on(EventObject.LOADED,this,this.onLoaded);<br>a.on(Avatar.ACTION_PLAY_COMPLETED,this,this.onActionPlayComplete);<br>a.on(Avatar.RENDER,this,this.onRender);<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-12-11

**继承**  →UIBase<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>      |
| --------------------------------------------------------- |
| **avatarID** : number;<br>AVATAR-ID                       |
| **avatar** : Avatar;<br>[只读]行走图对象                  |
| **isPlay** : boolean;<br>是否播放 默认值=true             |
| **playOnce** : boolean;<br>仅播放一次 默认值=false        |
| **scaleNumberX** : number;<br>水平缩放 1表示100% 默认值=1 |
| **scaleNumberY** : number;<br>垂直缩放 1表示100% 默认值=1 |
| **avatarFrame** : number;<br>起始播放的帧 默认值=1        |
| **avatarFPS** : number;<br>帧率 默认值=12                 |
| **actionID** : number;<br>动作表情 默认值=1               |



## 详情





