---
title:  TransData 过渡数据
---
><br><br>
>维护人员：**JayLen**  
>创建时间：2020-11-17

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                                                                                   |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **transType** : number;<br>过渡方式：0-均匀过渡 1-缓动过渡 2-曲线过渡 默认值=0                                                                                         |
| **loopType** : number;<br>循环方式：0-无(一次) 1-循环 2-一次往返-返回时从头过渡 3-一次往返-返回时从尾过渡 4-循环往返-返回时从头过渡 5-循环往返-返回时从尾过渡 默认值=0 |
| **timeType** : number;<br>时间类别：0-无() 1-帧数 2-秒数 3-可选择单位 默认值=0                                                                                         |
| **timeUnit** : number;<br>时间单位：0-帧数 1-秒数 默认值=1                                                                                                             |
| **totalTime** : number;<br>总时间数(帧数或者秒数) 默认值=2                                                                                                             |
| **tweenType** : number;<br>缓动方式 默认值=0                                                                                                                           |
| **tweenTypeName** : string;<br>缓动方式名称(如backOut) 默认值="bounceIn"                                                                                               |
| **curveData** : any[];<br>曲线数据 默认值=[[0, 0, 0, 99, 1, 1, 1, 3], [0, 100, 100]]                                                                                   |
| **refreshInterval** : number;<br>刷新时间(默认16，表示16毫秒，逐帧刷新) 默认值=16                                                                                      |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                     |
| ------------------------------------------------------------------------------------------------------------------------- |
| **[isLoop](#isloop)**(transData : [TransData](/zh_hans/library/2d/common/transdata)): boolean<br>[静态]是否循环           |
| **[isUseFrame](#isuseframe)**(transData : [TransData](/zh_hans/library/2d/common/transdata)): boolean<br>[静态]是否使用帧 |
| **[isUseTime](#isusetime)**(transData : [TransData](/zh_hans/library/2d/common/transdata)): boolean<br>[静态]是否使用时间 |

## 详情



## isLoop
###### **[isLoop](#isloop)**(transData : [TransData](/zh_hans/library/2d/common/transdata)): boolean :
[静态]是否循环



## isUseFrame
###### **[isUseFrame](#isuseframe)**(transData : [TransData](/zh_hans/library/2d/common/transdata)): boolean :
[静态]是否使用帧



## isUseTime
###### **[isUseTime](#isusetime)**(transData : [TransData](/zh_hans/library/2d/common/transdata)): boolean :
[静态]是否使用时间





