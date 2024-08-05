# IndexedDBManager 浏览器IndexedDB大容量存储方式(异步储存)
><br><br>
>维护人员：**JayLen**  
>创建时间：2021-06-18

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **indexedDB** : IDBFactory;<br>[静态]数据库  |
| **support** : boolean;<br>[静态]表示是否支持  |
| **used** : boolean;<br>[静态]是否使用IndexedDB大容量存储方式  |
| **databaseName** : string;<br>[静态]数据库名称  |
| **version** : number;<br>[静态]数据库版本号  |
| **tableName** : string;<br>[静态]表格名称  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[setIndexDB](#setindexdb)**(key : string,  value : string,  onFin? : Function): void<br>[静态]存储指定键名及其对应的值。
| **[getIndexDB](#getindexdb)**(key : string,  onFin : Function): void<br>[静态]获取指定键名对应的值
| **[setIndexDBJson](#setindexdbjson)**(key : string,  value : any,  onFin? : Function): void<br>[静态]存储指定键名及其对应的值。
| **[getIndexDBJson](#getindexdbjson)**(key : string,  onFin : Function): void<br>[静态]获取指定键名对应的值
| **[removeIndexDBItem](#removeindexdbitem)**(key : string,  onFin? : Function): void<br>[静态]删除指定键名的数据
| **[items](#items)**(onFin : Function): void<br>[静态]获取所有数据
| **[clear](#clear)**(onFin? : Function): void<br>[静态]清除本地存储信息。

## 详情



## setIndexDB
###### **[setIndexDB](#setindexdb)**(key : string,  value : string,  onFin? : Function): void :
[静态]存储指定键名及其对应的值。
##### 参数
	key 键名
	value 键值(string类型)
	onFin [可选] 默认值=null 回调函数 onFin(success:boolean)



## getIndexDB
###### **[getIndexDB](#getindexdb)**(key : string,  onFin : Function): void :
[静态]获取指定键名对应的值
##### 参数
	key 键名
	onFin 回调 onFin(value:string)



## setIndexDBJson
###### **[setIndexDBJson](#setindexdbjson)**(key : string,  value : any,  onFin? : Function): void :
[静态]存储指定键名及其对应的值。
##### 参数
	key 键名
	value 键值(Object类型，会被转化为 JSON 字符串存储)
	onFin [可选] 默认值=null 回调函数 onFin(success:boolean)



## getIndexDBJson
###### **[getIndexDBJson](#getindexdbjson)**(key : string,  onFin : Function): void :
[静态]获取指定键名对应的值
##### 参数
	&nbsp;key 键名
	&nbsp;onFin 回调函数 onFin(value:any)



## removeIndexDBItem
###### **[removeIndexDBItem](#removeindexdbitem)**(key : string,  onFin? : Function): void :
[静态]删除指定键名的数据
##### 参数
	key 键名
	onFin [可选] 默认值=null 回调 onFin(success:boolean)



## items
###### **[items](#items)**(onFin : Function): void :
[静态]获取所有数据
##### 参数
	onFin 回调 onFin(items:{})



## clear
###### **[clear](#clear)**(onFin? : Function): void :
[静态]清除本地存储信息。
##### 参数
	onFin [可选] 默认值=null 回调 onFin(success:boolean)





