const express = require("express");
const {
  getMatchEvents,
  getMatchEventById,
  createMatchEvent,
  updateMatchEvent,
  deleteMatchEvent,
} = require("../controllers/matchEventController");

const router = express.Router();

// GET    /match-events
router.get("/", getMatchEvents);
// GET    /match-events/:event_id
router.get("/:event_id", getMatchEventById);
// POST   /match-events
router.post("/", createMatchEvent);
// PUT    /match-events/:event_id
router.put("/:event_id", updateMatchEvent);
// DELETE /match-events/:event_id
router.delete("/:event_id", deleteMatchEvent);

module.exports = router;

