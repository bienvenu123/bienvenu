const MatchEvent = require("../models/MatchEvent");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: MatchEvent,
  idField: "event_id",
  idParam: "event_id",
  allowedFields: [
    "match_id",
    "team_id",
    "player_id",
    "event_type",
    "minute",
    "extra_time_minute",
    "assist_player_id",
    "substituted_player_id",
    "description",
  ],
  defaultSort: { match_id: 1, minute: 1 },
});

exports.getMatchEvents = getAll;
exports.getMatchEventById = getById;
exports.createMatchEvent = createOne;
exports.updateMatchEvent = updateOne;
exports.deleteMatchEvent = deleteOne;

