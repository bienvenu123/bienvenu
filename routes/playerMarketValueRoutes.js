const express = require("express");
const {
  getPlayerMarketValues,
  getPlayerMarketValueById,
  createPlayerMarketValue,
  updatePlayerMarketValue,
  deletePlayerMarketValue,
} = require("../controllers/playerMarketValueController");

const router = express.Router();

// GET    /player-market-values
router.get("/", getPlayerMarketValues);
// GET    /player-market-values/:market_value_id
router.get("/:market_value_id", getPlayerMarketValueById);
// POST   /player-market-values
router.post("/", createPlayerMarketValue);
// PUT    /player-market-values/:market_value_id
router.put("/:market_value_id", updatePlayerMarketValue);
// DELETE /player-market-values/:market_value_id
router.delete("/:market_value_id", deletePlayerMarketValue);

module.exports = router;

