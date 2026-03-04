const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema(
  {
    player_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    first_name: { type: String, required: true, trim: true, maxlength: 100 },
    last_name: { type: String, required: true, trim: true, maxlength: 100 },
    date_of_birth: { type: Date, required: true },
    nationality_id: { type: Number, required: true, index: true, min: 1 },
    second_nationality_id: { type: Number, default: null, index: true, min: 1 },
    height_cm: { type: Number, default: null, min: 0 },
    weight_kg: { type: Number, default: null, min: 0 },
    preferred_foot: { type: String, enum: ["left", "right", "both"], default: null },
    photo_url: { type: String, trim: true, maxlength: 255, default: null },
    shirt_number: { type: Number, default: null, min: 0, max: 99 },
    is_active: { type: Boolean, default: true, index: true },
  },
  { collection: "players", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Player", playerSchema);

