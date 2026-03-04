const express = require("express");
const {
  getManagers,
  getManagerById,
  createManager,
  updateManager,
  deleteManager,
} = require("../controllers/managerController");

const router = express.Router();

// GET    /managers
router.get("/", getManagers);
// GET    /managers/:manager_id
router.get("/:manager_id", getManagerById);
// POST   /managers
router.post("/", createManager);
// PUT    /managers/:manager_id
router.put("/:manager_id", updateManager);
// DELETE /managers/:manager_id
router.delete("/:manager_id", deleteManager);

module.exports = router;

