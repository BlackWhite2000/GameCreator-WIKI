## 修改包名

修改package的name为对应的api

## 克隆ts

路径也改为对应需要的

node ../../scripts/merge-files.mjs C:/myally/GameCreator-OpenAPI-plug/src  C:/myally/GameCreator-WIKI/extractor/src/index.ts

## 生成api

npx api-extractor run

## 生成md

npx api-documenter markdown -i temp -o temp/api

## 复制_dir.yml

复制_dir.yml
