const {Schema, model} = require('mongoose');

// Campos de Material y su tipo
const MaterialSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    foto: {
        type: String,
    },
    alt: {
        type: String,
    }

});

module.exports = model('Material', MaterialSchema, 'material');