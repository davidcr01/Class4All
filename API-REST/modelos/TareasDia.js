const {Schema, model} = require('mongoose');

const TareaSchema = Schema({
    estado: {
        type: String,
        required: true,
        default: 'sinAsignar',
        enum: ['sinAsignar', 'asignada', 'completada','cancelada']
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

    /*******************datos generales */
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
    }

    


});

module.exports = model('Tarea', TareaSchema, 'tareas');