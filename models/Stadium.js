const mongoose = require("mongoose");

const stadiumSchema = new mongoose.Schema(
  {
    stadium_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    name: { type: String, required: true, trim: true, maxlength: 150 },
    city: { type: String, required: true, trim: true, maxlength: 100 },
    country_id: { type: Number, required: true, index: true, min: 1 },
    capacity: { type: Number, default: null, min: 0 },
    built_year: { type: Number, default: null, min: 1800, max: 2100 },
    surface_type: { type: String, trim: true, maxlength: 50, default: null },
    photo_url: { type: String, trim: true, maxlength: 255, default: null },
  },
  { collection: "stadiums", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Stadium", stadiumSchema);

