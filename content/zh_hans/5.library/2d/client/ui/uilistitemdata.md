---
title: UIListItemData 界面组件中的项数据基类
---
>对应UIList中项所绑定的数据，每个项显示对象都会对应一个项数据（该类或其子类的实例）<br>使用方式可参考[UIList](/zh_hans/library/2d/client/ui/uilist)<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2019-07-09

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                             |
| -------------------------------------------------------------------------------- |
| **data** : any;<br>任意附加的数据                                                |
| **isOpen** : boolean;<br>是否处于打开状态（树节点的情况）                        |
| **parent** : UIListItemData;<br>[只读]获取父节点                                 |
| **numChildren** : number;<br>[只读]子节点总数                                    |
| **children** : UIListItemData[];<br>[只读]子节点列表                             |
| **[root](#root)** : UIListItemData;<br>[只读]获取树形结构的根节点                |
| **[depth](#depth)** : number;<br>[只读]获取所在树的深度                          |
| **isHideNode** : boolean;<br>[只读]是否是隐藏节点（即父系节点可能被关闭了）      |
| **x** : number;<br>优化模式变量：数据所在位置（列表刷新排列位置时设置）          |
| **y** : number;<br>优化模式变量：数据所在位置（列表刷新排列位置时设置）          |
| **visible** : boolean;<br>优化模式变量：是否显示（可见范围外则不显示）           |
| **customSize** : boolean;<br>自定义尺寸，开启后需要设置width和height来决定宽和高 |
| **width** : number;<br>自定义尺寸-宽                                             |
| **height** : number;<br>自定义尺寸-高                                            |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                               |
| --------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[getSaveData](#getsavedata)**(includeData? : boolean): any<br>提取储存数据                                                                        |
| **[recoverySaveData](#recoverysavedata)**(saveData : any): [UIListItemData](/zh_hans/library/2d/client/ui/uilistitemdata)<br>[静态]还原储存数据     |
| **[addChild](#addchild)**(item : [UIListItemData](/zh_hans/library/2d/client/ui/uilistitemdata)): void<br>添加节点                                  |
| **[addChildAt](#addchildat)**(item : [UIListItemData](/zh_hans/library/2d/client/ui/uilistitemdata),  index : number): void<br>添加节点到指定索引中 |
| **[removeChild](#removechild)**(item : [UIListItemData](/zh_hans/library/2d/client/ui/uilistitemdata)): void<br>移除节点                            |
| **[removeChildAt](#removechildat)**(index : number): void<br>移除节点至指定索引中                                                                   |
| **[removeAll](#removeall)**(): void<br>移除所有节点                                                                                                 |
| **[getChildAt](#getchildat)**(index : number): [UIListItemData](/zh_hans/library/2d/client/ui/uilistitemdata)<br>获取节点根据索引                   |
| **[getChildIndex](#getchildindex)**(item : [UIListItemData](/zh_hans/library/2d/client/ui/uilistitemdata)): number<br>获取节点索引                  |
| **[isInherit](#isinherit)**(data : [UIListItemData](/zh_hans/library/2d/client/ui/uilistitemdata)): boolean<br>是否继承于指定节点                   |
| **[getList](#getlist)**(arr? : UIListItemData[]): UIListItemData[]<br>获取树型结构下全部节点中的子节点列表（含自身节点）                            |

## 详情

### root
###### root : UIListItemData;
[只读]获取树形结构的根节点<br>
@return [UIListItemData](/zh_hans/library/2d/client/ui/uilistitemdata)
### depth
###### depth : number;
[只读]获取所在树的深度<br>
@return [number]


## getSaveData
###### **[getSaveData](#getsavedata)**(includeData? : boolean): any :
提取储存数据
##### 参数
	includeData [可选] 默认值=false 是否包含自定义附加的数据，请保证该数据可以JSON化



## recoverySaveData
###### **[recoverySaveData](#recoverysavedata)**(saveData : any): [UIListItemData](/zh_hans/library/2d/client/ui/uilistitemdata) :
[静态]还原储存数据
##### 参数
	saveData



## addChild
###### **[addChild](#addchild)**(item : [UIListItemData](/zh_hans/library/2d/client/ui/uilistitemdata)): void :
添加节点
##### 参数
	item 节点数据对象



## addChildAt
###### **[addChildAt](#addchildat)**(item : [UIListItemData](/zh_hans/library/2d/client/ui/uilistitemdata),  index : number): void :
添加节点到指定索引中
##### 参数
	item 节点数据对象
	index 插入所在索引



## removeChild
###### **[removeChild](#removechild)**(item : [UIListItemData](/zh_hans/library/2d/client/ui/uilistitemdata)): void :
移除节点
##### 参数
	item 节点数据对象



## removeChildAt
###### **[removeChildAt](#removechildat)**(index : number): void :
移除节点至指定索引中
##### 参数
	index 节点所在的索引



## removeAll
###### **[removeAll](#removeall)**(): void :
移除所有节点



## getChildAt
###### **[getChildAt](#getchildat)**(index : number): [UIListItemData](/zh_hans/library/2d/client/ui/uilistitemdata) :
获取节点根据索引
##### 参数
	index 节点所在的索引

##### 返回
[UIListItemData]

## getChildIndex
###### **[getChildIndex](#getchildindex)**(item : [UIListItemData](/zh_hans/library/2d/client/ui/uilistitemdata)): number :
获取节点索引
##### 参数
	item 节点数据对象



## isInherit
###### **[isInherit](#isinherit)**(data : [UIListItemData](/zh_hans/library/2d/client/ui/uilistitemdata)): boolean :
是否继承于指定节点



## getList
###### **[getList](#getlist)**(arr? : UIListItemData[]): UIListItemData[] :
获取树型结构下全部节点中的子节点列表（含自身节点）
##### 参数
	arr [可选] 默认值=null 指定的数组用于装载获取的结果数据





