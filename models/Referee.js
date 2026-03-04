const mongoose = require("mongoose");

const refereeSchema = new mongoose.Schema(
  {
    referee_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    first_name: { type: String, required: true, trim: true, maxlength: 100 },
    last_name: { type: String, required: true, trim: true, maxlength: 100 },
    country_id: { type: Number, required: true, index: true, min: 1 },
    date_of_birth: { type: Date, required: true },
    is_active: { type: Boolean, default: true, index: true },
  },
  { collection: "referees", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Referee", refereeSchema);

