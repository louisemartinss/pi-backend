const bcrypt = require("bcryptjs");
const User = require("../models/User");

async function create(req, res) {
  try {
    const { nome, email, senha, tipo, crm, especialidade } = req.body;
    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ message: "E-mail já cadastrado." });

    const hash = await bcrypt.hash(senha, 10);
    const user = await User.create({ nome, email, senha: hash, tipo, crm, especialidade });
    const safe = user.toObject();
    delete safe.senha;
    res.status(201).json(safe);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar usuário.", error: error.message });
  }
}

async function list(req, res) {
  const users = await User.find().select("-senha");
  res.json(users);
}

async function getById(req, res) {
  const user = await User.findById(req.params.id).select("-senha");
  if (!user) return res.status(404).json({ message: "Usuário não encontrado." });
  res.json(user);
}

async function update(req, res) {
  try {
    const data = { ...req.body };
    if (data.senha) data.senha = await bcrypt.hash(data.senha, 10);
    const user = await User.findByIdAndUpdate(req.params.id, data, { new: true, runValidators: true }).select("-senha");
    if (!user) return res.status(404).json({ message: "Usuário não encontrado." });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Erro ao atualizar usuário.", error: error.message });
  }
}

async function remove(req, res) {
  const user = await User.findByIdAndDelete(req.params.id);
  if (!user) return res.status(404).json({ message: "Usuário não encontrado." });
  res.json({ message: "Usuário excluído com sucesso." });
}

module.exports = { create, list, getById, update, remove };
