const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema(
  {
    country_id: {
      type: Number,
      required: true,
      unique: true,
      index: true,
      min: 1,
    },
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    code: {
      type: String,
      required: true,
      trim: true,
      uppercase: true,
      minlength: 2,
      maxlength: 3,
      index: true,
    },
    flag_url: {
      type: String,
      trim: true,
      maxlength: 255,
      default: null,
    },
    continent: {
      type: String,
      trim: true,
      maxlength: 50,
      default: null,
    },
  },
  {
    collection: "countries",
    timestamps: true,
    versionKey: false,
  }
);

countrySchema.index({ code: 1 }, { unique: true });

module.exports = mongoose.model("Country", countrySchema);

