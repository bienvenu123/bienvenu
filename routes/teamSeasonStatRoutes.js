const express = require("express");
const {
  getTeamSeasonStats,
  getTeamSeasonStatById,
  createTeamSeasonStat,
  updateTeamSeasonStat,
  deleteTeamSeasonStat,
} = require("../controllers/teamSeasonStatController");

const router = express.Router();

// GET    /team-season-stats
router.get("/", getTeamSeasonStats);
// GET    /team-season-stats/:team_season_stat_id
router.get("/:team_season_stat_id", getTeamSeasonStatById);
// POST   /team-season-stats
router.post("/", createTeamSeasonStat);
// PUT    /team-season-stats/:team_season_stat_id
router.put("/:team_season_stat_id", updateTeamSeasonStat);
// DELETE /team-season-stats/:team_season_stat_id
router.delete("/:team_season_stat_id", deleteTeamSeasonStat);

module.exports = router;

