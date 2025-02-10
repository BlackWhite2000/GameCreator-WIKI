---
title: 动画操作工具 AnimationUtils
---

## 目录

|                                                     |                  |
| --------------------------------------------------- | ---------------- |
| [setObjectData](#setobjectdata)                     | 设置对象数据     |
| [setAnimation](#setanimation)                       | 设置动画         |
| [setImageAnimation](#setimageanimation)             | 设置图像动画     |
| [setUIAnimation](#setuianimation)                   | 设置界面动画     |
| [setSceneObjectAnimation](#setsceneobjectanimation) | 设置场景对象动画 |

## setObjectData

```ts [ts]
/**
 * 设置对象数据
 * @param object_1 来源
 * @param object_2 目标
 * 
 * @example
 * ```ts
 * const object_1 = new GameSprite()
 * const object_2 = new GameSprite()
 * OpenAPI.AnimationUtils.setObjectData(object_1, object_2)
 * ```
 */
```

## setAnimation

```ts [ts]
/**
 * 设置动画
 * @param object 目标对象
 * @param aniID 动画编号
 * @param complete 回调
 * 
 * @example
 * ```ts
 * const object = new GameSprite()
 * OpenAPI.AnimationUtils.setAnimation(object, 1, Callback.New(() => {
 *    console.log('动画播放完成')
 * }, this))
 * ```
 */
```

## setImageAnimation

```ts [ts]
/**
 * 设置图像动画
 * @param taskName 任务名称, 如果为空则不使用SyncTask
 * @param object 图像
 * @param aniID 动画编号
 * @param complete 回调
 * 
 * @example
 * ```ts
 * OpenAPI.AnimationUtils.setImageAnimation('taskName', object, 1, Callback.New(() => {
 *   console.log('动画播放完成')
 * }, this))
 * ```
 */
```

## setUIAnimation

```ts [ts]
/**
 * 设置界面动画
 * @param taskName 任务名称, 如果为空则不使用SyncTask
 * @param object 界面
 * @param aniID 动画编号
 * @param complete 回调
 * 
 * @example
 * ```ts
 * OpenAPI.AnimationUtils.setUIAnimation('taskName', object, 1, Callback.New(() => {
 *  console.log('动画播放完成')
 * }, this))
 * ```
 */
```

## setSceneObjectAnimation

```ts [ts]
/**
 * 设置场景对象动画
 * @param taskName 任务名称, 如果为空则不使用SyncTask
 * @param object 场景对象
 * @param aniID 动画编号
 * @param loop 是否循环播放
 * @param isHit 是否显示被击中的效果，动画编辑器支持动画层仅命中时显示，如果设置为true即表示该动画所有层均显示
 * @param complete 回调
 * 
 * @example
 * ```ts
 * OpenAPI.AnimationUtils.setSceneObjectAnimation('taskName', object, 1, false, false, Callback.New(() => {
 * console.log('动画播放完成')
 * }, this))
 * ```
 */
```
