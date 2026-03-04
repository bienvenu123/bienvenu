const express = require("express");
const {
  getTeams,
  getTeamById,
  createTeam,
  updateTeam,
  deleteTeam,
} = require("../controllers/teamController");

const router = express.Router();

// GET    /teams
router.get("/", getTeams);
// GET    /teams/:team_id
router.get("/:team_id", getTeamById);
// POST   /teams
router.post("/", createTeam);
// PUT    /teams/:team_id
router.put("/:team_id", updateTeam);
// DELETE /teams/:team_id
router.delete("/:team_id", deleteTeam);

module.exports = router;

