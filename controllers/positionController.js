const Position = require("../models/Position");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: Position,
  idField: "position_id",
  idParam: "position_id",
  allowedFields: ["name", "short_name", "category"],
  defaultSort: { category: 1, name: 1 },
});

exports.getPositions = getAll;
exports.getPositionById = getById;
exports.createPosition = createOne;
exports.updatePosition = updateOne;
exports.deletePosition = deleteOne;

