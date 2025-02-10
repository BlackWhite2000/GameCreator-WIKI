---
title: UIList 列表组件
---
>列表组件是一个支持NxM矩阵式排列的组件，其内部的项（item）是通过创建另一个界面源实现的<br>&nbsp;-- 项数据基类：UIListItemData （此外系统会自动创建每个界面作为项数据类-ListItem_?，请查阅system/UIRuntime.ts）<br>&nbsp;&nbsp;&nbsp;&nbsp;项数据类会自动根据控件创建相应的属性，以便填充后自动呈现出该数值或字符串（以及图片地址等）<br>&nbsp;&nbsp;&nbsp;&nbsp;项数据映射值参考：<br>&nbsp;&nbsp;&nbsp;&nbsp;UIBitmap -> string-图片地址<br>&nbsp;&nbsp;&nbsp;&nbsp;UIString -> string-文本<br>&nbsp;&nbsp;&nbsp;&nbsp;UIVariable -> number-数值变量ID<br>&nbsp;&nbsp;&nbsp;&nbsp;UIAvatar -> number-行走图ID<br>&nbsp;&nbsp;&nbsp;&nbsp;UIStandAvatar -> number-立绘ID<br>&nbsp;&nbsp;&nbsp;&nbsp;UIAnimation -> number-动画ID<br>&nbsp;&nbsp;&nbsp;&nbsp;UIInput -> string-默认文本<br>&nbsp;&nbsp;&nbsp;&nbsp;UICheckBox -> boolean-选中状态<br>&nbsp;&nbsp;&nbsp;&nbsp;UISwitch -> number-开关ID<br>&nbsp;&nbsp;&nbsp;&nbsp;UITabBox -> string-项（如aa,bb,cc）<br>&nbsp;&nbsp;&nbsp;&nbsp;UISlider -> number-值<br>&nbsp;&nbsp;&nbsp;&nbsp;UIGUI -> number-界面ID<br>&nbsp;&nbsp;&nbsp;&nbsp;UIList -> UIListItemData[]-项数据<br>相关事件：<br>&nbsp;EventObject.CHANGE 当改变状态时派发  onChange(state:number) state=0 表示selectedIndex改变，否则是overIndex<br>&nbsp;EventObject.LOADED 加载完成时候事件<br>&nbsp;UIList.OPEN_STATE_CHANGE 打开状态发生改变时<br>&nbsp;UIList.ITEM_CLICK 点击确认项<br>&nbsp;UIList.EVENT_FOCUS_CHANGE 【EventUtils事件】当焦点更改时派发的事件<br>&nbsp;UIList.ITEM_CREATE 创建项时<br>使用方法：<br>&nbsp;// 列表方式添加数据<br>&nbsp;var a = new UIList();<br>&nbsp;a.overImageURL = "asset/image/picture/control/uilistover.png";<br>&nbsp;a.selectImageURL = "asset/image/picture/control/uilistselect.png";<br>&nbsp;a.itemModelGUI = 8; // 使用指定的界面ID来创建项，如果需要指定类，请使用 itemModelClass<br>&nbsp;stage.addChild(a);<br>&nbsp;var dArr = [];<br>&nbsp;for(var i=0;i<10;i++){<br>&nbsp;&nbsp;&nbsp;&nbsp;var d:ListItem_8 = new ListItem_8();<br>&nbsp;&nbsp;&nbsp;&nbsp;d.pic = "asset/image/a.jpg"; // 假设8号界面存在名为pic的控件<br>&nbsp;&nbsp;&nbsp;&nbsp;d.txt = "kds"; // 假设8号界面存在名为txt的文本<br>&nbsp;&nbsp;&nbsp;&nbsp;d.战斗力 = 5; // 假设8号界面存在名为战斗力的数值变量控件，这里绑定5号变量<br>&nbsp;&nbsp;&nbsp;&nbsp;dArr.push(d);<br>&nbsp;}<br>&nbsp;a.items = dArr;<br>&nbsp;// 树方式添加数据：在设置a.items前就决定好数据的父子节点关系：<br>&nbsp;var child = new ListItem_8();<br>&nbsp;child.pic = "asset/image/a.jpg";<br>&nbsp;child.txt = "kdsChild";<br>&nbsp;child.战斗力 = 5;<br>&nbsp;dArr[2].push(child);<br>// 事件监听示例<br>a.on(EventObject.CHANGE,this,this.onChange);<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2019-07-09

