const mongoose = require("mongoose");

const matchFormationSchema = new mongoose.Schema(
  {
    formation_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    match_id: { type: Number, required: true, index: true, min: 1 },
    team_id: { type: Number, required: true, index: true, min: 1 },
    formation: { type: String, required: true, trim: true, maxlength: 10 },
    formation_type: { type: String, trim: true, maxlength: 50, default: null },
  },
  { collection: "match_formations", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("MatchFormation", matchFormationSchema);

