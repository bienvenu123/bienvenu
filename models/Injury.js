const mongoose = require("mongoose");

const injurySchema = new mongoose.Schema(
  {
    injury_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    player_id: { type: Number, required: true, index: true, min: 1 },
    injury_type: { type: String, required: true, trim: true, maxlength: 100 },
    injury_date: { type: Date, required: true, index: true },
    expected_return_date: { type: Date, default: null },
    actual_return_date: { type: Date, default: null },
    severity: { type: String, required: true, enum: ["minor", "moderate", "severe"], index: true },
    matches_missed: { type: Number, default: 0, min: 0 },
  },
  { collection: "injuries", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Injury", injurySchema);

