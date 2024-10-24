<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [ArrayUtils](./openapi.openapi.arrayutils.md) &gt; [intersectionBy](./openapi.openapi.arrayutils.intersectionby.md)

## OpenAPI.ArrayUtils.intersectionBy() method

根据映射函数返回两个数组的交集。

该函数接受两个数组和一个映射函数。它返回一个新数组，其中包含来自第一个数组的元素， 当使用提供的映射函数映射时，在第二个数组中具有匹配的映射元素。它有效地过滤掉第一个数组中 没有对应映射值的元素。

 T - 数组中元素的类型。  U - 映射后的元素类型。

**Signature:**

```typescript
static intersectionBy<T, U>(firstArr: readonly T[], secondArr: readonly T[], mapper: (item: T) => U): T[];
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
<tr><td>

mapper


</td><td>

(item: T) =&gt; U


</td><td>

用于映射两个数组元素进行比较的函数。


</td></tr>
</tbody></table>
**Returns:**

T\[\]

{<!-- -->T\[\]<!-- -->} 一个新数组，包含来自第一个数组的元素，在第二个数组中具有对应映射值的元素。

## Example

const array1 = \[{ id: 1 }<!-- -->, { id: 2 }<!-- -->, { id: 3 }<!-- -->\]; const array2 = \[{ id: 2 }<!-- -->, { id: 4 }<!-- -->\]; const mapper = item =<!-- -->&gt; item.id; const result = intersectionBy(array1, array2, mapper); // result 将会是 \[{ id: 2 }<!-- -->\]，因为只有这个元素在两个数组中具有匹配的 id。

