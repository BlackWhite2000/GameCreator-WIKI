# AssetManager 资源管理器
>采用引用计数方式缓存资源，一旦引用计数为0时则会自动释放实际的资源<br>基础资源包含：Image资源、Audio资源、JSON资源、Text资源、ArrayBuffer资源<br>【系统规则】<br>-- 高级显示对象包含多种基础资源，在创建这些高级显示对象会根据内部关联到基础资源自动增加引用，而释放对象时会减少引用，高级显示对象包含：<br>&nbsp;&nbsp;&nbsp;-- Avatar/StandAvatar 行走图/立绘<br>&nbsp;&nbsp;&nbsp;-- GCAnimation 动画<br>&nbsp;&nbsp;&nbsp;-- ClientScene 客户端场景<br>&nbsp;&nbsp;&nbsp;-- ClientSceneObject 客户端场景对象<br>&nbsp;&nbsp;&nbsp;-- UIxxx 各种界面组件（包括整体界面 GUI_XXX）<br>&nbsp;&nbsp;&nbsp;-- 由项目层自行增加的高级显示对象等等<br>-- 预加载高级资源，如果未设置自动释放的话，需要手动释放，否则会一直引用这些资源导致无法被自动释放。<br>&nbsp;&nbsp;&nbsp;根据编辑器预设的配置进行载入相关的基础资源，而卸载也是根据编辑器预设的配置进行卸载相关的基础资源（与实际用到的场景动态更换了内部的资源无关）。<br>&nbsp;&nbsp;&nbsp;主要用于预占用资源，以便在此期间不会被系统自动释放掉，比如设计在进入游戏场景前预载入一些资源，到进入下一个场景前再释放，以便在该场景内不会被系统自动释放掉<br>&nbsp;&nbsp;&nbsp;预加载接口包含--预加载高级资源（每个高级资源包含若干的基础资源）：自行加载的需要自行卸载<br>&nbsp;&nbsp;&nbsp;-- 预加载场景 preLoadSceneAsset                 ==> 卸载场景 disposeScene<br>&nbsp;&nbsp;&nbsp;-- 预加载场景对象 preLoadSceneObjectAsset       ==> 卸载场景对象 disposeSceneObject<br>&nbsp;&nbsp;&nbsp;-- 预加载行走图资源 preLoadAvatarAsset          ==> 卸载行走图资源 disposeAvatarAsset<br>&nbsp;&nbsp;&nbsp;-- 预加载立绘资源 preLoadStandAvatarAsset       ==> 卸载立绘资源 disposeStandAvatarAsset<br>&nbsp;&nbsp;&nbsp;-- 预加载动画资源 preLoadAnimationAsset         ==> 卸载动画资源 disposeAnimationAsset<br>&nbsp;&nbsp;&nbsp;-- 预加载界面资源 preLoadUIAsset                ==> 卸载界面资源 disposeUIAsset<br>&nbsp;&nbsp;&nbsp;-- 预加载对话框资源 preLoadDialog               ==> 卸载对话框资源 disposeDialog<br>&nbsp;&nbsp;&nbsp;-- 预加载事件页中涉及的资源 preLoadCommandPage   ==> 卸载事件页中涉及的资源 disposeCommandPage<br>-- 预加载接口包含--预加载基础资源：自行加载的需要自行卸载<br>&nbsp;&nbsp;&nbsp;-- 加载图片（解析为Object） loadImage                     ==> 释放图片 disposeImage<br>&nbsp;&nbsp;&nbsp;-- 加载Json文件（解析为Object） loadJson                  ==> 释放Json文件 disposeJson<br>&nbsp;&nbsp;&nbsp;-- 加载文本文件（解析为字符串） loadText                   ==> 释放文本文件 disposeText<br>&nbsp;&nbsp;&nbsp;-- 加载原始文件（解析为ArrayBuffer） loadFileArrayBuffer  ==> 释放原始文件 disposeFileArrayBuffer<br>&nbsp;&nbsp;&nbsp;-- 加载音频 loadAudio                                   ==> 卸载音频 disposeAudio<br>-- 图像系统中使用到的资源<br>&nbsp;&nbsp;&nbsp;-- 「显示图片/动画/立绘」：通道被覆盖时上一个占用通道的资源会被释放（减少引用），新资源会增加引用，如显示3号动画在1号通道里，然后再显示2号立绘在1号通道里，此前的3号动画就会被释放<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;为了防止常用的图片显示等效果被中途系统自动将图片卸载了，可以预加载这些图片先占用引用。<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;比如场景相关事件可勾选场景的“预加载事件页中涉及的资源”，以保证在该场景中执行这些图片效果中途不会被系统卸载，同时切换场景后会自动释放掉这些资源<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（如果新场景仍然用到了这些资源又会再次被引用到而导致不会被系统卸载）。<br>&nbsp;&nbsp;&nbsp;-- 「消除」：将当前指定通道的资源释放掉，比如当前使用了3号动画，则3号动画引用减1，如果全局没有任何用到了3号动画时（此时引用为0）则会被系统实际回收，<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下次未预加载就直接使用时可能会由于动态加载该资源导致一小段时间未能显示出来（因为处于加载中，需要一点时间）。<br>-- 对话框中使用到的头像资源<br>&nbsp;&nbsp;&nbsp;-- 在每次对话启动时会创建头像资源（引用+1），然后停止对话时会释放掉头像资源（引用-1），此时如果全局未有任何引用的话会被系统实际回收，<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;若不想在某段期间内被系统实际回收，可以提前预加载这些头像资源。<br>【总结】<br>&nbsp;&nbsp;&nbsp;-- 自行创建的对象需要自行销毁（gameObject.dispose）<br>&nbsp;&nbsp;&nbsp;-- 自行预加载的资源需要自行销毁（AssetManager.disposeXXX）<br>【示例1：自行创建的高级对象，自行销毁】<br>&nbsp;&nbsp;&nbsp;// 创建一个3号行走图实例，系统识别为引用了3号行走图相关的一些基础资源（引用+1）<br>&nbsp;&nbsp;&nbsp;var a = new Avatar;<br>&nbsp;&nbsp;&nbsp;a.id = 3;<br>&nbsp;&nbsp;&nbsp;// 释放掉这个实例，只有调用释放后这些被增加引用的基础资源才会减少引用，以便让系统自动回收资源（引用-1）<br>&nbsp;&nbsp;&nbsp;a.dispose();<br>&nbsp;&nbsp;&nbsp;// 创建2号界面<br>&nbsp;&nbsp;&nbsp;var b = new GUI_2;<br>&nbsp;&nbsp;&nbsp;// 卸载2号界面<br>&nbsp;&nbsp;&nbsp;b.dispose();<br>【示例2：预加载资源，在一定期间内不会被系统释放，当使用完毕后再手动卸载】<br>&nbsp;&nbsp;&nbsp;// 预加载3号行走图（引用+1） 此时3号行走图的引用=1<br>&nbsp;&nbsp;&nbsp;AssetManager.preLoadAvatarAsset(3, Callback.New(()=>{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 使用行走图（引用+1） 此时3号行走图的引用=2<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var a = new Avatar;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.id = 3;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 60秒后<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;setTimeout(()=>{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 卸载行走图（引用-1） 此时3号行走图的引用=1<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;a.dispose();<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 卸载掉预加载的3号行走图占用（引用-1） 此时3号行走图的引用=0 系统会自动回收<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;AssetManager.disposeAvatarAsset(3);<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},60*1000);<br>&nbsp;&nbsp;&nbsp;}));<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-08-08

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **assetCountMap** : {<br>[静态]全部资源引用计数 url(资源地址):引用计数 默认值={}  |
| **disposeInterval** : number;<br>[静态]释放资源的间隔ms（当引用计数为0时会延迟清理资源，因为最近可能还会频繁用到） 默认值=6000ms（60秒）  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[preLoadSceneAsset](#preloadsceneasset)**(id : number,  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  autoDispose? : boolean,  prerender? : boolean): void<br>[静态]预加载加载场景资源，如果autoDispose为false的话则需要手动卸载：AssetManager::disposeScene
| **[preLoadSceneObjectAsset](#preloadsceneobjectasset)**(so : [SceneObject](/zh_hans/library/2d/common/sceneobject),  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  autoDispose? : boolean,  prerender? : boolean): void<br>[静态]预加载场景对象资源，如果autoDispose为false的话则需要手动卸载：AssetManager::disposeSceneObject
| **[preLoadAvatarAsset](#preloadavatarasset)**(id : number,  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  autoDispose? : boolean,  prerender? : boolean): void<br>[静态]预加载行走图数据，如果autoDispose为false的话则需要手动卸载： AssetManager::disposeAvatarAsset
| **[preLoadStandAvatarAsset](#preloadstandavatarasset)**(id : number,  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  autoDispose? : boolean,  prerender? : boolean): void<br>[静态]预加载立绘数据，如果autoDispose为false的话则需要手动卸载： AssetManager::disposeStandAvatarAsset
| **[preLoadUIAsset](#preloaduiasset)**(id : number,  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  autoDispose? : boolean,  prerender? : boolean): void<br>[静态]预加载界面，如果autoDispose为false的话则需要手动卸载：AssetManager::disposeUIAsset
| **[preLoadAnimationAsset](#preloadanimationasset)**(id : number,  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  autoDispose? : boolean,  prerender? : boolean): void<br>[静态]预加载动画，如果autoDispose为false的话则需要手动卸载：AssetManager::disposeAnimationAsset
| **[preLoadCommandPage](#preloadcommandpage)**(commandPage : [CommandPage](/zh_hans/library/2d/common/commandpage),  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  autoDispose? : boolean): void<br>[静态]预加载事件页中包含的资源，如果autoDispose为false的话则需要手动卸载：AssetManager::disposeCommandPage
| **[preLoadDialog](#preloaddialog)**(id : number,  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  autoDispose? : boolean): void<br>[静态]预加载对话框样式的相关资源，如果autoDispose为false的话则需要手动卸载：AssetManager::disposeDialog
| **[preloadFonts](#preloadfonts)**(complete? : Callback,  syncCallbackWhenAssetExist? : boolean): void<br>[静态]预加载所有在编辑器中预设的字体（来自设置中的「文件字体导入管理」）
| **[preloadFont](#preloadfont)**(fontUrl : string,  complete? : Callback,  syncCallbackWhenAssetExist? : boolean): void<br>[静态]预加载指定的字体文件
| **[batchPreLoadAsset](#batchpreloadasset)**(onFin : Callback,  onProgress : Callback,  images : string[],  scenes : number[],  avatars : number[],  standAvatars : number[],  animations? : number[],  uis? : number[],  jsons? : string[],  audios? : string[],  dialogs? : number[],  syncCallbackWhenAssetExist? : boolean,  autoDispose? : boolean,  prerender? : boolean): void<br>[静态]批量加载高级资源
| **[batchDisposeAsset](#batchdisposeasset)**(images : string[],  scenes : number[],  avatars : number[],  standAvatars : number[],  animations? : number[],  uis? : number[],  jsons? : string[],  audios? : string[],  dialogs? : number[]): void<br>[静态]批量卸载高级资源
| **[disposeScene](#disposescene)**(id : number): void<br>[静态]释放场景资源，每次调用此函数减少引用计数，当引用计数为0时会销毁实际的资源（请慎重使用，一般情况下销毁对象即会自动销毁其关联的资源）
| **[disposeSceneObject](#disposesceneobject)**(so : [SceneObject](/zh_hans/library/2d/common/sceneobject)): void<br>[静态]释放场景对象资源，每次调用此函数减少引用计数，当引用计数为0时会销毁实际的资源（请慎重使用，一般情况下销毁对象即会自动销毁其关联的资源）
| **[disposeAvatarAsset](#disposeavatarasset)**(id : number): void<br>[静态]释放行走图资源，每次调用此函数减少引用计数，当引用计数为0时会销毁实际的资源（请慎重使用，一般情况下销毁对象即会自动销毁其关联的资源）
| **[disposeStandAvatarAsset](#disposestandavatarasset)**(id : number): void<br>[静态]释放立绘资源，每次调用此函数减少引用计数，当引用计数为0时会销毁实际的资源（请慎重使用，一般情况下销毁对象即会自动销毁其关联的资源）
| **[disposeUIAsset](#disposeuiasset)**(id : number): void<br>[静态]释放界面，每次调用此函数减少引用计数，当引用计数为0时会销毁实际的资源（请慎重使用，一般情况下销毁对象即会自动销毁其关联的资源）
| **[disposeAnimationAsset](#disposeanimationasset)**(id : number): void<br>[静态]释放动画，每次调用此函数减少引用计数，当引用计数为0时会销毁实际的资源（请慎重使用，一般情况下销毁对象即会自动销毁其关联的资源）
| **[disposeCommandPage](#disposecommandpage)**(commandPage : [CommandPage](/zh_hans/library/2d/common/commandpage)): void<br>[静态]释放由于预加载事件页加载的资源，每次调用此函数减少引用计数，当引用计数为0时会销毁实际的资源（请慎重使用，一般情况下销毁对象即会自动销毁其关联的资源）
| **[disposeDialog](#disposedialog)**(id : number): void<br>[静态]预加载对话框样式的相关资源，每次调用此函数减少引用计数，当引用计数为0时会销毁实际的资源（请慎重使用，一般情况下销毁对象即会自动销毁其关联的资源）
| **[loadImage](#loadimage)**(url : string,  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  useRef? : boolean,  prerender? : boolean): void<br>[静态]加载图片
| **[loadTexture](#loadtexture)**(url : string,  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  useRef? : boolean): void<br>[静态]加载Texture粒子图片
| **[loadImages](#loadimages)**(urls : string[],  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  useRef? : boolean,  prerender? : boolean): void<br>[静态]加载图片集，忽略空地址，始终会返回加载完毕回调
| **[loadTextures](#loadtextures)**(urls : string[],  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  useRef? : boolean): void<br>[静态]加载Texture粒子图片集，忽略空地址，始终会返回加载完毕回调
| **[loadAudio](#loadaudio)**(url : string,  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  useRef? : boolean): void<br>[静态]加载音频文件支持格式 .mp3 .ogg
| **[loadAudios](#loadaudios)**(urls : string[],  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  useRef? : boolean): void<br>[静态]加载音频文件集，忽略空地址，始终会返回加载完毕回调
| **[loadJson](#loadjson)**(url : string,  complete : Callback,  syncCallbackWhenAssetExist? : boolean,  useRef? : boolean): void<br>[静态]加载并解析JSON文件
| **[loadJsons](#loadjsons)**(urls : string[],  complete : Callback,  syncCallbackWhenAssetExist? : boolean,  useRef? : boolean): void<br>[静态]加载并解析JSON文件集，忽略空地址，始终会返回加载完毕回调
| **[loadText](#loadtext)**(url : string,  complete : Callback,  syncCallbackWhenAssetExist? : boolean,  useRef? : boolean): void<br>[静态]加载Text文件
| **[loadTexts](#loadtexts)**(urls : string[],  complete : Callback,  syncCallbackWhenAssetExist? : boolean,  useRef? : boolean): void<br>[静态]加载Text文件集
| **[loadFileArrayBuffer](#loadfilearraybuffer)**(url : string,  complete : Callback,  useRef? : boolean,  syncCallbackWhenAssetExist? : boolean): void<br>[静态]加载文件资源（二进制）
| **[getImage](#getimage)**(url : string): Texture<br>[静态]获取贴图资源
| **[getJson](#getjson)**(url : string): any<br>[静态]获取JSON资源
| **[getText](#gettext)**(url : string): string<br>[静态]获取文本资源
| **[getFileArrayBuffer](#getfilearraybuffer)**(url : string): ArrayBuffer<br>[静态]获取文件资源（二进制）
| **[disposeImage](#disposeimage)**(url : string,  force? : boolean): void<br>[静态]卸载图片资源：当引用计数为0时会延迟后清理掉实际的所有资源以及其所有的切图资源（需保证切图资源Graphics外部已没有引用）
| **[disposeImages](#disposeimages)**(urls : string[],  force? : boolean): void<br>[静态]卸载图片资源集：当引用计数为0时会延迟后清理掉实际的所有资源以及其所有的切图资源（需保证切图资源Graphics外部已没有引用）
| **[disposeAudio](#disposeaudio)**(url : string,  force? : boolean): void<br>[静态]卸载音频资源，当引用计数为0时会延迟后清理掉实际的所有资源
| **[disposeJson](#disposejson)**(url : string,  force? : boolean): void<br>[静态]卸载JSON资源，当引用计数为0时会延迟后清理掉实际的所有资源
| **[disposeText](#disposetext)**(url : string,  force? : boolean): void<br>[静态]卸载文本资源，当引用计数为0时会延迟后清理掉实际的所有资源
| **[disposeFileArrayBuffer](#disposefilearraybuffer)**(url : string,  force? : boolean): void<br>[静态]卸载文件资源（二进制）
| **[getClipImage](#getclipimage)**(url : string,  x : number,  y : number,  rect : [Rectangle](/zh_hans/library/2d/common/rectangle)): Graphics<br>[静态]根据图片地址获取切片的贴图资源：整图资源必须已载入，当没有对应的切图时会临时切一次
| **[drawToTexture](#drawtotexture)**(source : any,  textureWidth : number,  textureHeight : number,  offsetX? : number,  offsetY? : number,  mipmap? : boolean,  minFifter? : number,  magFifter? : number): Texture<br>[静态]将显示对象截图为贴图资源使用（显存），贴图尺寸受限于实际的画面尺寸
| **[drawToAtlasSprite](#drawtoatlassprite)**(source : any,  width : number,  height : number,  mipmap? : boolean,  minFifter? : number,  magFifter? : number,  offsetX? : number,  offsetY? : number): Sprite<br>[静态]以拼合图的形式绘制到容器中（由于设备限制贴图大小而需要拼合）需要调用disposeAtlasSprite来主动释放这些显存上的贴图
| **[bigTextureToAtlasSprite](#bigtexturetoatlassprite)**(texture : Texture,  xLoop? : boolean,  yLoop? : boolean,  mapWidth? : number,  mapHeight? : number): Sprite<br>[静态]大贴图转化为拼图显示对象，以解决大贴图超出显卡最大支持的贴图尺寸（os.MAX_TEXTURE_SIZE）时无法显示的问题
| **[disposeAtlasSprite](#disposeatlassprite)**(root : Sprite): void<br>[静态]释放拼合的贴图，即由drawToAtlasSprite生成的拼合图显示对象
| **[prerender](#prerender)**(source : any): void<br>[静态]预渲染
| **[textureToBase64](#texturetobase64)**(texture : Texture): string<br>[静态]贴图转为base64格式
| **[textureToArrayBuffer](#texturetoarraybuffer)**(texture : Texture): ArrayBuffer<br>[静态]贴图转为ArrayBuffer格式
| **[arrayBufferToTexture](#arraybuffertotexture)**(arrayBuffer : ArrayBuffer,  onFin : Callback): void<br>[静态]ArrayBuffer转为贴图
| **[arrayBufferToBase64](#arraybuffertobase64)**(arrayBuffer : ArrayBuffer): string<br>[静态]ArrayBuffer转为Base64
| **[base64ToTexture](#base64totexture)**(base64 : string,  onFin : Callback): void<br>[静态]ArrayBuffer转为贴图
| **[base64ToArrayBuffer](#base64toarraybuffer)**(base64 : string): ArrayBuffer<br>[静态]ArrayBuffer转为Base64

## 详情



## preLoadSceneAsset
###### **[preLoadSceneAsset](#preloadsceneasset)**(id : number,  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  autoDispose? : boolean,  prerender? : boolean): void :
[静态]预加载加载场景资源，如果autoDispose为false的话则需要手动卸载：AssetManager::disposeScene<br>
-- 场景的相关JSON文件<br>
-- 如勾选预载地图资源：预载入地图资源：图层的图片、图块的图片、BGM、BGS<br>
-- 如勾选预载全场景对象资源：预载入全场景对象资源（仅单机版可用）<br>
-- 如勾选预载场景事件涉及的资源：预载入场景触发的事件页中的资源 参考 preLoadCommandPage 方法（仅单机版可用）<br>
-- 预设的自定义预加载资源列表
##### 参数
	id 场景ID
	complete [可选] 默认值=null
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）
	autoDispose [可选] 默认值=false 是否自动释放资源（加载后会在延迟一段时间后自动释放，用于减少引用计数）
	prerender [可选] 默认值=false 是否预渲染图片资源，保证完成回调后使用时不会因为渲染而卡顿，一般资源较大时可以尝试开启此项，开启此项会有额外的性能和内存开销



## preLoadSceneObjectAsset
###### **[preLoadSceneObjectAsset](#preloadsceneobjectasset)**(so : [SceneObject](/zh_hans/library/2d/common/sceneobject),  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  autoDispose? : boolean,  prerender? : boolean): void :
[静态]预加载场景对象资源，如果autoDispose为false的话则需要手动卸载：AssetManager::disposeSceneObject<br>
-- 根据自定义显示对象层（行走图、界面、动画）来加载其下所有资源
##### 参数
	so 场景对象数据
	complete [可选] 默认值=null
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）
	autoDispose [可选] 默认值=false 是否自动释放资源（加载后会在延迟一段时间后自动释放，用于减少引用计数）
	prerender [可选] 默认值=false 是否预渲染图片资源，保证完成回调后使用时不会因为渲染而卡顿，一般资源较大时可以尝试开启此项，开启此项会有额外的性能和内存开销



## preLoadAvatarAsset
###### **[preLoadAvatarAsset](#preloadavatarasset)**(id : number,  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  autoDispose? : boolean,  prerender? : boolean): void :
[静态]预加载行走图数据，如果autoDispose为false的话则需要手动卸载： AssetManager::disposeAvatarAsset
##### 参数
	id 行走图ID
	complete [可选] 默认值=null
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）
	autoDispose [可选] 默认值=true 是否自动释放资源（加载后会在延迟一段时间后自动释放，用于减少引用计数）
	isStandAvatar [可选] 默认值=false 是否是立绘资源
	prerender [可选] 默认值=false 是否预渲染图片资源，保证完成回调后使用时不会因为渲染而卡顿，一般资源较大时可以尝试开启此项，开启此项会有额外的性能和内存开销



## preLoadStandAvatarAsset
###### **[preLoadStandAvatarAsset](#preloadstandavatarasset)**(id : number,  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  autoDispose? : boolean,  prerender? : boolean): void :
[静态]预加载立绘数据，如果autoDispose为false的话则需要手动卸载： AssetManager::disposeStandAvatarAsset
##### 参数
	id 立绘资源ID
	complete [可选] 默认值=null
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）
	autoDispose [可选] 默认值=false 是否自动释放资源（加载后会在延迟一段时间后自动释放，用于减少引用计数）
	prerender [可选] 默认值=false 是否预渲染图片资源，保证完成回调后使用时不会因为渲染而卡顿，一般资源较大时可以尝试开启此项，开启此项会有额外的性能和内存开销



## preLoadUIAsset
###### **[preLoadUIAsset](#preloaduiasset)**(id : number,  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  autoDispose? : boolean,  prerender? : boolean): void :
[静态]预加载界面，如果autoDispose为false的话则需要手动卸载：AssetManager::disposeUIAsset
##### 参数
	id 界面ID
	complete [可选] 默认值=null
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）
	autoDispose [可选] 默认值=false 是否自动释放资源（加载后会在延迟一段时间后自动释放，用于减少引用计数）
	prerender [可选] 默认值=false 是否预渲染图片资源，保证完成回调后使用时不会因为渲染而卡顿，一般资源较大时可以尝试开启此项，开启此项会有额外的性能和内存开销



## preLoadAnimationAsset
###### **[preLoadAnimationAsset](#preloadanimationasset)**(id : number,  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  autoDispose? : boolean,  prerender? : boolean): void :
[静态]预加载动画，如果autoDispose为false的话则需要手动卸载：AssetManager::disposeAnimationAsset
##### 参数
	id 动画ID
	complete [可选] 默认值=null
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）
	autoDispose [可选] 默认值=false 是否自动释放资源（加载后会在延迟一段时间后自动释放，用于减少引用计数）
	prerender [可选] 默认值=false 是否预渲染图片资源，保证完成回调后使用时不会因为渲染而卡顿，一般资源较大时可以尝试开启此项，开启此项会有额外的性能和内存开销



## preLoadCommandPage
###### **[preLoadCommandPage](#preloadcommandpage)**(commandPage : [CommandPage](/zh_hans/library/2d/common/commandpage),  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  autoDispose? : boolean): void :
[静态]预加载事件页中包含的资源，如果autoDispose为false的话则需要手动卸载：AssetManager::disposeCommandPage<br>
（目前仅单机版可用，网络版事件是在服务端执行的，客户端无法获取事件的数据）<br>
（仅支持系统内核的事件，如果有需要加载到自定义指令中的资源支持重写来扩展该方法）<br>
-- 对话和选项事件：带有的对话框样式和头像资源<br>
-- 设置对象行为事件：行走图资源<br>
-- 图像系统事件：图片、动画、界面、立绘、音效、对话框样式<br>
-- 音频事件：BGM-背景音乐、BGS-环境音效、SE-音效<br>
-- 界面事件: 界面<br>
-- 自定义事件：需要项目层自行追加相关逻辑，比如可以重写此方法以追加逻辑<br>

##### 参数
	commandPage 事件页数据
	complete [可选] 默认值=null 完成时回调
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）
	autoDispose [可选] 默认值=false 是否自动释放资源（加载后会在延迟一段时间后自动释放，用于减少引用计数）



## preLoadDialog
###### **[preLoadDialog](#preloaddialog)**(id : number,  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  autoDispose? : boolean): void :
[静态]预加载对话框样式的相关资源，如果autoDispose为false的话则需要手动卸载：AssetManager::disposeDialog
##### 参数
	id 对话框样式ID
	complete [可选] 默认值=null 完成时回调
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）
	autoDispose [可选] 默认值=false 是否自动释放资源（加载后会在延迟一段时间后自动释放，用于减少引用计数）



## preloadFonts
###### **[preloadFonts](#preloadfonts)**(complete? : Callback,  syncCallbackWhenAssetExist? : boolean): void :
[静态]预加载所有在编辑器中预设的字体（来自设置中的「文件字体导入管理」）
##### 参数
	complete [可选] 默认值=null 加载完成回调
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）



## preloadFont
###### **[preloadFont](#preloadfont)**(fontUrl : string,  complete? : Callback,  syncCallbackWhenAssetExist? : boolean): void :
[静态]预加载指定的字体文件
##### 参数
	fontUrl 如 asset/xxx.ttf
	complete [可选] 默认值=null 加载完成回调
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）



## batchPreLoadAsset
###### **[batchPreLoadAsset](#batchpreloadasset)**(onFin : Callback,  onProgress : Callback,  images : string[],  scenes : number[],  avatars : number[],  standAvatars : number[],  animations? : number[],  uis? : number[],  jsons? : string[],  audios? : string[],  dialogs? : number[],  syncCallbackWhenAssetExist? : boolean,  autoDispose? : boolean,  prerender? : boolean): void :
[静态]批量加载高级资源
##### 参数
	onFin 当加载完成时回调
	onProgress [可选] 默认值=null 加载进度回调 onProgress(current:number,count:number); 当前加载数,加载总数
	images [可选] 默认值=[] 需要加载的图片路径集
	scenes [可选] 默认值=[] 需要加载的场景ID集
	avatars [可选] 默认值=[] 需要加载的行走图ID集
	standAvatars [可选] 默认值=[] 需要加载的立绘ID集
	animations [可选] 默认值=[] 需要加载的动画ID集
	uis  [可选] 默认值=[] 需要加载的UI集
	jsons [可选] 默认值=[] 需要加载的JSON集
	audios [可选] 默认值=[] 需要加载的音频集
	dialogs [可选] 默认值=[] 需要加载的对话框样式
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）
	autoDispose [可选] 默认值=false 是否自动释放资源（加载后会在延迟一段时间后自动释放，用于减少引用计数）
	prerender [可选] 默认值=false 是否预渲染图片资源，保证完成回调后使用时不会因为渲染而卡顿，一般资源较大时可以尝试开启此项



## batchDisposeAsset
###### **[batchDisposeAsset](#batchdisposeasset)**(images : string[],  scenes : number[],  avatars : number[],  standAvatars : number[],  animations? : number[],  uis? : number[],  jsons? : string[],  audios? : string[],  dialogs? : number[]): void :
[静态]批量卸载高级资源
##### 参数
	images [可选] 默认值=[] 需要卸载的图片路径集
	scenes [可选] 默认值=[] 需要卸载的场景ID集
	avatars [可选] 默认值=[] 需要卸载的行走图ID集
	standAvatars [可选] 默认值=[] 需要卸载的立绘ID集
	animations [可选] 默认值=[] 需要卸载的动画ID集
	uis  [可选] 默认值=[] 需要卸载的界面集
	jsons [可选] 默认值=[] 需要卸载的JSON集
	audios [可选] 默认值=[] 需要加载的音频集
	dialogs [可选] 默认值=[] 需要加载的对话框样式



## disposeScene
###### **[disposeScene](#disposescene)**(id : number): void :
[静态]释放场景资源，每次调用此函数减少引用计数，当引用计数为0时会销毁实际的资源（请慎重使用，一般情况下销毁对象即会自动销毁其关联的资源）
##### 参数
	id 场景ID



## disposeSceneObject
###### **[disposeSceneObject](#disposesceneobject)**(so : [SceneObject](/zh_hans/library/2d/common/sceneobject)): void :
[静态]释放场景对象资源，每次调用此函数减少引用计数，当引用计数为0时会销毁实际的资源（请慎重使用，一般情况下销毁对象即会自动销毁其关联的资源）
##### 参数
	so 场景对象数据



## disposeAvatarAsset
###### **[disposeAvatarAsset](#disposeavatarasset)**(id : number): void :
[静态]释放行走图资源，每次调用此函数减少引用计数，当引用计数为0时会销毁实际的资源（请慎重使用，一般情况下销毁对象即会自动销毁其关联的资源）
##### 参数
	id 行走图ID



## disposeStandAvatarAsset
###### **[disposeStandAvatarAsset](#disposestandavatarasset)**(id : number): void :
[静态]释放立绘资源，每次调用此函数减少引用计数，当引用计数为0时会销毁实际的资源（请慎重使用，一般情况下销毁对象即会自动销毁其关联的资源）
##### 参数
	id 立绘ID



## disposeUIAsset
###### **[disposeUIAsset](#disposeuiasset)**(id : number): void :
[静态]释放界面，每次调用此函数减少引用计数，当引用计数为0时会销毁实际的资源（请慎重使用，一般情况下销毁对象即会自动销毁其关联的资源）
##### 参数
	id 界面ID



## disposeAnimationAsset
###### **[disposeAnimationAsset](#disposeanimationasset)**(id : number): void :
[静态]释放动画，每次调用此函数减少引用计数，当引用计数为0时会销毁实际的资源（请慎重使用，一般情况下销毁对象即会自动销毁其关联的资源）
##### 参数
	id 动画ID



## disposeCommandPage
###### **[disposeCommandPage](#disposecommandpage)**(commandPage : [CommandPage](/zh_hans/library/2d/common/commandpage)): void :
[静态]释放由于预加载事件页加载的资源，每次调用此函数减少引用计数，当引用计数为0时会销毁实际的资源（请慎重使用，一般情况下销毁对象即会自动销毁其关联的资源）
##### 参数
	commandPage 事件页



## disposeDialog
###### **[disposeDialog](#disposedialog)**(id : number): void :
[静态]预加载对话框样式的相关资源，每次调用此函数减少引用计数，当引用计数为0时会销毁实际的资源（请慎重使用，一般情况下销毁对象即会自动销毁其关联的资源）
##### 参数
	id 对话框样式ID



## loadImage
###### **[loadImage](#loadimage)**(url : string,  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  useRef? : boolean,  prerender? : boolean): void :
[静态]加载图片
##### 参数
	url 图片地址
	complete [可选] 默认值=null 当完成时回调 complete(tex:Texture)
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）
	useRef [可选] 默认值=true 是否使用引用计数，使用的话每次调用该函数都会增加一次引用计数
	prerender [可选] 默认值=false 是否预渲染图片资源，保证完成回调后使用时不会因为渲染而卡顿，一般资源较大时可以尝试开启此项



## loadTexture
###### **[loadTexture](#loadtexture)**(url : string,  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  useRef? : boolean): void :
[静态]加载Texture粒子图片
##### 参数
	url 图片地址
	complete [可选] 默认值=null 当完成时回调 complete(tex:Texture)
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）
	useRef [可选] 默认值=true 是否使用引用计数，使用的话每次调用该函数都会增加一次引用计数



## loadImages
###### **[loadImages](#loadimages)**(urls : string[],  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  useRef? : boolean,  prerender? : boolean): void :
[静态]加载图片集，忽略空地址，始终会返回加载完毕回调
##### 参数
	urls 图片地址集
	complete [可选] 默认值=null
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）
	useRef [可选] 默认值=true 是否使用引用计数，使用的话每次调用该函数都会增加一次引用计数
	prerender [可选] 默认值=false 是否预渲染图片资源，保证完成回调后使用时不会因为渲染而卡顿，一般资源较大时可以尝试开启此项



## loadTextures
###### **[loadTextures](#loadtextures)**(urls : string[],  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  useRef? : boolean): void :
[静态]加载Texture粒子图片集，忽略空地址，始终会返回加载完毕回调
##### 参数
	urls 图片地址集
	complete [可选] 默认值=null
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）
	useRef [可选] 默认值=true 是否使用引用计数，使用的话每次调用该函数都会增加一次引用计数



## loadAudio
###### **[loadAudio](#loadaudio)**(url : string,  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  useRef? : boolean): void :
[静态]加载音频文件支持格式 .mp3 .ogg
##### 参数
	url 音频文件地址
	complete [可选] 默认值=null 加载完成时回调
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）
	useRef [可选] 默认值=true 是否使用引用计数，使用的话每次调用该函数都会增加一次引用计数



## loadAudios
###### **[loadAudios](#loadaudios)**(urls : string[],  complete? : Callback,  syncCallbackWhenAssetExist? : boolean,  useRef? : boolean): void :
[静态]加载音频文件集，忽略空地址，始终会返回加载完毕回调
##### 参数
	urls 音频文件集
	complete [可选] 默认值=null
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）
	useRef [可选] 默认值=true 是否使用引用计数，使用的话每次调用该函数都会增加一次引用计数



## loadJson
###### **[loadJson](#loadjson)**(url : string,  complete : Callback,  syncCallbackWhenAssetExist? : boolean,  useRef? : boolean): void :
[静态]加载并解析JSON文件
##### 参数
	url json文件地址
	complete complete(jsonObj:any)
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）
	useRef [可选] 默认值=true 是否使用引用计数，使用的话每次调用该函数都会增加一次引用计数



## loadJsons
###### **[loadJsons](#loadjsons)**(urls : string[],  complete : Callback,  syncCallbackWhenAssetExist? : boolean,  useRef? : boolean): void :
[静态]加载并解析JSON文件集，忽略空地址，始终会返回加载完毕回调
##### 参数
	urls json文件地址集
	complete [可选] 默认值=null
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）
	useRef [可选] 默认值=true 是否使用引用计数，使用的话每次调用该函数都会增加一次引用计数



## loadText
###### **[loadText](#loadtext)**(url : string,  complete : Callback,  syncCallbackWhenAssetExist? : boolean,  useRef? : boolean): void :
[静态]加载Text文件
##### 参数
	url 文件路径
	complete
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）
	useRef [可选] 默认值=true 是否使用引用计数，使用的话每次调用该函数都会增加一次引用计数



## loadTexts
###### **[loadTexts](#loadtexts)**(urls : string[],  complete : Callback,  syncCallbackWhenAssetExist? : boolean,  useRef? : boolean): void :
[静态]加载Text文件集
##### 参数
	urls 文件路径集
	complete
	syncCallbackWhenAssetExist [可选] 默认值=false 当资源存在时同步回调，否则需要等待一帧（异步回调）
	useRef [可选] 默认值=true 是否使用引用计数，使用的话每次调用该函数都会增加一次引用计数



## loadFileArrayBuffer
###### **[loadFileArrayBuffer](#loadfilearraybuffer)**(url : string,  complete : Callback,  useRef? : boolean,  syncCallbackWhenAssetExist? : boolean): void :
[静态]加载文件资源（二进制）
##### 参数
	url 文件路径集
	complete 加载完成时回调函数 complete(arrayBuffer:ArrayBuffer)
	useRef [可选] 默认值=true 是否使用引用计数，使用的话每次调用该函数都会增加一次引用计数
	syncCallbackWhenAssetExist [可选] 默认值=true 当资源存在时同步回调，否则需要等待一帧（异步回调）



## getImage
###### **[getImage](#getimage)**(url : string): Texture :
[静态]获取贴图资源
##### 参数
	url 图片地址

##### 返回
[Texture] 贴图资源，如果不存在则返回null

## getJson
###### **[getJson](#getjson)**(url : string): any :
[静态]获取JSON资源
##### 参数
	url JSON文件地址

##### 返回
[any] Object：如果不存在则返回null

## getText
###### **[getText](#gettext)**(url : string): string :
[静态]获取文本资源
##### 参数
	url 文本地址

##### 返回
[string] 文本：如果不存在则返回null

## getFileArrayBuffer
###### **[getFileArrayBuffer](#getfilearraybuffer)**(url : string): ArrayBuffer :
[静态]获取文件资源（二进制）
##### 参数
	url 文件地址

##### 返回
[ArrayBuffer] 如果不存在则返回null

## disposeImage
###### **[disposeImage](#disposeimage)**(url : string,  force? : boolean): void :
[静态]卸载图片资源：当引用计数为0时会延迟后清理掉实际的所有资源以及其所有的切图资源（需保证切图资源Graphics外部已没有引用）
##### 参数
	url 图片文件地址
	force [可选] 默认值=false 是否强制卸载，强制卸载则无视引用计数



## disposeImages
###### **[disposeImages](#disposeimages)**(urls : string[],  force? : boolean): void :
[静态]卸载图片资源集：当引用计数为0时会延迟后清理掉实际的所有资源以及其所有的切图资源（需保证切图资源Graphics外部已没有引用）
##### 参数
	urls 图片文件地址集合
	force [可选] 默认值=false 是否强制卸载，强制卸载则无视引用计数



## disposeAudio
###### **[disposeAudio](#disposeaudio)**(url : string,  force? : boolean): void :
[静态]卸载音频资源，当引用计数为0时会延迟后清理掉实际的所有资源
##### 参数
	url 音频文件地址
	force [可选] 默认值=false 是否强制卸载，强制卸载则无视引用计数



## disposeJson
###### **[disposeJson](#disposejson)**(url : string,  force? : boolean): void :
[静态]卸载JSON资源，当引用计数为0时会延迟后清理掉实际的所有资源
##### 参数
	url json文件地址
	force [可选] 默认值=false 是否强制卸载，强制卸载则无视引用计数



## disposeText
###### **[disposeText](#disposetext)**(url : string,  force? : boolean): void :
[静态]卸载文本资源，当引用计数为0时会延迟后清理掉实际的所有资源
##### 参数
	url 文本文件地址
	force [可选] 默认值=false 是否强制卸载，强制卸载则无视引用计数



## disposeFileArrayBuffer
###### **[disposeFileArrayBuffer](#disposefilearraybuffer)**(url : string,  force? : boolean): void :
[静态]卸载文件资源（二进制）
##### 参数
	url 文件路径集
	force [可选] 默认值=false 是否强制卸载，强制卸载则无视引用计数



## getClipImage
###### **[getClipImage](#getclipimage)**(url : string,  x : number,  y : number,  rect : [Rectangle](/zh_hans/library/2d/common/rectangle)): Graphics :
[静态]根据图片地址获取切片的贴图资源：整图资源必须已载入，当没有对应的切图时会临时切一次
##### 参数
	url 贴图地址
	x 显示的偏移值x
	y 显示的偏移值y
	rect 对纹理的取样 偏移和宽高



## drawToTexture
###### **[drawToTexture](#drawtotexture)**(source : any,  textureWidth : number,  textureHeight : number,  offsetX? : number,  offsetY? : number,  mipmap? : boolean,  minFifter? : number,  magFifter? : number): Texture :
[静态]将显示对象截图为贴图资源使用（显存），贴图尺寸受限于实际的画面尺寸
##### 参数
	source 源，Sprite或Graphics均可
	textureWidth 贴图宽度
	textureHeight 贴图高度
	offsetX source相对于画布的偏移X
	offsetY source相对于画布的偏移Y
	mipmap [可选] 默认值=false 是否使用mipmap（即根据贴图缩放大小来找到对应的mimap层混合，以解决缩放后贴图抖动的问题）
	minFifter [可选] 默认值=0x2600 显示缩小的贴图时的采样方式 0x2600=邻近采样 0x2601=线性采样
	magFifter [可选] 默认值=0x2600 显示放大的贴图时的采样方式 0x2600=邻近采样 0x2601=线性采样

##### 返回
[Texture]

## drawToAtlasSprite
###### **[drawToAtlasSprite](#drawtoatlassprite)**(source : any,  width : number,  height : number,  mipmap? : boolean,  minFifter? : number,  magFifter? : number,  offsetX? : number,  offsetY? : number): Sprite :
[静态]以拼合图的形式绘制到容器中（由于设备限制贴图大小而需要拼合）需要调用disposeAtlasSprite来主动释放这些显存上的贴图
##### 参数
	source 源，Sprite或Graphics均可
	width 需要截取的宽度
	height 需要截取的高度
	mipmap [可选] 默认值=false 是否使用mipmap（即根据贴图缩放大小来找到对应的mimap层混合，以解决缩放后贴图抖动的问题）
	minFifter [可选] 默认值=0x2600 显示缩小的贴图时的采样方式 0x2600=邻近采样 0x2601=线性采样
	magFifter [可选] 默认值=0x2600 显示放大的贴图时的采样方式 0x2600=邻近采样 0x2601=线性采样
	offsetX source相对于画布的偏移X
	offsetY source相对于画布的偏移Y

##### 返回
[Sprite]

## bigTextureToAtlasSprite
###### **[bigTextureToAtlasSprite](#bigtexturetoatlassprite)**(texture : Texture,  xLoop? : boolean,  yLoop? : boolean,  mapWidth? : number,  mapHeight? : number): Sprite :
[静态]大贴图转化为拼图显示对象，以解决大贴图超出显卡最大支持的贴图尺寸（os.MAX_TEXTURE_SIZE）时无法显示的问题
##### 参数
	texture 贴图资源
	xLoop [可选] 默认值=false x循环
	yLoop [可选] 默认值=false y循环
	mapWidth [可选] 默认值=0 拼图宽度
	mapHeight [可选] 默认值=0 拼图高度

##### 返回
[Sprite] 贴图显示对象

## disposeAtlasSprite
###### **[disposeAtlasSprite](#disposeatlassprite)**(root : Sprite): void :
[静态]释放拼合的贴图，即由drawToAtlasSprite生成的拼合图显示对象
##### 参数
	root 拼合图显示对象



## prerender
###### **[prerender](#prerender)**(source : any): void :
[静态]预渲染<br>
如果显示对象包含的资源较多，首次渲染可能造成卡顿，为了让渲染前不至于卡顿，可以在加载之类的地方去预渲染一下。
##### 参数
	显示对象源 Graphics | Sprite



## textureToBase64
###### **[textureToBase64](#texturetobase64)**(texture : Texture): string :
[静态]贴图转为base64格式
##### 参数
	texture 贴图

##### 返回
[string] base64字符串

## textureToArrayBuffer
###### **[textureToArrayBuffer](#texturetoarraybuffer)**(texture : Texture): ArrayBuffer :
[静态]贴图转为ArrayBuffer格式
##### 参数
	texture 贴图

##### 返回
[ArrayBuffer] ArrayBuffer字节数组

## arrayBufferToTexture
###### **[arrayBufferToTexture](#arraybuffertotexture)**(arrayBuffer : ArrayBuffer,  onFin : Callback): void :
[静态]ArrayBuffer转为贴图
##### 参数
	arrayBuffer ArrayBuffer字节数组
	onFin 当完成时回调 onFin(tex:Texture)

##### 返回
[Texture] 贴图

## arrayBufferToBase64
###### **[arrayBufferToBase64](#arraybuffertobase64)**(arrayBuffer : ArrayBuffer): string :
[静态]ArrayBuffer转为Base64
##### 参数
	arrayBuffer ArrayBuffer字节数组

##### 返回
[string] base64字符串

## base64ToTexture
###### **[base64ToTexture](#base64totexture)**(base64 : string,  onFin : Callback): void :
[静态]ArrayBuffer转为贴图
##### 参数
	arrayBuffer ArrayBuffer字节数组
	onFin 当完成时回调 onFin(tex:Texture)

##### 返回
[Texture] 贴图

## base64ToArrayBuffer
###### **[base64ToArrayBuffer](#base64toarraybuffer)**(base64 : string): ArrayBuffer :
[静态]ArrayBuffer转为Base64
##### 参数
	arrayBuffer ArrayBuffer字节数组

##### 返回
[string] base64字符串



