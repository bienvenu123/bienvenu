const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema(
  {
    match_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    league_id: { type: Number, required: true, index: true, min: 1 },
    season_id: { type: Number, required: true, index: true, min: 1 },
    home_team_id: { type: Number, required: true, index: true, min: 1 },
    away_team_id: { type: Number, required: true, index: true, min: 1 },
    match_date: { type: Date, required: true, index: true },
    venue: { type: String, trim: true, maxlength: 100, default: null },
    matchweek: { type: Number, default: null, min: 0 },
    home_score: { type: Number, default: null, min: 0 },
    away_score: { type: Number, default: null, min: 0 },
    home_halftime_score: { type: Number, default: null, min: 0 },
    away_halftime_score: { type: Number, default: null, min: 0 },
    status: {
      type: String,
      required: true,
      enum: ["scheduled", "live", "finished", "postponed", "cancelled"],
      default: "scheduled",
      index: true,
    },
    attendance: { type: Number, default: null, min: 0 },
    referee_id: { type: Number, default: null, index: true, min: 1 },
  },
  { collection: "matches", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Match", matchSchema);

