<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [openapi](./openapi.md) &gt; [OpenAPI](./openapi.openapi.md) &gt; [Point](./openapi.openapi.point.md) &gt; [toCoordinateObjects](./openapi.openapi.point.tocoordinateobjects.md)

## OpenAPI.Point.toCoordinateObjects() method

数值坐标数组转对象坐标数组

**Signature:**

```typescript
static toCoordinateObjects(arr: number[]): {
            x: number;
            y: number;
        }[];
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

arr


</td><td>

number\[\]


</td><td>

数值坐标数组


</td></tr>
</tbody></table>
**Returns:**

{ x: number; y: number; }\[\]

## Example


```ts
const arr = [1, 2, 3, 4, 5, 6]
const result = OpenAPI.Point.toCoordinateObjects(arr) // 返回对象坐标数组
```

