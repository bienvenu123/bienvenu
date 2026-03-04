const express = require("express");
const {
  getMatchLineups,
  getMatchLineupById,
  createMatchLineup,
  updateMatchLineup,
  deleteMatchLineup,
} = require("../controllers/matchLineupController");

const router = express.Router();

// GET    /match-lineups
router.get("/", getMatchLineups);
// GET    /match-lineups/:lineup_id
router.get("/:lineup_id", getMatchLineupById);
// POST   /match-lineups
router.post("/", createMatchLineup);
// PUT    /match-lineups/:lineup_id
router.put("/:lineup_id", updateMatchLineup);
// DELETE /match-lineups/:lineup_id
router.delete("/:lineup_id", deleteMatchLineup);

module.exports = router;

