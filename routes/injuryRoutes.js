const express = require("express");
const {
  getInjuries,
  getInjuryById,
  createInjury,
  updateInjury,
  deleteInjury,
} = require("../controllers/injuryController");

const router = express.Router();

// GET    /injuries
router.get("/", getInjuries);
// GET    /injuries/:injury_id
router.get("/:injury_id", getInjuryById);
// POST   /injuries
router.post("/", createInjury);
// PUT    /injuries/:injury_id
router.put("/:injury_id", updateInjury);
// DELETE /injuries/:injury_id
router.delete("/:injury_id", deleteInjury);

module.exports = router;

