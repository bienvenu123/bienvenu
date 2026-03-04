const express = require("express");
const {
  getAwards,
  getAwardById,
  createAward,
  updateAward,
  deleteAward,
} = require("../controllers/awardController");

const router = express.Router();

// GET    /awards
router.get("/", getAwards);
// GET    /awards/:award_id
router.get("/:award_id", getAwardById);
// POST   /awards
router.post("/", createAward);
// PUT    /awards/:award_id
router.put("/:award_id", updateAward);
// DELETE /awards/:award_id
router.delete("/:award_id", deleteAward);

module.exports = router;

