---
title: 常量操作工具 ConstantsUtils
---

## 目录

|                                             |                      |
| ------------------------------------------- | -------------------- |
| [CASE_SPLIT_PATTERN](#case_split_pattern)   | 蛇形命名法正则表达式 |
| [RANDOM_STRING_RANGE](#random_string_range) | 随机字符串范围       |

## CASE_SPLIT_PATTERN

```ts [ts]
OpenAPI.ConstantsUtils.CASE_SPLIT_PATTERN // /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g
```

## RANDOM_STRING_RANGE

```ts [ts]
OpenAPI.ConstantsUtils.RANDOM_STRING_RANGE // 0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ
```
