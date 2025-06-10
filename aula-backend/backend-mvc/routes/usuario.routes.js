const usuariosController = require('../controllers/usuario.controller');
const express = require('express');
const routerUsuario = express.Router();

routerUsuario.get('/', usuariosController.getAllUsuariosController);
routerUsuario.get('/:id', usuariosController.getUsuarioByIdController);
routerUsuario.post('/', usuariosController.createUsuarioController);
routerUsuario.delete('/:id', usuariosController.deleteUsuarioController);
routerUsuario.put('/:id', usuariosController.updateUsuarioController);

module.exports = routerUsuario;