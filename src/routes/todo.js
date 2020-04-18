const express = require("express");
const router = express.Router();

const controller = require("../controllers/todoController");

router.get("/todos", controller.getTodos);
router.post("/todos", controller.addTodo);

module.exports = router;
