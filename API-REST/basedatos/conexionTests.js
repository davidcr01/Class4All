const mongoose = require('mongoose');

const conexionTest = async() => {
    try{
        await mongoose.connect("mongodb+srv://test:test@c4a-test.97v4qpm.mongodb.net/?retryWrites=true&w=majority");
        
        console.log("Conectado a la base de datos");
        
    }catch(error){
        console.log(error);
        throw new Error('Error a la hora de iniciar la BD');
    }
}

module.exports = {
    conexionTest
}