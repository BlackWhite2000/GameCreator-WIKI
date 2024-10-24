<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [ArrayUtils](./openapi.openapi.arrayutils.md) &gt; [uniqBy](./openapi.openapi.arrayutils.uniqby.md)

## OpenAPI.ArrayUtils.uniqBy() method

根据映射函数返回的值，返回一个仅包含原始数组中唯一元素的新数组。

 T - 数组中的元素类型。  U - 映射后的元素类型。

**Signature:**

```typescript
static uniqBy<T, U>(arr: readonly T[], mapper: (item: T) => U): T[];
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

readonly T\[\]


</td><td>

要处理的数组。


</td></tr>
<tr><td>

mapper


</td><td>

(item: T) =&gt; U


</td><td>

用于转换数组元素的函数。


</td></tr>
</tbody></table>
**Returns:**

T\[\]

{<!-- -->T\[\]<!-- -->} 返回一个新数组，仅包含原始数组中根据映射函数返回值唯一的元素。

## Example


```ts
uniqBy([1.2, 1.5, 2.1, 3.2, 5.7, 5.3, 7.19], Math.floor);
// [1.2, 2.1, 3.3, 5.7, 7.19]
```

