---
title: GameDialog 游戏对话框
---
>特性：<br>-- 目前一旦加载对话框样式后不再释放而是一直缓存着<br>-- 对话与选项均通过此类实现<br>-- 可通过监听事件等方式编写对话框的插件，如制作AVG游戏的快进、跳过、历史对话记录等<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2019-01-09

**继承**  →Sprite<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[EVENT_DIALOG_START](#event_dialog_start)** : string;<br>[静态]事件：当对话框出现时 回调参数：是否选项、文本内容、选项内容（若是选项的话）、名称、头像路径                                        |
| **[EVENT_AFTER_DIALOG_START](#event_after_dialog_start)** : string;<br>[静态]事件：当对话框出现后                                                                                                   |
| **[EVENT_DIALOG_END](#event_dialog_end)** : string;<br>[静态]事件：当对话文本播放结束时                                                                                                             |
| **[EVENT_DIALOG_CLOSE](#event_dialog_close)** : string;<br>[静态]事件：当对话框关闭时                                                                                                               |
| **[EVENT_DIALOG_WORD_PLAY](#event_dialog_word_play)** : string;<br>[静态]事件：当文本框文本播放时 回调参数：当前文字                                                                                |
| **[EVENT_DIALOG_WORD_PLAY_COMPLETE](#event_dialog_word_play_complete)** : string;<br>[静态]事件：当文本播放完成时 isAuto 表示是否来自自动播放                                                       |
| **[EVENT_TS_PLAY_COMPLETE](#event_ts_play_complete)** : string;<br>[静态]事件：当语音播放完毕时派发（如果该次对话的语音未播放完成时，玩家手动跳过了该次对话的话则不会抛出该事件）                   |
| **[EVENT_DIALOG_TEXT_WAIT_TIME](#event_dialog_text_wait_time)** : string;<br>[静态]事件：当播放文本时遇到等待时间（帧数）时抛出事件 frameCount=等待的帧数                                           |
| **[EVENT_WAIT_PALYER_OPERATION](#event_wait_palyer_operation)** : string;<br>[静态]事件：当播放文本时遇到等待玩家操作时以及玩家操作完毕后抛出该事件 state=0表示等待玩家操作 state=1表示玩家操作完毕 |
| **[EVENT_BEFORE_RECOVERY_DIALOG](#event_before_recovery_dialog)** : string;<br>[静态]事件：恢复存档时的对话前调用                                                                                   |
| **dialogTextShowAllEnabled** : boolean;<br>[静态]允许用户操快速显示当前文本（空格键/鼠标左键点击）默认=false                                                                                        |
| **fromCommandID** : string;<br>[静态]当前文本对应的指令唯一标识                                                                                                                                     |
| **isInDialog** : boolean;<br>[静态][只读]是否显示对话中                                                                                                                                             |
| **isPlaying** : boolean;<br>[静态][只读]是否播放中                                                                                                                                                  |
| **lastDialog** : GameDialog;<br>[静态]最近使用的对话框                                                                                                                                              |
| **optionList** : UIList;<br>[只读]选项列表                                                                                                                                                          |
| **optionUIs** : UIButton[];<br>[只读]获取当前的选项按钮（需要选项存在且正处于显示时）                                                                                                               |
| **optionTexts** : UIString[];<br>[只读]选项文本                                                                                                                                                     |
| **dialogHeadBox** : UIBitmap                                                                                                                                                                        | UIStandAvatar | UIAnimation | UIRoot;<br>[只读]头像 |
| **dialogBox** : UIBitmap;<br>[只读]对话框背景图                                                                                                                                                     |
| **nameText** : UIString;<br>[只读]名字文本                                                                                                                                                          |
| **playTextLabels** : UIString[];<br>[只读]文本文字组：根据不同的颜色、换行等情况切分的多段文本（拥有材质的话则逐字拆分）默认值=[]                                                                   |
| **skipAni** : GCAnimation;<br>[只读]跳过标志                                                                                                                                                        |
| **id** : number;<br>[只读]唯一ID                                                                                                                                                                    |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                      |
| ---------------------------------------------------------------------------------------------------------- |
| **[showall](#showall)**(): void<br>[静态]功能：立即显示全文本，当处于文本播放时则会立即显示至全文本        |
| **[stop](#stop)**(): void<br>[静态]停止对话，停止后其所在的触发线也处于停止中                              |
| **[skip](#skip)**(): boolean<br>[静态]功能：立刻跳过当前文本                                               |
| **[skipWaitPlayerOperation](#skipwaitplayeroperation)**(): boolean<br>[静态]功能：立刻跳过「等待玩家操作」 |

## 详情

### EVENT_DIALOG_START
###### EVENT_DIALOG_START : string;
[静态]事件：当对话框出现时 回调参数：是否选项、文本内容、选项内容（若是选项的话）、名称、头像路径<br>
>// isOption = 是否选项<br>
>// content = 文本内容<br>
>// options = 选项内容（若是选项的话）<br>
>// name = 名称<br>
>// head = 头像 图片路径string/立绘ID:number/动画ID:number<br>
>// expression = 表情ID（如有，立绘模式下可选择表情）<br>
>// audioURL = 语音字符串（如有） 格式：音频地址,音量0-1,音调0-2<br>
>// speed = 文字播放速度 0-5 极慢-立即显示<br>
>EventUtils.addEventListenerFunction(GameDialog,GameDialog.EVENT_DIALOG_START,(isOption:boolean,content:string,options:string[],name:string,head:string|number,expression:number,audioURL:string,speed:number)=> {<br>
>&nbsp;&nbsp;// to do<br>
>},this);<br>
>


### EVENT_AFTER_DIALOG_START
###### EVENT_AFTER_DIALOG_START : string;
[静态]事件：当对话框出现后<br>
onAfterDialogStart(isOption:boolean);
### EVENT_DIALOG_END
###### EVENT_DIALOG_END : string;
[静态]事件：当对话文本播放结束时<br>
>// gameDialog = 当前的对话框显示对象 fromAutoPlaySkipSign:boolean = 是否来自文本播放时出现的[跳过本次对话]<br>
>EventUtils.addEventListenerFunction(GameDialog,GameDialog.EVENT_DIALOG_END,(gameDialog:GameDialog,fromAutoPlaySkipSign:boolean)=> {<br>
>&nbsp;&nbsp;// to do<br>
>},this);<br>
>


### EVENT_DIALOG_CLOSE
###### EVENT_DIALOG_CLOSE : string;
[静态]事件：当对话框关闭时<br>
>// gameDialog = 当前的对话框显示对象<br>
>EventUtils.addEventListenerFunction(GameDialog,GameDialog.EVENT_DIALOG_CLOSE,(gameDialog:GameDialog)=> {<br>
>&nbsp;&nbsp;// to do<br>
>},this);<br>
>


### EVENT_DIALOG_WORD_PLAY
###### EVENT_DIALOG_WORD_PLAY : string;
[静态]事件：当文本框文本播放时 回调参数：当前文字<br>
>// word = 当前的文字<br>
>EventUtils.addEventListenerFunction(GameDialog,GameDialog.EVENT_DIALOG_WORD_PLAY,(word:string)=> {<br>
>&nbsp;&nbsp;// to do<br>
>},this);<br>
>


### EVENT_DIALOG_WORD_PLAY_COMPLETE
###### EVENT_DIALOG_WORD_PLAY_COMPLETE : string;
[静态]事件：当文本播放完成时 isAuto 表示是否来自自动播放<br>
>EventUtils.addEventListenerFunction(GameDialog,GameDialog.EVENT_DIALOG_WORD_PLAY_COMPLETE,Callback.New(isAuto:boolean)=> {<br>
>&nbsp;&nbsp;// to do<br>
>},this);<br>
>


### EVENT_TS_PLAY_COMPLETE
###### EVENT_TS_PLAY_COMPLETE : string;
[静态]事件：当语音播放完毕时派发（如果该次对话的语音未播放完成时，玩家手动跳过了该次对话的话则不会抛出该事件）<br>
>// success = 是否播放成功<br>
>// audioURL = 语音字符串（如有） 格式：音频地址,音量0-1,音调0-2<br>
>EventUtils.addEventListenerFunction(GameDialog,GameDialog.EVENT_TS_PLAY_COMPLETE,(success:boolean,audioURL:string)=> {<br>
>&nbsp;&nbsp;// to do<br>
>},this);<br>
>


### EVENT_DIALOG_TEXT_WAIT_TIME
###### EVENT_DIALOG_TEXT_WAIT_TIME : string;
[静态]事件：当播放文本时遇到等待时间（帧数）时抛出事件 frameCount=等待的帧数<br>
EventUtils.addEventListenerFunction(GameDialog,GameDialog.EVENT_DIALOG_TEXT_WAIT_TIME,(frameCount:number)=> {<br>
&nbsp;&nbsp;// to do<br>
},this);
### EVENT_WAIT_PALYER_OPERATION
###### EVENT_WAIT_PALYER_OPERATION : string;
[静态]事件：当播放文本时遇到等待玩家操作时以及玩家操作完毕后抛出该事件 state=0表示等待玩家操作 state=1表示玩家操作完毕<br>
EventUtils.addEventListenerFunction(GameDialog,GameDialog.EVENT_WAIT_PALYER_OPERATION,(state:number)=> {<br>
&nbsp;&nbsp;// to do<br>
},this);
### EVENT_BEFORE_RECOVERY_DIALOG
###### EVENT_BEFORE_RECOVERY_DIALOG : string;
[静态]事件：恢复存档时的对话前调用<br>
EventUtils.addEventListenerFunction(GameDialog,GameDialog.EVENT_BEFORE_RECOVERY_DIALOG,(success:boolean,audioURL:string)=> {<br>
&nbsp;&nbsp;// to do<br>
},this);


## showall
###### **[showall](#showall)**(): void :
[静态]功能：立即显示全文本，当处于文本播放时则会立即显示至全文本



## stop
###### **[stop](#stop)**(): void :
[静态]停止对话，停止后其所在的触发线也处于停止中



## skip
###### **[skip](#skip)**(): boolean :
[静态]功能：立刻跳过当前文本

##### 返回
[boolean] 成功跳过

## skipWaitPlayerOperation
###### **[skipWaitPlayerOperation](#skipwaitplayeroperation)**(): boolean :
[静态]功能：立刻跳过「等待玩家操作」<br>
当监听到EVENT_WAIT_PALYER_OPERATION事件时可通过此功能跳过等待

##### 返回
[boolean] 成功跳过



