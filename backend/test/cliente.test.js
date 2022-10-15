const ClienteModelo = require("../models/cliente");
const conexionDb = require("../config/database");

ClienteModelo.create(cliente1).then((resultado)=>{
    console.log(`Se inserto el cliente ${resultado.nombre}`);
}).catch(()=>{
    console.log("Error al insertar cliente.");
});