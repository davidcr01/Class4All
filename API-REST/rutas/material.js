const express = require('express');
const router = express.Router();

// Rutas asociadas a los materiales

const MaterialController = require('../controladores/material.js');

router.get("/lista-material" , MaterialController.listar);
router.get("/obtenerfoto/:id" , MaterialController.getFoto);


module.exports = router;