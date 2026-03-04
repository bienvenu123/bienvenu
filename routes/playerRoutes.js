const express = require("express");
const {
  getPlayers,
  getPlayerById,
  createPlayer,
  updatePlayer,
  deletePlayer,
} = require("../controllers/playerController");

const router = express.Router();

// GET    /players
router.get("/", getPlayers);
// GET    /players/:player_id
router.get("/:player_id", getPlayerById);
// POST   /players
router.post("/", createPlayer);
// PUT    /players/:player_id
router.put("/:player_id", updatePlayer);
// DELETE /players/:player_id
router.delete("/:player_id", deletePlayer);

module.exports = router;

