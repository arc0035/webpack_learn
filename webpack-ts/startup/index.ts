import webpack ,{Compiler}from 'webpack';
import config from './webpack.config';
import DevServer from './devServer';
const env = process.env.NODE_ENV;
let compiler: Compiler = webpack(config);

if (env === 'development') {
    //先build，再启动devserver；动态监视内容
    const server = new DevServer(compiler);
    server.start();
    
} else{

    compiler.run((error, stats)=>{
        if (error){
            console.log(error);
            return;
        }
        console.log(stats?.toString());
    });
}


// console.log(webpack.webpack);
// console.log("Hi, this is node", process.env.NODE_ENV);