---
title:  Camera 镜头
---
>一般作为场景的镜头来使用，坐标为镜头中心点<br>比如场景中使用了相机 Game.currentScene.camera<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2020-03-01

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                     |
| ---------------------------------------------------------------------------------------- |
| **viewPort** : Rectangle;<br>包含相机位置和可见宽高 默认值=new Rectangle(0, 0, 100, 100) |
| **rotation** : number;<br>镜头旋转角度 默认值=0                                          |
| **offsetX** : number;<br>镜头偏移量x 默认值=0                                            |
| **offsetY** : number;<br>镜头偏移量y 默认值=0                                            |
| **z** : number;<br>镜头z轴位置 默认值=0                                                  |
| **scaleX** : number;<br>相机镜头缩放x（场景专用）默认值=1                                |
| **scaleY** : number;<br>相机镜头缩放y（场景专用）默认值=1                                |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div>                                                                   |
| ----------------------------------------------------------------------------------------------------------------------- |
| (): sceneObject ClientSceneObject<br>镜头锁定场景对象，锁定后将以该场景对象为视角中心点，如果设置为null则以viewPort计算 |

## 详情



## sceneObject:ClientSceneObject
###### (): sceneObject ClientSceneObject :
镜头锁定场景对象，锁定后将以该场景对象为视角中心点，如果设置为null则以viewPort计算




# 相关代码示例
镜头跳转到指定的场景位置（如像素坐标点500,500）：<br>
>// 先取消锁定目标，如果未锁定目标的话可以不调用此代码<br>
>Game.currentScene.camera.sceneObject = null;<br>
>// 再设置指定的位置<br>
>Game.currentScene.camera.viewPort.x = 500;<br>
>Game.currentScene.camera.viewPort.y = 500;<br>
>

<br>
镜头缓动到指定的场景位置（有平滑移动的效果）<br>
>// 先取消锁定目标，如果未锁定目标的话可以不调用此代码<br>
>Game.currentScene.camera.sceneObject = null;<br>
>// 用2000毫秒时间以Ease.strongOut的缓动形式使镜头移动到像素坐标点500,500<br>
>Tween.to(Game.currentScene.camera.viewPort, { x: 500, y: 500 }, 2000, Ease.strongOut);<br>
>

<br>
镜头缩放（有平滑移动的效果）<br>
>// 先取消锁定目标，如果未锁定目标的话可以不调用此代码<br>
>Game.currentScene.camera.sceneObject = null;<br>
>// 用1000毫秒时间以Ease.strongOut的缓动形式使镜头缩放到0.5（即50%）<br>
>Tween.to(Game.currentScene.camera, { scaleX: 0.5, scaleY: 0.5 }, 1000, Ease.strongOut);<br>
>

<br>
持续的镜头旋转效果<br>
>// 用1000毫秒时间以Ease.strongOut的缓动形式使镜头缩放到0.5（即50%）<br>
>os.add_ENTERFRAME(() => {<br>
>&nbsp;&nbsp;&nbsp;Game.currentScene.camera.rotation++;<br>
>}, this);<br>
>


