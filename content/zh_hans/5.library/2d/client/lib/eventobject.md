---
title:  EventObject 事件对象
---
>当发生事件后回调中带有此类实例<br>同时用于常用的事件类别储存，如EventObject.MOUSE_DOWN<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-01-01

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                              |
| ----------------------------------------------------------------------------------------------------------------- |
| **MOUSE_DOWN** : string;<br>[静态]定义 mousedown 事件对象的 type 属性值 鼠标左键按下时事件                        |
| **MOUSE_UP** : string;<br>[静态]定义 mouseup 事件对象的 type 属性值 鼠标左键弹起时事件                            |
| **CLICK** : string;<br>[静态]定义 click 事件对象的 type 属性值 鼠标点击时事件                                     |
| **RIGHT_MOUSE_DOWN** : string;<br>[静态]定义 rightmousedown 事件对象的 type 属性值 鼠标右键按下时事件             |
| **RIGHT_MOUSE_UP** : string;<br>[静态]定义 rightmouseup 事件对象的 type 属性值 鼠标右键弹起时事件                 |
| **RIGHT_CLICK** : string;<br>[静态]定义 rightclick 事件对象的 type 属性值 鼠标右键点击时事件                      |
| **MOUSE_MOVE** : string;<br>[静态]定义 mousemove 事件对象的 type 属性值 鼠标移动时事件                            |
| **MOUSE_OVER** : string;<br>[静态]定义 mouseover 事件对象的 type 属性值 鼠标进入悬停时事件                        |
| **MOUSE_OUT** : string;<br>[静态]定义 mouseout 事件对象的 type 属性值 鼠标移除悬停时事件                          |
| **MOUSE_WHEEL** : string;<br>[静态]定义 mousewheel 事件对象的 type 属性值 鼠标滚轮事件                            |
| **DOUBLE_CLICK** : string;<br>[静态]定义 doubleclick 事件对象的 type 属性值 鼠标左键双击事件                      |
| **CHANGE** : string;<br>[静态]定义 change 事件对象的 type 属性值 状态更改事件                                     |
| **RESIZE** : string;<br>[静态]定义 resize 事件对象的 type 属性值 重置尺寸时事件                                   |
| **ADDED** : string;<br>[静态]定义 added 事件对象的 type 属性值 添加到父节点时触发                                 |
| **REMOVED** : string;<br>[静态]定义 removed 事件对象的 type 属性值 从父节点移除时触发                             |
| **DISPLAY** : string;<br>[静态]定义 display 事件对象的 type 属性值 加入到显示列表中时添加                         |
| **UNDISPLAY** : string;<br>[静态]定义 undisplay 事件对象的 type 属性值 从显示列表中移除时添加                     |
| **ERROR** : string;<br>[静态]定义 error 事件对象的 type 属性值 发生错误时事件                                     |
| **COMPLETE** : string;<br>[静态]定义 complete 事件对象的 type 属性值 完成事件                                     |
| **LOADED** : string;<br>[静态]定义 loaded 事件对象的 type 属性值 加载完毕事件                                     |
| **PROGRESS** : string;<br>[静态]定义 progress 事件对象的 type 属性值 加载过程中事件                               |
| **INPUT** : string;<br>[静态]定义 input 事件对象的 type 属性值 输入事件                                           |
| **RENDER** : string;<br>[静态]定义 render 事件对象的 type 属性值 渲染时事件                                       |
| **KEY_DOWN** : string;<br>[静态]定义 keydown 事件对象的 type 属性值 按键按下                                      |
| **KEY_PRESS** : string;<br>[静态]定义 keypress 事件对象的 type 属性值 按键按下一次(字母区分大小写)                |
| **KEY_UP** : string;<br>[静态]定义 keyup 事件对象的 type 属性值 按键弹起                                          |
| **DRAG_START** : string;<br>[静态]定义 dragstart 事件对象的 type 属性值 拖拽开始                                  |
| **DRAG_MOVE** : string;<br>[静态]定义 dragmove 事件对象的 type 属性值 拖拽移动中                                  |
| **DRAG_END** : string;<br>[静态]定义 dragend 事件对象的 type 属性值 拖拽结束                                      |
| **ENTER** : string;<br>[静态]定义 enter 事件对象的 type 属性值 输入框输入回车键时                                 |
| **BLUR** : string;<br>[静态]定义 blur 事件对象的 type 属性值 失去焦点事件                                         |
| **FOCUS** : string;<br>[静态]定义 focus 事件对象的 type 属性值 获得焦点事件                                       |
| **FOCUS_CHANGE** : string;<br>[静态]定义 focuschange 事件对象的 type 属性值 失去焦点或者获取焦点时事件            |
| **FULL_SCREEN_CHANGE** : string;<br>[静态]浏览器全屏更改时触发                                                    |
| **DEVICE_LOST** : string;<br>[静态]显卡设备丢失时触发                                                             |
| **type** : string;<br>事件类型。                                                                                  |
| **nativeEvent** : any;<br>原生浏览器事件                                                                          |
| **target** : Sprite;<br>事件目标触发对象                                                                          |
| **currentTarget** : Sprite;<br>事件当前冒泡对象                                                                   |
| **touchId** : number;<br>分配给触摸点的唯一标识号（作为 int）                                                     |
| **keyCode** : number;<br>键盘值                                                                                   |
| **delta** : number;<br>滚轮滑动增量                                                                               |
| **touches** : Array<any>;<br>[只读]触摸点列表。                                                                   |
| **altKey** : boolean;<br>[只读]表示 Alt 键是处于活动状态 (true) 还是非活动状态 (false)。                          |
| **ctrlKey** : boolean;<br>[只读]表示 Ctrl 键是处于活动状态 (true) 还是非活动状态 (false)。                        |
| **shiftKey** : boolean;<br>[只读]表示 Shift 键是处于活动状态 (true) 还是非活动状态 (false)。                      |
| **charCode** : boolean;<br>[只读]包含按下或释放的键的字符代码值。字符代码值为英文键盘值。                         |
| **[keyLocation](#keylocation)** : number;<br>[只读]表示键在键盘上的位置。这对于区分在键盘上多次出现的键非常有用。 |
| **stageX** : number;<br>[只读]鼠标在 Stage 上的 X 轴坐标（绝对坐标）                                              |
| **stageY** : number;<br>[只读]鼠标在 Stage 上的 Y 轴坐标（绝对坐标）                                              |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[stopPropagation](#stoppropagation)**(): void<br>阻止对事件流中当前节点的后续节点中的所有事件侦听器进行处理。此方法不会影响当前节点 (currentTarget) 中的任何事件侦听器。 |

## 详情

### keyLocation
###### keyLocation : number;
[只读]表示键在键盘上的位置。这对于区分在键盘上多次出现的键非常有用。<br>
例如，您可以根据此属性的值来区分左 Shift 键和右 Shift 键，或者是数字键和小键盘。


## stopPropagation
###### **[stopPropagation](#stoppropagation)**(): void :
阻止对事件流中当前节点的后续节点中的所有事件侦听器进行处理。此方法不会影响当前节点 (currentTarget) 中的任何事件侦听器。





