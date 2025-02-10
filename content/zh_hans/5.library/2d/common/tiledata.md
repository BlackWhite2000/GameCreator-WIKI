---
title:  TileData 图块素材配置数据
---
>来自编辑器预设好的图块素材数据<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-10-16

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                    |
| --------------------------------------------------------------------------------------- |
| **id** : number;<br>唯一ID                                                              |
| **name** : string;<br>名称                                                              |
| **url** : string;<br>图片路径 默认值=""                                                 |
| **dataLayers** : number[][][];<br>数据层数据 [自定义数据层索引][xGrid][yGrid] 默认值=[] |
| **width** : number;<br>宽度 默认值=0                                                    |
| **height** : number;<br>高度 默认值=0                                                   |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                  |
| ---------------------------------------------------------------------------------------------------------------------- |
| **[getTileData](#gettiledata)**(texID : number): [TileData](/zh_hans/library/2d/common/tiledata)<br>[静态]获取图块数据 |

## 详情



## getTileData
###### **[getTileData](#gettiledata)**(texID : number): [TileData](/zh_hans/library/2d/common/tiledata) :
[静态]获取图块数据
##### 参数
	texID 图块素材ID

##### 返回
图块素材配置数据



