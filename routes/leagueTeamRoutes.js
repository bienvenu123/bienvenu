const express = require("express");
const {
  getLeagueTeams,
  getLeagueTeamById,
  createLeagueTeam,
  updateLeagueTeam,
  deleteLeagueTeam,
} = require("../controllers/leagueTeamController");

const router = express.Router();

// GET    /league-teams
router.get("/", getLeagueTeams);
// GET    /league-teams/:league_team_id
router.get("/:league_team_id", getLeagueTeamById);
// POST   /league-teams
router.post("/", createLeagueTeam);
// PUT    /league-teams/:league_team_id
router.put("/:league_team_id", updateLeagueTeam);
// DELETE /league-teams/:league_team_id
router.delete("/:league_team_id", deleteLeagueTeam);

module.exports = router;

