const mongoose = require("mongoose");

const historySchema = new mongoose.Schema({
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  tipo: { type: String, required: true },
  descricao: { type: String, required: true },
  data: { type: Date, default: Date.now },
  referenciaId: { type: mongoose.Schema.Types.ObjectId, default: null }
}, { timestamps: true });

module.exports = mongoose.model("History", historySchema);
