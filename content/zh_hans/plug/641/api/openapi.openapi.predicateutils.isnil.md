<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [PredicateUtils](./openapi.openapi.predicateutils.md) &gt; [isNil](./openapi.openapi.predicateutils.isnil.md)

## OpenAPI.PredicateUtils.isNil() method

检查给定值是否为 null 或 undefined。

此函数测试提供的值是否为 `null` 或 `undefined`<!-- -->。 如果值为 `null` 或 `undefined`<!-- -->，则返回 `true`<!-- -->，否则返回 `false`<!-- -->。

在 TypeScript 中，此函数还可以作为类型谓词，将参数的类型缩小为 `null` 或 `undefined`<!-- -->。

**Signature:**

```typescript
static isNil(x: unknown): x is null | undefined;
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

x


</td><td>

unknown


</td><td>

要测试是否为 null 或 undefined 的值。


</td></tr>
</tbody></table>
**Returns:**

x is null \| undefined

{<!-- -->boolean<!-- -->} - 如果值为 null 或 undefined，则返回 `true`<!-- -->，否则返回 `false`<!-- -->。

## Example

const value1 = null; const value2 = undefined; const value3 = 42; const result1 = isNil(value1); // true const result2 = isNil(value2); // true const result3 = isNil(value3); // false
