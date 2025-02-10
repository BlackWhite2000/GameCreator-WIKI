---
title:  GameBase 游戏总管理基类
---
>实际游戏会创建具体类继承于该类，方便属性指向上层的自定义类<br>通常情况下需要使用Game变量来创建该类或其子类的实例：var Game = new GameBase();<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-07-28

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                                                                  |
| ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[EVENT_PAUSE_CHANGE](#event_pause_change)** : string;<br>暂停状态改变事件派发                                                                       |
| **layer** : GameLayer;<br>游戏总层次                                                                                                                  |
| **currentScene** : ClientScene;<br>当前的场景，默认是[ClientScene](/zh_hans/library/2d/client/clientscene)的EMPTY，项目层在实现场景更换时需要设置此值 |
| **player** : ClientPlayer;<br>我的玩家对象                                                                                                            |
| **oneFrame** : number;<br>[只读]游戏内一个单位帧的时间                                                                                                |
| **[now](#now)** : number;<br>[只读]游戏时间戳：游戏启动时到现在的时间                                                                                 |
| **[frameCount](#framecount)** : number;<br>[只读]游戏帧计数：游戏启动时到现在的帧总数                                                                 |
| **[pause](#pause)** : boolean;<br>游戏时间暂停（影响系统是否静止以及上层逻辑可以根据此项来编写静止效果）                                              |



## 详情

### EVENT_PAUSE_CHANGE
###### EVENT_PAUSE_CHANGE : string;
暂停状态改变事件派发<br>
>EventUtils.addEventListenerFunction(Game, Game.EVENT_PAUSE_CHANGE, this.onPauseChange, this);<br>
>


### now
###### now : number;
[只读]游戏时间戳：游戏启动时到现在的时间<br>
-- 读档会恢复存档的游戏时间戳<br>
-- 暂停游戏会导致该时间被暂停
### frameCount
###### frameCount : number;
[只读]游戏帧计数：游戏启动时到现在的帧总数<br>
-- 暂停游戏会导致该帧计数被暂停
### pause
###### pause : boolean;
游戏时间暂停（影响系统是否静止以及上层逻辑可以根据此项来编写静止效果）<br>
系统预设是对于场景效果的禁止，包含如下：<br>
-- 场景图层渲染<br>
-- 场景对象刷新（暂停期间不再调用场景对象的update函数）




