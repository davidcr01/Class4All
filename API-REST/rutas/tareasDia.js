const express = require('express');
const router = express.Router();

const TareaController = require('../controladores/tareaDia.js');

router.get("/lista-tareasDia" , TareaController.listaTareas);
router.get("/get-tarea/:idTarea" , TareaController.obtenerTarea);
router.get("/lista-tareasDia-prof/:idProfesor", TareaController.getTareasEntregaMaterial);
router.get("/tareas-usuario/:idUsuario" , TareaController.obtenerTareasUsuario);
router.get("/get-foto/:idTarea" , TareaController.obtenerFoto);

router.post("/crear-tareaDia" , TareaController.crearTarea);
router.post("/crear-tareaMaterial", TareaController.crearTareaMaterial);

router.delete("/eliminar-tareaDia/:id" , TareaController.eliminarTarea);

// --------------------------- QUIZAS SEA NECESARIO ARREGLAR ---------------------------
router.put("/asignar-tarea/:idTarea/:idAlumno" , TareaController.asignarTarea);
router.put("/desasignar-tarea/:idTarea" , TareaController.desasignarTarea);
router.put("/completar-tarea-alumno/:idTarea" , TareaController.setRealizada);

// --------------------------- ARREGLADAS ---------------------------
router.get("/aulas-restantes-comanda/:idTarea", TareaController.getAulasRestantes);
router.post("/completar-tarea-profesor/" , TareaController.setEstadoCompletada);
router.post("/completar-clase-comanda/", TareaController.completarClaseComanda);
router.post("/actualizar-cantidades/:idTarea" , TareaController.actualizarCantidades);

module.exports = router;