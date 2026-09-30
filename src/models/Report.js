const mongoose = require("mongoose");

const reportSchema = new mongoose.Schema({
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  tipo: { type: String, default: "relato" },
  descricao: { type: String, required: true },
  data: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model("Report", reportSchema);
