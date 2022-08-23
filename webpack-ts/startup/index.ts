import webpack, { Compiler } from 'webpack';
import config from './webpack.config';

let compiler: Compiler = webpack(config);
compiler.run((error, stats)=>{
    if (error){
        console.log(error);
        return;
    }

    console.log(stats?.toString());
});

// console.log(webpack.webpack);
// console.log("Hi, this is node", process.env.NODE_ENV);