**继承**  →UIRoot<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                                                               |
| -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[EVENT_FOCUS_CHANGE](#event_focus_change)** : string;<br>[静态]事件：当焦点更改时派发的事件 onFocusChange(lastFocus:UIList,currentFocus:UIList); |
| **[OPEN_STATE_CHANGE](#open_state_change)** : string;<br>[静态]事件：打开状态发生改变时 onChange(ui,data)                                          |
| **[ITEM_CLICK](#item_click)** : string;<br>[静态]事件：点击确认项（已选中该项时再点击则派发事件/或ENTER键）                                        |
| **[ITEM_CREATE](#item_create)** : string;<br>[静态]事件：创建项时 onItemCreate(ui: UIRoot, data: UIListItemData,index:number)                      |
| **KEY_UP** : number[];<br>[静态]按键-向上移动 开启键盘支持后的默认快捷键，支持修改 默认值=[Keyboard.UP]                                            |
| **KEY_DOWN** : number[];<br>[静态]按键-向下移动 开启键盘支持后的默认快捷键，支持修改 默认值=[Keyboard.DOWN]                                        |
| **KEY_LEFT** : number[];<br>[静态]按键-向左移动 开启键盘支持后的默认快捷键，支持修改 默认值=[Keyboard.LEFT]                                        |
| **KEY_RIGHT** : number[];<br>[静态]按键-向右移动 开启键盘支持后的默认快捷键，支持修改 默认值=[Keyboard.RIGHT]                                      |
| **KEY_ENTER** : number[];<br>[静态]按键-确定 开启键盘支持后的默认快捷键，支持修改 默认值=[Keyboard.ENTER, Keyboard.SPACE]                          |
| **KEY_BOARD_ENABLED** : boolean;<br>[静态]开启键盘（手柄）支持：仅能操作当前焦点的UIList                                                           |
| **[SINGLE_FOCUS_MODE](#single_focus_mode)** : boolean;<br>[静态]开启单一焦点系统（焦点在指定的List上才可以操作，否则默认是无法操作的状态）         |
| **[focus](#focus)** : UIList;<br>[静态]设置List焦点：                                                                                              |
| **[optimizationMode](#optimizationmode)** : boolean;<br>优化模式 默认值=false                                                                      |
| **overSelectMode** : boolean;<br>鼠标悬停则作为选中效果（默认是悬停效果）默认值=false                                                              |
| **onCreateItem** : Callback;<br>创建ITEM时回调 onCreateItem(ui: UIRoot, data: UIListItemData,index:number)                                         |
| **subitemIndentation** : number;<br>子项缩进 默认值=20                                                                                             |
| **selectEnable** : boolean;<br>是否允许选择 默认值=true                                                                                            |
| **repeatX** : number;<br>列数 默认值=1                                                                                                             |
| **spaceX** : number;<br>横向间隔 默认值=2                                                                                                          |
| **spaceY** : number;<br>重向间隔 默认值=20                                                                                                         |
| **itemWidth** : number;<br>项宽度 默认值=200                                                                                                       |
| **itemHeight** : number;<br>项高度 默认值=50                                                                                                       |
| **overImageURL** : string;<br>光标悬停时的效果图片                                                                                                 |
| **overImage** : UIBitmap;<br>光标悬停时的对象：获取对象有利于自己追加一些额外的效果逻辑                                                            |
| **selectImageURL** : string;<br>选中项的效果图片                                                                                                   |
| **selectedImage** : UIBitmap;<br>选中项的效果图片对象：获取对象有利于自己追加一些额外的效果逻辑                                                    |
| **[overImageGrid9](#overimagegrid9)** : string;<br>光标在项上面时的效果图片的九宫格 默认值="0,0,0,0,0"                                             |
| **[selectImageGrid9](#selectimagegrid9)** : string;<br>选中项的效果图片的九宫格 默认值="0,0,0,0,0"                                                 |
| **selectedImageAlpha** : number;<br>选中项时效果图片的透明度 默认值=0.5                                                                            |
| **overImageAlpha** : number;<br>光标在项上面时的效果图片的透明度 默认值=0.5                                                                        |
| **selectedImageOnTop** : boolean;<br>选中项时效果图片是否在上层显示（盖住项）默认值=true                                                           |
| **overImageOnTop** : boolean;<br>光标在项上面时的效果图片是否在上层显示（盖住项）默认值=true                                                       |
| **itemModelClass** : any;<br>项的类设定                                                                                                            |
| **itemModelGUI** : number;<br>项对应的界面ID                                                                                                       |
| **items** : UIListItemData[];<br>所有项数据                                                                                                        |
| **[itemSprites](#itemsprites)** : Sprite[];<br>获取全部项对应的显示对象                                                                            |
| **length** : number;<br>[只读]列表的数据总个数。                                                                                                   |
| **[selectedItem](#selecteditem)** : UIListItemData;<br>选中项，根据指定的数据                                                                      |
| **[selectedIndex](#selectedindex)** : number;<br>选中项，根据索引（即所在数据组的位置，数据组包括未打开的隐藏树节点）默认值=-1                     |
| **overIndex** : number;<br>悬停项，根据索引（即所在数据组的位置，数据组包括未打开的隐藏树节点）默认值=-1                                           |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[setKeyDown](#setkeydown)**(keyCode : number): void<br>[静态]模拟按键按下：仅能操作当前焦点的UIList                                                                                                                                                                                 |
| **[setSelectedIndexForce](#setselectedindexforce)**(v : number): void<br>选中项，根据索引，不派发EventObject.CHANGE事件                                                                                                                                                               |
| **[setOverIndexForce](#setoverindexforce)**(v : number): void<br>悬停项，根据索引，不派发EventObject.CHANGE事件                                                                                                                                                                       |
| **[scrollTo](#scrollto)**(index : number,  ignoreAlreadyInVisible? : boolean,  tween? : boolean,  duration? : number,  ease? : Function,  complete? : [Callback](/zh_hans/library/2d/common/datastructures/callback)): void<br>滚动到指定行：如果该项显示对象在完全显示中时则忽略滚动 |
| **[replaceItem](#replaceitem)**(itemData : UIListItemData,  index : number): void<br>替换数据刷新显示，同时会触发 onCreateItem 函数                                                                                                                                                   |
| **[addItem](#additem)**(itemData : UIListItemData,  index? : number): UIRoot<br>添加数据                                                                                                                                                                                              |
| **[removeItem](#removeitem)**(itemData : UIListItemData): number<br>移除数据                                                                                                                                                                                                          |
| **[removeItemByIndex](#removeitembyindex)**(index : number): UIListItemData<br>移除数据，根据指定的位置                                                                                                                                                                               |
| **[setItemIndex](#setitemindex)**(itemData : UIListItemData,  toIndex : number): boolean<br>更换位置                                                                                                                                                                                  |
| **[setItemIndexByIndex](#setitemindexbyindex)**(itemIndex : number,  toIndex : number): boolean<br>更换位置-根据数据所在的位置                                                                                                                                                        |
| **[getItemUI](#getitemui)**(index : number): UIRoot<br>获取项的显示对象                                                                                                                                                                                                               |

## 详情

### EVENT_FOCUS_CHANGE
###### EVENT_FOCUS_CHANGE : string;
[静态]事件：当焦点更改时派发的事件 onFocusChange(lastFocus:UIList,currentFocus:UIList);<br>
>// lastFocus - 表示上次的焦点列表<br>
>// currentFocus - 表示此次的焦点列表<br>
>EventUtils.addEventListenerFunction(UIList,UIList.EVENT_FOCUS_CHANGE,(lastFocus:UIList,currentFocus:UIList)=>{<br>
>&nbsp;&nbsp;&nbsp;// to do<br>
>},this);<br>
>


### OPEN_STATE_CHANGE
###### OPEN_STATE_CHANGE : string;
[静态]事件：打开状态发生改变时 onChange(ui,data)<br>
>uiList.on(UIList.OPEN_STATE_CHANGE,this,this.onOpenStateChange);<br>
>


### ITEM_CLICK
###### ITEM_CLICK : string;
[静态]事件：点击确认项（已选中该项时再点击则派发事件/或ENTER键）<br>
>uiList.on(UIList.ITEM_CLICK,this,this.onItemClick);<br>
>


### ITEM_CREATE
###### ITEM_CREATE : string;
[静态]事件：创建项时 onItemCreate(ui: UIRoot, data: UIListItemData,index:number)<br>
>uiList.on(UIList.ITEM_CREATE,this,this.onItemCreate);<br>
>


### SINGLE_FOCUS_MODE
###### SINGLE_FOCUS_MODE : boolean;
[静态]开启单一焦点系统（焦点在指定的List上才可以操作，否则默认是无法操作的状态）<br>
通过设置UIList.focus来激活指定的列表以便操作
### focus
###### focus : UIList;
[静态]设置List焦点：<br>
-- 只有设置了焦点的按键才有效<br>
-- 如果是单一焦点系统的话同一时间内只允许一个List启用
### optimizationMode
###### optimizationMode : boolean;
优化模式 默认值=false<br>
不会生成所有的item显示对象，而只生成可见范围内的装载位，在滚动显示时根据当前情况再将数据安装到对应的装载位上<br>
-- 如需要启用，请在设置item前设置该参数为true<br>
-- 该模式下使用通过索引getItemUI获取的装载位并不是固定的
### overImageGrid9
###### overImageGrid9 : string;
光标在项上面时的效果图片的九宫格 默认值="0,0,0,0,0"<br>
九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）<br>
让素材不再简单拉伸，而是根据九宫格方式进行拉伸
### selectImageGrid9
###### selectImageGrid9 : string;
选中项的效果图片的九宫格 默认值="0,0,0,0,0"<br>
九宫格设置：上边距、右边距、下边距、左边距、是否平铺（1表示平铺）<br>
让素材不再简单拉伸，而是根据九宫格方式进行拉伸
### itemSprites
###### itemSprites : Sprite[];
获取全部项对应的显示对象<br>
如果更新了项数据则显示对象也会被替换成新的，若需要记录该显示对象请谨慎使用
### selectedItem
###### selectedItem : UIListItemData;
选中项，根据指定的数据<br>
@return [UIListItemData]
### selectedIndex
###### selectedIndex : number;
选中项，根据索引（即所在数据组的位置，数据组包括未打开的隐藏树节点）默认值=-1<br>
@return [number]


## setKeyDown
###### **[setKeyDown](#setkeydown)**(keyCode : number): void :
[静态]模拟按键按下：仅能操作当前焦点的UIList
##### 参数
	keyCode 对应键位 KEY_UP/KEY_DOWN/KEY_LEFT/KEY_RIGHT/KEY_ENTER



## setSelectedIndexForce
###### **[setSelectedIndexForce](#setselectedindexforce)**(v : number): void :
选中项，根据索引，不派发EventObject.CHANGE事件
##### 参数
	v 选中项



## setOverIndexForce
###### **[setOverIndexForce](#setoverindexforce)**(v : number): void :
悬停项，根据索引，不派发EventObject.CHANGE事件
##### 参数
	v 悬停项



## scrollTo
###### **[scrollTo](#scrollto)**(index : number,  ignoreAlreadyInVisible? : boolean,  tween? : boolean,  duration? : number,  ease? : Function,  complete? : [Callback](/zh_hans/library/2d/common/datastructures/callback)): void :
滚动到指定行：如果该项显示对象在完全显示中时则忽略滚动
##### 参数
	index 指定的索引
	ignoreAlreadyInVisible [可选] 默认值=true 忽略已
	tween [可选] 默认值=false 是否缓动
	duration [可选] 默认值=0 持续时间
	ease [可选] 默认值=null 缓动方法
	complete [可选] 默认值=null 当缓动完毕时回调



## replaceItem
###### **[replaceItem](#replaceitem)**(itemData : UIListItemData,  index : number): void :
替换数据刷新显示，同时会触发 onCreateItem 函数
##### 参数
	itemData 新数据
	index 需要替换的items索引



## addItem
###### **[addItem](#additem)**(itemData : UIListItemData,  index? : number): UIRoot :
添加数据
##### 参数
	itemData 新数据
	index [可选] 默认值=-1 插入的位置，-1表示向后插入

##### 返回
[UIRoot] 数据对应的显示对象

## removeItem
###### **[removeItem](#removeitem)**(itemData : UIListItemData): number :
移除数据
##### 参数
	itemData 数据，如果该数据不在列表内则忽略

##### 返回
[number] 数据所在的位置

## removeItemByIndex
###### **[removeItemByIndex](#removeitembyindex)**(index : number): UIListItemData :
移除数据，根据指定的位置
##### 参数
	index 指定的位置

##### 返回
[UIListItemData] 数据

## setItemIndex
###### **[setItemIndex](#setitemindex)**(itemData : UIListItemData,  toIndex : number): boolean :
更换位置
##### 参数
	itemData 数据
	toIndex 需要更换至的位置

##### 返回
[boolean] 是否更换成功

## setItemIndexByIndex
###### **[setItemIndexByIndex](#setitemindexbyindex)**(itemIndex : number,  toIndex : number): boolean :
更换位置-根据数据所在的位置
##### 参数
	itemIndex 数据所在的位置
	toIndex 需要更换至的位置

##### 返回
[boolean] 是否更换成功

## getItemUI
###### **[getItemUI](#getitemui)**(index : number): UIRoot :
获取项的显示对象
##### 参数
	index 索引

##### 返回
[UIRoot]



