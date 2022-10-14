const ClienteModelo = require("./models/cliente");

const uri = "mongodb://localhost:27017/adminservice";

const mongoose = require("mongoose");

mongoose.connect(uri).then(() => {
    console.log("Conexion exitosa.");
}).catch(() => {
    console.log("Falla en la conexion.");
});

console.log("Conectando a la BD.");

// registro de ejemplo.
const cliente1 = {
    tipoDocumento : "CC",
    identificacion : "1065903852",
    nombre : "Anderson",
    apellido : "Paez",
    email : "correo@gmail.com",
    telefono : "1234567899",
    password : "contrasenia"
}

ClienteModelo.create(cliente1).then((resultado)=>{
    console.log(`Se inserto el cliente ${resultado.nombre}`);
}).catch(()=>{
    console.log("Error al insertar cliente.");
});