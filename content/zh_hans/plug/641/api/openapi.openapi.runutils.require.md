<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [RunUtils](./openapi.openapi.runutils.md) &gt; [require](./openapi.openapi.runutils.require.md)

## OpenAPI.RunUtils.require() method

获取默认引入的库

-- 只支持PC版本

-- WEB版本基于LocalStorage

**Signature:**

```typescript
static require(name: string): any | undefined;
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

name


</td><td>

string


</td><td>

库名


</td></tr>
</tbody></table>
**Returns:**

any \| undefined

## Example


```ts
const fs = OpenAPI.RunUtils.require('fs') // 返回引入的库
```

