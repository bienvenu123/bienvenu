const express = require("express");
const {
  getReferees,
  getRefereeById,
  createReferee,
  updateReferee,
  deleteReferee,
} = require("../controllers/refereeController");

const router = express.Router();

// GET    /referees
router.get("/", getReferees);
// GET    /referees/:referee_id
router.get("/:referee_id", getRefereeById);
// POST   /referees
router.post("/", createReferee);
// PUT    /referees/:referee_id
router.put("/:referee_id", updateReferee);
// DELETE /referees/:referee_id
router.delete("/:referee_id", deleteReferee);

module.exports = router;

