
webpack的ts练习。

● 使用cross-env注入变量供process.env读取
● 使用ts-node，用可编程方式，在production环境下，启动webpack编译（而非yarn webpack命令）
● 使用ts-node，用可编程方式，在development环境下，启动一个devServer（自己开发devServer，使用express+webpackMiddleWare即可）
● 使用ts-loader或babel-loader编译ts文件（需指定tsconfig.json位置，否则编译器不知道怎么编译）
● 处理多个入口标签，生成对应多个文件（见webpack.config.ts的entry块）
● 使用HtmlWebPackPlugin，为多个模块（popup,option,welcome）生成多个html文件
● 练习url-loader的使用，将入口文件引用的图片转换为base64嵌入到输出bundle文件中
