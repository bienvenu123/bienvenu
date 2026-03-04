const express = require("express");
const {
  getStandings,
  getStandingById,
  createStanding,
  updateStanding,
  deleteStanding,
} = require("../controllers/standingController");

const router = express.Router();

// GET    /standings
router.get("/", getStandings);
// GET    /standings/:standing_id
router.get("/:standing_id", getStandingById);
// POST   /standings
router.post("/", createStanding);
// PUT    /standings/:standing_id
router.put("/:standing_id", updateStanding);
// DELETE /standings/:standing_id
router.delete("/:standing_id", deleteStanding);

module.exports = router;

