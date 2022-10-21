const {Schema, model} = require('mongoose');

// El esquema define la estructura de los documentos de la colección
// El modelo es la clase que se utiliza para crear documentos de la colección


const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    edad: String,
    correo:  String
});

module.exports = model('Usuario', UsuarioSchema);
/*
    . Usuario es el nombre del modelo ("el nombre del constructor y de la clase")
    . UsuarioSchema es el esquema que define como se comporta el modelo
    . "..." es el nombre de la colección de la base de datos
        . Por defecto se coge el nombre del modelo en minuscula y se pluraliza : Usuario => usuarios
        . Se puede especificar otro pero seguiremos esta convención

*/