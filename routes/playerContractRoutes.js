const express = require("express");
const {
  getPlayerContracts,
  getPlayerContractById,
  createPlayerContract,
  updatePlayerContract,
  deletePlayerContract,
} = require("../controllers/playerContractController");

const router = express.Router();

// GET    /player-contracts
router.get("/", getPlayerContracts);
// GET    /player-contracts/:contract_id
router.get("/:contract_id", getPlayerContractById);
// POST   /player-contracts
router.post("/", createPlayerContract);
// PUT    /player-contracts/:contract_id
router.put("/:contract_id", updatePlayerContract);
// DELETE /player-contracts/:contract_id
router.delete("/:contract_id", deletePlayerContract);

module.exports = router;

