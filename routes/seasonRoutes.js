const express = require("express");
const {
  getSeasons,
  getSeasonById,
  createSeason,
  updateSeason,
  deleteSeason,
} = require("../controllers/seasonController");

const router = express.Router();

// GET    /seasons
router.get("/", getSeasons);
// GET    /seasons/:season_id
router.get("/:season_id", getSeasonById);
// POST   /seasons
router.post("/", createSeason);
// PUT    /seasons/:season_id
router.put("/:season_id", updateSeason);
// DELETE /seasons/:season_id
router.delete("/:season_id", deleteSeason);

module.exports = router;

