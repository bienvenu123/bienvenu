const express = require("express");
const {
  getPlayerMatchStats,
  getPlayerMatchStatById,
  createPlayerMatchStat,
  updatePlayerMatchStat,
  deletePlayerMatchStat,
} = require("../controllers/playerMatchStatController");

const router = express.Router();

// GET    /player-match-stats
router.get("/", getPlayerMatchStats);
// GET    /player-match-stats/:stat_id
router.get("/:stat_id", getPlayerMatchStatById);
// POST   /player-match-stats
router.post("/", createPlayerMatchStat);
// PUT    /player-match-stats/:stat_id
router.put("/:stat_id", updatePlayerMatchStat);
// DELETE /player-match-stats/:stat_id
router.delete("/:stat_id", deletePlayerMatchStat);

module.exports = router;

