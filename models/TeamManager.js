const mongoose = require("mongoose");

const teamManagerSchema = new mongoose.Schema(
  {
    team_manager_id: {
      type: Number,
      required: true,
      unique: true,
      index: true,
      min: 1,
    },
    team_id: { type: Number, required: true, index: true, min: 1 },
    manager_id: { type: Number, required: true, index: true, min: 1 },
    start_date: { type: Date, required: true },
    end_date: { type: Date, default: null },
    contract_type: {
      type: String,
      required: true,
      enum: ["permanent", "interim", "caretaker"],
      index: true,
    },
  },
  { collection: "team_managers", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("TeamManager", teamManagerSchema);

