## TS版设计模式

#### 初衷
* 学习TS
* 学习设计模式

#### 素材

《大话设计模式》

#### 示例

大部分参照《大话设计模式》，部分顺序和内容根据自己的理解做了调整

PS：书中代码是由java写，用TS写难免有差异


### Debug TS

第一步：配置.vscode/launch.json
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "skipFiles": [
                "<node_internals>/**"
            ],
            "program": "${file}",
            "outFiles": [
                "${workspaceFolder}/dist/**/*.js"
            ]
        }
    ]
}
```

第二步：运行```npm run dev```

第三步：打开要debug的ts文件，快捷键`F5`，或`fn` + `F5`