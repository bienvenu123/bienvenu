const PlayerSeasonStat = require("../models/PlayerSeasonStat");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: PlayerSeasonStat,
  idField: "season_stat_id",
  idParam: "season_stat_id",
  allowedFields: [
    "player_id",
    "team_id",
    "season_id",
    "league_id",
    "appearances",
    "minutes_played",
    "goals",
    "assists",
    "yellow_cards",
    "red_cards",
    "clean_sheets",
    "shots",
    "shots_on_target",
    "pass_completion_rate",
    "average_rating",
  ],
  defaultSort: { season_id: -1, league_id: 1, team_id: 1, player_id: 1 },
});

exports.getPlayerSeasonStats = getAll;
exports.getPlayerSeasonStatById = getById;
exports.createPlayerSeasonStat = createOne;
exports.updatePlayerSeasonStat = updateOne;
exports.deletePlayerSeasonStat = deleteOne;

