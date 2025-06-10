const prisma = require('../prisma/Client');

const ProdutoService = {
  async createProduto(data) {
    return await prisma.produto.create({
      data,
    });
  },

  async getAllProdutos() {
    return await prisma.produto.findMany({
      include: { usuario: true },
    });
  },

  async getProdutoById(id) {
    return await prisma.produto.findUnique({
      where: { id: Number(id) },
      include: { usuario: true },
    });
  },

  async updateProduto(id, data) {
    return await prisma.produto.update({
      where: { id: Number(id) },
      data,
    });
  },

  async deleteProduto(id) {
    return await prisma.produto.delete({
      where: { id: Number(id) },
    });
  },

  async getProdutosByUsuarioId(usuarioId) {
    return await prisma.produto.findMany({
      where: { usuarioId: Number(usuarioId) },
      include: { usuario: true },
    });
  },

  async getProdutosByNome(nome) {
    return await prisma.produto.findMany({
      where: {
        nome: {
          contains: nome,
          mode: 'insensitive',
        },
      },
      include: { usuario: true },
    });
  },
};

module.exports = ProdutoService;
