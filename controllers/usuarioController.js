const bcrypt = require('bcrypt');
const { Usuario } = require('../models');

async function criarUsuario(req, res) {
  const { usuario, senha, nivel_acesso, flag } = req.body || {};

  if (!usuario || !senha || !nivel_acesso || !flag) {
    return res.status(400).json({ error: 'Requisição inválida' });
  }

  try {
    const senhaHashed = await bcrypt.hash(senha, 10);

    await Usuario.create({
      usuario,
      senha: senhaHashed,
      nivel_acesso,
      flag,
    });

    return res.sendStatus(201)
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao criar o usuário' });
  }
}

module.exports = { criarUsuario };
