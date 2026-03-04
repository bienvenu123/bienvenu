const TeamSeasonStat = require("../models/TeamSeasonStat");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: TeamSeasonStat,
  idField: "team_season_stat_id",
  idParam: "team_season_stat_id",
  allowedFields: [
    "team_id",
    "season_id",
    "league_id",
    "matches_played",
    "wins",
    "draws",
    "losses",
    "goals_for",
    "goals_against",
    "goal_difference",
    "points",
    "clean_sheets",
    "position",
    "home_wins",
    "home_draws",
    "home_losses",
    "away_wins",
    "away_draws",
    "away_losses",
  ],
  defaultSort: { season_id: -1, league_id: 1, position: 1 },
});

exports.getTeamSeasonStats = getAll;
exports.getTeamSeasonStatById = getById;
exports.createTeamSeasonStat = createOne;
exports.updateTeamSeasonStat = updateOne;
exports.deleteTeamSeasonStat = deleteOne;

