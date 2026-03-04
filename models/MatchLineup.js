const mongoose = require("mongoose");

const matchLineupSchema = new mongoose.Schema(
  {
    lineup_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    match_id: { type: Number, required: true, index: true, min: 1 },
    team_id: { type: Number, required: true, index: true, min: 1 },
    player_id: { type: Number, required: true, index: true, min: 1 },
    position_id: { type: Number, required: true, index: true, min: 1 },
    is_starter: { type: Boolean, default: false, index: true },
    formation_position: { type: String, trim: true, maxlength: 10, default: null },
    shirt_number: { type: Number, default: null, min: 0, max: 99 },
  },
  { collection: "match_lineups", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("MatchLineup", matchLineupSchema);

