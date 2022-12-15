const {Schema, model} = require('mongoose');

// El esquema define la estructura de los documentos de la colección
// El modelo es la clase que se utiliza para crear documentos de la colección

// Campos de Usuario y su tipo

const UsuarioSchema = Schema({
    nombre: {
        type: String,
        required: true
    },
    apellido1:{
        type: String,
        required: true
    },
    apellido2:{
        type: String,
        required: true
    },
    rol:{  //alumno, profesor o administrador
        type: String,
        required: true,
        enum: ['Alumno', 'Profesor', 'Administrador']
    },
    foto:{ 
        type: String,
        required: true
    },
    clase:{ 
        type: String,
    },

    //ALUMNOS
    preferencias: Number,
    tamañoLetra: Number,
    tamañoIconos: Number,
    edad: Number,
    tareasAsignadas: [Schema.Types.ObjectId],  //Array de IDs

    //ADMINISTRADORES
    //PROFESORES
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