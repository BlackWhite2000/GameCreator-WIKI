<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [PathUtils](./openapi.openapi.pathutils.md)

## OpenAPI.PathUtils class

路径工具

**Signature:**

```typescript
class PathUtils 
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

[gamePath](./openapi.openapi.pathutils.gamepath.md)


</td><td>

`static`

`readonly`


</td><td>

string \| undefined


</td><td>

获取当前游戏根路径

PC版本与WEB版本返回的路径不同，通常WEB版本将携带路由以及标识符，PC版本则返回本地路径


</td></tr>
<tr><td>

[gamePathByEnv](./openapi.openapi.pathutils.gamepathbyenv.md)


</td><td>

`static`

`readonly`


</td><td>

string \| undefined


</td><td>

根据当前游戏环境获取当前游戏根路径

如果是PC版本则返回相对路径，实际是返回空。WEB版本则返回绝对路径


</td></tr>
</tbody></table>
