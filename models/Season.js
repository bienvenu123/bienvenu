const mongoose = require("mongoose");

const seasonSchema = new mongoose.Schema(
  {
    season_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    league_id: { type: Number, required: true, index: true, min: 1 },
    name: { type: String, required: true, trim: true, maxlength: 20 },
    start_date: { type: Date, required: true },
    end_date: { type: Date, required: true },
    is_current: { type: Boolean, default: false, index: true },
  },
  { collection: "seasons", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Season", seasonSchema);

