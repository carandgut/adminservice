const express = require("express");

class server{
    constructor(){

        this.puerto = 3000;
        this.app = express();

        this.app.use(express.json());
        this.app.listen(puerto,()=>{
            console.log("El servidor se esta ejecutando");
        });
        this.rutas();   
    }

    rutas(){

        this.app.post("/registro",);    

    }
}