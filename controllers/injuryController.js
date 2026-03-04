const Injury = require("../models/Injury");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: Injury,
  idField: "injury_id",
  idParam: "injury_id",
  allowedFields: [
    "player_id",
    "injury_type",
    "injury_date",
    "expected_return_date",
    "actual_return_date",
    "severity",
    "matches_missed",
  ],
  defaultSort: { injury_date: -1 },
});

exports.getInjuries = getAll;
exports.getInjuryById = getById;
exports.createInjury = createOne;
exports.updateInjury = updateOne;
exports.deleteInjury = deleteOne;

