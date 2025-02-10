---
title: Dictionary 数据字典
---
>可用于非字符串作为键的键值对（类似对象的内存地址作为键）<br>普通的键值对都是字符串储存键，比如{a:123}，中的a是字符串"a"，而如果想要使用对象作为键的话可使用此类<br>使用原生JS中的Map实现<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-01-01

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>       |
| ---------------------------------------------------------- |
| **values** : Array<any>;<br>[只读]获取所有的子元素列表。   |
| **keys** : Array<any>;<br>[只读]获取所有的子元素键名列表。 |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                  |
| ---------------------------------------------------------------------- |
| **[set](#set)**(key : any,  value : any): void<br>给指定的键名设置值。 |
| **[indexOf](#indexof)**(key : any): number<br>获取指定对象的键名索引。 |
| **[get](#get)**(key : any): any<br>返回指定键名的值。                  |
| **[remove](#remove)**(key : any): boolean<br>移除指定键名的值。        |
| **[clear](#clear)**(): void<br>清除此对象的键名列表和键值列表。        |

## 详情



## set
###### **[set](#set)**(key : any,  value : any): void :
给指定的键名设置值。<br>
@param	key 键名。<br>
@param	value 值。



## indexOf
###### **[indexOf](#indexof)**(key : any): number :
获取指定对象的键名索引。<br>
@param	key 键名对象。

##### 返回
键名索引。

## get
###### **[get](#get)**(key : any): any :
返回指定键名的值。<br>
@param	key 键名对象。

##### 返回
指定键名的值。

## remove
###### **[remove](#remove)**(key : any): boolean :
移除指定键名的值。<br>
@param	key 键名对象。

##### 返回
是否成功移除。

## clear
###### **[clear](#clear)**(): void :
清除此对象的键名列表和键值列表。





