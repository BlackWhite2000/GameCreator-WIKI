<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [ArrayUtils](./openapi.openapi.arrayutils.md) &gt; [xorWith](./openapi.openapi.arrayutils.xorwith.md)

## OpenAPI.ArrayUtils.xorWith() method

使用自定义相等函数计算两个数组之间的对称差异。 对称差异是两个数组中存在的元素集合，即存在于其中一个数组中，但不在它们的交集中， 根据自定义相等函数确定。

 T - 输入数组中元素的类型。

**Signature:**

```typescript
static xorWith<T>(arr1: readonly T[], arr2: readonly T[], areElementsEqual: (item1: T, item2: T) => boolean): T[];
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

arr1


</td><td>

readonly T\[\]


</td><td>

第一个数组。


</td></tr>
<tr><td>

arr2


</td><td>

readonly T\[\]


</td><td>

第二个数组。


</td></tr>
<tr><td>

areElementsEqual


</td><td>

(item1: T, item2: T) =&gt; boolean


</td><td>

用于比较元素的自定义相等函数。


</td></tr>
</tbody></table>
**Returns:**

T\[\]

{<!-- -->T\[\]<!-- -->} 包含存在于 `arr1` 或 `arr2` 中但不在两者交集中的元素的数组， 基于自定义相等函数。

## Example

// 对象数组的自定义相等函数，比较 'id' 属性 const areObjectsEqual = (a, b) =<!-- -->&gt; a.id === b.id; xorWith(\[{ id: 1 }<!-- -->, { id: 2 }<!-- -->\], \[{ id: 2 }<!-- -->, { id: 3 }<!-- -->\], areObjectsEqual); // 返回 \[{ id: 1 }<!-- -->, { id: 3 }<!-- -->\]

