var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: path.resolve(__dirname , "app/main.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "result.js"
    },
    devServer: {
        static: path.resolve(__dirname, "dist"),//本地服务器所加载的页面所在的目录
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }

        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: __dirname + "/app/index.tmpl.html"//new 一个这个插件的实例，并传入相关的参数
        })
    ],
}