<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [StringUtils](./openapi.openapi.stringutils.md)

## OpenAPI.StringUtils class

字符串操作工具

**Signature:**

```typescript
class StringUtils 
```

## Properties

<table><thead><tr><th>

Property


</th><th>

Modifiers


</th><th>

Type


</th><th>

Description


</th></tr></thead>
<tbody><tr><td>

[arabicToRoman](./openapi.openapi.stringutils.arabictoroman.md)


</td><td>

`static`


</td><td>

(num: number) =&gt; string


</td><td>

将阿拉伯数字转换为罗马数字的函数


</td></tr>
<tr><td>

[parseFunctionText](./openapi.openapi.stringutils.parsefunctiontext.md)


</td><td>

`static`


</td><td>

(text: string, regex?: RegExp\[\] \| null) =&gt; string


</td><td>

解析文本内函数组合占位符数据


</td></tr>
<tr><td>

[parseGameVariableText](./openapi.openapi.stringutils.parsegamevariabletext.md)


</td><td>

`static`


</td><td>

(text: string, gameData: any\[\], regex?: RegExp\[\] \| null) =&gt; string


</td><td>

解析文本内游戏变量占位符数据


</td></tr>
<tr><td>

[parseVariableText](./openapi.openapi.stringutils.parsevariabletext.md)


</td><td>

`static`


</td><td>

(text: string, getData?: (((s: any) =&gt; number) \| ((s: any) =&gt; string))\[\] \| null, regex?: RegExp\[\] \| null) =&gt; string


</td><td>

解析文本内变量占位符数据, 可自定义获取数据的方法以及正则表达式


</td></tr>
<tr><td>

[randomColor](./openapi.openapi.stringutils.randomcolor.md)


</td><td>

`static`

`readonly`


</td><td>

string


</td><td>

随机颜色


</td></tr>
<tr><td>

[randomString](./openapi.openapi.stringutils.randomstring.md)


</td><td>

`static`


</td><td>

(length: number, str?: string) =&gt; string


</td><td>

随机字符串


</td></tr>
<tr><td>

[snakeCase](./openapi.openapi.stringutils.snakecase.md)


</td><td>

`static`


</td><td>

(str: string) =&gt; string


</td><td>

将字符串转换为蛇形命名法（snake\_case）。

蛇形命名法是一种命名约定，其中每个单词都以小写字母书写，并用下划线（\_）字符分隔。


</td></tr>
</tbody></table>