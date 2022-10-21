const express = require('express');
const {conexion} = require('./basedatos/conexion');
const cors = require('cors');


console.log("App arrancada");

//conectar base de datos
conexion();

//Crear servidor node
const app = express();
const puerto = 3900;

//Configurar cors middleware
app.use(cors());

//Lectura y parseo del body | parseamos toda peticion a un objeto json
app.use(express.json());                            //recibir datos con content-type app/json
app.use(express.urlencoded({extended:true}));       //recibir datos con content-type app/x-www-form-urlencoded

//Crear rutas pruebas

const rutas_usuario = require('./rutas/usuario');
app.use("/api", rutas_usuario);




//Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto" + puerto);
});