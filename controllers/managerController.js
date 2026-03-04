const Manager = require("../models/Manager");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: Manager,
  idField: "manager_id",
  idParam: "manager_id",
  allowedFields: ["first_name", "last_name", "date_of_birth", "nationality_id", "photo_url", "is_active"],
  defaultSort: { last_name: 1, first_name: 1 },
});

exports.getManagers = getAll;
exports.getManagerById = getById;
exports.createManager = createOne;
exports.updateManager = updateOne;
exports.deleteManager = deleteOne;

