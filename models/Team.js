const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema(
  {
    team_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    name: { type: String, required: true, trim: true, maxlength: 100 },
    short_name: { type: String, trim: true, maxlength: 50, default: null },
    country_id: { type: Number, required: true, index: true, min: 1 },
    founded_year: { type: Number, default: null, min: 1800, max: 2100 },
    stadium_name: { type: String, trim: true, maxlength: 100, default: null },
    stadium_capacity: { type: Number, default: null, min: 0 },
    logo_url: { type: String, trim: true, maxlength: 255, default: null },
    primary_color: { type: String, trim: true, maxlength: 7, default: null },
    secondary_color: { type: String, trim: true, maxlength: 7, default: null },
    city: { type: String, trim: true, maxlength: 100, default: null },
    is_active: { type: Boolean, default: true, index: true },
  },
  { collection: "teams", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Team", teamSchema);

