---
title: UIInput 可输入文本组件
---
>可输入文本是一个用于让用户输入文本的组件<br>相关事件：<br>EventObject.ENTER 按下ENTER键时<br>EventObject.INPUT 输入文本时<br>EventObject.CHANGE 文本改变时<br>EventObject.FOCUS 产生焦点时<br>EventObject.BLUR 失去焦点时<br>使用方法：<br>var a = new UIInput();<br>a.color = "#FF0000"<br>a.text = "请输入"<br>stage.addChild(a);<br>// 事件监听示例<br>a.on(EventObject.ENTER,this,this.onInput);<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2019-04-14

**继承**  →UIString<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                         |
| -------------------------------------------------------------------------------------------- |
| **inputMode** : number;<br>文本输入模式 0-文本模式 1-密码模式 2-数字模式 3-多行文本 默认值=0 |
| **restrict** : string;<br>限制输入字符串 如0-9A-Za-z 则表示只能输入数字和字母（正则表达式）  |
| **focus** : boolean;<br>用于产生焦点或失去焦点                                               |
| **maxChars** : number;<br>最大可输入字符数 默认值=99999                                      |
| **[onInputFragEvent](#oninputfragevent)** : string;<br>片段事件内容：当输入文本时触发        |
| **[onEnterFragEvent](#onenterfragevent)** : string;<br>片段事件内容：当按下回车时确定时触发  |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                        |
| ------------------------------------------------------------------------------------------------------------ |
| **[select](#select)**(): void<br>选中全部文字                                                                |
| **[setSelection](#setselection)**(startIndex : number,  endIndex : number): void<br>选中指定索引区间内的文字 |

## 详情

### onInputFragEvent
###### onInputFragEvent : string;
片段事件内容：当输入文本时触发<br>
主动调用方式：CommandPage.startTriggerFragmentEvent
### onEnterFragEvent
###### onEnterFragEvent : string;
片段事件内容：当按下回车时确定时触发<br>
主动调用方式：CommandPage.startTriggerFragmentEvent


## select
###### **[select](#select)**(): void :
选中全部文字



## setSelection
###### **[setSelection](#setselection)**(startIndex : number,  endIndex : number): void :
选中指定索引区间内的文字
##### 参数
	startIndex 起始索引
	endIndex 结束索引





