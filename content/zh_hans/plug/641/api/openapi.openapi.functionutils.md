<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [FunctionUtils](./openapi.openapi.functionutils.md)

## OpenAPI.FunctionUtils class

函数操作工具

**Signature:**

```typescript
class FunctionUtils 
```

## Methods

<table><thead><tr><th>

Method


</th><th>

Modifiers


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[debounce(func, debounceMs, { signal })](./openapi.openapi.functionutils.debounce.md)


</td><td>

`static`


</td><td>

创建一个防抖函数，延迟调用提供的函数，直到上次调用后已经过去了 `debounceMs` 毫秒。 防抖函数还具有一个 `cancel` 方法，用于取消任何待执行的函数调用。

 F - 函数的类型。


</td></tr>
<tr><td>

[noop()](./openapi.openapi.functionutils.noop.md)


</td><td>

`static`


</td><td>

一个什么也不做的空操作函数。 可以用作占位符或默认函数。


</td></tr>
<tr><td>

[once(func)](./openapi.openapi.functionutils.once.md)


</td><td>

`static`


</td><td>

创建一个仅允许调用提供的函数 `func` 一次的函数。 对该函数的重复调用将返回第一次调用的返回值。

 F - 函数的类型。


</td></tr>
<tr><td>

[throttle(func, throttleMs)](./openapi.openapi.functionutils.throttle.md)


</td><td>

`static`


</td><td>

创建一个节流函数，每隔 `throttleMs` 毫秒最多调用一次提供的函数。 在等待时间内对节流函数的连续调用将不会触发原始函数的执行。

 F - 函数的类型。


</td></tr>
</tbody></table>