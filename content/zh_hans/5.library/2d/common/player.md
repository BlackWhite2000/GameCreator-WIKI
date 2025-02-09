# Player 玩家基类
>支持自定义属性，即玩家设定中预设的属性：比如RPG游戏中的玩家背包就是一种自定义的玩家属性。<br>&nbsp;&nbsp;-- 可视化编辑自定义属性：菜单-自定义编辑器-玩家属性编辑<br>&nbsp;&nbsp;-- 存档会自动包含这些自定义属性<br>支持玩家变量：数值变量、开关变量、字符串变量：<br>&nbsp;&nbsp;-- 存档会自动包含玩家变量<br>&nbsp;&nbsp;-- 玩家变量改变会自动影响到一些地方，比如界面中的变量控件。<br>玩家默认带有一个场景对象数据：<br>&nbsp;&nbsp;-- 切换场景时会销毁其场景对象this.sceneObject，同时将基础数据、自定义数据写入到数据this.data.sceneObject中<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;并且切换完毕后会重新创建新的场景对象this.sceneObject<br>&nbsp;&nbsp;-- 存档会自动包含玩家的显示对象数据（基础数据[SceneObject] + 场景对象的自定义数据）<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2019-05-22

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **uid** : number;<br>唯一uid（GC平台登录的账号UID）  |
| **gcNickName** : string;<br>gc用户昵称（GC平台登录的账号昵称）  |
| **data** : PlayerData;<br>玩家属性：包含自定义属性和玩家的场景对象数据（基础数据[SceneObject] + 场景对象的自定义数据）  |
| **variable** : Variable;<br>玩家变量：包含数值变量、开关变量、字符串变量  |
| **sceneObject** : SceneObjectEntity;<br>玩家的场景对象实体  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[toScene](#toscene)**(sceneID : number,  x? : number,  y? : number): void<br>进入指定场景

## 详情



## toScene
###### **[toScene](#toscene)**(sceneID : number,  x? : number,  y? : number): void :
进入指定场景
##### 参数
	sceneID 场景ID
	x [可选] 默认值=0 实际坐标x
	y [可选] 默认值=0 实际坐标y





