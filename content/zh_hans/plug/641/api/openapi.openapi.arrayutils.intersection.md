<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [ArrayUtils](./openapi.openapi.arrayutils.md) &gt; [intersection](./openapi.openapi.arrayutils.intersection.md)

## OpenAPI.ArrayUtils.intersection() method

返回两个数组的交集。

该函数接受两个数组并返回一个新数组，其中包含同时存在于两个数组中的元素。 它有效地过滤掉第一个数组中在第二个数组中找不到的元素。

 T - 数组中元素的类型。

**Signature:**

```typescript
static intersection<T>(firstArr: readonly T[], secondArr: readonly T[]): T[];
```

## Parameters

<table><thead><tr><th>

Parameter


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

firstArr


</td><td>

readonly T\[\]


</td><td>

要比较的第一个数组。


</td></tr>
<tr><td>

secondArr


</td><td>

readonly T\[\]


</td><td>

要比较的第二个数组。


</td></tr>
</tbody></table>
**Returns:**

T\[\]

{<!-- -->T\[\]<!-- -->} 一个新数组，包含同时存在于两个数组中的元素。

## Example

const array1 = \[1, 2, 3, 4, 5\]; const array2 = \[3, 4, 5, 6, 7\]; const result = intersection(array1, array2); // result 将会是 \[3, 4, 5\]，因为这些元素同时存在于两个数组中。

