<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [ArrayUtils](./openapi.openapi.arrayutils.md) &gt; [head](./openapi.openapi.arrayutils.head.md)

## OpenAPI.ArrayUtils.head() method

返回数组的第一个元素。

该函数接受一个数组并返回数组的第一个元素。 如果数组为空，则返回 `undefined`<!-- -->。

**Signature:**

```typescript
static head<T>(arr: readonly [T, ...T[]]): T;
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

arr


</td><td>

readonly \[T, ...T\[\]\]


</td><td>

要获取第一个元素的数组。


</td></tr>
</tbody></table>
**Returns:**

T

{<!-- -->T \| undefined<!-- -->} 数组的第一个元素，如果数组为空则返回 `undefined`<!-- -->。

## Example

const arr = \[1, 2, 3\]; const firstElement = head(arr); // firstElement 将会是 1

const emptyArr: number\[\] = \[\]; const noElement = head(emptyArr); // noElement 将会是 undefined
