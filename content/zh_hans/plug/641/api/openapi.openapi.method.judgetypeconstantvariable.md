<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [Method](./openapi.openapi.method.md) &gt; [JudgeTypeConstantVariable](./openapi.openapi.method.judgetypeconstantvariable.md)

## OpenAPI.Method.JudgeTypeConstantVariable() method

判断常量变量类型

**Signature:**

```typescript
static JudgeTypeConstantVariable(constant: any, variable: number, index_type: number, variable_type?: number): any;
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

constant


</td><td>

any


</td><td>

常量


</td></tr>
<tr><td>

variable


</td><td>

number


</td><td>

变量


</td></tr>
<tr><td>

index\_type


</td><td>

number


</td><td>

选项类型 0 = 常量 1 = 变量


</td></tr>
<tr><td>

variable\_type


</td><td>

number


</td><td>

_(Optional)_ 【默认数值】变量类型 0 = 数值, 1 = 字符串, 2 = 开关(返回 0 = 关闭, 1 = 开启)


</td></tr>
</tbody></table>
**Returns:**

any

## Example


```ts
const variable_value = OpenAPI.Method.JudgeTypeConstantVariable(1, 1, 0) // 返回 1
```

