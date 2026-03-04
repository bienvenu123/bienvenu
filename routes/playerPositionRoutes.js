const express = require("express");
const {
  getPlayerPositions,
  getPlayerPositionById,
  createPlayerPosition,
  updatePlayerPosition,
  deletePlayerPosition,
} = require("../controllers/playerPositionController");

const router = express.Router();

// GET    /player-positions
router.get("/", getPlayerPositions);
// GET    /player-positions/:player_position_id
router.get("/:player_position_id", getPlayerPositionById);
// POST   /player-positions
router.post("/", createPlayerPosition);
// PUT    /player-positions/:player_position_id
router.put("/:player_position_id", updatePlayerPosition);
// DELETE /player-positions/:player_position_id
router.delete("/:player_position_id", deletePlayerPosition);

module.exports = router;

