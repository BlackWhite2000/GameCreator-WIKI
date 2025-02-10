---
title: StringUtils 字符串工具类
---
>GC内部封装的字符串处理工具类<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2019-01-02

**继承**  无<br>
**子类**  无<br>


## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------------- |
| **[getRealLength](#getreallength)**(str : string): number<br>[静态]获取字符真实长度，会计算汉字                                    |
| **[clearHtmlTag](#clearhtmltag)**(str : string): string<br>[静态]清除HTML格式                                                      |
| **[getMiddleDiff](#getmiddlediff)**(str1 : string,  str2 : string): [number, number]<br>[静态]获取两个字符串中间不相同的地方的信息 |

## 详情



## getRealLength
###### **[getRealLength](#getreallength)**(str : string): number :
[静态]获取字符真实长度，会计算汉字
##### 参数
	str 字符串

##### 返回
字符串str的真实长度

## clearHtmlTag
###### **[clearHtmlTag](#clearhtmltag)**(str : string): string :
[静态]清除HTML格式
##### 参数
	str 可能带有HTML格式的字符串

##### 返回
[string] 清除HTML格式后的字符串

## getMiddleDiff
###### **[getMiddleDiff](#getmiddlediff)**(str1 : string,  str2 : string): [number, number] :
[静态]获取两个字符串中间不相同的地方的信息
##### 参数
	str1 字符串1
	str2 字符串2

##### 返回
[头串相同的字符数目,尾串相同的字符数目]



