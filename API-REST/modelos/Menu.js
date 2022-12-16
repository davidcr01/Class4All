const {Schema, model} = require('mongoose');

// Campos de Menu y su tipo
const MenuSchema = Schema({

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

module.exports = model('Menu', MenuSchema, 'menus');