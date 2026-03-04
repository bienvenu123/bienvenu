const PlayerMatchStat = require("../models/PlayerMatchStat");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: PlayerMatchStat,
  idField: "stat_id",
  idParam: "stat_id",
  allowedFields: [
    "match_id",
    "player_id",
    "team_id",
    "minutes_played",
    "goals",
    "assists",
    "shots",
    "shots_on_target",
    "passes_completed",
    "passes_attempted",
    "tackles",
    "interceptions",
    "clearances",
    "dribbles_completed",
    "dribbles_attempted",
    "fouls_committed",
    "fouls_won",
    "yellow_cards",
    "red_cards",
    "offsides",
    "saves",
    "rating",
  ],
  defaultSort: { match_id: 1, team_id: 1, player_id: 1 },
});

exports.getPlayerMatchStats = getAll;
exports.getPlayerMatchStatById = getById;
exports.createPlayerMatchStat = createOne;
exports.updatePlayerMatchStat = updateOne;
exports.deletePlayerMatchStat = deleteOne;

