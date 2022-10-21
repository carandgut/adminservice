const {Router} = require("express");
const { consultarClientes,crearCliente } = require("../controllers/cliente.controller");

const rutasCliente = Router();

rutasCliente.get("/clientes",consultarClientes);
rutasCliente.post("/clientes",crearCliente);

module.exports = rutasCliente;