import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';

// Crea y configura un servidor web ExpressJS
class App {

  //ref a instancia ExpressJS
  public express: express.Application;

  //Corre los metodos de la configuración en la instancia de ExpressJS
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configura el middleware Express
  private middleware(): void{
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false}));
  }

  //Configura el punto final de la API.
  private routes(): void{

    let router = express.Router();
    //palceholder route handler
    router.get('/', (req, res, next)=> {
      res.json({
        message: 'Hello World!'
      });
    });
    this.express.use('/', router);
  }
}

export default new App().express;
