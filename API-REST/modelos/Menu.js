const {Schema, model} = require('mongoose');

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