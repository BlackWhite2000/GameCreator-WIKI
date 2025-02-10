---
title: ObjectUtils 对象工具类
---
>GC内部封装的对象的常用函数<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-07-24

**继承**  无<br>
**子类**  无<br>


## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                                      |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[getInstanceID](#getinstanceid)**(): number<br>[静态]获取唯一ID：程序启动后该值从0开始自动累加，保证每次ID唯一，但不适合储存                                             |
| **[getRandID](#getrandid)**(): string<br>[静态]获取随机唯一ID：适合储存，基本上不会遇到同样的ID值                                                                          |
| **[clone](#clone)**(form : any,  to : any): void<br>[静态]将A的属性克隆给B（直接设置）                                                                                     |
| **[cloneExcludeNonExistentAttribute](#cloneexcludenonexistentattribute)**(form : any,  to : any): void<br>[静态]将A的属性克隆给B，仅对于B存在的属性才克隆                  |
| **[depthClone<T>](#depthclone<t>)**(o : T): T<br>[静态]深度克隆属性                                                                                                        |
| **[same](#same)**(a : any,  b : any): boolean<br>[静态]判断两个对象是否不同 遍历a的属性是否与b相同                                                                         |
| **[depthSame](#depthsame)**(a : any,  b : any): boolean<br>[静态]判断两个对象是否不同 遍历a的属性是否与b相同 深度对比                                                      |
| **[assignment](#assignment)**(a : any,  b : any): void<br>[静态]赋值，将B的值赋值给A，不变更类型                                                                           |
| **[reDefineGetSet](#redefinegetset)**(target : string,  defineContent : any): void<br>[静态]重定义get/set                                                                  |
| **[redefinedEventFunc](#redefinedeventfunc)**(clsName : string,  types : string[],  toObjName : string): void<br>[静态]映射指定类事件相关方法，将types替换成指定对象的方法 |

## 详情



## getInstanceID
###### **[getInstanceID](#getinstanceid)**(): number :
[静态]获取唯一ID：程序启动后该值从0开始自动累加，保证每次ID唯一，但不适合储存



## getRandID
###### **[getRandID](#getrandid)**(): string :
[静态]获取随机唯一ID：适合储存，基本上不会遇到同样的ID值



## clone
###### **[clone](#clone)**(form : any,  to : any): void :
[静态]将A的属性克隆给B（直接设置）<br>
>// 内部实现<br>
>for (var i in form) {<br>
>&nbsp;&nbsp;&nbsp;&nbsp;to[i] = form[i];<br>
>}<br>
>


##### 参数
	a 对象A-数据源
	b 对象B-被赋值的对象



## cloneExcludeNonExistentAttribute
###### **[cloneExcludeNonExistentAttribute](#cloneexcludenonexistentattribute)**(form : any,  to : any): void :
[静态]将A的属性克隆给B，仅对于B存在的属性才克隆<br>
>// 内部实现<br>
>for (var i in to) {<br>
>&nbsp;&nbsp;&nbsp;to[i] = form[i];<br>
>}<br>
>


##### 参数
	a 对象A-数据源
	b 对象B-被赋值的对象



## depthClone<T>
###### **[depthClone<T>](#depthclone<t>)**(o : T): T :
[静态]深度克隆属性
##### 参数
	o 需要克隆的对象，能够被JSON化的数据



## same
###### **[same](#same)**(a : any,  b : any): boolean :
[静态]判断两个对象是否不同 遍历a的属性是否与b相同
##### 参数
	a 对象A
	b 对象B

##### 返回
是否相同

## depthSame
###### **[depthSame](#depthsame)**(a : any,  b : any): boolean :
[静态]判断两个对象是否不同 遍历a的属性是否与b相同 深度对比
##### 参数
	a 对象A
	b 对象B

##### 返回
是否相同

## assignment
###### **[assignment](#assignment)**(a : any,  b : any): void :
[静态]赋值，将B的值赋值给A，不变更类型<br>
-- B中存在的属性才会被赋值<br>
-- 保持A的类型不变（这样可保留该类型下的方法）
##### 参数
	a对象
	b对象



## reDefineGetSet
###### **[reDefineGetSet](#redefinegetset)**(target : string,  defineContent : any): void :
[静态]重定义get/set
##### 参数
	target 目标对象
	defineContent {x:function(v){code}}



## redefinedEventFunc
###### **[redefinedEventFunc](#redefinedeventfunc)**(clsName : string,  types : string[],  toObjName : string): void :
[静态]映射指定类事件相关方法，将types替换成指定对象的方法
##### 参数
	clsName 类对象
	types 需要替换的类型集合
	toObjName 指定替换至的对象名





