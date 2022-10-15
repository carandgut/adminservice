const ClienteModelo = require("../models/cliente");

ClienteModelo.create(cliente1).then((resultado)=>{
    console.log(`Se inserto el cliente ${resultado.nombre}`);
}).catch(()=>{
    console.log("Error al insertar cliente.");
});