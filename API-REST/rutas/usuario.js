const express = require('express');
const router = express.Router();

const UsuarioController = require('../controladores/Usuario');
//Rutas prueba
router.get("/ruta-de-prueba" , UsuarioController.prueba);
router.get("/datos-empresa" , UsuarioController.datosEmpresa);
router.post("/crear-usuario" , UsuarioController.crear);

module.exports = router;