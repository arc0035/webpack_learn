import express from 'express';


class DevServer{
    port: number;
    server: express.Application;
    constructor(port: number){
        this.port = port;
        this.server = express();
    }

    start(): void {
        this.server.get('/', (req, res) => {
            res.send('Hello World!');
        });
        
        this.server.listen(this.port, ()=>{
            console.log('Dev server started');
        })
    }
}


export default DevServer;

