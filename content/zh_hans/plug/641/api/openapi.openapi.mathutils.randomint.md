<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [MathUtils](./openapi.openapi.mathutils.md) &gt; [randomInt](./openapi.openapi.mathutils.randomint.md)

## OpenAPI.MathUtils.randomInt() method

在最小值（包含）和最大值（不包含）之间生成一个随机整数。

如果只提供一个参数，则返回介于 `0` 和给定数字之间的随机数。

**Signature:**

```typescript
static randomInt(maximum: number): number;
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

maximum


</td><td>

number


</td><td>

上限值（不包含）。


</td></tr>
</tbody></table>
**Returns:**

number

{<!-- -->number<!-- -->} 在最小值（包含）和最大值（不包含）之间的随机整数。

## Exceptions

{<!-- -->Error<!-- -->} 如果 `maximum` 不大于 `minimum`<!-- -->，则抛出错误。

## Example

const result = randomInt(0, 5); // result 将是介于 0（包含）和 5（不包含）之间的随机整数 const result2 = randomInt(5, 0); // 这将抛出错误
