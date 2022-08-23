import path from 'path';
import webpack from 'webpack';
import {APP_ROOT, PROJECT_ROOT, PROJECT_DIST} from './constants';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
    mode: process.env.NODE_ENV ==='development'?'development':'production',
    entry: {
        welcome: path.resolve(APP_ROOT, 'welcome', 'index.ts'),
        popup: path.resolve(APP_ROOT, 'popup','index.ts'),
        option: path.resolve(APP_ROOT, 'option', 'index.ts'),
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: {
                    loader: 'ts-loader',
                    options:{
                        configFile: path.resolve(__dirname,'tsconfig.json')
                    }
                },
                exclude: /node_modules/,
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: '[name].[contenthash].[ext]',
                        outputPath: 'images',
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: path.resolve(APP_ROOT,  "welcome", "index.html"),//模板html
                chunks: ['welcome'],//要引入的bundle js
                filename: 'index.html' //输出内容（就是把模板html上面加一个script，对应的是webpack生成的js）
            }
        ),
        new HtmlWebpackPlugin(
            {
                template: path.resolve(APP_ROOT, "popup",   "index.html"),//模板html
                chunks: ['popup'],//要引入的bundle js
                filename: 'popup.html' //输出内容（就是把模板html上面加一个script，对应的是webpack生成的js）
        }),
        new HtmlWebpackPlugin(
            {
                template: path.resolve(APP_ROOT, "option", "index.html"),//模板html
                chunks: ['option'],//要引入的bundle js
                filename: 'option.html' //输出内容（就是把模板html上面加一个script，对应的是webpack生成的js）
            }
        ),
    ],
    output: {
      path: PROJECT_DIST,
      filename: 'js/[name].js',
    },
};

export default config;
