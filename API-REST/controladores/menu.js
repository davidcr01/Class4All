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

module.exports = {
    listar
}