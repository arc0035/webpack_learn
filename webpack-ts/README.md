
webpack的ts练习。

- 使用cross-env注入环境信息
- 使用ts-node，在production环境下，以编程方式启动webpack编译
- 使用ts-node，在development环境下，启动一个支持热加载的dev-server（使用webpackMiddleware功能） 
- 使用ts-loader来对入口ts进行编译
- 处理多个入口标签，生成对应多个bundle
- 使用HtmlWebPackPlugin，为每个模块（popup,optoin）生成多个html文件
- 练习url-loader ，将入口文件引用的图片转换成base64嵌入到bundle文件中
- 完成react程序的处理。 TODO