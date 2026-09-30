const mongoose = require("mongoose");

const medicationSchema = new mongoose.Schema({
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  nome: { type: String, required: true },
  dosagem: { type: String, required: true },
  horario: { type: String, required: true },
  frequencia: { type: String, default: "Diária" },
  status: { type: String, enum: ["pendente", "confirmado", "nao_confirmado"], default: "pendente" },
  observacoes: { type: String, default: "" }
}, { timestamps: true });

module.exports = mongoose.model("Medication", medicationSchema);
