const mongoose = require("mongoose");

const playerPositionSchema = new mongoose.Schema(
  {
    player_position_id: {
      type: Number,
      required: true,
      unique: true,
      index: true,
      min: 1,
    },
    player_id: { type: Number, required: true, index: true, min: 1 },
    position_id: { type: Number, required: true, index: true, min: 1 },
    is_primary: { type: Boolean, default: false, index: true },
  },
  { collection: "player_positions", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("PlayerPosition", playerPositionSchema);

