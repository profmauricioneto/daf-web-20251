const produtoServices = require('../services/produto.service');

// rota para listar todos os produtos
const getAllProdutosController =  (req, res) => {
    const produtos = produtoServices.getAllProdutos();
    res.json(produtos);
};

// rota para recuperar somente um produto por id
const getProdutoByIdController = (req, res) => {
    const idProduto = parseInt(req.params.id);
    const produto = produtoServices.getProdutoById(idProduto);
    if (!produto) {
        res.json({message:'produto não encontrado'})
    } else {
        res.json(produto)
    }
};

// criando novos produtos
const postProdutoController = (req, res) => {
    const {nome, preco, descricao} = req.body;
    produtoServices.createProduto({nome, preco, descricao});
    res.json({message: 'produto criado com sucesso!'});
};

// deletando um produto por id
const deleteProdutoController = (req, res) => {
    const idProduto = parseInt(req.params.id);
    produtoServices.deleteProduto(idProduto)
};

// atualizando um produto
const updateProdutoController = (req, res) => {
    const idProduto = parseInt(req.params.id);
    const {nome, preco, descricao} = req.body;
    produtoServices.updateProduto(idProduto, {nome, preco, descricao});
    res.json({message: 'produto atualizado com sucesso.'})
};

module.exports = {
    updateProdutoController,
    deleteProdutoController,
    postProdutoController,
    getProdutoByIdController,
    getAllProdutosController
}