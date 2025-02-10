---
title: SceneLayerData 场景图层数据
---
>来自编辑器中预设好的场景中的图层数据<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-11-06

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------- |
| **name** : string;<br>名称                                                                                                         |
| **p** : boolean;<br>表示对象层标志                                                                                                 |
| **dx** : number;<br>偏移x 默认值=0                                                                                                 |
| **dy** : number;<br>偏移y 默认值=0                                                                                                 |
| **scaleX** : number;<br>缩放x 默认值=1                                                                                             |
| **scaleY** : number;<br>缩放y 默认值=1                                                                                             |
| **skewX** : number;<br>斜率x 默认值=0                                                                                              |
| **skewY** : number;<br>斜率y 默认值=0                                                                                              |
| **xMove** : number;<br>x方向自动滚动速度 默认值=0                                                                                  |
| **yMove** : number;<br>y方向自动滚动速度 默认值=0                                                                                  |
| **prospectsPerX** : number;<br>远景比例X轴 默认值=1.0 表示 100% 普通地图是100%，值越小则移动越慢，多重远景一般通过更改此属性来制作 |
| **prospectsPerY** : number;<br>远景比例Y轴 默认值=1.0 表示 100% 普通地图是100%，值越小则移动越慢，多重远景一般通过更改此属性来制作 |
| **xLoop** : boolean;<br>x方向循环 默认值=false                                                                                     |
| **yLoop** : boolean;<br>y方向循环 默认值=false                                                                                     |
| **opacity** : number;<br>透明度 默认值=1                                                                                           |
| **blendMode** : string;<br>混合模式 null/lighter/blend1-1 （取值范围0~14）                                                         |
| **drawMode** : boolean;<br>绘制模式 true=图块层 false=图片层                                                                       |
| **tileData** : { texID: number; x: number; y: number; }[][];<br>图块数据 texID负数表示自动元件 默认值=[]                           |
| **img** : string;<br>全景图地址                                                                                                    |
| **tileTexIDs** : { [id: string]: boolean; };<br>全图块数据引用到的图块id集 id负数表示自动元件                                      |



## 详情





