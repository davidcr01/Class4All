const express = require('express');
const router = express.Router();

const MenuController = require('../controladores/menu.js');

router.get("/lista-menu" , MenuController.listar);

module.exports = router;