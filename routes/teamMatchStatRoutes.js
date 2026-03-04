const express = require("express");
const {
  getTeamMatchStats,
  getTeamMatchStatById,
  createTeamMatchStat,
  updateTeamMatchStat,
  deleteTeamMatchStat,
} = require("../controllers/teamMatchStatController");

const router = express.Router();

// GET    /team-match-stats
router.get("/", getTeamMatchStats);
// GET    /team-match-stats/:team_match_stat_id
router.get("/:team_match_stat_id", getTeamMatchStatById);
// POST   /team-match-stats
router.post("/", createTeamMatchStat);
// PUT    /team-match-stats/:team_match_stat_id
router.put("/:team_match_stat_id", updateTeamMatchStat);
// DELETE /team-match-stats/:team_match_stat_id
router.delete("/:team_match_stat_id", deleteTeamMatchStat);

module.exports = router;

