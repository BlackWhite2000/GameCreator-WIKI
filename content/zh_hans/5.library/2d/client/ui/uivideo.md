---
title:  UIVideo 视频显示对象
---
>-- 不支持移动端使用<br>事件：<br>EventObject.LOADED 已加载元数据时触发。<br>EventObject.ERROR 当遇到错误时派发<br>EventObject.COMPLETE 当播放完毕时派发<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2020-12-24

**继承**  →[UIBitmap](/zh_hans/library/2d/client/ui/uibitmap)→[UIBase](/zh_hans/library/2d/client/ui/uibase)→[GameSprite](/zh_hans/library/2d/client/gamesprite)→[Sprite](/zh_hans/library/2d/client/lib/sprite)→[TreeNode](/zh_hans/library/2d/client/lib/treenode)→[EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                        |
| ------------------------------------------------------------------------------------------- |
| **PLAY_START** : string;<br>[静态]事件：播放开始                                            |
| **PLAY_STOP** : string;<br>[静态]事件：播放停止                                             |
| **PLAY_PAUSE** : string;<br>[静态]事件：播放暂停                                            |
| **duration** : number;<br>[只读]视频总时间：秒 如果不存在时则返回NaN                        |
| **[networkState](#networkstate)** : number;<br>[只读]网络状态                               |
| **videoURL** : string;<br>视频地址                                                          |
| **playbackRate** : number;<br>播放速率 默认值=1 表示100%                                    |
| **volume** : number;<br>音量 默认值=                                                        |
| **currentTime** : number;<br>当前视频时间（秒）默认值=0                                     |
| **playType** : number;<br>播放模式 0-播放 1-停止播放 2-暂停 默认值=0                        |
| **readonlyisPlaying** : boolean;<br>[只读]是否正在播放中                                    |
| **muted** : boolean;<br>静音                                                                |
| **loop** : boolean;<br>循环                                                                 |
| **[onLoadedFragEvent](#onloadedfragevent)** : string;<br>片段事件内容：当视频源加载完毕时   |
| **[onErrorFragEvent](#onerrorfragevent)** : string;<br>片段事件内容：当发生错误时处理       |
| **[onCompleteFragEvent](#oncompletefragevent)** : string;<br>片段事件内容：当播放完成时处理 |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                  |
| ---------------------------------------------------------------------- |
| **[constructor](#constructor)**(editorCompMode? : boolean)<br>构造函数 |
| **[play](#play)**(): void<br>播放                                      |
| **[stop](#stop)**(): void<br>停止播放                                  |
| **[pause](#pause)**(): void<br>暂停播放                                |

## 详情

### networkState
###### networkState : number;
[只读]网络状态<br>
0 = NETWORK_EMPTY - 音频/视频尚未初始化<br>
1 = NETWORK_IDLE - 音频/视频是活动的且已选取资源，但并未使用网络<br>
2 = NETWORK_LOADING - 浏览器正在下载数据<br>
3 = NETWORK_NO_SOURCE - 未找到音频/视频来源
### onLoadedFragEvent
###### onLoadedFragEvent : string;
片段事件内容：当视频源加载完毕时<br>
主动调用方式：CommandPage.startTriggerFragmentEvent
### onErrorFragEvent
###### onErrorFragEvent : string;
片段事件内容：当发生错误时处理<br>
主动调用方式：CommandPage.startTriggerFragmentEvent
### onCompleteFragEvent
###### onCompleteFragEvent : string;
片段事件内容：当播放完成时处理<br>
主动调用方式：CommandPage.startTriggerFragmentEvent


## constructor
###### **[constructor](#constructor)**(editorCompMode? : boolean) :
构造函数
##### 参数
	editorCompMode [可选] 默认值=true 编辑器模式下显示专门的组件样式而非实际的视频



## play
###### **[play](#play)**(): void :
播放



## stop
###### **[stop](#stop)**(): void :
停止播放



## pause
###### **[pause](#pause)**(): void :
暂停播放





