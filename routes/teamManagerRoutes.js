const express = require("express");
const {
  getTeamManagers,
  getTeamManagerById,
  createTeamManager,
  updateTeamManager,
  deleteTeamManager,
} = require("../controllers/teamManagerController");

const router = express.Router();

// GET    /team-managers
router.get("/", getTeamManagers);
// GET    /team-managers/:team_manager_id
router.get("/:team_manager_id", getTeamManagerById);
// POST   /team-managers
router.post("/", createTeamManager);
// PUT    /team-managers/:team_manager_id
router.put("/:team_manager_id", updateTeamManager);
// DELETE /team-managers/:team_manager_id
router.delete("/:team_manager_id", deleteTeamManager);

module.exports = router;

