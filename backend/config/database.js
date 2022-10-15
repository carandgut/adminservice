const mongoose = require("mongoose");

const uri = "mongodb://localhost:27017/adminservice";

mongoose.connect(uri).then(() => {
    console.log("Conexion exitosa.");
}).catch(() => {
    console.log("Falla en la conexion.");
});