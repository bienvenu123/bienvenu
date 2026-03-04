const LeagueTeam = require("../models/LeagueTeam");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: LeagueTeam,
  idField: "league_team_id",
  idParam: "league_team_id",
  allowedFields: ["league_id", "team_id", "season_id", "joined_date"],
  defaultSort: { joined_date: -1 },
});

exports.getLeagueTeams = getAll;
exports.getLeagueTeamById = getById;
exports.createLeagueTeam = createOne;
exports.updateLeagueTeam = updateOne;
exports.deleteLeagueTeam = deleteOne;

