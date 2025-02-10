---
title:  AsynTask 异步任务工具类
---
>多个任务同时进行，需要等待全部任务执行完毕后才回调<br>使用方式：<br>&nbsp;var task = new AsynTask(Callback.New(() => {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 全部任务结束时的逻辑处理<br>&nbsp;}, this));<br>&nbsp;task.execute(任意表达式); // 如 task.execute(1);<br>&nbsp;task.execute(任意表达式);<br>&nbsp;task.complete(); // 上面执行了两个任务，下方则需要完成两次complete则算完成<br>&nbsp;task.complete();<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-01-01

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div> |
| ---------------------------------------------------- |
| **length** : number;<br>任务总数                     |
| **currentCount** : number;<br>当前执行的任务数       |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>              |
| ------------------------------------------------------------------ |
| **[constructor](#constructor)**(onFin : Callback)<br>异步 构造函数 |
| **[execute](#execute)**(code : any): void<br>执行                  |
| **[complete](#complete)**(): void<br>完成时回调                    |

## 详情



## constructor
###### **[constructor](#constructor)**(onFin : Callback) :
异步 构造函数
##### 参数
	onFin 回调方法
	thisPtr 作用域



## execute
###### **[execute](#execute)**(code : any): void :
执行
##### 参数
	code 直接执行代码即可，这里只是追加计数



## complete
###### **[complete](#complete)**(): void :
完成时回调





