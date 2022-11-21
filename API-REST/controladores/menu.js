const Menu = require("../modelos/Menu");
const Cookies = require("universal-cookie");
const fs = require('fs');
const path = require('path');

const cookies = new Cookies();


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
    let body = req.body;
    let menu = new Menu({
        nombre: body.nombre,
        foto: body.foto
    });

    menu.save((error, menuGuardado) => {
        if (error || !menuGuardado){
            return res.status(404).json({
                status:"error",
                mensaje:"No se ha podido crear el menú"
            });
        }
        return res.status(200).json({
            status: "success",
            menu: menuGuardado
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




module.exports = {
    listar
    , crear
    , eliminar
    
}