const League = require("../models/League");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: League,
  idField: "league_id",
  idParam: "league_id",
  allowedFields: [
    "name",
    "country_id",
    "level",
    "type",
    "logo_url",
    "founded_year",
    "is_active",
  ],
  defaultSort: { name: 1 },
});

exports.getLeagues = getAll;
exports.getLeagueById = getById;
exports.createLeague = createOne;
exports.updateLeague = updateOne;
exports.deleteLeague = deleteOne;

