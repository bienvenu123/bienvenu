const express = require("express");
const {
  getStadiums,
  getStadiumById,
  createStadium,
  updateStadium,
  deleteStadium,
} = require("../controllers/stadiumController");

const router = express.Router();

// GET    /stadiums
router.get("/", getStadiums);
// GET    /stadiums/:stadium_id
router.get("/:stadium_id", getStadiumById);
// POST   /stadiums
router.post("/", createStadium);
// PUT    /stadiums/:stadium_id
router.put("/:stadium_id", updateStadium);
// DELETE /stadiums/:stadium_id
router.delete("/:stadium_id", deleteStadium);

module.exports = router;

