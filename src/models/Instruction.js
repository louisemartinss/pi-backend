const mongoose = require("mongoose");

const instructionSchema = new mongoose.Schema({
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  medico: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  titulo: { type: String, required: true },
  texto: { type: String, required: true },
  entendido: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model("Instruction", instructionSchema);
