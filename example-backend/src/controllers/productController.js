const Produto = require('../models/productModel');

exports.getAll = (req, res) => {
    const produtos = Produto.getAll();
    res.status(200).json(produtos);
};

exports.getById = (req, res) => {
    const id = parseInt(req.params.id);
    const produto = Produto.getById(id);
    if (!produto) {
        return res.status(404).json({ message: "produto não encontrado!" });
    }
    res.status(200).json(produto);
};

exports.create = (req, res) => {
    const { nome, preco, descricao } = req.body;
    const novo = Produto.create({ nome, preco, descricao });
    res.status(201).json(novo);
};

exports.update = (req, res) => {
    const id = parseInt(req.params.id);
    const produto = Produto.update(id, req.body);
    if (!produto) {
        return res.status(404).json({ message: "produto não encontrado." });
    }
    res.json(produto);
};

exports.delete = (req, res) => {
    const id = parseInt(req.params.id);
    const success = Produto.delete(id);
    if (!success) {
        return res.status(404).json({ message: "produto não encontrado." });
    }
    res.json({ message: "produto deletado com sucesso." });
};
