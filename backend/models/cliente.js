const mongoose = require("mongoose");

const cliente = {
    tipoDocumento : String,
    identificacion : String,
    nombre : String,
    apellido : String,
    email : String,
    telefono : String,
    password : String
}

const clienteSquema = mongoose.Schema(cliente);

const ClienteModelo = mongoose.model("clientes",clienteSquema);

module.exports = ClienteModelo;