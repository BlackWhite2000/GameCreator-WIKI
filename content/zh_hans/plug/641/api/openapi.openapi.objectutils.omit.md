<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [ObjectUtils](./openapi.openapi.objectutils.md) &gt; [omit](./openapi.openapi.objectutils.omit.md)

## OpenAPI.ObjectUtils.omit() method

创建一个省略指定键的新对象。

此函数接受一个对象和一个键数组，并返回一个新对象，该对象排除了与指定键对应的属性。

 T - 对象的类型。  K - 对象中的键的类型。

**Signature:**

```typescript
static omit<T extends Record<string, any>, K extends keyof T>(obj: T, keys: K[]): Omit<T, K>;
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

obj


</td><td>

T


</td><td>

要从中省略键的对象。


</td></tr>
<tr><td>

keys


</td><td>

K\[\]


</td><td>

要从对象中省略的键数组。


</td></tr>
</tbody></table>
**Returns:**

Omit&lt;T, K&gt;

{<!-- -->Omit<!-- -->&lt;<!-- -->T, K<!-- -->&gt;<!-- -->} - 省略了指定键的新对象。

## Example

const obj = { a: 1, b: 2, c: 3 }<!-- -->; const result = omit(obj, \['b', 'c'\]); // result 将为 { a: 1 }

