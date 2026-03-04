const mongoose = require("mongoose");

const { Decimal128 } = mongoose.Schema.Types;

const playerSeasonStatSchema = new mongoose.Schema(
  {
    season_stat_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    player_id: { type: Number, required: true, index: true, min: 1 },
    team_id: { type: Number, required: true, index: true, min: 1 },
    season_id: { type: Number, required: true, index: true, min: 1 },
    league_id: { type: Number, required: true, index: true, min: 1 },
    appearances: { type: Number, default: 0, min: 0 },
    minutes_played: { type: Number, default: 0, min: 0 },
    goals: { type: Number, default: 0, min: 0 },
    assists: { type: Number, default: 0, min: 0 },
    yellow_cards: { type: Number, default: 0, min: 0 },
    red_cards: { type: Number, default: 0, min: 0 },
    clean_sheets: { type: Number, default: 0, min: 0 },
    shots: { type: Number, default: 0, min: 0 },
    shots_on_target: { type: Number, default: 0, min: 0 },
    pass_completion_rate: { type: Decimal128, default: null },
    average_rating: { type: Decimal128, default: null },
  },
  { collection: "player_season_stats", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("PlayerSeasonStat", playerSeasonStatSchema);

