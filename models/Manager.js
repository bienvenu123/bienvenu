const mongoose = require("mongoose");

const managerSchema = new mongoose.Schema(
  {
    manager_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    first_name: { type: String, required: true, trim: true, maxlength: 100 },
    last_name: { type: String, required: true, trim: true, maxlength: 100 },
    date_of_birth: { type: Date, required: true },
    nationality_id: { type: Number, required: true, index: true, min: 1 },
    photo_url: { type: String, trim: true, maxlength: 255, default: null },
    is_active: { type: Boolean, default: true, index: true },
  },
  { collection: "managers", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Manager", managerSchema);

