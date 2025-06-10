const prisma = require('../prisma/Client');

const UsuarioServices = {
  async createUsuario(data) {
    return await prisma.usuario.create({
      data,
    });
  },

  async getAllUsuarios() {
    return await prisma.usuario.findMany({
      include: { produtos: true },
    });
  },

  async getUsuarioById(id) {
    return await prisma.usuario.findUnique({
      where: { id: Number(id) },
      include: { produtos: true },
    });
  },

  async updateUsuario(id, data) {
    return await prisma.usuario.update({
      where: { id: Number(id) },
      data,
    });
  },

  async deleteUsuario(id) {
    return await prisma.usuario.delete({
      where: { id: Number(id) },
    });
  },
};

module.exports = UsuarioServices;