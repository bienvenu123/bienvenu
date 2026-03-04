const MatchLineup = require("../models/MatchLineup");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: MatchLineup,
  idField: "lineup_id",
  idParam: "lineup_id",
  allowedFields: [
    "match_id",
    "team_id",
    "player_id",
    "position_id",
    "is_starter",
    "formation_position",
    "shirt_number",
  ],
  defaultSort: { match_id: 1, team_id: 1, is_starter: -1 },
});

exports.getMatchLineups = getAll;
exports.getMatchLineupById = getById;
exports.createMatchLineup = createOne;
exports.updateMatchLineup = updateOne;
exports.deleteMatchLineup = deleteOne;

