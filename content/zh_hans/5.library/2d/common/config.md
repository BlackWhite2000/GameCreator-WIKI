# Config 通用配置
>游戏的通用配置，用于获取编辑器中一些预设的配置信息<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-05-22

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **gameSID** : number;<br>[静态]创建工程时会生成游戏项目的唯一SID  |
| **[templateID](#templateid)** : number;<br>[静态]模板的ID（对应云模板ID）  |
| **[templateVersionID](#templateversionid)** : number;<br>[静态]模板的版本号（云模板版本号）  |
| **TEMPLETE_USER_UID** : number;<br>[静态]制作模板的作者uid  |
| **[USE_FN](#use_fn)** : boolean;<br>[静态]使用F1-F12功能键，关闭此项功能后同时也会禁止浏览器环境下的该按键功能 默认值=true  |
| **gridAlignMode** : number;<br>[静态]对齐网格方式  |
| **[EDIT_MODE](#edit_mode)** : boolean;<br>[静态][只读]是否处于编辑器模式  |
| **[BEHAVIOR_EDIT_MODE](#behavior_edit_mode)** : boolean;<br>[静态][只读]是否处于对象行为编辑器模式  |
| **RELEASE_GAME** : boolean;<br>[静态][只读]游戏发布后的版本，用于区分是否正式版游戏  |
| **CREATED_GC_VERSION** : number;<br>[静态][只读]创建工程时的GC版本号  |
| **WINDOW_WIDTH** : number;<br>[静态][只读]默认分辨率宽度：当前版本是根据窗口大小自动等比缩放  |
| **WINDOW_HEIGHT** : number;<br>[静态][只读]默认分辨率高度：当前版本是根据窗口大小自动等比缩放  |
| **SCENE_GRID_SIZE** : number;<br>[静态][只读]场景格子大小，比如32像素或48像素  |
| **ANIMATION_FPS** : number;<br>[静态][只读]动画默认播放帧率：新建立的动画在未设定帧率时的默认帧率  |
| **[DEFAULT_FONT](#default_font)** : string;<br>[静态][只读]默认字体，新建立的文本会使用该默认字体  |



## 详情

### templateID
###### templateID : number;
[静态]模板的ID（对应云模板ID）<br>
安装模板时会写入
### templateVersionID
###### templateVersionID : number;
[静态]模板的版本号（云模板版本号）<br>
安装模板时会写入
### USE_FN
###### USE_FN : boolean;
[静态]使用F1-F12功能键，关闭此项功能后同时也会禁止浏览器环境下的该按键功能 默认值=true<br>
-- F5：重置游戏<br>
-- F11：全屏化
### EDIT_MODE
###### EDIT_MODE : boolean;
[静态][只读]是否处于编辑器模式<br>
编辑器也搭载了运行时以便实时预览和重用代码，所以在部分场合下会使用此判定
### BEHAVIOR_EDIT_MODE
###### BEHAVIOR_EDIT_MODE : boolean;
[静态][只读]是否处于对象行为编辑器模式<br>
行为编辑器中运行了用户编写的代码以便预览实际的效果，所以可以利用此属性来区分运行环境，<br>
以便让游戏或行为编辑器中解决兼容性问题
### DEFAULT_FONT
###### DEFAULT_FONT : string;
[静态][只读]默认字体，新建立的文本会使用该默认字体<br>
GC支持同一游戏下不同的字体共存，这里不会影响对于编辑器中各处文本已单独设置好的字体




