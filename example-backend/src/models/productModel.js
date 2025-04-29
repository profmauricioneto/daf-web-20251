let id = 4;
let produtos = [
    {id: 1, nome: "Carro", preco: 200000, descricao: "SUV do ano!"},
    {id: 2, nome: "Manga Rosa", preco: 5, descricao: "Manga rosa bem madura"},
    {id: 3, nome: "Shampoo", preco: 40, descricao: "Shampoo da Elsevier"},
    {id: 4, nome: "Barril", preco: 1000, descricao: "Barril do Chaves"},
];

module.exports = {
    getAll: () => produtos,

    getById: (id) => produtos.find(prod => prod.id === id),

    create: (produto) => {
        const newProduto = { id: ++id, ...produto };
        produtos.push(newProduto);
        return newProduto;
    },

    update: (id, data) => {
        const produto = produtos.find(p => parseInt(p.id) === id);
        if (produto) {
            produto.nome = data.nome || produto.nome;
            produto.preco = data.preco || produto.preco;
            produto.descricao = data.descricao || produto.descricao;
        }
        return produto;
    },

    delete: (id) => {
        const index = produtos.findIndex(p => p.id === id);
        if (index !== -1) {
            produtos.splice(index, 1);
            return true;
        }
        return false;
    }
};
