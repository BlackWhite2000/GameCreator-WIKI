# PoolUtils 对象池工具
>GC内部封装的对象池工具<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-10-25

**继承**  无<br>
**子类**  无<br>


## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[constructor](#constructor)**(cls : any)<br>构造函数
| **[free](#free)**(obj : any): void<br>归还对象
| **[takeout](#takeout)**(): any<br>取出对象，没有闲置对象则会新建

## 详情



## constructor
###### **[constructor](#constructor)**(cls : any) :
构造函数
##### 参数
	cls 需要作为重复使用的对象类



## free
###### **[free](#free)**(obj : any): void :
归还对象
##### 参数
	obj 对象



## takeout
###### **[takeout](#takeout)**(): any :
取出对象，没有闲置对象则会新建

##### 返回
obj 对象



