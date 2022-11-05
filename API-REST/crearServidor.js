const express = require('express');
const {conexion} = require('./basedatos/conexion');
const cors = require('cors');


function crearSevidor(){
    const app = express();

    //Configurar cors middleware
    app.use(cors());

    //Lectura y parseo del body | parseamos toda peticion a un objeto json
    app.use(express.json());                            //recibir datos con content-type app/json
    app.use(express.urlencoded({extended:true}));       //recibir datos con content-type app/x-www-form-urlencoded

    //Crear rutas pruebas

    const rutas_usuario = require('./rutas/usuario');
    const rutas_tarea = require('./rutas/tareasDia');
    app.use("/api/usuarios", rutas_usuario);
    app.use("/api/tareas", rutas_tarea);

    return app;
}
//Crear servidor node


module.exports = crearSevidor;