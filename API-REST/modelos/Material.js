const {Schema, model} = require('mongoose');

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