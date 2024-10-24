<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [ArrayUtils](./openapi.openapi.arrayutils.md) &gt; [unionBy](./openapi.openapi.arrayutils.unionby.md)

## OpenAPI.ArrayUtils.unionBy() method

使用提供的映射函数确定相等性，从所有给定数组中创建一个按顺序排列的唯一值数组。

 T - 数组中的元素类型。  U - 映射后的元素类型。

**Signature:**

```typescript
static unionBy<T, U>(arr1: readonly T[], arr2: readonly T[], mapper: (item: T) => U): T[];
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

mapper


</td><td>

(item: T) =&gt; U


</td><td>

映射数组元素到比较值的函数。


</td></tr>
</tbody></table>
**Returns:**

T\[\]

{<!-- -->T\[\]<!-- -->} 包含来自 `arr1` 和 `arr2` 的唯一元素并按照映射值确定顺序的新数组。

## Example 1

// 用于数字的自定义映射函数（取模比较） const moduloMapper = (x) =<!-- -->&gt; x % 3; unionBy(\[1, 2, 3\], \[4, 5, 6\], moduloMapper); // 返回 \[1, 2, 3\]

## Example 2

// 用于带有 'id' 属性的对象的自定义映射函数 const idMapper = (obj) =<!-- -->&gt; obj.id; unionBy(\[{ id: 1 }<!-- -->, { id: 2 }<!-- -->\], \[{ id: 2 }<!-- -->, { id: 3 }<!-- -->\], idMapper); // 返回 \[{ id: 1 }<!-- -->, { id: 2 }<!-- -->, { id: 3 }<!-- -->\]

