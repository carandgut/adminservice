const express = require("express");
const conexionDb = require("./conexiondb");
const rutasCliente = require("../routers/cliente.routes");
const rutasLogin = require("../routers/login.routes");

class server{
    constructor(){

        this.puerto = 3000;
        this.app = express();

        this.app.use(express.json());
        this.app.listen(this.puerto,()=>{
            console.log("El servidor se esta ejecutando");
        });
        this.rutas();

        conexionDb();
    }

    rutas(){
        
        this.app.use("/",rutasCliente);
        this.app.use("/",rutasLogin);
    }
}

module.exports = server;


// Codigo para carga de archivos:
// npm i express-fileupload
// const fileUpload = require("express-fileupload");
// this.app.use(fileUpload({useTempFiles:true, tempFileDir: "/tmp/"}));