//Llamada a los paquetes
const express = require("express")
const mongoose = require("mongoose")
const ventas = require("./routes/ventas")
require("dotenv").config()

//Configuraciones
const aplicacion = express();
const puerto = 4000;

//rutas
aplicacion.get("/demo", (req, res) => { res.send("Página de demostración") })
aplicacion.get("/", (req, res) => { res.send("Página de raíz") })
aplicacion.use("/api", ventas);

//Ejecución
mongoose.connect(process.env.mongodb_conexion)
    .then(() => { console.log("Conexión realizada")})
    .catch((error) => { console.log(error)})

aplicacion.listen(puerto, () => { console.log("Aplicación ejecutándose") } )







