const produtosController = require('../controllers/produto.controller');
const express = require('express');
const routerProdutos = express.Router();

routerProdutos.get('/', produtosController.getAllProdutosController);
routerProdutos.get('/:id', produtosController.getProdutoByIdController);
routerProdutos.post('/', produtosController.createProdutoController);
routerProdutos.delete('/:id', produtosController.deleteProdutoController);
routerProdutos.put('/:id', produtosController.updateProdutoController);

routerProdutos.get('/usuarios/:usuarioId', produtosController.getProdutosByUsuarioIdController);
routerProdutos.get('/search', produtosController.getProdutosByNomeController);

module.exports = routerProdutos;