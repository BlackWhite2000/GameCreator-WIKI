# AvatarAction 行走图动作数据
>一个Avatar可能包含若干个动作，每个动作拥有对应每个方向都有一系列的图集<br>面向系统参考小键盘以5为中心面向其他数字的方向： 1-左下 2-下 3-右下 4-左 6-右 7-左上 8-上 9-右上<br>7 8 9<br>4 5 6<br>1 2 3<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-12-07

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                        |
| ------------------------------------------------------------------------------------------- |
| **id** : number;<br>动作ID 对应动作库中的ID                                                 |
| **[frameImageInfo](#frameimageinfo)** : AvatarFrameImage[][];<br>图集的帧数据信息 默认值=[] |
| **[oriMode](#orimode)** : number;<br>方向模式 1 2 3 4 5 8                                   |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                                                  |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **[getFrameLength](#getframelength)**(ori : number,  useMapping? : boolean): number<br>获取指定面向的总帧数                                            |
| **[getFrameImage](#getframeimage)**(ori : number,  frame : number,  useMapping? : boolean): AvatarFrameImage<br>获取当前动作中某个方向与某帧的数据图像 |
| **[hasOri](#hasori)**(ori : number): boolean<br>是否存在该面向                                                                                         |

## 详情

### frameImageInfo
###### frameImageInfo : AvatarFrameImage[][];
图集的帧数据信息 默认值=[]<br>
面向 - 帧图<br>
如 [2] = AvatarFrameImage[] 表示该动作面向下的一组帧图数据
### oriMode
###### oriMode : number;
方向模式 1 2 3 4 5 8<br>
其中1、3、5方向会自动镜像翻转


## getFrameLength
###### **[getFrameLength](#getframelength)**(ori : number,  useMapping? : boolean): number :
获取指定面向的总帧数
##### 参数
	ori 面向
	useMapping [可选] 默认值=true 使用映射获取实际面向，比如没有7面向则使用4面向代替



## getFrameImage
###### **[getFrameImage](#getframeimage)**(ori : number,  frame : number,  useMapping? : boolean): AvatarFrameImage :
获取当前动作中某个方向与某帧的数据图像
##### 参数
	ori 面向
	frame 帧
	useMapping [可选] 默认值=true 使用映射获取实际面向，比如没有7面向则使用4面向代替

##### 返回
数据图像

## hasOri
###### **[hasOri](#hasori)**(ori : number): boolean :
是否存在该面向
##### 参数
	ori 面向

##### 返回
[boolean]



