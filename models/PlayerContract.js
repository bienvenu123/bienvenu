const mongoose = require("mongoose");

const { Decimal128 } = mongoose.Schema.Types;

const playerContractSchema = new mongoose.Schema(
  {
    contract_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    player_id: { type: Number, required: true, index: true, min: 1 },
    team_id: { type: Number, required: true, index: true, min: 1 },
    start_date: { type: Date, required: true },
    end_date: { type: Date, default: null },
    shirt_number: { type: Number, default: null, min: 0, max: 99 },
    is_on_loan: { type: Boolean, default: false, index: true },
    parent_team_id: { type: Number, default: null, index: true, min: 1 },
    weekly_salary: { type: Decimal128, default: null },
    contract_type: {
      type: String,
      required: true,
      enum: ["permanent", "loan", "trial"],
      index: true,
    },
  },
  { collection: "player_contracts", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("PlayerContract", playerContractSchema);

