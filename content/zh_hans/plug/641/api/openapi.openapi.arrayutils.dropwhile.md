<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [ArrayUtils](./openapi.openapi.arrayutils.md) &gt; [dropWhile](./openapi.openapi.arrayutils.dropwhile.md)

## OpenAPI.ArrayUtils.dropWhile() method

从数组开头移除元素直到谓词返回false。

此函数遍历数组并从开始位置删除元素，直到提供的谓词函数返回false。 然后返回一个包含剩余元素的新数组。

 T - 数组中元素的类型。

**Signature:**

```typescript
static dropWhile<T>(arr: readonly T[], canContinueDropping: (item: T) => boolean): T[];
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

要删除元素的数组。


</td></tr>
<tr><td>

canContinueDropping


</td><td>

(item: T) =&gt; boolean


</td><td>

一个决定是否继续删除元素的谓词函数。 该函数接收每个元素并在返回true时继续删除元素。


</td></tr>
</tbody></table>
**Returns:**

T\[\]

{<!-- -->T\[\]<!-- -->} 一个在谓词返回false后剩余元素的新数组。

## Example

const array = \[1, 2, 3, 4, 5\]; const result = dropWhile(array, x =<!-- -->&gt; x &lt; 3); // 结果将是 \[3, 4, 5\] 因为小于3的元素被删除。
