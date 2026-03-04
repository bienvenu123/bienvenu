const mongoose = require("mongoose");

const { Decimal128 } = mongoose.Schema.Types;

const playerMatchStatSchema = new mongoose.Schema(
  {
    stat_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    match_id: { type: Number, required: true, index: true, min: 1 },
    player_id: { type: Number, required: true, index: true, min: 1 },
    team_id: { type: Number, required: true, index: true, min: 1 },
    minutes_played: { type: Number, default: 0, min: 0 },
    goals: { type: Number, default: 0, min: 0 },
    assists: { type: Number, default: 0, min: 0 },
    shots: { type: Number, default: 0, min: 0 },
    shots_on_target: { type: Number, default: 0, min: 0 },
    passes_completed: { type: Number, default: 0, min: 0 },
    passes_attempted: { type: Number, default: 0, min: 0 },
    tackles: { type: Number, default: 0, min: 0 },
    interceptions: { type: Number, default: 0, min: 0 },
    clearances: { type: Number, default: 0, min: 0 },
    dribbles_completed: { type: Number, default: 0, min: 0 },
    dribbles_attempted: { type: Number, default: 0, min: 0 },
    fouls_committed: { type: Number, default: 0, min: 0 },
    fouls_won: { type: Number, default: 0, min: 0 },
    yellow_cards: { type: Number, default: 0, min: 0 },
    red_cards: { type: Number, default: 0, min: 0 },
    offsides: { type: Number, default: 0, min: 0 },
    saves: { type: Number, default: 0, min: 0 },
    rating: { type: Decimal128, default: null },
  },
  { collection: "player_match_stats", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("PlayerMatchStat", playerMatchStatSchema);

