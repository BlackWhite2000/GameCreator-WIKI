---
title:  AutoTileData 自动元件数据
---
><br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2020-06-08

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                     |
| ---------------------------------------------------------------------------------------- |
| **url** : string;<br>图片路径                                                            |
| **[dataLayers](#datalayers)** : number[];<br>数据层数据-由于自动元件仅视为一格 默认值=[] |
| **[GCATMode](#gcatmode)** : number;<br>规格模式                                          |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                              |
| -------------------------------------------------------------------------------------------------------------------------------------------------- |
| **[getAutoTileData](#getautotiledata)**(texID : number): [AutoTileData](/zh_hans/library/2d/common/autotiledata)<br>[静态]运行时使用，获取图块数据 |

## 详情

### dataLayers
###### dataLayers : number[];
数据层数据-由于自动元件仅视为一格 默认值=[]<br>
[dataGridIndex] = 1/0
### GCATMode
###### GCATMode : number;
规格模式<br>
0-GCAT1的规格


## getAutoTileData
###### **[getAutoTileData](#getautotiledata)**(texID : number): [AutoTileData](/zh_hans/library/2d/common/autotiledata) :
[静态]运行时使用，获取图块数据
##### 参数
	texID 自动元件的编号（1~N）





