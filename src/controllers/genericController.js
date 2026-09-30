function makeController(Model) {
  const isPaciente = (req) => req.user.tipo === "paciente";

  return {
    async list(req, res) {
      try {
        const filter = isPaciente(req) ? { paciente: req.user.id } : {};
        const data = await Model.find(filter).sort({ createdAt: -1 });
        res.json(data);
      } catch (error) {
        res.status(500).json({ message: "Erro ao listar registros.", error: error.message });
      }
    },

    async create(req, res) {
      try {
        const payload = { ...req.body };
        if (isPaciente(req)) payload.paciente = req.user.id;
        const data = await Model.create(payload);
        res.status(201).json(data);
      } catch (error) {
        res.status(400).json({ message: "Erro ao criar registro.", error: error.message });
      }
    },

    async update(req, res) {
      try {
        const filter = { _id: req.params.id };
        if (isPaciente(req)) filter.paciente = req.user.id;
        const payload = { ...req.body };
        if (isPaciente(req)) delete payload.paciente;
        const data = await Model.findOneAndUpdate(filter, payload, { new: true, runValidators: true });
        if (!data) return res.status(404).json({ message: "Registro não encontrado." });
        res.json(data);
      } catch (error) {
        res.status(400).json({ message: "Erro ao atualizar registro.", error: error.message });
      }
    },

    async remove(req, res) {
      try {
        const filter = { _id: req.params.id };
        if (isPaciente(req)) filter.paciente = req.user.id;
        const data = await Model.findOneAndDelete(filter);
        if (!data) return res.status(404).json({ message: "Registro não encontrado." });
        res.json({ message: "Registro excluído com sucesso." });
      } catch (error) {
        res.status(400).json({ message: "Erro ao excluir registro.", error: error.message });
      }
    }
  };
}

module.exports = makeController;