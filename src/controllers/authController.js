const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

function tokenFor(user) {
  return jwt.sign(
    { id: user._id.toString(), tipo: user.tipo, nome: user.nome },
    process.env.JWT_SECRET,
    { expiresIn: "8h" }
  );
}

async function register(req, res) {
  try {
    const { nome, email, senha, tipo, crm, especialidade } = req.body;

    if (!nome || !email || !senha || !tipo) {
      return res.status(400).json({ message: "nome, email, senha e tipo são obrigatórios." });
    }

    const exists = await User.findOne({ email });
    if (exists) return res.status(409).json({ message: "E-mail já cadastrado." });

    const hash = await bcrypt.hash(senha, 10);
    const user = await User.create({ nome, email, senha: hash, tipo, crm, especialidade });

    return res.status(201).json({
      id: user._id,
      nome: user.nome,
      email: user.email,
      tipo: user.tipo
    });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao cadastrar usuário.", error: error.message });
  }
}

async function login(req, res) {
  try {
    const { email, senha } = req.body;
    const user = await User.findOne({ email });

    if (!user || !(await bcrypt.compare(senha, user.senha))) {
      return res.status(401).json({ message: "E-mail ou senha inválidos." });
    }

    return res.json({
      message: "Login realizado com sucesso.",
      token: tokenFor(user),
      user: {
        id: user._id,
        nome: user.nome,
        email: user.email,
        tipo: user.tipo
      }
    });
  } catch (error) {
    return res.status(500).json({ message: "Erro ao realizar login.", error: error.message });
  }
}

module.exports = { register, login };
