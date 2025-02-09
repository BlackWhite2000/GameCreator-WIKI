# GUI_BASE 界面实现类基类
>用于生成的界面类（GUI_XX）继承于此类<br>以便在初始化的时候就可以调用内部的控件<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-10-11

**继承**  →[UIRoot](/zh_hans/library/2d/client/ui/uiroot)→[UIBase](/zh_hans/library/2d/client/ui/uibase)→[GameSprite](/zh_hans/library/2d/client/gamesprite)→[Sprite](/zh_hans/library/2d/client/lib/sprite)→[TreeNode](/zh_hans/library/2d/client/lib/treenode)→[EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **[prerender](#prerender)** : boolean;<br>预渲染：开启此项保证在派发EventObject.LOADED前预先渲染一次以便保证此后能够立即呈现画面，不会因为资源较大而首次渲染卡顿一下  |
| **guiID** : number;<br>界面ID  |
| **[compsIDInfo](#compsidinfo)** : any;<br>根据其下组件的唯一ID找到该组件 compsIDInfo[comp.id] = comp; 默认值={}  |
| **hasRootCommand** : boolean[];<br>是否存在界面本体事件  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[constructor](#constructor)**(guiID : number)<br>构造函数

## 详情

### prerender
###### prerender : boolean;
预渲染：开启此项保证在派发EventObject.LOADED前预先渲染一次以便保证此后能够立即呈现画面，不会因为资源较大而首次渲染卡顿一下<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;预渲染会消耗一定的性能，可以选择在界面资源较多的情况下使用此项，开启此项会有额外的性能和内存开销
### compsIDInfo
###### compsIDInfo : any;
根据其下组件的唯一ID找到该组件 compsIDInfo[comp.id] = comp; 默认值={}<br>
界面编辑器预先设置好的组件才会存入该属性内，如果自己动态移除加入的可以自行管理该列表


## constructor
###### **[constructor](#constructor)**(guiID : number) :
构造函数
##### 参数
	guiID 界面ID





