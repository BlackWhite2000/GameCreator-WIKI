# TreeNode 节点类
>显示对象的基类，拥有父子节点的特性，树结构<br>支持事件：<br>EventObject.DISPLAY 加入到显示列表中时（即该对象加入stage的显示列表里，从不需要被渲染到需要渲染的状态改变时触发）<br>EventObject.UNDISPLAY 从显示列表中移除时（即该对象从stage的显示列表移除时，从需要被渲染到不需要渲染的状态改变时触发）<br>EventObject.REMOVED 从父节点中移除时触发（无需在显示列表中）<br>EventObject.ADDED 加入到某个节点时触发（无需在显示列表中）<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-01-01

**继承**  →EventDispatcher<br>
**子类**  [Sprite](/zh_hans/library/2d/client/lib/sprite)<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **name** : string;<br>节点名称  |
| **disposed** : boolean;<br>[只读]是否已经销毁。对象销毁后不能再使用  |
| **numChildren** : number;<br>[只读]子对象数量。  |
| **parent** : TreeNode;<br>父节点  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[dispose](#dispose)**(): void<br>销毁此对象。destroy对象默认会把自己从父节点移除，并且清理自身引用关系，等待js自动垃圾回收机制回收。destroy后不能再使用。
| **[addChild](#addchild)**(node : [TreeNode](/zh_hans/library/2d/client/lib/treenode)): [TreeNode](/zh_hans/library/2d/client/lib/treenode)<br>添加子节点。
| **[addChildren](#addchildren)**(...args : any[]): void<br>批量增加子节点
| **[addChildAt](#addchildat)**(node : [TreeNode](/zh_hans/library/2d/client/lib/treenode),  index : number): [TreeNode](/zh_hans/library/2d/client/lib/treenode)<br>添加子节点到指定的索引位置。
| **[getChildIndex](#getchildindex)**(node : [TreeNode](/zh_hans/library/2d/client/lib/treenode)): number<br>根据子节点对象，获取子节点的索引位置。
| **[getChildByName](#getchildbyname)**(name : string): [TreeNode](/zh_hans/library/2d/client/lib/treenode)<br>根据子节点的名字，获取子节点对象。
| **[getChildAt](#getchildat)**(index : number): [TreeNode](/zh_hans/library/2d/client/lib/treenode)<br>根据子节点的索引位置，获取子节点对象。
| **[setChildIndex](#setchildindex)**(node : [TreeNode](/zh_hans/library/2d/client/lib/treenode),  index : number): [TreeNode](/zh_hans/library/2d/client/lib/treenode)<br>设置子节点的索引位置。
| **[removeChild](#removechild)**(node : [TreeNode](/zh_hans/library/2d/client/lib/treenode)): [TreeNode](/zh_hans/library/2d/client/lib/treenode)<br>删除子节点。
| **[removeSelf](#removeself)**(): [TreeNode](/zh_hans/library/2d/client/lib/treenode)<br>从父容器删除自己，如已经被删除不会抛出异常。
| **[removeChildByName](#removechildbyname)**(name : string): [TreeNode](/zh_hans/library/2d/client/lib/treenode)<br>根据子节点名字删除对应的子节点对象，如果找不到不会抛出异常。
| **[removeChildAt](#removechildat)**(index : number): [TreeNode](/zh_hans/library/2d/client/lib/treenode)<br>根据子节点索引位置，删除对应的子节点对象。
| **[removeChildren](#removechildren)**(beginIndex? : number,  endIndex? : number): [TreeNode](/zh_hans/library/2d/client/lib/treenode)<br>删除指定索引区间的所有子对象。
| **[contains](#contains)**(node : [TreeNode](/zh_hans/library/2d/client/lib/treenode)): boolean<br>当前容器是否包含指定的 TreeNode 节点对象 。

## 详情



## dispose
###### **[dispose](#dispose)**(): void :
销毁此对象。destroy对象默认会把自己从父节点移除，并且清理自身引用关系，等待js自动垃圾回收机制回收。destroy后不能再使用。<br>
destroy时会移除自身的事情监听，自身的timer监听，移除子对象及从父节点移除自己。



## addChild
###### **[addChild](#addchild)**(node : [TreeNode](/zh_hans/library/2d/client/lib/treenode)): [TreeNode](/zh_hans/library/2d/client/lib/treenode) :
添加子节点。<br>
@param	node 节点对象<br>
@return	返回添加的节点



## addChildren
###### **[addChildren](#addchildren)**(...args : any[]): void :
批量增加子节点<br>
@param	...args 无数子节点。



## addChildAt
###### **[addChildAt](#addchildat)**(node : [TreeNode](/zh_hans/library/2d/client/lib/treenode),  index : number): [TreeNode](/zh_hans/library/2d/client/lib/treenode) :
添加子节点到指定的索引位置。<br>
@param	node 节点对象。<br>
@param	index 索引位置。<br>
@return	返回添加的节点。



## getChildIndex
###### **[getChildIndex](#getchildindex)**(node : [TreeNode](/zh_hans/library/2d/client/lib/treenode)): number :
根据子节点对象，获取子节点的索引位置。<br>
@param	node 子节点。<br>
@return	子节点所在的索引位置。



## getChildByName
###### **[getChildByName](#getchildbyname)**(name : string): [TreeNode](/zh_hans/library/2d/client/lib/treenode) :
根据子节点的名字，获取子节点对象。<br>
@param	name 子节点的名字。<br>
@return	节点对象。



## getChildAt
###### **[getChildAt](#getchildat)**(index : number): [TreeNode](/zh_hans/library/2d/client/lib/treenode) :
根据子节点的索引位置，获取子节点对象。<br>
@param	index 索引位置<br>
@return	子节点



## setChildIndex
###### **[setChildIndex](#setchildindex)**(node : [TreeNode](/zh_hans/library/2d/client/lib/treenode),  index : number): [TreeNode](/zh_hans/library/2d/client/lib/treenode) :
设置子节点的索引位置。<br>
@param	node 子节点。<br>
@param	index 新的索引。<br>
@return	返回子节点本身。



## removeChild
###### **[removeChild](#removechild)**(node : [TreeNode](/zh_hans/library/2d/client/lib/treenode)): [TreeNode](/zh_hans/library/2d/client/lib/treenode) :
删除子节点。<br>
@param	node 子节点<br>
@return	被删除的节点



## removeSelf
###### **[removeSelf](#removeself)**(): [TreeNode](/zh_hans/library/2d/client/lib/treenode) :
从父容器删除自己，如已经被删除不会抛出异常。

##### 返回
当前节点（ TreeNode ）对象。

## removeChildByName
###### **[removeChildByName](#removechildbyname)**(name : string): [TreeNode](/zh_hans/library/2d/client/lib/treenode) :
根据子节点名字删除对应的子节点对象，如果找不到不会抛出异常。<br>
@param	name 对象名字。

##### 返回
查找到的节点（ TreeNode ）对象。

## removeChildAt
###### **[removeChildAt](#removechildat)**(index : number): [TreeNode](/zh_hans/library/2d/client/lib/treenode) :
根据子节点索引位置，删除对应的子节点对象。<br>
@param	index 节点索引位置。<br>
@return	被删除的节点。



## removeChildren
###### **[removeChildren](#removechildren)**(beginIndex? : number,  endIndex? : number): [TreeNode](/zh_hans/library/2d/client/lib/treenode) :
删除指定索引区间的所有子对象。<br>
@param	beginIndex 开始索引。默认值=0<br>
@param	endIndex 结束索引。默认值=0x7fffffff

##### 返回
当前节点对象。

## contains
###### **[contains](#contains)**(node : [TreeNode](/zh_hans/library/2d/client/lib/treenode)): boolean :
当前容器是否包含指定的 TreeNode 节点对象 。<br>
@param	node  指定的 TreeNode 节点对象 。<br>
@return	一个布尔值表示是否包含指定的 TreeNode 节点对象 。





