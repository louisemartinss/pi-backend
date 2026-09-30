const express = require("express");
const { authenticate } = require("../middlewares/authMiddleware");

function crudRoutes(controller) {
  const router = express.Router();
  router.use(authenticate);
  router.get("/", controller.list);
  router.post("/", controller.create);
  router.put("/:id", controller.update);
  router.delete("/:id", controller.remove);
  return router;
}

module.exports = crudRoutes;
