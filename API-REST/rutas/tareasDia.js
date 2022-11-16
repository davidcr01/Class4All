const express = require('express');
const router = express.Router();

const TareaController = require('../controladores/tareaDia.js');

router.get("/lista-tareasDia" , TareaController.listaTareas);
router.get("/get-tarea/:idTarea" , TareaController.obtenerTarea);
router.get("/tareas-usuario/:idUsuario" , TareaController.obtenerTareasUsuario);
router.get("/get-foto/:idTarea" , TareaController.obtenerFoto);

router.post("/crear-tareaDia" , TareaController.crearTarea);
router.delete("/eliminar-tareaDia/:id" , TareaController.eliminarTarea);
router.put("/asignar-tarea/:idTarea/:idAlumno" , TareaController.asignarTarea);
router.put("/desasignar-tarea/:idTarea" , TareaController.desasignarTarea);
module.exports = router;