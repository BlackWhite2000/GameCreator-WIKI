---
title:  UIBase 组件基类
---
>所有组件的基类，不单独实例化出来<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-10-12

**继承**  →[GameSprite](/zh_hans/library/2d/client/gamesprite)→[Sprite](/zh_hans/library/2d/client/lib/sprite)→[TreeNode](/zh_hans/library/2d/client/lib/treenode)→[EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>
**子类**  [UIAnimation](/zh_hans/library/2d/client/ui/uianimation)、[UIAvatar](/zh_hans/library/2d/client/ui/uiavatar)<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                                          |
| ----------------------------------------------------------------------------------------------------------------------------- |
| **[EVENT_COMPONENT_CONSTRUCTOR_INIT](#event_component_constructor_init)** : string;<br>[静态]事件：组件构造初始化时派发的事件 |
| **[ON_VISIBLE_CHANGE](#on_visible_change)** : string;<br>[静态]事件：由于出现条件导致的出现或消失（visible变更）              |
| **id** : string;<br>唯一ID：由系统随机生成                                                                                    |
| **guiRoot** : UIRoot;<br>预设控件的所属界面根容器，比如2号界面中的预设控件中的该属性就是2号界面本身                           |
| **hasCommand** : boolean[];<br>是否存在自定义的触发事件 索引为自定义界面触发事件类别                                          |
| **className** : string;<br>组件类型名称 如UIButton                                                                            |
| **[commandInputMessage](#commandinputmessage)** : any;<br>提交玩家输入信息 数据类型：any[]                                    | Callback |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div> |
| ----------------------------------------------------- |
| **[dispose](#dispose)**(): void<br>释放               |

## 详情

### EVENT_COMPONENT_CONSTRUCTOR_INIT
###### EVENT_COMPONENT_CONSTRUCTOR_INIT : string;
[静态]事件：组件构造初始化时派发的事件<br>
利用此事件可以监听所有组件初始化，以便可以追加逻辑<br>
>EventUtils.addEventListenerFunction(UIBase, UIBase.EVENT_COMPONENT_CONSTRUCTOR_INIT, (uiComp: UIBase)=>{<br>
>&nbsp;&nbsp;// to do<br>
>}, this);<br>
>


### ON_VISIBLE_CHANGE
###### ON_VISIBLE_CHANGE : string;
[静态]事件：由于出现条件导致的出现或消失（visible变更）<br>
>ui.on(UIBase.ON_VISIBLE_CHANGE,this,func);<br>
>


### commandInputMessage
###### commandInputMessage : any;
提交玩家输入信息 数据类型：any[] | Callback<br>
用于装载提交的玩家输入值，以便事件页接收（等待玩家提交信息），可以是固定的数组数据或是回调函数中返回数组数据<br>
比如该控件拥有点击事件，并且点击后以带参数的形式提交，提交后事件页中将接收的到输入值


## dispose
###### **[dispose](#dispose)**(): void :
释放





