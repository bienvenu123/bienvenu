const express = require("express");
const {
  getMatches,
  getMatchById,
  createMatch,
  updateMatch,
  deleteMatch,
} = require("../controllers/matchController");

const router = express.Router();

// GET    /matches
router.get("/", getMatches);
// GET    /matches/:match_id
router.get("/:match_id", getMatchById);
// POST   /matches
router.post("/", createMatch);
// PUT    /matches/:match_id
router.put("/:match_id", updateMatch);
// DELETE /matches/:match_id
router.delete("/:match_id", deleteMatch);

module.exports = router;

