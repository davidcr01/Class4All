const express = require('express');
const router = express.Router();

const UsuarioController = require('../controladores/usuario.js');
//Rutas prueba
router.get("/ruta-de-prueba" , UsuarioController.prueba);
router.get("/datos-empresa" , UsuarioController.datosEmpresa);
router.post("/crear-usuario" , UsuarioController.crear);
router.get("/listar-usuarios", UsuarioController.listar);
router.get("/user/:id", UsuarioController.obtenerUsuarioId);

router.post("/userLogin/", UsuarioController.loginUsuario);
router.post("/userLogout/", UsuarioController.logoutUsuario);

router.get("/cookie/:sessionID/:userID", UsuarioController.obtenerCookie);

router.post("/classLogin/", UsuarioController.loginAlumno)

router.get("/aulas/", UsuarioController.getAulas);
router.get("/alumnos/:aula", UsuarioController.getAlumnos)

router.get("/foto/:id", UsuarioController.obtenerFoto);

module.exports = router;
