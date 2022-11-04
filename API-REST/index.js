const express = require('express');
const {conexion} = require('./basedatos/conexion');
const cors = require('cors');
const crearSevidor = require('./crearServidor');


console.log("App arrancada");

//conectar base de datos
conexion();
const puerto = 3900;

//Crear servidor node
const app = crearSevidor();


//Crear servidor y escuchar peticiones http
app.listen(puerto, () => {
    console.log("Servidor corriendo en el puerto" + puerto);
});