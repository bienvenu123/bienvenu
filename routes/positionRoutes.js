const express = require("express");
const {
  getPositions,
  getPositionById,
  createPosition,
  updatePosition,
  deletePosition,
} = require("../controllers/positionController");

const router = express.Router();

// GET    /positions
router.get("/", getPositions);
// GET    /positions/:position_id
router.get("/:position_id", getPositionById);
// POST   /positions
router.post("/", createPosition);
// PUT    /positions/:position_id
router.put("/:position_id", updatePosition);
// DELETE /positions/:position_id
router.delete("/:position_id", deletePosition);

module.exports = router;

