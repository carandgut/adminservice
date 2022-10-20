const ClienteModelo = require("../models/cliente");
const conexionDb = require("../config/conexiondb");

conexionDb();

const cliente1 = {
    tipoDocumento : "CC",
    identificacion : "2468101214",
    nombre : "Fernanda",
    apellido : "Ascanio",
    email : "fernanda@gmail.com",
    telefono : "3124001020",
    password : 246810
}

ClienteModelo.create(cliente1).then((resultado)=>{
    console.log(`Se inserto el cliente ${resultado.nombre}`);
}).catch(()=>{
    console.log("Error al insertar cliente.");
});