const { APP_SECRET } = require("../config/env");
const { Usuario } = require("../models");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

async function login(req, res) {
  const { usuario, senha } = req.body;

  try {
    const usuarioModel = await Usuario.findOne({ where: { usuario } });

    if (!usuarioModel) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }

    const validado = await bcrypt.compare(senha, usuarioModel.senha);

    if (!validado) {
      return res.status(401).json({ error: 'Credenciais inválidas' });
    }

    const token = jwt.sign({ userId: usuarioModel.id }, APP_SECRET, { expiresIn: '24h' });

    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro no servidor' });
  }
}

module.exports = {login}