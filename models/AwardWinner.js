const mongoose = require("mongoose");

const awardWinnerSchema = new mongoose.Schema(
  {
    winner_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    award_id: { type: Number, required: true, index: true, min: 1 },
    player_id: { type: Number, default: null, index: true, min: 1 },
    team_id: { type: Number, default: null, index: true, min: 1 },
    manager_id: { type: Number, default: null, index: true, min: 1 },
    season_id: { type: Number, default: null, index: true, min: 1 },
    year: { type: Number, required: true, min: 1800, max: 2100, index: true },
  },
  { collection: "award_winners", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("AwardWinner", awardWinnerSchema);

