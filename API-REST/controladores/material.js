const Material = require("../modelos/Material");
const Cookies = require("universal-cookie");
const fs = require('fs');
const path = require('path');

const cookies = new Cookies();


const listar = (req, res) => {

    let listaMaterial = Material.find({}).exec((error, materials) => {
        if (error || !materials){
            return res.status(404).json({
                status:"error",
                mensaje:"No hay materiales que listar"
            });
        }
        return res.status(200).json({
            status: "success",
            materials: materials
        });
    });  
};



module.exports = {
    listar    
}