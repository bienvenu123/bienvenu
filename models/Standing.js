const mongoose = require("mongoose");

const standingSchema = new mongoose.Schema(
  {
    standing_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    league_id: { type: Number, required: true, index: true, min: 1 },
    season_id: { type: Number, required: true, index: true, min: 1 },
    team_id: { type: Number, required: true, index: true, min: 1 },
    position: { type: Number, required: true, min: 1 },
    played: { type: Number, default: 0, min: 0 },
    won: { type: Number, default: 0, min: 0 },
    drawn: { type: Number, default: 0, min: 0 },
    lost: { type: Number, default: 0, min: 0 },
    goals_for: { type: Number, default: 0, min: 0 },
    goals_against: { type: Number, default: 0, min: 0 },
    goal_difference: { type: Number, default: 0 },
    points: { type: Number, default: 0, min: 0 },
    form: { type: String, trim: true, maxlength: 10, default: null },
    updated_at: { type: Date, default: Date.now, index: true },
  },
  { collection: "standings", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Standing", standingSchema);

