const MatchFormation = require("../models/MatchFormation");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: MatchFormation,
  idField: "formation_id",
  idParam: "formation_id",
  allowedFields: ["match_id", "team_id", "formation", "formation_type"],
  defaultSort: { match_id: 1, team_id: 1 },
});

exports.getMatchFormations = getAll;
exports.getMatchFormationById = getById;
exports.createMatchFormation = createOne;
exports.updateMatchFormation = updateOne;
exports.deleteMatchFormation = deleteOne;

