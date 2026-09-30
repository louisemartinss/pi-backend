const express = require("express");
const controller = require("../controllers/userController");
const { authenticate, authorize } = require("../middlewares/authMiddleware");

const router = express.Router();

router.use(authenticate);
router.get("/", authorize("administrador", "medico"), controller.list);
router.get("/:id", controller.getById);
router.post("/", authorize("administrador"), controller.create);
router.put("/:id", controller.update);
router.delete("/:id", authorize("administrador"), controller.remove);

module.exports = router;
