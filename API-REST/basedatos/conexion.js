const mongoose = require('mongoose');

const conexion = async() => {
    try{
        await mongoose.connect("mongodb+srv://javier:javier@class4all.oiv8ety.mongodb.net/C4A?retryWrites=true&w=majority", {keepAlive: true, keepAliveInitialDelay: 300000});
        console.log("Conectado a la base de datos");
        
    }catch(error){
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD');
    }
}

module.exports = {
    conexion
}