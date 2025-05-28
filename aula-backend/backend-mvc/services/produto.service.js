let id = 4;
const produtos = [
  { id: 1, nome: "shampoo", preco: 50, descricao: "shampoo elsevier" },
  { id: 2, nome: "condicionador", preco: 60, descricao: "condicionador vella" },
  { id: 3, nome: "sabonete", preco: 4.5, descricao: "sabonete giovanna baby" },
  { id: 4, nome: "escova", preco: 20, descricao: "escova de cabelo" },
];

const getAllProdutos = () => {
    return produtos;
}

const getProdutoById = (id) => {
    const produto = produtos.find((produto) => produto.id === parseInt(id));
    if (!produto) {
        console.log("Produto não encontrado!");
    }
    return produto;
}

const createProduto = (produto) => {
    let {nome, preco, descricao} = produto;
    let novoProduto = {id: ++id, nome, preco, descricao}
    produtos.push(novoProduto);
    console.log("Produto cadastro!");
}

const deleteProduto = (id) => {
    const produtoIndex = produtos.findIndex((produto) => produto.id === parseInt(id));
    if (produto){
        produtos.slice(produtoIndex, 1);
        console.log("Produto deletado com sucesso!");
    } else {
        console.log("produto não encontrado!");   
    }
}

const updateProduto = (id, {nome, preco, descricao}) => {
    const produto = produtos.find((produto) => produto.id === parseInt(id));
    if (produto) {
        produto.nome = nome || produto.nome;
        produto.preco = preco || produto.preco;
        produto.descricao = descricao || produto.descricao;
        console.log("produto atualizado com sucesso.");
    } else {
        console.log('produto não encontrado.');
    }
}

module.exports = {
    getAllProdutos,
    getProdutoById,
    createProduto,
    deleteProduto,
    updateProduto
}