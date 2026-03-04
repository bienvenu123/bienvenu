const mongoose = require("mongoose");

const leagueSchema = new mongoose.Schema(
  {
    league_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    name: { type: String, required: true, trim: true, maxlength: 100 },
    country_id: { type: Number, required: true, index: true, min: 1 },
    level: { type: Number, default: null, min: 0 },
    type: {
      type: String,
      required: true,
      enum: ["domestic", "international", "cup"],
      index: true,
    },
    logo_url: { type: String, trim: true, maxlength: 255, default: null },
    founded_year: { type: Number, default: null, min: 1800, max: 2100 },
    is_active: { type: Boolean, default: true, index: true },
  },
  { collection: "leagues", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("League", leagueSchema);

