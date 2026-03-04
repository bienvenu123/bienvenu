const Referee = require("../models/Referee");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: Referee,
  idField: "referee_id",
  idParam: "referee_id",
  allowedFields: ["first_name", "last_name", "country_id", "date_of_birth", "is_active"],
  defaultSort: { last_name: 1, first_name: 1 },
});

exports.getReferees = getAll;
exports.getRefereeById = getById;
exports.createReferee = createOne;
exports.updateReferee = updateOne;
exports.deleteReferee = deleteOne;

