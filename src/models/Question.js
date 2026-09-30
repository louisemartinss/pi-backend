const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  pergunta: { type: String, required: true },
  respondida: { type: Boolean, default: false },
  resposta: { type: String, default: "" }
}, { timestamps: true });

module.exports = mongoose.model("Question", questionSchema);
