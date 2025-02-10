---
title: GameUI 界面管理器
---
>特性：<br>&nbsp;&nbsp;-- 通过系统创建的界面，同编号的界面只有一个<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比如通过GameUI.show(1)创建1号界面，第二次调用仍然是这个界面<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;通过事件可视化打开的界面同GameUI.show<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;如果需要新建多个相同的界面，可使用GameUI.load(1,true);表示以克隆的形式创建1<br>相同ID的界面只存在一个，如额外需要创建界面 可以 new GUI_XXX<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-10-12

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------------------------- |
| **[EVENT_OPEN_SYSTEM_UI](#event_open_system_ui)** : string;<br>[静态]事件：当打开系统组界面时派发的事件 onOpenUI(uiID:number) uiID=界面编号 |
| **[EVENT_CLOSE_SYSTEM_UI](#event_close_system_ui)** : string;<br>[静态]事件：关闭系统组界面时派发的事件 onCloseUI(uiID:number)              |
| **[EVENT_CREATE_UI](#event_create_ui)** : string;<br>[静态]事件：创建界面时派发的事件，无论创建的是系统组界面还是副本                       |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                  |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[isOpened](#isopened)**(uiID : number): boolean<br>[静态]是否已打开                                                                                                  |
| **[load](#load)**(id : number,  copy? : boolean): GUI_BASE<br>[静态]加载界面                                                                                           |
| **[getAllSystemGroupUIs](#getallsystemgroupuis)**(): any<br>[静态]获取已存在的系统组界面（包含此前打开过后关闭掉的，释放掉的话则不再该列表内）                         |
| **[get](#get)**(id : number): GUI_BASE<br>[静态]获取系统组列表中指定编号的界面，如果系统组未开启过该界面则获取为null                                                   |
| **[dispose](#dispose)**(id : number): void<br>[静态]释放系统组列表中指定编号的界面                                                                                     |
| **[show](#show)**(id : number): GUI_BASE<br>[静态]显示系统组列表中指定编号的界面，如果该界面在系统组列表中找不到则会创建并加入到系统组列表中，如果存在则直接返回该界面 |
| **[hide](#hide)**(id : number): void<br>[静态]隐藏系统组列表中指定编号的界面，如果该界面在系统组列表中找不到则忽略                                                     |
| **[hideAll](#hideall)**(): void<br>[静态]隐藏全部系统组列表的界面                                                                                                      |
| **[getAllCompChildren](#getallcompchildren)**(ui : GUI_BASE,  keyValueMode : boolean,  conditionFunc? : Function): any<br>[静态]获取其全部子组件对象                   |

## 详情

### EVENT_OPEN_SYSTEM_UI
###### EVENT_OPEN_SYSTEM_UI : string;
[静态]事件：当打开系统组界面时派发的事件 onOpenUI(uiID:number) uiID=界面编号<br>
>&nbsp;EventUtils.addEventListenerFunction(GameUI,GameUI.EVENT_OPEN_SYSTEM_UI,(uiID:number)=>{<br>
>&nbsp;&nbsp;&nbsp;// to do<br>
>&nbsp;},this);<br>
>


### EVENT_CLOSE_SYSTEM_UI
###### EVENT_CLOSE_SYSTEM_UI : string;
[静态]事件：关闭系统组界面时派发的事件 onCloseUI(uiID:number)<br>
>&nbsp;EventUtils.addEventListenerFunction(GameUI,GameUI.EVENT_CLOSE_SYSTEM_UI,(uiID:number)=>{<br>
>&nbsp;&nbsp;&nbsp;// to do<br>
>&nbsp;},this);<br>
>


### EVENT_CREATE_UI
###### EVENT_CREATE_UI : string;
[静态]事件：创建界面时派发的事件，无论创建的是系统组界面还是副本<br>
>&nbsp;EventUtils.addEventListenerFunction(GameUI,GameUI.EVENT_CREATE_UI,(ui: GUI_BASE)=> {<br>
>&nbsp;&nbsp;&nbsp;// to do<br>
>&nbsp;},this);<br>
>




## isOpened
###### **[isOpened](#isopened)**(uiID : number): boolean :
[静态]是否已打开
##### 参数
	uiID 系统组界面ID

##### 返回
[boolean]

## load
###### **[load](#load)**(id : number,  copy? : boolean): GUI_BASE :
[静态]加载界面
##### 参数
	id 界面ID
	copy [可选] 默认值=false 是否是克隆界面 false=属于系统组的界面（会保存在系统组列表里） true=属于自行新建的界面

##### 返回
[GUI_BASE]

## getAllSystemGroupUIs
###### **[getAllSystemGroupUIs](#getallsystemgroupuis)**(): any :
[静态]获取已存在的系统组界面（包含此前打开过后关闭掉的，释放掉的话则不再该列表内）

##### 返回
{ [uiID: number]: GUI_BASE }

## get
###### **[get](#get)**(id : number): GUI_BASE :
[静态]获取系统组列表中指定编号的界面，如果系统组未开启过该界面则获取为null
##### 参数
	id 界面编号

##### 返回
系统组的该界面

## dispose
###### **[dispose](#dispose)**(id : number): void :
[静态]释放系统组列表中指定编号的界面
##### 参数
	id 界面编号



## show
###### **[show](#show)**(id : number): GUI_BASE :
[静态]显示系统组列表中指定编号的界面，如果该界面在系统组列表中找不到则会创建并加入到系统组列表中，如果存在则直接返回该界面
##### 参数
	id 界面编号

##### 返回
[GUI_BASE]

## hide
###### **[hide](#hide)**(id : number): void :
[静态]隐藏系统组列表中指定编号的界面，如果该界面在系统组列表中找不到则忽略
##### 参数
	id 界面编号



## hideAll
###### **[hideAll](#hideall)**(): void :
[静态]隐藏全部系统组列表的界面



## getAllCompChildren
###### **[getAllCompChildren](#getallcompchildren)**(ui : GUI_BASE,  keyValueMode : boolean,  conditionFunc? : Function): any :
[静态]获取其全部子组件对象
##### 参数
	keyValueMode 是否包含 keyValue 格式的，有则返回值中的keyValue存在值
	conditionFunc [可选] 默认值=null  条件方法，通过条件筛选需要的组件，不存在方法或返回true都视为需要该组件 conditionFunc(uiComp:Sprite)

##### 返回
{ arr: UIBase[], keyValue: { [compID: string]: UIBase } }



