"use strict";
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
// Crea y configura un servidor web ExpressJS
class App {
    //Corre los metodos de la configuración en la instancia de ExpressJS
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configura el middleware Express
    middleware() {
        this.express.use(logger('dev'));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
    //Configura el punto final de la API.
    routes() {
        let router = express.Router();
        //palceholder route handler
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });
        this.express.use('/', router);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = new App().express;
