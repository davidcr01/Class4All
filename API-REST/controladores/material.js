const Material = require("../modelos/Material");
const Cookies = require("universal-cookie");
const fs = require('fs');
const path = require('path');

const cookies = new Cookies();

// Obtiene todos los materiales de BBDD
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


// Obtiene foto del mençu asociado con su ID
const getFoto = (req, res) => {
    let id = req.params.id;
    Material.findById(id, (error, material) => {
        if (error || !material){
            return res.status(404).json({
                status:"error",
                mensaje:"No se ha podido encontrar el menú"
            });
        }
        let foto = material.foto
        let urlFisica = "./public/fotos/" + foto;
        console.log(urlFisica);
        fs.stat(urlFisica,(error,existe) => {
            if(existe){
                return res.sendFile(path.resolve(urlFisica));
            }else{
                
               return res.sendFile(path.resolve("./public/fotos/materialdefault.png"));
            }
        })
    });
    
};




module.exports = {
    listar
    , getFoto
}