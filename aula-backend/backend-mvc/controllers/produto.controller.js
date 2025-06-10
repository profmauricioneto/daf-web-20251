const ProdutoService = require('../services/produto.services');

const ProdutoController = {
  async createProdutoController(req, res) {
    try {
      const produto = await ProdutoService.createProduto(req.body);
      res.status(201).json(produto);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao criar produto', detalhes: err.message });
    }
  },

  async getAllProdutosController(req, res) {
    try {
      const produtos = await ProdutoService.getAllProdutos();
      res.json(produtos);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao listar produtos', detalhes: err.message });
    }
  },

  async getProdutoByIdController(req, res) {
    try {
      const produto = await ProdutoService.getProdutoById(req.params.id);
      if (!produto) return res.status(404).json({ erro: 'Produto não encontrado' });
      res.json(produto);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao buscar produto', detalhes: err.message });
    }
  },

  async updateProdutoController(req, res) {
    try {
      const produto = await ProdutoService.updateProduto(req.params.id, req.body);
      res.json(produto);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao atualizar produto', detalhes: err.message });
    }
  },

  async deleteProdutoController(req, res) {
    try {
      await ProdutoService.deleteProduto(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao deletar produto', detalhes: err.message });
    }
  },

  async getProdutosByUsuarioIdController(req, res) {
    try {
      const produtos = await ProdutoService.getProdutosByUsuarioId(req.params.usuarioId);
      res.json(produtos);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao listar produtos do usuario', detalhes: err.message });
    }
  },

  async getProdutosByNomeController(req, res) {
    try {
      const produtos = await ProdutoService.getProdutosByNome(req.query.nome);
      res.json(produtos);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao buscar produtos por nome', detalhes: err.message });
    }
  },
};

module.exports = ProdutoController;


// const produtoServices = require('../services/produto.service');

// // rota para listar todos os produtos
// const getAllProdutosController =  (req, res) => {
//     const produtos = produtoServices.getAllProdutos();
//     res.json(produtos);
// };

// // rota para recuperar somente um produto por id
// const getProdutoByIdController = (req, res) => {
//     const idProduto = parseInt(req.params.id);
//     const produto = produtoServices.getProdutoById(idProduto);
//     if (!produto) {
//         res.json({message:'produto não encontrado'})
//     } else {
//         res.json(produto)
//     }
// };

// // criando novos produtos
// const postProdutoController = (req, res) => {
//     const {nome, preco, descricao} = req.body;
//     produtoServices.createProduto({nome, preco, descricao});
//     res.json({message: 'produto criado com sucesso!'});
// };

// // deletando um produto por id
// const deleteProdutoController = (req, res) => {
//     const idProduto = parseInt(req.params.id);
//     produtoServices.deleteProduto(idProduto);
//     res.json({message: 'produto excluído com sucesso!'})
// };

// // atualizando um produto
// const updateProdutoController = (req, res) => {
//     const idProduto = parseInt(req.params.id);
//     const {nome, preco, descricao} = req.body;
//     produtoServices.updateProduto(idProduto, {nome, preco, descricao});
//     res.json({message: 'produto atualizado com sucesso.'})
// };

// module.exports = {
//     updateProdutoController,
//     deleteProdutoController,
//     postProdutoController,
//     getProdutoByIdController,
//     getAllProdutosController
// }