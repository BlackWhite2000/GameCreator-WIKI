---
title: 路径工具 PathUtils
---

## 目录

|                                 |                                    |
| ------------------------------- | ---------------------------------- |
| [gamePath](#gamepath)           | 获取当前游戏根路径                 |
| [gamePathByEnv](#gamepathbyenv) | 根据当前游戏环境获取当前游戏根路径 |

## gamePath

```ts [ts]
/**
* 获取当前游戏根路径
* 
* PC版本与WEB版本返回的路径不同，通常WEB版本将携带路由以及标识符，PC版本则返回本地路径
* 
* @example
* ```ts
* const gamePath = OpenAPI.RunUtils.gamePath // 返回当前游戏根路径
* ```
*/
```

## gamePathByEnv

```ts [ts]

/**
* 根据当前游戏环境获取当前游戏根路径
* 
* 如果是PC版本则返回相对路径，实际是返回空。WEB版本则返回绝对路径
* 
* @example
* ```ts
* const gamePathByEnv = OpenAPI.PathUtils.gamePathByEnv // 返回当前游戏根路径
* ```
*/
```
