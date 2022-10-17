const mongoose = require("mongoose");

const agente = {
    tipoDocumento : String,
    identificacion : String,
    nombre : String,
    apellido : String,
    email : String,
    telefono : String,
    area:String,
    password : String
}

const agenteSquema = mongoose.Schema(agente);

const AgenteModelo = mongoose.model("agentes",agenteSquema);

module.exports = AgenteModelo;