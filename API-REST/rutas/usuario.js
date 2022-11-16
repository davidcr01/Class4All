const express = require('express');
const router = express.Router();

const UsuarioController = require('../controladores/usuario.js');


router.post("/crear-usuario" , UsuarioController.crear);
router.get("/lista-usuarios", UsuarioController.listar);
router.get("/get-usuario/:id", UsuarioController.obtenerUsuarioId);

router.post("/userLogin/", UsuarioController.loginUsuario);
router.post("/userLogout/", UsuarioController.logoutUsuario);

router.get("/cookie/:sessionID/:userID/:rol", UsuarioController.obtenerCookie);

router.post("/classLogin/", UsuarioController.loginAlumno)

router.get("/lista-aulas/", UsuarioController.getAulas);
router.get("/get-alumnos-aula/:aula", UsuarioController.getAlumnos)

router.get("/get-foto/:id", UsuarioController.obtenerFoto);

module.exports = router;
