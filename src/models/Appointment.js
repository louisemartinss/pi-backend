const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  paciente: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  medico: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  data: { type: Date, required: true },
  horario: { type: String, required: true },
  local: { type: String, default: "" },
  especialidade: { type: String, default: "" },
  orientacoes: { type: String, default: "" },
  status: { type: String, enum: ["agendada", "realizada", "cancelada"], default: "agendada" }
}, { timestamps: true });

module.exports = mongoose.model("Appointment", appointmentSchema);
