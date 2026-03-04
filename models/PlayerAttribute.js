const mongoose = require("mongoose");

const playerAttributeSchema = new mongoose.Schema(
  {
    attribute_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    player_id: { type: Number, required: true, index: true, min: 1 },
    season_id: { type: Number, required: true, index: true, min: 1 },
    pace: { type: Number, default: null, min: 0, max: 100 },
    shooting: { type: Number, default: null, min: 0, max: 100 },
    passing: { type: Number, default: null, min: 0, max: 100 },
    dribbling: { type: Number, default: null, min: 0, max: 100 },
    defending: { type: Number, default: null, min: 0, max: 100 },
    physical: { type: Number, default: null, min: 0, max: 100 },
    overall_rating: { type: Number, default: null, min: 0, max: 100 },
    potential_rating: { type: Number, default: null, min: 0, max: 100 },
    updated_at: { type: Date, default: Date.now, index: true },
  },
  { collection: "player_attributes", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("PlayerAttribute", playerAttributeSchema);

