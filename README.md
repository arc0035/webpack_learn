webpack 5的知识练习

webpack用于把项目打包成浏览器可直接使用的文件。该练习主要参考 https://www.cnblogs.com/cangqinglang/p/8715254.html.  

练习内容包括：

- 启动webpack：用webpack命令，或者在package.json中做一个对webpack命令的封装。
- webpack.config.js:
  - entry: 入口文件
  - output：输出目录
  - devServer：本地开发服务器，用于测试打包后的网站效果
  - loader：用于处理源文件中形形色色的语法。例如：
    - babel-loader：可以定制处理es6，react语法等
  - plugin：处理额外任务。例如：
    - HtmlWebpackPlugin: 生成index.html。它由模板文件和编译出来的js构成。