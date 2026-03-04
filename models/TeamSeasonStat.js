const mongoose = require("mongoose");

const teamSeasonStatSchema = new mongoose.Schema(
  {
    team_season_stat_id: {
      type: Number,
      required: true,
      unique: true,
      index: true,
      min: 1,
    },
    team_id: { type: Number, required: true, index: true, min: 1 },
    season_id: { type: Number, required: true, index: true, min: 1 },
    league_id: { type: Number, required: true, index: true, min: 1 },
    matches_played: { type: Number, default: 0, min: 0 },
    wins: { type: Number, default: 0, min: 0 },
    draws: { type: Number, default: 0, min: 0 },
    losses: { type: Number, default: 0, min: 0 },
    goals_for: { type: Number, default: 0, min: 0 },
    goals_against: { type: Number, default: 0, min: 0 },
    goal_difference: { type: Number, default: 0 },
    points: { type: Number, default: 0, min: 0 },
    clean_sheets: { type: Number, default: 0, min: 0 },
    position: { type: Number, default: null, min: 1 },
    home_wins: { type: Number, default: 0, min: 0 },
    home_draws: { type: Number, default: 0, min: 0 },
    home_losses: { type: Number, default: 0, min: 0 },
    away_wins: { type: Number, default: 0, min: 0 },
    away_draws: { type: Number, default: 0, min: 0 },
    away_losses: { type: Number, default: 0, min: 0 },
  },
  { collection: "team_season_stats", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("TeamSeasonStat", teamSeasonStatSchema);

