const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  nome: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  senha: { type: String, required: true },
  tipo: {
    type: String,
    enum: ["paciente", "medico", "administrador"],
    required: true
  },
  crm: { type: String, default: null },
  especialidade: { type: String, default: null }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
