<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [ArrayUtils](./openapi.openapi.arrayutils.md) &gt; [orderBy](./openapi.openapi.arrayutils.orderby.md)

## OpenAPI.ArrayUtils.orderBy() method

根据多个属性和对应的排序方向对对象数组进行排序。

此函数接受一个对象数组、一个要排序的键（属性）数组以及一个排序方向数组。 它返回排序后的数组，根据每个键及其对应的方向（'asc' 表示升序，'desc' 表示降序）进行排序。 如果某个键的值相等，则按照下一个键继续确定顺序。

 T - 数组中元素的类型。

**Signature:**

```typescript
static orderBy<T>(collection: T[], keys: Array<keyof T>, orders: Order[]): T[];
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

collection


</td><td>

T\[\]


</td><td>

要排序的对象数组。


</td></tr>
<tr><td>

keys


</td><td>

Array&lt;keyof T&gt;


</td><td>

要排序的键（属性）数组。


</td></tr>
<tr><td>

orders


</td><td>

Order\[\]


</td><td>

排序方向数组（'asc' 表示升序，'desc' 表示降序）。


</td></tr>
</tbody></table>
**Returns:**

T\[\]

{<!-- -->T\[\]<!-- -->} - 排序后的数组。

## Example

// 按 'user' 升序和 'age' 降序对对象数组进行排序。 const users = \[ { user: 'fred', age: 48 }<!-- -->, { user: 'barney', age: 34 }<!-- -->, { user: 'fred', age: 40 }<!-- -->, { user: 'barney', age: 36 }<!-- -->, \]; const result = orderBy(users, \['user', 'age'\], \['asc', 'desc'\]); // result 将会是: // \[ // { user: 'barney', age: 36 }<!-- -->, // { user: 'barney', age: 34 }<!-- -->, // { user: 'fred', age: 48 }<!-- -->, // { user: 'fred', age: 40 }<!-- -->, // \]

