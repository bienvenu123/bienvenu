const mongoose = require("mongoose");

const { Decimal128 } = mongoose.Schema.Types;

const playerMarketValueSchema = new mongoose.Schema(
  {
    market_value_id: {
      type: Number,
      required: true,
      unique: true,
      index: true,
      min: 1,
    },
    player_id: { type: Number, required: true, index: true, min: 1 },
    value_eur: { type: Decimal128, required: true },
    valuation_date: { type: Date, required: true, index: true },
    source: { type: String, trim: true, maxlength: 50, default: null },
  },
  { collection: "player_market_values", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("PlayerMarketValue", playerMarketValueSchema);

