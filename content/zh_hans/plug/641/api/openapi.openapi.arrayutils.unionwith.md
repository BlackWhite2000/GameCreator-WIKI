<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [ArrayUtils](./openapi.openapi.arrayutils.md) &gt; [unionWith](./openapi.openapi.arrayutils.unionwith.md)

## OpenAPI.ArrayUtils.unionWith() method

基于自定义相等性函数，从两个给定数组中创建一个唯一值数组。

此函数接受两个数组和一个自定义相等性函数，合并数组，并返回一个新数组， 该数组仅包含根据自定义相等性函数确定的唯一值。

 T - 数组中的元素类型。

**Signature:**

```typescript
static unionWith<T>(arr1: readonly T[], arr2: readonly T[], areItemsEqual: (item1: T, item2: T) => boolean): T[];
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

第一个数组，用于合并和过滤唯一值。


</td></tr>
<tr><td>

arr2


</td><td>

readonly T\[\]


</td><td>

第二个数组，用于合并和过滤唯一值。


</td></tr>
<tr><td>

areItemsEqual


</td><td>

(item1: T, item2: T) =&gt; boolean


</td><td>

用于确定两个元素是否相等的自定义函数。 它接受两个参数，如果元素被视为相等，则返回 `true`<!-- -->，否则返回 `false`<!-- -->。


</td></tr>
</tbody></table>
**Returns:**

T\[\]

{<!-- -->T\[\]<!-- -->} 基于自定义相等性函数的唯一值数组。

## Example

const array1 = \[{ id: 1 }<!-- -->, { id: 2 }<!-- -->\]; const array2 = \[{ id: 2 }<!-- -->, { id: 3 }<!-- -->\]; const areItemsEqual = (a, b) =<!-- -->&gt; a.id === b.id; const result = unionWith(array1, array2, areItemsEqual); // result 将为 \[{ id: 1 }<!-- -->, { id: 2 }<!-- -->, { id: 3 }<!-- -->\]，因为 { id: 2 } 在两个数组中被认为是相等的
