const dns = require("node:dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDatabase = require("./config/database");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./docs/swagger");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const crudRoutes = require("./routes/crudRoutes");
const historyRoutes = require("./routes/historyRoutes");

const makeController = require("./controllers/genericController");
const Medication = require("./models/Medication");
const Appointment = require("./models/Appointment");
const Instruction = require("./models/Instruction");
const Report = require("./models/Report");
const Question = require("./models/Question");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    app: "Recordar",
    message: "API do Recordar funcionando!",
    version: "1.0.0"
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/medications", crudRoutes(makeController(Medication)));
app.use("/api/appointments", crudRoutes(makeController(Appointment)));
app.use("/api/instructions", crudRoutes(makeController(Instruction)));
app.use("/api/reports", crudRoutes(makeController(Report)));
app.use("/api/questions", crudRoutes(makeController(Question)));
app.use("/api/history", historyRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT || 3000;

async function start() {
  await connectDatabase();
  app.listen(PORT, () => {
    console.log(`Servidor do Recordar rodando em http://localhost:${PORT}`);
    console.log(`Swagger disponível em http://localhost:${PORT}/api-docs`);
  });
}

start();
