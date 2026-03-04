const express = require("express");
const {
  getLeagues,
  getLeagueById,
  createLeague,
  updateLeague,
  deleteLeague,
} = require("../controllers/leagueController");

const router = express.Router();

// GET    /leagues
router.get("/", getLeagues);
// GET    /leagues/:league_id
router.get("/:league_id", getLeagueById);
// POST   /leagues
router.post("/", createLeague);
// PUT    /leagues/:league_id
router.put("/:league_id", updateLeague);
// DELETE /leagues/:league_id
router.delete("/:league_id", deleteLeague);

module.exports = router;

