---
title: 数组操作工具 ArrayUtils
---

## 目录

|                           |                                                  |
| ------------------------- | ------------------------------------------------ |
| [head](#head)             | 返回数组的第一个元素。                           |
| [last](#last)             | 返回数组的最后一个元素。                         |
| [sample](#sample)         | 从数组中随机返回一个元素。                       |
| [sampleSize](#samplesize) | 返回指定 `size` 大小的数组样本元素。             |
| [shuffle](#shuffle)       | 使用 Fisher-Yates 算法随机打乱数组中的元素顺序。 |
| [uniq](#uniq)             | 创建一个去重后的数组版本。                       |

## head

```ts [ts]
/**
* 返回数组的第一个元素。
*
* 该函数接受一个数组并返回数组的第一个元素。
* 如果数组为空，则返回 `undefined`。
*
* @param {T[]} arr - 要获取第一个元素的数组。
* @returns {T | undefined} 数组的第一个元素，如果数组为空则返回 `undefined`。
*
* @example
* ```ts
* const arr = [1, 2, 3];
* const firstElement = OpenAPI.ArrayUtils.head(arr);
* // firstElement 将会是 1
*
* const emptyArr: number[] = [];
* const noElement = OpenAPI.ArrayUtils.head(emptyArr);
* // noElement 将会是 undefined
* ```
*/
```

## last

```ts [ts]
/**
* 返回数组的最后一个元素。
*
* 该函数接受一个数组，并返回数组的最后一个元素。
* 如果数组为空，则函数返回 `undefined`。
*
* 与某些实现不同，该函数通过直接访问数组的最后一个索引来进行性能优化。
*
* @param {T[]} arr - 要获取最后一个元素的数组。
* @returns {T | undefined} 数组的最后一个元素，如果数组为空则返回 `undefined`。
*
* @example
* ```ts
* const arr = [1, 2, 3];
* const lastElement = OpenAPI.ArrayUtils.last(arr);
* // lastElement 将为 3
*
* const emptyArr: number[] = [];
* const noElement = OpenAPI.ArrayUtils.last(emptyArr);
* // noElement 将为 undefined
* ```
*/
```

## sample

```ts [ts]
/**
* 从数组中随机返回一个元素。
*
* 此函数接受一个数组并返回数组中随机选择的单个元素。
*
* @template T - 数组中元素的类型。
* @param {T[]} arr - 要抽样的数组。
* @returns {T} 数组中随机选取的一个元素。
*
* @example
* ```ts
* const array = [1, 2, 3, 4, 5];
* const randomElement = OpenAPI.ArrayUtils.sample(array);
* // randomElement 将是数组中随机选择的一个元素。
* ```
*/
```

## sampleSize

```ts [ts]
/**
* 返回指定 `size` 大小的数组样本元素。
*
* 此函数接受一个数组和一个数字，并使用 Floyd's 算法返回一个包含抽样元素的数组。
*
* {@link https://www.nowherenearithaca.com/2013/05/robert-floyds-tiny-and-beautiful.html Floyd's 算法}
*
* @template T - 数组中元素的类型。
* @param {T[]} array - 要从中抽样的数组。
* @param {number} size - 抽样的大小。
* @returns {T[]} 应用了样本大小的新数组。
* @throws {Error} 如果 `size` 大于 `array` 的长度，则抛出错误。
*
* @example
* ```ts
* const result = OpenAPI.ArrayUtils.sampleSize([1, 2, 3], 2)
* // result 将是包含两个来自数组的元素的数组。
* // [1, 2] 或 [1, 3] 或 [2, 3]
* ```
*/
```

## shuffle

```ts [ts]
/**
* 使用 Fisher-Yates 算法随机打乱数组中的元素顺序。
*
* 此函数接受一个数组，并返回一个新数组，其中元素以随机顺序进行了洗牌。
*
* @template T - 数组中元素的类型。
* @param {T[]} arr - 要洗牌的数组。
* @returns {T[]} 元素顺序已随机洗牌的新数组。
*
* @example
* ```ts
* const array = [1, 2, 3, 4, 5];
* const shuffledArray = OpenAPI.ArrayUtils.shuffle(array);
* // shuffledArray 将是一个新数组，其中 array 的元素以随机顺序洗牌，例如 [3, 1, 4, 5, 2]
* ```
*/
```

## uniq

```ts [ts]
/**
* 创建一个去重后的数组版本。
*
* 此函数接受一个数组，并返回一个新数组，其中仅包含原始数组中的唯一值，
* 保留第一次出现的顺序。
*
* @template T - 数组中的元素类型。
* @param {T[]} arr - 要处理的数组。
* @returns {T[]} 仅包含原始数组中唯一值的新数组。
*
* @example
* ```ts
* const array = [1, 2, 2, 3, 4, 4, 5];
* const result = OpenAPI.ArrayUtils.uniq(array);
* // result 将为 [1, 2, 3, 4, 5]
* ```
*/
```
