# HttpRequest 请求
>通过封装 HTML XMLHttpRequest 对象提供了对 HTTP 协议的完全的访问，包括做出 POST 和 HEAD 请求以及普通的 GET 请求的能力。<br>只提供以异步的形式返回 Web 服务器的响应，并且能够以文本或者二进制的形式返回内容。<br>注意：建议每次请求都使用新的 HttpRequest 对象，因为每次调用该对象的send方法时，都会清空之前设置的数据，并重置 HTTP 请求的状态，<br>这会导致之前还未返回响应的请求被重置，从而得不到之前请求的响应结果。<br>支持事件<br>EventObject.COMPLETE 加载完成事件 onComplete(content:any)<br>EventObject.PROGRESS 加载过程事件（一般大文件才有） onProgress(progress:number)<br>EventObject.ERROR 加载错误事件<br>// 代码示例：<br>var ur = new HttpRequest();<br>ur.send("http://www.gamecreator.com.cn");<br>ur.on(EventObject.COMPLETE, this, (content:string) => {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// to do<br>});<br>ur.on(EventObject.PROGRESS, this, (progress:number) => {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// 进度 0~1<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trace("进度=",progress)<br>});<br>ur.on(EventObject.ERROR, this, (error:string) => {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;// to do<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trace(error);<br>});<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2017-01-01

**继承**  →[EventDispatcher](/zh_hans/library/2d/client/lib/eventdispatcher)<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **url** : string;<br>[只读]请求的地址。  |
| **data** : any;<br>[只读]返回的数据。  |
| **http** : XMLHttpRequest;<br>[只读]本对象所封装的原生 XMLHttpRequest 引用。  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[requestServer](#requestserver)**(params : any,  succeed : Function,  failed : Function): void<br>[静态]请求服务器
| **[send](#send)**(url : string,  data? : any,  method? : string,  responseType? : string,  headers? : Array<any>): void<br>发送 HTTP 请求。

## 详情



## requestServer
###### **[requestServer](#requestserver)**(params : any,  succeed : Function,  failed : Function): void :
[静态]请求服务器
##### 参数
	params {url:string,data:{xxx:yyy},method:"post",responseType:"json",gcToken:null} method="post/get" responseType="json/text"
	succeed succeed(res)
	failed failed()



## send
###### **[send](#send)**(url : string,  data? : any,  method? : string,  responseType? : string,  headers? : Array<any>): void :
发送 HTTP 请求。<br>
@param	url				请求的地址。大多数浏览器实施了一个同源安全策略，并且要求这个 URL 与包含脚本的文本具有相同的主机名和端口。<br>
@param	data			(default = null)发送的数据。如 "{ mode: 6, act: 5 }" 或 "act=5&mode=6"<br>
@param	method			(default = "get")用于请求的 HTTP 方法。值包括 "get"、"post"、"head"。<br>
@param	responseType	(default = "text")Web 服务器的响应类型，可设置为 "text"、"json"、"xml"、"arraybuffer"。<br>
@param	headers			(default = null) HTTP 请求的头部信息。参数形如key-value数组：key是头部的名称，不应该包括空白、冒号或换行；value是头部的值，不应该包括换行。比如["Content-Type", "application/json"]。





