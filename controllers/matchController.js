const Match = require("../models/Match");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: Match,
  idField: "match_id",
  idParam: "match_id",
  allowedFields: [
    "league_id",
    "season_id",
    "home_team_id",
    "away_team_id",
    "match_date",
    "venue",
    "matchweek",
    "home_score",
    "away_score",
    "home_halftime_score",
    "away_halftime_score",
    "status",
    "attendance",
    "referee_id",
  ],
  defaultSort: { match_date: -1 },
});

exports.getMatches = getAll;
exports.getMatchById = getById;
exports.createMatch = createOne;
exports.updateMatch = updateOne;
exports.deleteMatch = deleteOne;

