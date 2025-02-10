---
title: Browser 浏览器状态
---
>是浏览器代理类。封装浏览器及原生 js 提供的一些功能。<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-01-01

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                            |
| ------------------------------------------------------------------------------- |
| **userAgent** : string;<br>[静态]浏览器信息                                     |
| **onIOS** : boolean;<br>[静态]是否在 ios 设备                                   |
| **onMobile** : boolean;<br>[静态]是否在移动设备                                 |
| **onIPhone** : boolean;<br>[静态]是否在 iphone设备                              |
| **onIPad** : boolean;<br>[静态]是否在 ipad 设备                                 |
| **onAndriod** : boolean;<br>[静态]是否在 andriod设备                            |
| **onAndroid** : boolean;<br>[静态]是否在 andriod设备                            |
| **onWP** : boolean;<br>[静态]是否在 Windows Phone 设备                          |
| **onQQBrowser** : boolean;<br>[静态]是否在 QQ 浏览器                            |
| **onMQQBrowser** : boolean;<br>[静态]是否在移动端 QQ 或 QQ 浏览器               |
| **onSafari** : boolean;<br>[静态]是否在移动端 Safari                            |
| **onIE** : boolean;<br>[静态]是否在IE浏览器内                                   |
| **onWeiXin** : boolean;<br>[静态]微信内                                         |
| **onPC** : boolean;<br>[静态]是否在 PC 端                                       |
| **onMac** : boolean;<br>[静态]是否在 PC 端                                      |
| **httpProtocol** : boolean;<br>[静态]表示是否是 HTTP 协议                       |
| **webAudioEnabled** : boolean;<br>[静态]音频是否启用                            |
| **soundType** : string;<br>[静态]音频播放类别                                   |
| **enableTouch** : boolean;<br>[静态]是否开启触摸                                |
| **[clientWidth](#clientwidth)** : number;<br>[静态][只读]浏览器窗口可视宽度。   |
| **[clientHeight](#clientheight)** : number;<br>[静态][只读]浏览器窗口可视高度。 |
| **width** : number;<br>[静态][只读]浏览器窗口物理宽度。考虑了设备像素比。       |
| **height** : number;<br>[静态][只读]浏览器窗口物理高度。考虑了设备像素比。      |
| **pixelRatio** : number;<br>[静态][只读]设备像素比。                            |
| **container** : any;<br>[静态]画布容器，用来盛放画布的容器。方便对画布进行控制  |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                 |
| --------------------------------------------------------------------- |
| **[now](#now)**(): number<br>[静态]获取浏览器当前时间戳，单位为毫秒。 |

## 详情

### clientWidth
###### clientWidth : number;
[静态][只读]浏览器窗口可视宽度。<br>
通过分析浏览器信息获得。浏览器多个属性值优先级为：window.innerWidth(包含滚动条宽度) > document.body.clientWidth(不包含滚动条宽度)，如果前者为0或为空，则选择后者。
### clientHeight
###### clientHeight : number;
[静态][只读]浏览器窗口可视高度。<br>
通过分析浏览器信息获得。浏览器多个属性值优先级为：window.innerHeight(包含滚动条高度) > document.body.clientHeight(不包含滚动条高度) > document.documentElement.clientHeight(不包含滚动条高度)，如果前者为0或为空，则选择后者。


## now
###### **[now](#now)**(): number :
[静态]获取浏览器当前时间戳，单位为毫秒。





