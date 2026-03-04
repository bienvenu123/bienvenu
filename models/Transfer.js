const mongoose = require("mongoose");

const { Decimal128 } = mongoose.Schema.Types;

const transferSchema = new mongoose.Schema(
  {
    transfer_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    player_id: { type: Number, required: true, index: true, min: 1 },
    from_team_id: { type: Number, required: true, index: true, min: 1 },
    to_team_id: { type: Number, required: true, index: true, min: 1 },
    transfer_date: { type: Date, required: true, index: true },
    transfer_fee_eur: { type: Decimal128, default: null },
    transfer_type: {
      type: String,
      required: true,
      enum: ["permanent", "loan", "free", "end_of_contract"],
      index: true,
    },
    season_id: { type: Number, required: true, index: true, min: 1 },
    is_loan: { type: Boolean, default: false, index: true },
    loan_fee_eur: { type: Decimal128, default: null },
    buy_option_eur: { type: Decimal128, default: null },
  },
  { collection: "transfers", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("Transfer", transferSchema);

