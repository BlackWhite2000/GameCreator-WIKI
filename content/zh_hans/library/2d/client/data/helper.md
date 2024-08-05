# Helper 行走图辅助体数据
>一般用于自定义Avatar的一些点、范围等，比如击中角色后以哪里作为中心点显示击中的动画<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-12-09

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **id** : number;<br>ID  |
| **x** : number;<br>坐标x  |
| **y** : number;<br>坐标y  |
| **width** : number;<br>宽度  |
| **height** : number;<br>高度  |
| **radius** : number;<br>半径  |
| **rotation** : number;<br>旋转  |
| **points** : number[];<br>点位置集合:多边形为[x1,y1,x2,y2...] 线段为[x1,y1,x2,y2]  |
| **boundingBox** : Rectangle;<br>包围盒(多边形和线段用)  |
| **[type](#type)** : number;<br>类型  |
| **pointPostion** : Point[];<br>所有顶点相对于原点的坐标  |



## 详情

### type
###### type : number;
类型<br>
-1=无<br>
0=矩形<br>
1=圆形<br>
2=三角形<br>
3=多边形<br>
4=线段<br>
5=椭圆形




