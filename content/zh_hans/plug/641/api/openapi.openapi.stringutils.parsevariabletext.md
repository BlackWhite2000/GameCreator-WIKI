<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [StringUtils](./openapi.openapi.stringutils.md) &gt; [parseVariableText](./openapi.openapi.stringutils.parsevariabletext.md)

## OpenAPI.StringUtils.parseVariableText property

解析文本内变量占位符数据, 可自定义获取数据的方法以及正则表达式

**Signature:**

```typescript
static parseVariableText: (text: string, getData?: (((s: any) => number) | ((s: any) => string))[] | null, regex?: RegExp[] | null) => string;
```

## Example

const text = '你好, 我是\[@<!-- -->s1\], 今年\[@<!-- -->v1\]岁' return parseVariableText(text) // 返回 '你好, 我是黑白, 今年18岁'
