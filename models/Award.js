const mongoose = require("mongoose");

const awardSchema = new mongoose.Schema(
  {
    award_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    name: { type: String, required: true, trim: true, maxlength: 150 },
    category: { type: String, required: true, enum: ["player", "team", "manager"], index: true },
    level: {
      type: String,
      required: true,
      enum: ["individual", "team", "league", "international"],
      index: true,
    },
    description: { type: String, default: null },
  },
  { collection: "awards", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Award", awardSchema);

