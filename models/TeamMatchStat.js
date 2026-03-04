const mongoose = require("mongoose");

const { Decimal128 } = mongoose.Schema.Types;

const teamMatchStatSchema = new mongoose.Schema(
  {
    team_match_stat_id: {
      type: Number,
      required: true,
      unique: true,
      index: true,
      min: 1,
    },
    match_id: { type: Number, required: true, index: true, min: 1 },
    team_id: { type: Number, required: true, index: true, min: 1 },
    possession_percentage: { type: Decimal128, default: null },
    shots: { type: Number, default: 0, min: 0 },
    shots_on_target: { type: Number, default: 0, min: 0 },
    shots_off_target: { type: Number, default: 0, min: 0 },
    blocked_shots: { type: Number, default: 0, min: 0 },
    corners: { type: Number, default: 0, min: 0 },
    offsides: { type: Number, default: 0, min: 0 },
    fouls: { type: Number, default: 0, min: 0 },
    yellow_cards: { type: Number, default: 0, min: 0 },
    red_cards: { type: Number, default: 0, min: 0 },
    passes: { type: Number, default: 0, min: 0 },
    passes_completed: { type: Number, default: 0, min: 0 },
    pass_accuracy: { type: Decimal128, default: null },
    tackles: { type: Number, default: 0, min: 0 },
    saves: { type: Number, default: 0, min: 0 },
  },
  { collection: "team_match_stats", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("TeamMatchStat", teamMatchStatSchema);

