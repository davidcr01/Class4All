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
const UsuarioController = require('../controladores/usuario.js');

// Rutas asociadas a los usuarios
router.post("/crear-usuario" , UsuarioController.crear);
router.get("/lista-usuarios", UsuarioController.listar);
router.get("/get-usuario/:id", UsuarioController.obtenerUsuarioId);

router.post("/userLogin/", UsuarioController.loginUsuario);
router.post("/userLogout/", UsuarioController.logoutUsuario);

router.get("/cookie/:sessionID/:userID/:rol", UsuarioController.obtenerCookie);

router.post("/classLogin/", UsuarioController.loginAlumno)

router.get("/lista-aulas/", UsuarioController.getAulasRuta);
router.get("/get-alumnos-aula/:aula", UsuarioController.getAlumnos)
router.get("/get-alumnos", UsuarioController.getTodosAlumnos)

router.get("/get-foto/:id", UsuarioController.obtenerFoto);

router.delete("/delete-user/:id", UsuarioController.eliminarUsuario);

router.post("/modificar-tamanos/:id" , UsuarioController.modificarTamaño);

router.post("/subir-foto/", upload.single('img'), UsuarioController.subirFoto);

router.get("/get-tamanos/:id", UsuarioController.getTamaños);
module.exports = router;
