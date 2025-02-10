---
title: 数学操作工具 MathUtils
---

## 目录

|                         |                                                                      |
| ----------------------- | -------------------------------------------------------------------- |
| [clamp](#clamp)         | 将一个数字限制在包括的下限和上限范围内。                             |
| [inRange](#inrange)     | 检查值是否在指定范围内。                                             |
| [mean](#mean)           | 计算数字数组的平均值。                                               |
| [meanBy](#meanby)       | 使用 `getValue` 函数对数组中的每个元素应用后，计算数字数组的平均值。 |
| [random](#random)       | 在给定范围内生成一个随机数。                                         |
| [randomInt](#randomint) | 在最小值（包含）和最大值（不包含）之间生成一个随机整数。             |
| [range](#range)         | 返回从 `start` 到 `end` 的数字数组，步长为 `step`。                  |
| [round](#round)         | 将一个数字四舍五入到指定的精度。                                     |
| [sum](#sum)             | 计算数组中数字的总和。                                               |

## clamp

```ts [ts]
/**
* 将一个数字限制在包括的下限和上限范围内。
*
* 此函数接受一个数字和两个边界，并返回限制在指定边界内的数字。
* 如果只提供一个边界，则返回值与该边界的最小值相比较。
*
* @param {number} value - 要限制的数字。
* @param {number} minimum - 要限制的最小边界。
* @param {number} maximum - 要限制的最大边界。
* @returns {number} 在指定边界内限制后的数字。
*
* @example
* ```ts
* const result1 = OpenAPI.MathUtils.clamp(10, 5); // result1 将会是 5，因为 10 被限制在边界 5 上
* const result2 = OpenAPI.MathUtils.clamp(10, 5, 15); // result2 将会是 10，因为它在边界 5 和 15 内
* const result3 = OpenAPI.MathUtils.clamp(2, 5, 15); // result3 将会是 5，因为 2 被限制在边界 5 下
* const result4 = OpenAPI.MathUtils.clamp(20, 5, 15); // result4 将会是 15，因为 20 被限制在边界 15 上
* ```
*/
```

## inRange

```ts [ts]
/**
* 检查值是否在指定范围内。
*
* @param {number} value 要检查的值。
* @param {number} minimum 范围的下限（包含）。
* @param {number} maximum 范围的上限（不包含）。
* @returns {boolean} 如果值在指定范围内则返回 `true`，否则返回 `false`。
* @throws {Error} 如果 `minimum` 大于或等于 `maximum`，抛出错误。
*
* @example
* ```ts
* const result1 = OpenAPI.MathUtils.inRange(3, 5); // result1 将返回 true。
* const result2 = OpenAPI.MathUtils.inRange(1, 2, 5); // result2 将返回 false。
* const result3 = OpenAPI.MathUtils.inRange(1, 5, 2); // 如果最小值大于或等于最大值，将抛出错误。
* ```
*/
```

## mean

```ts [ts]
/**
* 计算数字数组的平均值。
*
* 如果数组为空，该函数返回 `NaN`。
*
* @param {number[]} nums - 要计算平均值的数字数组。
* @returns {number} 数组中所有数字的平均值。
*
* @example
* ```ts
* const numbers = [1, 2, 3, 4, 5];
* const result = OpenAPI.MathUtils.mean(numbers);
* // result 将为 3
* ```
*/
```

## meanBy

```ts [ts]
/**
* 使用 `getValue` 函数对数组中的每个元素应用后，计算数字数组的平均值。
*
* 如果数组为空，该函数返回 `NaN`。
*
* @template T - 数组中元素的类型。
* @param {T[]} items 要计算平均值的数组。
* @param {(element: T) => number} getValue 从每个元素中选择数字值的函数。
* @returns {number} 根据 `getValue` 函数确定的所有数字的平均值。
*
* @example
* ```ts
* OpenAPI.MathUtils.meanBy([{ a: 1 }, { a: 2 }, { a: 3 }], x => x.a); // 返回: 2
* OpenAPI.MathUtils.meanBy([], x => x.a); // 返回: NaN
* ```
*/
```

## random

```ts [ts]
/**
* 在给定范围内生成一个随机数。
*
* 如果只提供一个参数，则返回介于 `0` 和给定数字之间的随机数。
*
* @param {number} minimum - 下限值（包含）。
* @param {number} maximum - 上限值（不包含）。
* @returns {number} 在最小值（包含）和最大值（不包含）之间的随机数。返回的数可以是整数或小数。
* @throws {Error} 如果 `maximum` 不大于 `minimum`，则抛出错误。
*
* @example
* ```ts
* const result1 = OpenAPI.MathUtils.random(0, 5); // 返回介于 0 和 5 之间的随机数。
* const result2 = OpenAPI.MathUtils.random(5, 0); // 如果最小值大于最大值，则抛出错误。
* const result3 = OpenAPI.MathUtils.random(5, 5); // 如果最小值等于最大值，则抛出错误。
* ```
*/
```

## randomInt

```ts [ts]
 /**
* 在最小值（包含）和最大值（不包含）之间生成一个随机整数。
*
* 如果只提供一个参数，则返回介于 `0` 和给定数字之间的随机数。
*
* @param {number} minimum - 下限值（包含）。
* @param {number} maximum - 上限值（不包含）。
* @returns {number} 在最小值（包含）和最大值（不包含）之间的随机整数。
* @throws {Error} 如果 `maximum` 不大于 `minimum`，则抛出错误。
*
* @example
* ```ts
* const result = OpenAPI.MathUtils.randomInt(0, 5); // result 将是介于 0（包含）和 5（不包含）之间的随机整数
* const result2 = OpenAPI.MathUtils.randomInt(5, 0); // 这将抛出错误
* ```
*/
```

## range

```ts [ts]
 /**
* 返回从 `start` 到 `end` 的数字数组，步长为 `step`。
*
* 如果未提供 `step`，默认为 `1`。
*
* @param {number} start - 范围的起始数字（包含）。
* @param {number} [end] - 范围的结束数字（不包含）。
* @param {number} [step] - 范围的步长值。默认为 `1`。
* @returns {number[]} 包含从 `start` 到 `end` 的数字数组，步长为 `step`。
*
* @example
* ```ts
* // 返回 [0, 1, 2, 3]
* OpenAPI.MathUtils.range(4);
*
* // 返回 [0, 5, 10, 15]
* OpenAPI.MathUtils.range(0, 20, 5);
*
* // 返回 [0, -1, -2, -3]
* OpenAPI.MathUtils.range(0, -4, -1);
*
* // 抛出错误: 步长值必须是非零整数。
* OpenAPI.MathUtils.range(1, 4, 0);
* ```
*/
```

## round

```ts [ts]
  /**
* 将一个数字四舍五入到指定的精度。
*
* 此函数接受一个数字和一个可选的精度值，并返回四舍五入到指定小数位数的数字。
*
* @param {number} value - 要四舍五入的数字。
* @param {number} [precision=0] - 要四舍五入的小数位数。默认为 `0`。
* @returns {number} 四舍五入后的数字。
* @throws {Error} 如果 `precision` 不是整数，则抛出错误。
*
* @example
* ```ts
* const result1 = OpenAPI.MathUtils.round(1.2345); // result1 将是 1
* const result2 = OpenAPI.MathUtils.round(1.2345, 2); // result2 将是 1.23
* const result3 = OpenAPI.MathUtils.round(1.2345, 3); // result3 将是 1.235
* const result4 = OpenAPI.MathUtils.round(1.2345, 3.1); // 这将抛出一个错误
* ```
*/
```

## sum

```ts [ts]
 /**
* 计算数组中数字的总和。
*
* 此函数接受一个数字数组，并返回数组中所有元素的总和。
*
* @param {number[]} nums - 要求和的数字数组。
* @returns {number} 数组中所有数字的总和。
*
* @example
* ```ts
* const numbers = [1, 2, 3, 4, 5];
* const result = OpenAPI.MathUtils.sum(numbers);
* // result 将为 15
* ```
*/
```
