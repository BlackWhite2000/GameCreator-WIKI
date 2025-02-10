---
title:  GameAudio 音频类
---
>支持平滑过渡音量<br>支持音调（播放速率）<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-07-27

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                            |
| ------------------------------------------------------------------------------- |
| **bgmVolume** : number;<br>[静态]全局背景音乐音量大小 0~1 默认值=1              |
| **bgsVolume** : number;<br>[静态]全局环境音效音量大小 0~1 默认值=1              |
| **seVolume** : number;<br>[静态]全局音效音量大小 0~1 默认值=1                   |
| **tsVolume** : number;<br>[静态]全局语音音量大小 0~1 默认值=1                   |
| **lastBgmURL** : string;<br>[静态]记录上次播放的背景音乐地址                    |
| **lastBgmSoundChannel** : SoundChannel;<br>[静态]记录上次播放的背景音乐声道对象 |
| **lastBGMPitch** : number;<br>[静态]记录上次播放的背景音乐音调                  |
| **lastBGMVolume** : number;<br>[静态]记录上次播放的背景音乐声音大小             |
| **lastBgsURL** : string;<br>[静态]记录上次播放的场景音效地址                    |
| **lastBGSPitch** : number;<br>[静态]记录上次播放的场景音效音调                  |
| **lastBGSVolume** : number;<br>[静态]记录上次播放的场景音效声音大小             |
| **lastBgsSoundChannel** : SoundChannel;<br>[静态]记录上次播放的场景音效声道对象 |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[playBGM](#playbgm)**(url : string,  volume? : number,  loop? : number,  isGradient? : boolean,  gradientTime? : number,  pitch? : number): SoundChannel<br>[静态]播放背景音乐： 地址不相等的情况才重新播放，但音量会改变（如果需要重新播放，可以停止BGM后再播放）  |
| **[stopBGM](#stopbgm)**(isGradient? : boolean,  gradientTime? : number): void<br>[静态]停止播放背景音乐                                                                                                                                                               |
| **[playBGS](#playbgs)**(url : string,  volume? : number,  loop? : number,  isGradient? : boolean,  gradientTime? : number,  pitch? : number): SoundChannel<br>[静态]播放环境音效 ： 地址不相等的情况才重新播放，但音量会改变（如果需要重新播放，可以停止BGM后再播放） |
| **[stopBGS](#stopbgs)**(isGradient? : boolean,  gradientTime? : number): void<br>[静态]停止播放环境音效                                                                                                                                                               |
| **[playSE](#playse)**(url : string,  volume? : number,  pitch? : number,  soc? : [ClientSceneObject](/zh_hans/library/2d/client/clientsceneobject)): SoundChannel<br>[静态]播放音效，播放在场景对象身上时则根据当前场景的镜头与目标的距离来变更声音大小               |
| **[stopSE](#stopse)**(channels? : any): void<br>[静态]停止SE                                                                                                                                                                                                          |
| **[playTS](#playts)**(url : string,  volume? : number,  pitch? : number,  soc? : [ClientSceneObject](/zh_hans/library/2d/client/clientsceneobject)): SoundChannel<br>[静态]播放语音，播放在场景对象身上时则根据当前场景的镜头与目标的距离来变更声音大小               |
| **[stopTS](#stopts)**(channels? : any): void<br>[静态]停止语音                                                                                                                                                                                                        |
| **[setBlurStopMusic](#setblurstopmusic)**(isStop : boolean): void<br>[静态]设置当失去焦点时是否停止音乐                                                                                                                                                               |

## 详情



## playBGM
###### **[playBGM](#playbgm)**(url : string,  volume? : number,  loop? : number,  isGradient? : boolean,  gradientTime? : number,  pitch? : number): SoundChannel :
[静态]播放背景音乐： 地址不相等的情况才重新播放，但音量会改变（如果需要重新播放，可以停止BGM后再播放）<br>
全局同一时间内只能播放一首背景音乐，如果需要叠加播放音频，请使用playSE<br>
同地址但音调不一致也会重新播放
##### 参数
	url 背景音乐地址
	volume 声量大小 0~1
	loop [可选] 循环次数 默认值=9999
	isGradient [可选] 是否渐入 默认值=false
	gradientTime [可选] 渐入时间（毫秒） 默认值=1000
	pitch [可选] 播放速率（音调） 默认值=1 范围0-2



## stopBGM
###### **[stopBGM](#stopbgm)**(isGradient? : boolean,  gradientTime? : number): void :
[静态]停止播放背景音乐
##### 参数
	isGradient [可选] 默认值=false 是否渐出
	gradientTime [可选] 默认值=1000 渐出时间（毫秒）



## playBGS
###### **[playBGS](#playbgs)**(url : string,  volume? : number,  loop? : number,  isGradient? : boolean,  gradientTime? : number,  pitch? : number): SoundChannel :
[静态]播放环境音效 ： 地址不相等的情况才重新播放，但音量会改变（如果需要重新播放，可以停止BGM后再播放）<br>
全局同一时间内只能播放一首环境音效，如果需要叠加播放音频，请使用playSE<br>
同地址但音调不一致也会重新播放
##### 参数
	url 环境音效地址
	volume 声量大小 0~1
	loop [可选] 循环次数 默认值=9999
	isGradient [可选] 是否渐入 默认值=false
	gradientTime [可选] 渐入时间（毫秒） 默认值=1000
	pitch [可选] 播放速率 默认值=1 范围0-2



## stopBGS
###### **[stopBGS](#stopbgs)**(isGradient? : boolean,  gradientTime? : number): void :
[静态]停止播放环境音效
##### 参数
	isGradient [可选] 默认值=false 是否渐出
	gradientTime [可选] 默认值=1000 渐出时间（毫秒）



## playSE
###### **[playSE](#playse)**(url : string,  volume? : number,  pitch? : number,  soc? : [ClientSceneObject](/zh_hans/library/2d/client/clientsceneobject)): SoundChannel :
[静态]播放音效，播放在场景对象身上时则根据当前场景的镜头与目标的距离来变更声音大小
##### 参数
	url 音效地址
	volume [可选] 默认值=1 音量 0~1
	pitch [可选] 播放速率 默认值=1 范围0-2
	soc [可选] 默认值=null 音频绑定在场景对象上



## stopSE
###### **[stopSE](#stopse)**(channels? : any): void :
[静态]停止SE
##### 参数
	channels [可选] 传入则表示仅停止传入组的音效，否则是全部当前的音效 SoundChannel | SoundChannel[]



## playTS
###### **[playTS](#playts)**(url : string,  volume? : number,  pitch? : number,  soc? : [ClientSceneObject](/zh_hans/library/2d/client/clientsceneobject)): SoundChannel :
[静态]播放语音，播放在场景对象身上时则根据当前场景的镜头与目标的距离来变更声音大小
##### 参数
	url 语音音效地址
	volume [可选] 默认值=1 音量 0~1
	pitch [可选] 播放速率 默认值=1 范围0-2
	soc [可选] 默认值=null 音频绑定在场景对象上



## stopTS
###### **[stopTS](#stopts)**(channels? : any): void :
[静态]停止语音
##### 参数
	channels [可选] 默认值=null 传入则表示仅停止传入组的音效，否则是全部当前的音效 SoundChannel | SoundChannel[]



## setBlurStopMusic
###### **[setBlurStopMusic](#setblurstopmusic)**(isStop : boolean): void :
[静态]设置当失去焦点时是否停止音乐
##### 参数
	isStop 是否停止





