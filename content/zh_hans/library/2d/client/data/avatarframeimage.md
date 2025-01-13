# AvatarFrameImage 行走图帧图像数据
>目前适用于行走图和立绘的帧切图数据<br><br>
>维护人员：**黑暗之神KDS **  
>创建时间：2018-12-07

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **index** : number;<br>所在帧索引  |
| **picUrlIndex** : number;<br>对应图集的索引 Avatar的picUrls  |
| **tex** : Texture;<br>贴图  |
| **rect** : Rectangle;<br>切图数据 null表示直接使用整张图  |
| **x** : number;<br>坐标X 显示的偏移值x  |
| **y** : number;<br>坐标Y 显示的偏移值y  |
| **width** : number;<br>宽度，存在则使用该宽度，否则使用切图宽度  |
| **height** : number;<br>高度，存在则使用该高度，否则使用切图高度  |
| **rotation** : number;<br>旋转角度 默认值0  |
| **alpha** : number;<br>透明 0~1 默认值1  |
| **hue** : number;<br>色相 -180~180 默认值0  |
| **blur** : number;<br>模糊度 0~N 0表示无模糊 默认值0  |
| **tonal_r** : number;<br>色调：红 -255~255 默认值0  |
| **tonal_g** : number;<br>色调：绿 -255~255 默认值0  |
| **tonal_b** : number;<br>色调：蓝 -255~255 默认值0  |
| **tonal_gray** : number;<br>色调：灰色 0~100 默认值0  |
| **tonal_mr** : number;<br>红曝光 0~10 默认值0  |
| **tonal_mg** : number;<br>绿曝光 0~10 默认值0  |
| **tonal_mb** : number;<br>蓝曝光 0~10 默认值0  |
| **wait_type** : number;<br>等待类型 0/null-无（按照帧率） 1-等待X帧 2-等待X毫秒  |
| **[wait_count](#wait_count)** : number;<br>等待计数（帧/毫秒）  |
| **positiveRect** : Rectangle;<br>[只读]获取图像的切图正数据  |



## 详情

### wait_count
###### wait_count : number;
等待计数（帧/毫秒）<br>
-- 其中帧是根据avatar帧率计算，比如帧率设置为20，游戏帧率为60，那么等待1帧则游戏实际渲染3帧的时间（60/20*1）<br>
&nbsp;&nbsp;&nbsp;也就是意味着等待3帧表示等待3倍间隔时间<br>
-- 部件跟随本体的等待




