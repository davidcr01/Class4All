const { Schema, model } = require('mongoose');

// Campos de Tareas y su tipo

const TareaSchema = Schema({
    estado: {
        type: String,
        required: true,
        default: 'sinAsignar',
        enum: ['sinAsignar', 'asignada', 'completada', 'cancelada']
    },
    tipo: {
        type: String,
        required: true,
        default: 'general',
        enum: ['general', 'comanda', 'entregaMateriales']
    },
    usuarioAsignado: {
        type: Schema.Types.ObjectId,
        default: null,

    },
    fechaAsignada: {
        type: Date,
        default: null
    },
    fechaAcabada: {
        type: Date,
        default: null
    },
    fechaLimite: {
        type: Date,
        default: () => new Date()
    },
    foto: {
        type: String,
        default: 'default.jpg'
    },

    //Datos generales de la tarea
    nombre: {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    tipoInstrucciones: {
        type: String,
        required: true,
        enum: ['texto', 'imagen', 'video']
    },
    instruccionesFotos: {
        instrucciones: [{
            foto: String,
            alt: String
        }],
        default: []

    },
    urlVideo: {
        type: String,
        default: null
    },
    instruccionTexto: {
        type: String,
        default: null
    },

    retroalimentacionTexto: {
        type: String,
        default: null
    },

    retroalimentacionNumero: {
        type: Number,
        default: null
    },



    //Comandas
    menus: {
        type: [
            {
                menu: Schema.Types.ObjectId,
                cantidad: Number,
            }
        ],
        default: undefined,
        required: false
    },

    //Materiales
    entregamateriales: {
        materiales: [
            {
                material: Schema.Types.ObjectId,
                cantidad: Number,
            }
        ],
        idProfesor: Schema.Types.ObjectId,
        aula: String,

        //cuando falta algún material se añade aquí
        materialesnodisp: [
            {
                material: Schema.Types.ObjectId,
            }
        ],

    },

    realizada: {
        type: Boolean,
        default: false
    },

    aulasRestantes: {
        type: Array,
        required: false,
        default: undefined
    }
});

module.exports = model('Tarea', TareaSchema, 'tareas');