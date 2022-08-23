import express from 'express';
import * as constants from './constants';
import {Compiler} from 'webpack';
const middleware = require("webpack-dev-middleware");//支持热加载等功能

class DevServer{
    port: number;
    server: express.Application;
    compiler: Compiler;
    constructor(compiler: Compiler, port=constants.DEFAULT_PORT){
        this.port = port;
        this.server = express();
        this.compiler = compiler;
    }
    start(): void {
        this.server.use(middleware(this.compiler, {
            writeToDisk: true //如果是false，则编译内容编译到内存中
        }));
        this.server.listen(this.port, ()=>{
            console.log('Dev server started');
        });
    }
}


export default DevServer;

