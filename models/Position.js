const mongoose = require("mongoose");

const positionSchema = new mongoose.Schema(
  {
    position_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    name: { type: String, required: true, trim: true, maxlength: 50 },
    short_name: { type: String, required: true, trim: true, maxlength: 5 },
    category: {
      type: String,
      required: true,
      enum: ["goalkeeper", "defender", "midfielder", "forward"],
      index: true,
    },
  },
  { collection: "positions", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Position", positionSchema);

