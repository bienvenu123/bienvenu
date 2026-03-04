const Award = require("../models/Award");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: Award,
  idField: "award_id",
  idParam: "award_id",
  allowedFields: ["name", "category", "level", "description"],
  defaultSort: { name: 1 },
});

exports.getAwards = getAll;
exports.getAwardById = getById;
exports.createAward = createOne;
exports.updateAward = updateOne;
exports.deleteAward = deleteOne;

