const mongoose = require("mongoose");

const matchEventSchema = new mongoose.Schema(
  {
    event_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    match_id: { type: Number, required: true, index: true, min: 1 },
    team_id: { type: Number, required: true, index: true, min: 1 },
    player_id: { type: Number, required: true, index: true, min: 1 },
    event_type: {
      type: String,
      required: true,
      enum: ["goal", "own_goal", "penalty", "yellow_card", "red_card", "substitution"],
      index: true,
    },
    minute: { type: Number, required: true, min: 0, max: 130 },
    extra_time_minute: { type: Number, default: null, min: 0, max: 30 },
    assist_player_id: { type: Number, default: null, index: true, min: 1 },
    substituted_player_id: { type: Number, default: null, index: true, min: 1 },
    description: { type: String, default: null },
  },
  { collection: "match_events", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("MatchEvent", matchEventSchema);

