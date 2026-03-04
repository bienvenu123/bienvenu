const Team = require("../models/Team");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: Team,
  idField: "team_id",
  idParam: "team_id",
  allowedFields: [
    "name",
    "short_name",
    "country_id",
    "founded_year",
    "stadium_name",
    "stadium_capacity",
    "logo_url",
    "primary_color",
    "secondary_color",
    "city",
    "is_active",
  ],
  defaultSort: { name: 1 },
});

exports.getTeams = getAll;
exports.getTeamById = getById;
exports.createTeam = createOne;
exports.updateTeam = updateOne;
exports.deleteTeam = deleteOne;

