const UsuarioService = require('../services/usuario.services');

const UsuarioController = {
  async createUsuarioController(req, res) {
    try {
      const usuario = await UsuarioService.createUsuario(req.body);
      res.status(201).json(usuario);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao criar usuario', detalhes: err.message });
    }
  },

  async getAllUsuariosController(req, res) {
    try {
      const usuarios = await UsuarioService.getAllUsuarios();
      res.json(usuarios);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao listar os usuarios', detalhes: err.message });
    }
  },

  async getUsuarioByIdController(req, res) {
    try {
      const usuario = await UsuarioService.getUsuarioById(req.params.id);
      if (!usuario) return res.status(404).json({ erro: 'Usuario não encontrado' });
      res.json(usuario);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao buscar usuario', detalhes: err.message });
    }
  },

  async updateUsuarioController(req, res) {
    try {
      const usuario = await UsuarioService.updateUsuario(req.params.id, req.body);
      res.json(usuario);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao atualizar usuario', detalhes: err.message });
    }
  },

  async deleteUsuarioController(req, res) {
    try {
      await UsuarioService.deleteUsuario(req.params.id);
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao deletar usuario', detalhes: err.message });
    }
  },
};

module.exports = UsuarioController;