const express = require("express");
const app = express();
const PORT = 3000;

let id = 4;
const produtos = [
  { id: 1, nome: "shampoo", preco: 50, descricao: "shampoo elsevier" },
  { id: 2, nome: "condicionador", preco: 60, descricao: "condicionador vella" },
  { id: 3, nome: "sabonete", preco: 4.5, descricao: "sabonete giovanna baby" },
  { id: 4, nome: "escova", preco: 20, descricao: "escova de cabelo" },
];

app.use(express.json());

// rota para listar todos os produtos
app.get('/produtos', (req, res) => {
    if (!produtos) {
        res.json({message: 'error ao carregar os dados'});
    } else {
        res.json(produtos);
    }
});

// rota para recuperar somente um produto por id
app.get('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const produto = produtos.find((produto) => {
        return produto.id === id;
    })
    if (!produto) {
        res.json({message: 'produto não encontrado no estoque'})
    } else {
        res.json(produto);
    }
});

// criando novos produtos
app.post('/produtos', (req, res) => {
    const {nome, preco, descricao} = req.body;
    const produto = {id: ++id, nome, preco, descricao};
    produtos.push(produto);
    res.json({message: 'produto cadastrado com sucesso!'});
});

// deletando um produto por id
app.delete('/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = produtos.findIndex((produto) => {
        return produto.id === id;
    });
    if (!index) {
        res.json({message: 'produto não encontrado.'})
    } else {
        produtos.splice(index, 1);
        res.json({message: "produto deletado com sucesso."})
    }

});

app.put('/produtos/:id', (req, res) => {
    const idProduto = parseInt(req.params.id);
    const produto = produtos.find((produto) => produto.id === idProduto);
    if (produto) {
        const {nome, preco, descricao} = req.body;
        produto.nome = nome || produto.nome;
        produto.preco = preco || produto.preco;
        produto.descricao = descricao || produto.descricao;
        res.json({message: 'produto atualizado com sucesso.'})
    } else {
        res.json({message: 'produto não encontrado.'})
    }
});


// rota raiz
app.get("/", (req, res) => {
  res.json({
    message: "Primeira API - Vá para rota /produtos",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor sendo executado em: http://localhost:3000`);
});
