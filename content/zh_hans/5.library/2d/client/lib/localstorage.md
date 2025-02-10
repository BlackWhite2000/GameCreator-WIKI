---
title: LocalStorage 浏览器缓存
---
>用于没有时间限制的数据存储,类似网页的永久cookies，清空缓存或更换浏览器都会失效<br>储存和读取都是同步的，所以可以代码上下行操作<br>== 使用方式 ==<br>var a = {b:123,c:456,d:"gamecreator"};<br>// 缓存<br>LocalStorage.setJSON("myKey",a);<br>// 读取缓存<br>LocalStorage.getJSON("myKey",b);<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-01-01

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>       |
| ---------------------------------------------------------- |
| **items** : any;<br>[静态]数据列表。                       |
| **support** : boolean;<br>[静态]表示是否支持LocalStorage。 |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                     |
| --------------------------------------------------------------------------------------------------------- |
| **[setItem](#setitem)**(key : string,  value : string): void<br>[静态]存储指定键名和键值，字符串类型。    |
| **[getItem](#getitem)**(key : string): string<br>[静态]获取指定键名的值。                                 |
| **[setJSON](#setjson)**(key : string,  value : any): void<br>[静态]存储指定键名及其对应的 Object 类型值。 |
| **[getJSON](#getjson)**(key : string): any<br>[静态]获取指定键名对应的Object 类型值。                     |
| **[removeItem](#removeitem)**(key : string): void<br>[静态]删除指定键名的信息。                           |
| **[clear](#clear)**(): void<br>[静态]清除本地存储信息。                                                   |

## 详情



## setItem
###### **[setItem](#setitem)**(key : string,  value : string): void :
[静态]存储指定键名和键值，字符串类型。
##### 参数
	key 键名。
	value 键值。



## getItem
###### **[getItem](#getitem)**(key : string): string :
[静态]获取指定键名的值。
##### 参数
	key 键名。

##### 返回
字符串型值。

## setJSON
###### **[setJSON](#setjson)**(key : string,  value : any): void :
[静态]存储指定键名及其对应的 Object 类型值。
##### 参数
	key 键名。
	value 键值。是 Object 类型，此致会被转化为 JSON 字符串存储。



## getJSON
###### **[getJSON](#getjson)**(key : string): any :
[静态]获取指定键名对应的Object 类型值。
##### 参数
	key 键名。

##### 返回
Object 类型值

## removeItem
###### **[removeItem](#removeitem)**(key : string): void :
[静态]删除指定键名的信息。
##### 参数
	key 键名。



## clear
###### **[clear](#clear)**(): void :
[静态]清除本地存储信息。





