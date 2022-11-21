const {Schema, model} = require('mongoose');

const TareaSchema = Schema({
    estado: {
        type: String,
        required: true,
        default: 'sinAsignar',
        enum: ['sinAsignar', 'asignada', 'completada','cancelada']
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
    fechaAcabadada: {
        type: Date,
        default: null
    },
    fechaLimite: {
        type: String,
        default: 'Hoy'
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
        instrucciones:[{
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


    //Comandas
    menus: [
        {
            menu: {
                type: Schema.Types.ObjectId,
                default: null
            },
            cantidad: {
                type: Number,
                default: 0
            }
        }

    ]

    //Menús
    


});

module.exports = model('Tarea', TareaSchema, 'tareas');