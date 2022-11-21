const express = require('express');
const router = express.Router();

const MaterialController = require('../controladores/material.js');

router.get("/lista-material" , MaterialController.listar);


module.exports = router;