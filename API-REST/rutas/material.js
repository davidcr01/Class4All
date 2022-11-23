const express = require('express');
const router = express.Router();

const MaterialController = require('../controladores/material.js');

router.get("/lista-material" , MaterialController.listar);
router.get("/obtenerfoto/:id" , MaterialController.getFoto);


module.exports = router;