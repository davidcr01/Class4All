const express = require('express');
const router = express.Router();

const MenuController = require('../controladores/menu.js');

router.get("/lista-menu" , MenuController.listar);
router.post("/crear-menu" , MenuController.crear);
router.delete("/eliminar-menu/:id" , MenuController.eliminar);


module.exports = router;