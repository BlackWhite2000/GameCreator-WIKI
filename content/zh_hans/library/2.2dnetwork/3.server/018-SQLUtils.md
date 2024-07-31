---
title: SQLUtils 数据库操作工具
description: 封装了对MYSQL的增删查改
---

> 主要维护人员：[Karson.DS](https://www.gamecreator.com.cn/user/1)<br>
> 创建时间：2018-01-12

## 关联性

- `继承` 无
- `子类` 无

## 说明

封装了对MYSQL的增删查改

## Public 方法

|                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------------------------- |
| **[query](#query)**(tableName : string,  params : string,  condition : string): any[]<br>【静态】查询数据                       |
| **[insert](#insert)**(tableName : string,  sqlObj : any): boolean<br>【静态】插入单条数据                                       |
| **[update](#update)**(tableName : string,  sqlObj : any,  where : string): boolean<br>【静态】更新单条数据                      |
| **[delete_data](#delete_data)**(tableName : string,  condition : string): boolean<br>【静态】删除数据                           |
| **[safely_mysql_insert](#safely_mysql_insert)**(tableName : string,  data : string): boolean<br>【静态】【安全版】插入数据      |
| **[safely_mysql_delete](#safely_mysql_delete)**(tableName : string,  condition : string): boolean<br>【静态】【安全版】删除数据 |
| **[safely_mysql_update](#safely_mysql_update)**(tableName : string,  condition : string): boolean<br>【静态】【安全版】更新数据 |

## 详情

## query

```ts
query(tableName : string,  params : string,  condition : string): any[] :
```

【静态】查询数据

如查询playervariable表的varID和varValue

```ts
var res:{varID:number,varValue:number}[] = SQLUtils.query("playervariable", "varID,varValue", "where uid=5") as any[];
trace("查询到数据条目",res.length);
```

- #### 参数

  - tableName 表名
  - params 参数
  - condition 条件

数据对象：键对应表的参数的数据

- #### 返回

  - `any[]` 返回结果，如果连接数据库失败则返回null

## insert

```ts
insert(tableName : string,  sqlObj : any): boolean :
```

【静态】插入单条数据

- 如果数据库无法连接会一直请求到成功连接后再写入数据

```ts
var isSuccess = SQLUtils.insert("playervariable",{uid:3,varID:5,varValue:678});
trace("是否插入成功",isSuccess);
```

- #### 参数

  - `tableName` 表名称
  - `sqlObj` 数据对象：键对应表的参数的数据

- #### 返回

  - `boolean` 是否成功

## update

```ts
update(tableName : string,  sqlObj : any,  where : string): boolean :
```

【静态】更新单条数据

- 如果数据库无法连接会一直请求到成功连接后再写入数据

```ts
var isSuccess = SQLUtils.update("playervariable",{varValue:678},"where uid=3 and varID=5");
trace("是否更新成功",isSuccess);
```

- #### 参数

  - `tableName` 表名称
  - `sqlObj` 数据对象：键对应表的参数的数据
  - `where` 条件语句

- #### 返回

  - `boolean` 是否成功

## delete_data

```ts
delete_data(tableName : string,  condition : string): boolean :
```

【静态】删除数据

- 如果数据库无法连接会一直请求到成功连接后再写入数据

```ts
var isSuccess = SQLUtils.delete_data("playervariable","where uid=3 and varID=5");
trace("是否更新成功",isSuccess);
```

- #### 参数

  - `tableName` 表名称
  - `condition` 条件语句：如 "where id>5"

- #### 返回

  - `boolean` 是否成功

## safely_mysql_insert

```ts
safely_mysql_insert(tableName : string,  data : string): boolean :
```

【静态】【安全版】插入数据

- 如果数据库无法连接会一直请求到成功连接后再写入数据

- #### 参数

  - `tableName` 表名称 如 table
  - `data` 插入字符串 "(name,age) values('kds',18)"

- #### 返回

  - `boolean` 是否成功

## safely_mysql_delete

```ts
safely_mysql_delete(tableName : string,  condition : string): boolean :
```

【静态】【安全版】删除数据

- 如果数据库无法连接会一直请求到成功连接后再写入数据

- #### 参数

  - `tableName` 表名称 如 table
  - `condition` 插入字符串 "where id>5"

- #### 返回

  - `boolean` 是否成功

## safely_mysql_update

```ts
safely_mysql_update(tableName : string,  condition : string): boolean :
```

【静态】【安全版】更新数据

- 如果数据库无法连接会一直请求到成功连接后再写入数据

- #### 参数

  - `tableName` 表名称 如 table
  - `condition` 插入字符串 "set name='kds' where id=5"

- #### 返回

  - `boolean` 是否成功
