---
title: 运行时工具 RunUtils
---

## 目录

|                                 |                  |
| ------------------------------- | ---------------- |
| [require](#require)             | 获取默认引入的库 |
| [fs](#fs)                       | fs库             |
| [path](#path)                   | path库           |
| [os](#os)                       | os库             |
| [process](#process)             | process库        |
| [child_process](#child_process) | child_process库  |
| [nw_gui](#nw_gui)               | nw_gui库         |
| [gameEnv](#gameenv)             | 当前游戏环境     |

## require

```ts [ts]
/**
* 获取默认引入的库
* 
* -- 只支持PC版本
* 
* -- WEB版本基于LocalStorage
* 
* @param {string} name - 库名
* 
* @example
* ```ts
* const fs = OpenAPI.RunUtils.require('fs') // 返回引入的库
* ```
*/
```

## fs

```ts [ts]
/**
* fs库
* 
* -- 只支持PC版本
* 
* -- WEB版本基于LocalStorage
* 
* @example
* ```ts
* const fs = OpenAPI.RunUtils.fs // 返回引入的fs库
* ```
*/
```

## path

```ts [ts]
/**
* path库
* 
* -- 只支持PC版本
* 
* -- WEB版本基于LocalStorage
* 
* @example
* ```ts
* const path = OpenAPI.RunUtils.path // 返回引入的path库
* ```
*/
```

## os

```ts [ts]
/**
* os库
* 
* -- 只支持PC版本
* 
* -- WEB版本基于LocalStorage
* 
* @example
* ```ts
* const os = OpenAPI.RunUtils.os // 返回引入的os库
* ```
*/
```

## process

```ts [ts]
/**
* process库
* 
* -- 只支持PC版本
* 
* -- WEB版本基于LocalStorage
* 
* @example
* ```ts
* const process = OpenAPI.RunUtils.process // 返回引入的process库
* ```
*/
```

## child_process

```ts [ts]
/**
* child_process库
* 
* -- 只支持PC版本
* 
* -- WEB版本基于LocalStorage
* 
* @example
* ```ts
* const child_process = OpenAPI.RunUtils.child_process // 返回引入的child_process库
* ```
*/
```

## nw_gui

```ts [ts]
/**
* nw.gui库
* 
* -- 只支持PC版本
* 
* -- WEB版本基于LocalStorage
* 
* @example
* ```ts
* const nw_gui = OpenAPI.RunUtils.nw_gui // 返回引入的nw.gui库
* ```
*/
```

## gameenv

```ts [ts]
/**
* 当前游戏环境
* 
* 0-编辑器 
* 
* 1-PC 
* 
* 2-WEB
* 
* @example
* ```ts
* const gameEnv = OpenAPI.RunUtils.gameEnv // 返回当前游戏环境
* ```
*/
```
