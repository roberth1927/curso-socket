
import express from 'express';
import { SERVER_PORT } from '../global/environment';



//sera el paquete por defecto que si exporte cuando se importe esta clase
export default class Server {

    public app: express.Application;
    public port: number;


    constructor() {

        this.app = express();
        this.port = SERVER_PORT;

    }

    //metodo para levantar server
    start( callback: Function ) {

        this.app.listen( this.port, callback );

    }

}