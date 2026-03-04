const User = require("../models/User");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: User,
  idField: "user_id",
  idParam: "user_id",
  allowedFields: ["name", "email", "username", "role", "password"],
  defaultSort: { user_id: 1 },
});

exports.getUsers = getAll;
exports.getUserById = getById;
exports.createUser = createOne;
exports.updateUser = updateOne;
exports.deleteUser = deleteOne;

