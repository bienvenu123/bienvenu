const Standing = require("../models/Standing");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: Standing,
  idField: "standing_id",
  idParam: "standing_id",
  allowedFields: [
    "league_id",
    "season_id",
    "team_id",
    "position",
    "played",
    "won",
    "drawn",
    "lost",
    "goals_for",
    "goals_against",
    "goal_difference",
    "points",
    "form",
    "updated_at",
  ],
  defaultSort: { season_id: -1, league_id: 1, position: 1 },
});

exports.getStandings = getAll;
exports.getStandingById = getById;
exports.createStanding = createOne;
exports.updateStanding = updateOne;
exports.deleteStanding = deleteOne;

