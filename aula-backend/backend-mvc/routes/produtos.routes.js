const produtosController = require('../controllers/produto.controller');
const express = require('express');
const router = express.Router();


router.get('/produtos', produtosController.getAllProdutosController);