const ClienteModelo = require("../models/cliente");
const {request,response} = require("express");

function consultarClientes(peticion = request,respuesta = response){
    
    ClienteModelo.find().then((clientes)=>{
        respuesta.send(clientes);
    }).catch(()=>{
        respuesta.send({mensaje:"No se pudo consultar los clientes"});
    });
}

function crearCliente(peticion = request, respuesta = response){

    const cliente = peticion.body;

    ClienteModelo.findOne({identificacion: peticion.body.identificacion}).then((encontrado)=>{
        if(encontrado){
            respuesta.send({mensaje: "cliente ya existe"});
        }else{
            ClienteModelo.create(cliente).then((clienteCreado)=>{
                respuesta.send({mensaje:`Cliente >> ${clienteCreado.nombre} fue creado`});
            }).catch(()=>{
                respuesta.send({mensaje:"No se pudo crear el cliente"});
            });
        }
    }).catch(()=>{
        respuesta.send({mensaje:"Error al buscar cliente para validacion"});
    });
}

module.exports = {consultarClientes,crearCliente};