<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [MathUtils](./openapi.openapi.mathutils.md) &gt; [sum](./openapi.openapi.mathutils.sum.md)

## OpenAPI.MathUtils.sum() method

计算数组中数字的总和。

此函数接受一个数字数组，并返回数组中所有元素的总和。

**Signature:**

```typescript
static sum(nums: readonly number[]): number;
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

nums


</td><td>

readonly number\[\]


</td><td>

要求和的数字数组。


</td></tr>
</tbody></table>
**Returns:**

number

{<!-- -->number<!-- -->} 数组中所有数字的总和。

## Example

const numbers = \[1, 2, 3, 4, 5\]; const result = sum(numbers); // result 将为 15
