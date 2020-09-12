## webpack概念

webpack可以看做是**模块打包机**：它做的事情是，分析你的项目结构，找到JavaScript模块以及其它的一些浏览器不能直接运行的拓展语言（Scss，TypeScript等），并将其转换和打包为合适的格式供浏览器使用。

## webpack作用

代码转换、文件优化、代码分割、模块合并、自动刷新、代码校验、自动发布



## Day1

初始化

```shell
npm init or yarn init // 初始化
```

安装 webpack webpack-cli

```shell
npm i webpack webpack-cli -D // 本项目安装webpack webpack-cli
```

执行打包命令

```shell
npx webpack // 会去node_modules/.bin找到webpack.cmd
npx webpack --config webpack.config.my.js // 可指定打包配置文件 默认webpack.config.js
```

```
@ECHO off
SETLOCAL
CALL :find_dp0

SET _maybeQuote="
IF EXIST "%dp0%\node.exe" (
  SET "_prog=%dp0%\node.exe" // 如果本文件夹有node.exe
) ELSE (
// 否则 去上一级webpack\bin\webpack.js
  SET _maybeQuote=
  SET "_prog=node"
  SET PATHEXT=%PATHEXT:;.JS;=;%
)

%_maybeQuote%%_prog%%_maybeQuote%  "%dp0%\..\_webpack@4.43.0@webpack\bin\webpack.js" %*
ENDLOCAL
EXIT /b %errorlevel%
:find_dp0
SET dp0=%~dp0
EXIT /b
```

```
在webpack.js中 存在一下语句 必须安装webpack-cli
let notify =
		"One CLI for webpack must be installed. These are recommended choices, delivered as separate packages:";
```

### webpack 0配置

- 打包工具 -> 输出后的结果 （js模块）
- 打包（支持我们的js的模块化）

### 手动配置webpack

- 默认配置文件的名称 webpack.config.js

    ```js
    const path = require('path')
    module.exports ={
      mode:'development',// 模式 2种模式 production development 默认production 进行代码压缩
      entry: './src/index.js', // 入口
      output: { // 输出配置
        filename:'main,js', //打包后的文件名 
        path:path.resolve(__dirname,'dist') // 路径必须是绝对路径 __dirname表示 当前路径
      }
    }
    ```


- 可在package.json中scripts中添加脚本命令

    ```shell
    "build": "webpack --config webpack.config.js" // 添加命令 会在node_modules中去找webpack
    // 可直接执行npm run build
    ```

- 添加webpack-dev-server插件

    ```shell
    npm i webpack-dev-server -D
    ```

    - 使用插件

        - 在webpack配置文件中添加对应配置（可选）

            ```javascript
            devServer: { // 开发服务器配置 在开发过程中 本地起的一个服务
                port:3000, // 开发端口号
                progress:true, // 内存打包 进度条
                contentBase: './dist', // 文件路径
                open: true // 自动打开浏览器
              }
            ```

            

        - 通过npx命令

            ```shell
            npx webpack-dev-server
            ```

        - 通过npm run dev

            ```shell
            'dev':'webpack-dev-server' // 需要在package.json的scripts中添加一行脚本
            ```

- 添加html-webpack-plugin插件

    ```shell
    npm i html-webpack-plugin -D
    ```

    

