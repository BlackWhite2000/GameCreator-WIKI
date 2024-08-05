# ArrayUtils 数组工具类
>GC内部封装的一些常用数组方法<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-01-01

**继承**  无<br>
**子类**  无<br>


## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[randOrder](#randorder)**(arr : any[]): void<br>[静态]数组内随机打乱排序
| **[insert](#insert)**(arr : any[],  index : number,  ...arg : any[]): number<br>[静态]添加数据
| **[delete](#delete)**(arr : any[],  index : number): any<br>[静态]删除数据
| **[remove](#remove)**(arr : any[],  obj : any): any<br>[静态]移除数据，返回新的数组
| **[removeSameObjectD2](#removesameobjectd2)**(arr : any[],  attrName : string,  ifNullIgnore : boolean): any[]<br>[静态]剔除相同的元素，根据子元素属性是否相同，返回新的数组
| **[get](#get)**(arr : any[],  index : number): any<br>[静态]获取数据
| **[set](#set)**(arr : any[],  index : number,  paramValue : any): any[]<br>[静态]更改数据中的值
| **[insertToNullPosition](#inserttonullposition)**(arr : any[],  obj : any): number<br>[静态]插入数据 找到空值或添加
| **[getNullPosition](#getnullposition)**(arr : any[],  startIndex? : number): number<br>[静态]找到一个空的位置
| **[removeSameObject](#removesameobject)**(arr : any[]): any[]<br>[静态]剔除相同的元素
| **[matchAttributes](#matchattributes)**(arr : any,  matchData : any,  onlyOne : boolean,  symbol? : string,  indexOfMode? : boolean): any[]<br>[静态]匹配数据，如在一组对象的数据中，筛选出对象中含有的某些属性值为多少的对象集合
| **[matchAttributesD2](#matchattributesd2)**(arr : any,  attribute : string,  matchData : any,  onlyOne : boolean,  symbol? : string): any[]<br>[静态]匹配数据 深度2，用于匹配对象中的对象是否含有该属性
| **[matchAttributesD3](#matchattributesd3)**(arr : any,  attribute : string,  attribute2 : string,  matchData : any,  onlyOne : boolean,  symbol? : string): any[]<br>[静态]匹配数据 深度3
| **[getChildAttributeToCreateArray](#getchildattributetocreatearray)**(arr : any,  attributeName : string,  ignoreNullChild? : boolean): any[]<br>[静态]获取对象/数组内对象的指定属性的值组成一个新的数组
| **[getElementSize](#getelementsize)**(arr : any[],  value : any): number<br>[静态]获取数组中元素出现的个数
| **[createObjects](#createobjects)**(objCls: any, size: number, onCreateOne?: (index : number,  obj : any) => void,  arr? : any[]): any[]<br>[静态]批量装载创建对象
| **[swap](#swap)**(arr : any[],  index1 : number,  index2 : number): void<br>[静态]互换数组中的位置
| **[setIndex](#setindex)**(arr : any[],  element : any,  index : number): void<br>[静态]调整数组中元素位置
| **[sort](#sort)**(arr : any[],  attributeName : string,  isAsc : boolean): void<br>[静态]按照asc排序（忽略大小写）
| **[compare](#compare)**(aArr : any[],  bArr : any[])<br>[静态]比较，列出B数组相对于A数组中不同的元素
| **[getTreeNodeArray](#gettreenodearray)**(treeNode : any,  childrenAttr? : string,  arrayList? : any[],  checkIsOpen? : boolean,  isOpenAttr? : string,  ignoreChildrenCondition? : Callback): any[]<br>[静态]获取树型结构下全部节点中的子节点列表（含自身节点）

## 详情



## randOrder
###### **[randOrder](#randorder)**(arr : any[]): void :
[静态]数组内随机打乱排序
##### 参数
	arr 数组



## insert
###### **[insert](#insert)**(arr : any[],  index : number,  ...arg : any[]): number :
[静态]添加数据
##### 参数
	arr 数据组
	index 索引 -1=加入到数组尾端
	arg 添加的数据



## delete
###### **[delete](#delete)**(arr : any[],  index : number): any :
[静态]删除数据
##### 参数
	arr 数据组
	index 索引 -1=删除尾端数据

##### 返回
[any] 被删除的数据对象

## remove
###### **[remove](#remove)**(arr : any[],  obj : any): any :
[静态]移除数据，返回新的数组
##### 参数
	arr 数据组
	obj 数据对象

##### 返回
[any]

## removeSameObjectD2
###### **[removeSameObjectD2](#removesameobjectd2)**(arr : any[],  attrName : string,  ifNullIgnore : boolean): any[] :
[静态]剔除相同的元素，根据子元素属性是否相同，返回新的数组
##### 参数
	arr 原数组
	attrName 属性名称
	ifNullIgnore 是否如果属性为null时不会移除

##### 返回
[any] 新数组

## get
###### **[get](#get)**(arr : any[],  index : number): any :
[静态]获取数据
##### 参数
	arr 数据组
	index 索引 -1=尾端数据

##### 返回
[any]

## set
###### **[set](#set)**(arr : any[],  index : number,  paramValue : any): any[] :
[静态]更改数据中的值
##### 参数
	arr 数据组
	index 索引
	paramValue 参数和值Object
	实际被更改的对象数组



## insertToNullPosition
###### **[insertToNullPosition](#inserttonullposition)**(arr : any[],  obj : any): number :
[静态]插入数据 找到空值或添加
##### 参数
	arr 数组
	obj 要插入的对象

##### 返回
[number] 插入到的索引

## getNullPosition
###### **[getNullPosition](#getnullposition)**(arr : any[],  startIndex? : number): number :
[静态]找到一个空的位置
##### 参数
	arr 数组
	startIndex [可选] 默认值=0 索引

##### 返回
[number] 找到空位置索引

## removeSameObject
###### **[removeSameObject](#removesameobject)**(arr : any[]): any[] :
[静态]剔除相同的元素
##### 参数
	arr 原数组

##### 返回
[any] 新数组

## matchAttributes
###### **[matchAttributes](#matchattributes)**(arr : any,  matchData : any,  onlyOne : boolean,  symbol? : string,  indexOfMode? : boolean): any[] :
[静态]匹配数据，如在一组对象的数据中，筛选出对象中含有的某些属性值为多少的对象集合<br>
使用示例：<br>
>var arr = [{a:6},{a:7},{a:8},{a:6}];<br>
>var m = ArrayUtils.matchAttributes(arr,{a:6},false); // 返回组中有两个结果 [{a:6},{a:6}]<br>
>var m = ArrayUtils.matchAttributes(arr,{a:6},false,">"); // 返回组中有两个结果 [{a:7},{a:8}]<br>
>var m = ArrayUtils.matchAttributes(arr,{a:6},false,"==",true); // 返回组中两个结果,相对于原数组的索引 [0,3]<br>
>var m = ArrayUtils.matchAttributes(arr,{a:6},true); // 返回组中有1个结果 [{a:6}]<br>
>


##### 参数
	arr 数组
	matchObj 参数
	onlyOne 是否只匹配一个数据
	symbol [可选] 默认值="==" 对比符号
	indexOfMode [可选] 默认值=false 返回匹配的索引而非返回匹配的对象

##### 返回
[any] 如果是indexOfMode则返回 number[]，否则返回arr同类型的数据

## matchAttributesD2
###### **[matchAttributesD2](#matchattributesd2)**(arr : any,  attribute : string,  matchData : any,  onlyOne : boolean,  symbol? : string): any[] :
[静态]匹配数据 深度2，用于匹配对象中的对象是否含有该属性<br>
使用示例：<br>
>var arr = [{a:{b:2}},{a:{b:3},{a:{b:5}},{a:{b:7}}];<br>
>var m = ArrayUtils.matchAttributesD2(arr,"a",{b:2},false); // 返回 [{a:{b:2}}]<br>
>


##### 参数
	arr 数组
	attribute 属性
	matchObj 参数
	onlyOne 是否只匹配一个数据
	symbol [可选] 默认值="==" 对比符号

##### 返回
[any]

## matchAttributesD3
###### **[matchAttributesD3](#matchattributesd3)**(arr : any,  attribute : string,  attribute2 : string,  matchData : any,  onlyOne : boolean,  symbol? : string): any[] :
[静态]匹配数据 深度3
##### 参数
	arr 数组
	attribute 属性
	attribute2 属性2
	matchObj 参数
	onlyOne 是否只匹配一个数据
	symbol [可选] 默认值="==" 对比符号

##### 返回
[any]

## getChildAttributeToCreateArray
###### **[getChildAttributeToCreateArray](#getchildattributetocreatearray)**(arr : any,  attributeName : string,  ignoreNullChild? : boolean): any[] :
[静态]获取对象/数组内对象的指定属性的值组成一个新的数组
##### 参数
	arr 原对象/数组
	attributeName 原数组内对象的指定属性名
	ignoreNullChild [可选] 默认值=true 是否忽略掉在arr中为NULL的子对象，以便不会加入到新的数组中

##### 返回
[any]

## getElementSize
###### **[getElementSize](#getelementsize)**(arr : any[],  value : any): number :
[静态]获取数组中元素出现的个数
##### 参数
	arr 数组
	value 元素

##### 返回
[number] 出现的个数

## createObjects
###### **[createObjects](#createobjects)**(objCls: any, size: number, onCreateOne?: (index : number,  obj : any) => void,  arr? : any[]): any[] :
[静态]批量装载创建对象
##### 参数
	objCls 对象类
	size 数目
	obj
	arr [可选] 默认值=null 装载至的数组，设置则以该数组为装载对象

##### 返回
[any]

## swap
###### **[swap](#swap)**(arr : any[],  index1 : number,  index2 : number): void :
[静态]互换数组中的位置
##### 参数
	arr 数组
	index1 位置1
	index2 位置2



## setIndex
###### **[setIndex](#setindex)**(arr : any[],  element : any,  index : number): void :
[静态]调整数组中元素位置
##### 参数
	arr 数组
	element 元素
	index 位置



## sort
###### **[sort](#sort)**(arr : any[],  attributeName : string,  isAsc : boolean): void :
[静态]按照asc排序（忽略大小写）
##### 参数
	arr 数组
	attributeName 属性的名称
	isAsc 是否正序排序



## compare
###### **[compare](#compare)**(aArr : any[],  bArr : any[]) :
[静态]比较，列出B数组相对于A数组中不同的元素
##### 参数
	aArr A数组
	bArr B数组
	appended 增加的元素列表
	subtract 减少的元素列表



## getTreeNodeArray
###### **[getTreeNodeArray](#gettreenodearray)**(treeNode : any,  childrenAttr? : string,  arrayList? : any[],  checkIsOpen? : boolean,  isOpenAttr? : string,  ignoreChildrenCondition? : Callback): any[] :
[静态]获取树型结构下全部节点中的子节点列表（含自身节点）
##### 参数
	reeNode 树型结构节点
	childrenAttr [可选] 默认值="children" 如 “children”
	arrayList [可选] 默认值=null 装载数据的数组
	checkIsOpen [可选] 默认值=false 是否需要检查开启状态，如果检查的话则未开启的数据不计入返回列表中
	isOpenAttr [可选] 默认值="isOpen" 开启状态属性名
	ignoreChildrenCondition [可选] 默认值=null 忽略子对象的条件 如 ignoreChildrenCondition(treeNode: any){return treeNode.ignoreChildren;}





