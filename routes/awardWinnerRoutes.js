const express = require("express");
const {
  getAwardWinners,
  getAwardWinnerById,
  createAwardWinner,
  updateAwardWinner,
  deleteAwardWinner,
} = require("../controllers/awardWinnerController");

const router = express.Router();

// GET    /award-winners
router.get("/", getAwardWinners);
// GET    /award-winners/:winner_id
router.get("/:winner_id", getAwardWinnerById);
// POST   /award-winners
router.post("/", createAwardWinner);
// PUT    /award-winners/:winner_id
router.put("/:winner_id", updateAwardWinner);
// DELETE /award-winners/:winner_id
router.delete("/:winner_id", deleteAwardWinner);

module.exports = router;

