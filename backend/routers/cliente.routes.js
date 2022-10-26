const {Router} = require("express");
const { consultarClientes,crearCliente,consultaCliente,modificarCliente,borrarCliente } = require("../controllers/cliente.controller");

const rutasCliente = Router();

rutasCliente.get("/clientes",consultarClientes);
rutasCliente.post("/clientes",crearCliente);
rutasCliente.post("/cliente",consultaCliente);
rutasCliente.put("/modificarcliente",modificarCliente);
rutasCliente.delete("/borrarcliente",borrarCliente);

module.exports = rutasCliente;