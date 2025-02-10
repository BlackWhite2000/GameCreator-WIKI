---
title: GameLayer 游戏总显示层次
---
>通过 Game.layer 访问该类的唯一实例<br>重写 initLayer 可以自定义层次关系<br>系统默认层次：<br>stage：<br>&nbsp;&nbsp;-- sceneLayer 场景层：通常场景应添加到场景层<br>&nbsp;&nbsp;-- imageLayer 图像层：通常图像系统中显示的图片动画等添加在该层<br>&nbsp;&nbsp;-- uiLayer 界面层：通常界面、对话框添加在该层<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2019-01-09

**继承**  →GameSprite<br>
**子类**  无<br>
## **Public 属性**
| <div style="width:1000px;text-align:left">属性</div>                                 |
| ------------------------------------------------------------------------------------ |
| **sceneLayer** : GameSprite;<br>场景层：通常场景应添加到场景层                       |
| **imageLayer** : GameImageLayer;<br>图像层：通常图像系统中显示的图片动画等添加在该层 |
| **uiLayer** : GameSprite;<br>UI层：界面层：通常界面、对话框添加在该层                |

## Public 方法
| <div style="width:1000px;text-align:left" >方法</div> |
| ----------------------------------------------------- |
| **[initLayer](#initlayer)**(): void<br>初始化层次     |

## 详情



## initLayer
###### **[initLayer](#initlayer)**(): void :
初始化层次<br>
可以通过 GameLayer.prototype.initLayer 重写此函数<br>
系统默认层次依次是<br>
-- 场景层 this.addChild(this.sceneLayer);<br>
-- 图像层 this.addChild(this.imageLayer);<br>
-- UI层 this.addChild(this.uiLayer); 对话框在此层




# 相关代码示例
暂时隐藏所有界面层，间隔3秒后再显示<br>
>Game.layer.uiLayer.visible = false;<br>
>setTimeout(()=>{<br>
>&nbsp;&nbsp;&nbsp;Game.layer.uiLayer.visible = true;<br>
>},3000);<br>
>


