const express = require("express");
const {
  getPlayerAttributes,
  getPlayerAttributeById,
  createPlayerAttribute,
  updatePlayerAttribute,
  deletePlayerAttribute,
} = require("../controllers/playerAttributeController");

const router = express.Router();

// GET    /player-attributes
router.get("/", getPlayerAttributes);
// GET    /player-attributes/:attribute_id
router.get("/:attribute_id", getPlayerAttributeById);
// POST   /player-attributes
router.post("/", createPlayerAttribute);
// PUT    /player-attributes/:attribute_id
router.put("/:attribute_id", updatePlayerAttribute);
// DELETE /player-attributes/:attribute_id
router.delete("/:attribute_id", deletePlayerAttribute);

module.exports = router;

