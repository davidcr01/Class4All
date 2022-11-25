const Menu = require("../modelos/Menu");
const fs = require('fs');
const path = require('path');


const listar = (req, res) => {

    let listaMenus = Menu.find({}).exec((error, menus) => {
        if (error || !menus){
            return res.status(404).json({
                status:"error",
                mensaje:"No hay menús que listar"
            });
        }
        return res.status(200).json({
            status: "success",
            menus: menus
        });
    });  
};

const crear = (req, res) => {
    const body = req.body;
    const menu = new Menu(body);
    menu.save((error, menuGuardado) => {
        if (error || !menuGuardado){
            return res.status(404).json({
                status:"error",
                mensaje:"No se ha podido crear el menú"
            });
        }
        return res.status(200).json({
            status: "success",
            menu: menuGuardado,
            mensaje:"El menú se ha guardado correctamente"

        });
    });
};


const eliminar = (req, res) => {
    let id = req.params.id;
    let menu = Menu.findByIdAndDelete(id, (error, menuEliminado) => {
        if (error || !menuEliminado){
            return res.status(404).json({
                status:"error",
                mensaje:"No se ha podido eliminar el menú"
            });
        }
        return res.status(200).json({
            status: "success",
            menu: menuEliminado
        });
    });
};

const getFoto = (req, res) => {
    let id = req.params.id;
    Menu.findById(id, (error, menu) => {
        if (error || !menu){
            return res.status(404).json({
                status:"error",
                mensaje:"No se ha podido encontrar el menú"
            });
        }
        let foto = menu.foto
        let urlFisica = "./public/fotos/" + foto;
        fs.stat(urlFisica,(error,existe) => {
            if(existe){
                return res.sendFile(path.resolve(urlFisica));
            }else{
                
               return res.sendFile(path.resolve("./public/fotos/menudefault.jpg"));
            }
        })
    });
};



module.exports = {
    listar
    , crear
    , eliminar
    , getFoto
    
}