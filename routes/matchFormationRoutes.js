const express = require("express");
const {
  getMatchFormations,
  getMatchFormationById,
  createMatchFormation,
  updateMatchFormation,
  deleteMatchFormation,
} = require("../controllers/matchFormationController");

const router = express.Router();

// GET    /match-formations
router.get("/", getMatchFormations);
// GET    /match-formations/:formation_id
router.get("/:formation_id", getMatchFormationById);
// POST   /match-formations
router.post("/", createMatchFormation);
// PUT    /match-formations/:formation_id
router.put("/:formation_id", updateMatchFormation);
// DELETE /match-formations/:formation_id
router.delete("/:formation_id", deleteMatchFormation);

module.exports = router;

