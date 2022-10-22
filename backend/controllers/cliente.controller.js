const ClienteModelo = require("../models/cliente");
const {request,response} = require("express");

// Consulta todos los cliente
function consultarClientes(peticion = request,respuesta = response){
    
    ClienteModelo.find().then((clientes)=>{
        respuesta.send(clientes);
    }).catch(()=>{
        respuesta.send({mensaje:"No se pudo consultar los clientes"});
    });
}

// Crea un nuevo cliente
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

// Consulta cliente por id, identificacion, nombre y email
function consultaCliente(peticion = request,respuesta = response){
    
    const {id,identificacion,nombre,email} = peticion.body;

    ClienteModelo.findOne({$or: [{identificacion},{nombre},{email},{id}]}).then((resultado)=>{
        if(resultado){
            respuesta.send({mensaje: "cliente encontrado",resultado});
        }else{
            respuesta.send({mensaje:"Cliente no encontrado"});
        }
    }).catch(()=>{
        respuesta.send({mensaje:"No se pudo encontrar el cliente"});
    });
}

// Modifica un cliente
async function modificarCliente(peticion = request,respuesta = response){

    const {_id, ...cliente} = peticion.body;
    
    await ClienteModelo.updateOne({_id:_id},cliente);
    const clienteModificado = await ClienteModelo.findById(_id);
    respuesta.send({mensaje:"Se modifico el cliente",clienteModificado});
   
}

// Elimina un cliente por ID.
async function borrarCliente(peticion = request,respuesta = response){
    const {_id} = peticion.body;

    const eliminado = await ClienteModelo.findByIdAndDelete(_id);

    respuesta.send({mensaje:`Se elimino el cliente: ${eliminado.nombre}`});
}
module.exports = {consultarClientes,crearCliente,consultaCliente,modificarCliente,borrarCliente};