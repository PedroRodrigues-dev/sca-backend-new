const express = require('express');
const { criarUsuario } = require('../controllers/usuarioController');

const usuarioRoutes = express.Router();

usuarioRoutes.post("/", criarUsuario)

module.exports = usuarioRoutes;
