---
title:  CustomCompData 获得或者设置的自定义组件属性相关数据
---
>&nbsp;--自定义模块数据<br>&nbsp;--自定义世界数据<br>&nbsp;--自定义玩家数据<br>&nbsp;--自定义场景对象数据<br>&nbsp;==自定义场景对象模型数据<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-05-22

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                                                                                                                                                   |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **type** : number;<br>类别 0:获取属性 1:获取和设置属性 默认值=0                                                                                                                                                                        |
| **moduleID** : number;<br>模块ID 默认值=1                                                                                                                                                                                              |
| **dataID** : number;<br>数据ID 默认值=1                                                                                                                                                                                                |
| **dataIsUseVar** : boolean;<br>是否使用变量指定数据ID 默认值=false                                                                                                                                                                     |
| **dataVarID** : number;<br>变量ID 默认值=1                                                                                                                                                                                             |
| **varID** : string;<br>选中的属性唯一ID 默认值=""                                                                                                                                                                                      |
| **varName** : string;<br>选中属性名称 默认值=""                                                                                                                                                                                        |
| **valueType** : number;<br>设置值类别 0-常量 1-变量 默认值=0                                                                                                                                                                           |
| **value** : { copy: boolean, value: number, varType: number };<br>设置的值 默认值={}                                                                                                                                                   |
| **isCustomModule** : boolean;<br>是否为自定义模块                                                                                                                                                                                      |
| **compAttrEnable** : boolean;<br>是否允许获取/设置绑定界面内的属性 默认=false                                                                                                                                                          |
| **operationType** : number;<br>运算类型 0-等于 1-加上 2-减去 3-乘以 4-除以 5-求余 6-求幂                                                                                                                                               |
| **isRounded** : boolean;<br>是否取整（数值类型，根据编辑器设定）                                                                                                                                                                       |
| **[compInfo](#compinfo)** : { uiID: number, type: number, compName: string, compID: number, attrs: any[], varName: string };<br>获取的值(绑定界面内属性) 默认值={ uiID: 1, type: 0, compName: "", compID: 0, attrs: [], varName: "" }; |
| **selectMode** : number;<br>选择模式 0-枚举 1-输入 默认值=0                                                                                                                                                                            |
| **[inputModeInfo](#inputmodeinfo)** : { mode: number, constName: string, varNameIndex: number, typeIndex: number };<br>输入模式下,填入数据 默认值={ mode: 0, constName: "", varNameIndex: 1, typeIndex: 0 }                            |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **[setData](#setdata)**(target : any,  data : [CustomCompData](/zh_hans/library/2d/common/customcompdata),  soc? : any): void<br>[静态]设置数据        |
| **[getData](#getdata)**(target : any,  data : [CustomCompData](/zh_hans/library/2d/common/customcompdata),  isModule? : boolean): an<br>[静态]获取数据 |

## 详情

### compInfo
###### compInfo : { uiID: number, type: number, compName: string, compID: number, attrs: any[], varName: string };
获取的值(绑定界面内属性) 默认值={ uiID: 1, type: 0, compName: "", compID: 0, attrs: [], varName: "" };<br>
&nbsp;&nbsp;--uiID:界面ID<br>
&nbsp;&nbsp;--type:属性类别 0-数值 1-字符串 2-布尔值 3-其他<br>
&nbsp;&nbsp;--compName:组件名称<br>
&nbsp;&nbsp;--compID:组件唯一ID<br>
&nbsp;&nbsp;--attrs:选择的组件属性集合<br>
&nbsp;&nbsp;--varName:组件属性名称
### inputModeInfo
###### inputModeInfo : { mode: number, constName: string, varNameIndex: number, typeIndex: number };
输入模式下,填入数据 默认值={ mode: 0, constName: "", varNameIndex: 1, typeIndex: 0 }<br>
&nbsp;&nbsp;--mode:模式 0-常量 1-变量<br>
&nbsp;&nbsp;--constName:常量属性名称<br>
&nbsp;&nbsp;--varNameIndex:变量属性名称索引<br>
&nbsp;&nbsp;--typeIndex:属性类别 0-数值 1-字符串 2-布尔值 3-其他


## setData
###### **[setData](#setdata)**(target : any,  data : [CustomCompData](/zh_hans/library/2d/common/customcompdata),  soc? : any): void :
[静态]设置数据
##### 参数
	target 修改对象
	data 数据
	soc 场景对象[可选]设置场景对象模块的属性用



## getData
###### **[getData](#getdata)**(target : any,  data : [CustomCompData](/zh_hans/library/2d/common/customcompdata),  isModule? : boolean): an :
[静态]获取数据
##### 参数
	target
	data 数据
	isModule [可选]是否自定义模块,此时target设置为null即可





