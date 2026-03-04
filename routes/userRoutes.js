const express = require("express");
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

// GET    /users
router.get("/", getUsers);
// GET    /users/:user_id
router.get("/:user_id", getUserById);
// POST   /users
router.post("/", createUser);
// PUT    /users/:user_id
router.put("/:user_id", updateUser);
// DELETE /users/:user_id
router.delete("/:user_id", deleteUser);

module.exports = router;

