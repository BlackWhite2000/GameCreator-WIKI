<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [ArrayUtils](./openapi.openapi.arrayutils.md) &gt; [zipObject](./openapi.openapi.arrayutils.zipobject.md)

## OpenAPI.ArrayUtils.zipObject() method

将两个数组（一个包含属性名，另一个包含对应的值）组合成一个对象。

此函数接受两个数组：一个包含属性名，另一个包含对应的值。 它返回一个新对象，其中第一个数组中的属性名作为键，第二个数组中对应的元素作为值。 如果 `keys` 数组的长度大于 `values` 数组的长度，剩余的键将会使用 `undefined` 作为它们的值。

 P - 数组元素的类型。  V - 数组元素的类型。

**Signature:**

```typescript
static zipObject<P extends string | number | symbol, V>(keys: P[], values: V[]): {
            [K in P]: V;
        };
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

keys


</td><td>

P\[\]


</td><td>

属性名数组。


</td></tr>
<tr><td>

values


</td><td>

V\[\]


</td><td>

与属性名对应的值数组。


</td></tr>
</tbody></table>
**Returns:**

{ \[K in P\]: V; }

{<!-- -->{ \[K in P\]: V }<!-- -->} 组合后的对象，包含给定的属性名和对应的值。

## Example

const keys = \['a', 'b', 'c'\]; const values = \[1, 2, 3\]; const result = zipObject(keys, values); // result 将会是 { a: 1, b: 2, c: 3 }

const keys2 = \['a', 'b', 'c'\]; const values2 = \[1, 2\]; const result2 = zipObject(keys2, values2); // result2 将会是 { a: 1, b: 2, c: undefined }

const keys2 = \['a', 'b'\]; const values2 = \[1, 2, 3\]; const result2 = zipObject(keys2, values2); // result2 将会是 { a: 1, b: 2 }

