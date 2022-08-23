import path from 'path';
import webpack from 'webpack'


const config: webpack.Configuration = {
    mode: process.env.NODE_ENV ==='development'?'development':'production',
    entry: {
        popup: path.resolve('app', 'popup','index.ts'),
        option: path.resolve('app', 'option', 'index.ts'),
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
            }
        ]
    },
    output: {
      path: path.resolve('dist'),
      filename: 'js/[name].js',
    },
};

export default config;
