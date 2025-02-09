# FileUtils 文件操作工具
>一般用于文本文件 如JSON/XML等储存数据格式的文件<br><br>
>维护人员：**黑暗之神KDS**  
>创建时间：2018-06-22

**继承**  无<br>
**子类**  无<br>
## **Public 属性**
|<div style="width:1000px;text-align:left">属性</div>   |
| ---  |
| **hasFileOperationJurisdiction** : boolean;<br>[静态][只读]是否拥有文件系统权限：如写入文件、获取目录下全部文件列表等  |

## Public 方法
|<div style="width:1000px;text-align:left" >方法</div>   |
| ---  |
| **[exists](#exists)**(localURL : string,  onFin : Callback): void<br>[静态]文件（夹）是否存在
| **[getDirectoryListing](#getdirectorylisting)**(directoryLocalPath : string,  onFin : Callback): void<br>[静态]【仅PC端游戏有效】获取指定目录下的所有文件或文件夹（不包含子文件夹内的文件）
| **[getAllChildFiles](#getallchildfiles)**(directoryLocalPath : string,  onFin : Callback): void<br>[静态]【仅PC端游戏有效】获取指定目录下的所有文件或文件夹（包含子文件夹内的文件）
| **[loadJsonFile](#loadjsonfile)**(localURL : string,  onFin : Callback): void<br>[静态]加载JSON文件
| **[loadFile](#loadfile)**(localURL : string,  onFin : Callback): void<br>[静态]加载文件（文本格式）
| **[save](#save)**(dataObject : any,  localURL : string,  onFin : Callback,  format? : boolean): void<br>[静态]保存文件
| **[deleteFile](#deletefile)**(localURL : string,  onFin? : Callback): void<br>[静态]删除文件
| **[createDirectoryForce](#createdirectoryforce)**(localURL : string,  onFin : Callback): void<br>[静态]【仅PC端游戏有效】创建文件夹，会创建不存在的目录
| **[cloneFile](#clonefile)**(fromLocalURL : string,  toLocalURL : string,  onFin : Callback,  onProgress? : Callback): void<br>[静态]【仅PC端游戏有效】复制粘贴文件

## 详情



## exists
###### **[exists](#exists)**(localURL : string,  onFin : Callback): void :
[静态]文件（夹）是否存在<br>
-- 需要满足 FileUtils.hasFileOperationJurisdiction
##### 参数
	localURL 相对路径，如asset/json/xxx.json
	onFin 当检查完毕时 onFin(isExists:boolean)



## getDirectoryListing
###### **[getDirectoryListing](#getdirectorylisting)**(directoryLocalPath : string,  onFin : Callback): void :
[静态]【仅PC端游戏有效】获取指定目录下的所有文件或文件夹（不包含子文件夹内的文件）<br>
-- 需要满足 FileUtils.hasFileOperationJurisdiction
##### 参数
	directoryLocalPath 文件目录地址 如 asset/xxx
	onFin 完成时回调 onFin(fos:{localPath:string,fileName:string,isDirectory:boolean}[])  比如fileName=xxx.png localPath=asset/xxx.png，如果fos为空则表示获取失败



## getAllChildFiles
###### **[getAllChildFiles](#getallchildfiles)**(directoryLocalPath : string,  onFin : Callback): void :
[静态]【仅PC端游戏有效】获取指定目录下的所有文件或文件夹（包含子文件夹内的文件）<br>
-- 需要满足 FileUtils.hasFileOperationJurisdiction
##### 参数
	directoryLocalPath 文件目录地址 如 asset/xxx
	onFin 完成时回调 onFin(fos:{localPath:string,fileName:string,isDirectory:boolean}[])  比如fileName=xxx.png localPath=asset/xxx.png，如果fos为空则表示获取失败



## loadJsonFile
###### **[loadJsonFile](#loadjsonfile)**(localURL : string,  onFin : Callback): void :
[静态]加载JSON文件
##### 参数
	localURL 加载文件的地址
	onFin 加载完成或失败时回调（失败:obj=null）onFin(jsonObj:any)



## loadFile
###### **[loadFile](#loadfile)**(localURL : string,  onFin : Callback): void :
[静态]加载文件（文本格式）
##### 参数
	localURL 加载文件的地址
	onFin 加载完成或失败时回调（失败:text=null）onFin(text:any)



## save
###### **[save](#save)**(dataObject : any,  localURL : string,  onFin : Callback,  format? : boolean): void :
[静态]保存文件<br>
-- PC版本保存本地文件<br>
-- WEB版本使用LocalStorage储存
##### 参数
	dataObject 对象
	localURL 文件相对地址 ，如asset/xxx.json
	onFin 当保存完毕时回调
	format [可选] 默认值=true 是否格式化（JSON格式化）



## deleteFile
###### **[deleteFile](#deletefile)**(localURL : string,  onFin? : Callback): void :
[静态]删除文件<br>
-- PC版本删除本地文件<br>
-- WEB版本清理对应的LocalStorage
##### 参数
	localURL 文件相对地址 ，如asset/xxx.json
	onFin [可选] 默认值=null  是否删除成功 onFin(success:boolean, localURL:string)



## createDirectoryForce
###### **[createDirectoryForce](#createdirectoryforce)**(localURL : string,  onFin : Callback): void :
[静态]【仅PC端游戏有效】创建文件夹，会创建不存在的目录<br>
-- 需要满足 FileUtils.hasFileOperationJurisdiction
##### 参数
	localURL 文件夹相对地址 格式： 如 asset/dir1/dir2/dir3
	onFin 当完成是回调 onFin(success:boolean,localURL:string)



## cloneFile
###### **[cloneFile](#clonefile)**(fromLocalURL : string,  toLocalURL : string,  onFin : Callback,  onProgress? : Callback): void :
[静态]【仅PC端游戏有效】复制粘贴文件<br>
-- 需要满足 FileUtils.hasFileOperationJurisdiction
##### 参数
	fromLocalURL 文件来源相对地址 格式： 如 asset/file1.txt
	toLocalURL 需要粘贴到的相对地址  格式： 如 asset/file2.txt
	onFin 完成时回调  onFin(success:boolean,fromLocalURL:string,toLocalURL:string)
	onProgress [可选] 默认值=null 复制过程函数 onProgress(currentNum:number,totalNum:number);





