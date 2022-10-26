const {Router} = require("express");
const {autenticacion} = require("../controllers/login.controller");

const rutasLogin = Router();

rutasLogin.post("/login", autenticacion);

module.exports = rutasLogin;