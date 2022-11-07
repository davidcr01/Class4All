const express = require('express');
const router = express.Router();

const UsuarioController = require('../controladores/usuario.js');
//Rutas prueba
router.get("/ruta-de-prueba" , UsuarioController.prueba);
router.get("/datos-empresa" , UsuarioController.datosEmpresa);
router.post("/crear-usuario" , UsuarioController.crear);
router.get("/listar-usuarios", UsuarioController.listar);
router.get("/user/:id", UsuarioController.obtenerUsuarioId);
router.get("/userProf/:correo", UsuarioController.obtenerUsuarioCorreo);

module.exports = router;
