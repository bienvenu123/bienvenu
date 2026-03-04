const TeamManager = require("../models/TeamManager");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: TeamManager,
  idField: "team_manager_id",
  idParam: "team_manager_id",
  allowedFields: ["team_id", "manager_id", "start_date", "end_date", "contract_type"],
  defaultSort: { start_date: -1 },
});

exports.getTeamManagers = getAll;
exports.getTeamManagerById = getById;
exports.createTeamManager = createOne;
exports.updateTeamManager = updateOne;
exports.deleteTeamManager = deleteOne;

