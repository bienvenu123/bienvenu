const mongoose = require("mongoose");

const leagueTeamSchema = new mongoose.Schema(
  {
    league_team_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    league_id: { type: Number, required: true, index: true, min: 1 },
    team_id: { type: Number, required: true, index: true, min: 1 },
    season_id: { type: Number, required: true, index: true, min: 1 },
    joined_date: { type: Date, required: true },
  },
  { collection: "league_teams", timestamps: true, versionKey: false }
);

module.exports = mongoose.model("LeagueTeam", leagueTeamSchema);

