const express = require('express');
const router = express.Router();

// Rutas asociadas a las tareas
const TareaController = require('../controladores/tareaDia.js');

router.get("/lista-tareasDia" , TareaController.listaTareas);
router.get("/get-tarea/:idTarea" , TareaController.obtenerTarea);
router.get("/lista-tareasDia-prof/:idProfesor", TareaController.getTareasEntregaMaterial);
router.get("/tareas-usuario/:idUsuario" , TareaController.obtenerTareasUsuario);
router.get("/tareas-usuario-asignadas/:idUsuario" , TareaController.obtenerTareasUsuarioAsignadas);
router.get("/get-foto/:idTarea" , TareaController.obtenerFoto);


router.delete("/eliminar-tareaDia/:id" , TareaController.eliminarTarea);

// --------------------------- QUIZAS SEA NECESARIO ARREGLAR ---------------------------
router.put("/desasignar-tarea/:idTarea" , TareaController.desasignarTarea);
router.put("/completar-tarea-alumno/:idTarea" , TareaController.setRealizada);
router.put("/cancelar-tarea/:idTarea" , TareaController.setEstadoCancelada);

router.post("/falta-material/:idTarea" , TareaController.faltaMaterial);
router.post("/add-retroalimentacion/:idTarea" , TareaController.addRetroalimentacion);


// --------------------------- ARREGLADAS ---------------------------
router.post("/crear-tareaDia" , TareaController.crearTarea);
router.post("/crear-tareaMaterial", TareaController.crearTareaMaterial);
router.put("/asignar-tarea/" , TareaController.asignarTarea);
//router.get("/aulas-restantes-comanda/:idTarea", TareaController.getAulasRestantes);
//router.post("/completar-clase-comanda/", TareaController.completarClaseComanda);
router.put("/completar-tarea-profesor/:idTarea" , TareaController.setEstadoCompletada);
router.post("/actualizar-cantidades/:idTarea" , TareaController.actualizarCantidades);


module.exports = router;