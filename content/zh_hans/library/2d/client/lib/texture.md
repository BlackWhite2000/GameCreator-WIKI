# Texture 贴图源
>纹理处理类<br>== 使用方式 ==<br>// 加载整张图片使用<br>AssetManager.loadImage("asset/image/xxx.png", Callback.New((tex: Texture) => {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var img = new UIBitmap();<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;img.texture = tex;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stage.addChild(img);<br>}, this));<br>// 加载作为贴图使用<br>AssetManager.loadImage("asset/image/animation/2.png", Callback.New((tex: Texture) => {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var g = new Graphics();<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 取样从图中的256,256中取得128x128尺寸的切图，并显示在50,50的地方<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;g.fillTexture(tex, 50, 50, 128, 128, "repeat", new Point(256, 256));<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var sp = new Sprite();<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sp.graphics = g;<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stage.addChild(sp);<br>}, this));<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-01-01

**继承**  →[EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **DEF_UV** : Array<any>;<br>[静态]默认 UV 信息  |
| **INV_UV** : Array<any>;<br>[静态]颠倒的 UV 信息  |
| **url** : string;<br>图片地址  |
| **disposed** : boolean;<br>[只读]表示资源是否已释放  |
| **width** : number;<br>实际宽度。  |
| **height** : number;<br>实际高度。  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[dispose](#dispose)**(): void<br>销毁纹理
| **[getPixels](#getpixels)**(x : number,  y : number,  width : number,  height : number): Array<any><br>获取Texture上的某个区域的像素点

## 详情



## dispose
###### **[dispose](#dispose)**(): void :
销毁纹理



## getPixels
###### **[getPixels](#getpixels)**(x : number,  y : number,  width : number,  height : number): Array<any> :
获取Texture上的某个区域的像素点<br>
@param	x<br>
@param	y<br>
@param	width<br>
@param	height

##### 返回
 返回像素点集合



