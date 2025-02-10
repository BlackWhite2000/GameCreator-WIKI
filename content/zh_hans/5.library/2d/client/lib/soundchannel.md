---
title:  SoundChannel 声道
---
>用来控制程序中的声音。每个声音均分配给一个声道，<br>而且应用程序可以具有混合在一起的多个声道。<br>包含控制声音的播放、暂停、停止、音量的方法，<br>以及获取声音的播放状态、总时间、当前播放时间、总循环次数、播放地址等信息的方法。<br>支持事件：EventObject.COMPLETE<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-01-01

**继承**  →[EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>           |
| -------------------------------------------------------------- |
| **url** : string;<br>声音地址。                                |
| **loops** : number;<br>循环次数。                              |
| **startTime** : number;<br>开始时间。                          |
| **isStopped** : boolean;<br>表示声音是否已暂停。               |
| **volume** : number;<br>音量范围从 0（静音）至 1（最大音量）。 |
| **position** : number;<br>[只读]获取当前播放时间。             |
| **duration** : number;<br>[只读]获取总时间。                   |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div> |
| ----------------------------------------------------- |
| **[play](#play)**(): void<br>播放。                   |
| **[stop](#stop)**(): void<br>停止。                   |
| **[pause](#pause)**(): void<br>暂停。                 |
| **[resume](#resume)**(): void<br>继续播放。           |

## 详情



## play
###### **[play](#play)**(): void :
播放。



## stop
###### **[stop](#stop)**(): void :
停止。



## pause
###### **[pause](#pause)**(): void :
暂停。



## resume
###### **[resume](#resume)**(): void :
继续播放。





