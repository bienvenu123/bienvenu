const express = require("express");
const {
  getPlayerSeasonStats,
  getPlayerSeasonStatById,
  createPlayerSeasonStat,
  updatePlayerSeasonStat,
  deletePlayerSeasonStat,
} = require("../controllers/playerSeasonStatController");

const router = express.Router();

// GET    /player-season-stats
router.get("/", getPlayerSeasonStats);
// GET    /player-season-stats/:season_stat_id
router.get("/:season_stat_id", getPlayerSeasonStatById);
// POST   /player-season-stats
router.post("/", createPlayerSeasonStat);
// PUT    /player-season-stats/:season_stat_id
router.put("/:season_stat_id", updatePlayerSeasonStat);
// DELETE /player-season-stats/:season_stat_id
router.delete("/:season_stat_id", deletePlayerSeasonStat);

module.exports = router;

