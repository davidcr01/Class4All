const express = require('express');

const multer = require('multer');

const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/fotos');
    },
    filename: function (req, file, cb) {
        console.log(file);
        cb(null , file.originalname );
    }
});
const upload = multer({ storage: storage })

// Rutas asociadas a los menús

const MenuController = require('../controladores/menu.js');

router.get("/lista-menu" , MenuController.listar);
router.post("/crear-menu/",  MenuController.crear);
router.post("/subir-foto/", upload.single('img'), MenuController.subirFoto);
router.delete("/eliminar-menu/:id" , MenuController.eliminar);
router.get("/obtenerfoto/:id", MenuController.getFoto);

module.exports = router;

