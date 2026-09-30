const express = require("express");
const History = require("../models/History");
const { authenticate } = require("../middlewares/authMiddleware");

const router = express.Router();
router.use(authenticate);

router.get("/", async (req, res) => {
  try {
    const filter = req.user.tipo === "paciente" ? { paciente: req.user.id } : {};
    const data = await History.find(filter).sort({ data: -1 });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Erro ao consultar histórico.", error: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const payload = { ...req.body };
   if (req.user.tipo === "paciente") payload.paciente = req.user.id;
    const data = await History.create(payload);
    res.status(201).json(data);
  } catch (error) {
    res.status(400).json({ message: "Erro ao criar histórico.", error: error.message });
  }
});

module.exports = router;
