## webpack 3.x 成绩
- 运行速度

模式/测试（ms）  | test - 1 | test - 2 | test - 3 | test - 4 | test - 平均
---|---|---|---|---|---
dev | 7956 | 7062 | 6749 | 7175 | -
build:dev | 6164 | 5408 | 4322 | 4357 | -
build | 12935 | 13202 | 13202 | 12086 | -

- 文件大小

模式/asset（kb）  | common | main | 0 | initial.css 
---|---|---|---|---
build:dev | 915 | 195 | 92 | 43.8
build | 415 | 83.6 | 81.9 | 28.3 

## webpack 4.x 成绩
- 运行速度

模式/测试（ms） | test - 1 | test - 2 | test - 3 | test - 4 | test - 平均
---|---|---|---|---|---
dev | 6851 | 5299 | 5569 | 5452 | -
build:dev | 4743 | 3239 | 3285 | 3148 | -
build | 14324 | 4492 | 4166 | 4166 | 分析（第一次形成缓存,效率）

- 文件大小

模式/asset（kb） | common | main | 0 | initial.css 
---|---|---|---|---
build:dev | 353 | 243 | 93.9 | 36.6
build | 339 | 113 | 82.1 | 23.1 


## 总结

- 不论是`dev-server`模式，`build:dev`模式（打包不压缩），`build`(打包压缩)，`webpack4.x`都要优于webpack3.x`, 体积也会更小；

- 另外`build`模式第一次之后，第二次之后执行的效率很高
