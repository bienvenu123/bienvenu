const Season = require("../models/Season");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: Season,
  idField: "season_id",
  idParam: "season_id",
  allowedFields: ["league_id", "name", "start_date", "end_date", "is_current"],
  defaultSort: { start_date: -1 },
});

exports.getSeasons = getAll;
exports.getSeasonById = getById;
exports.createSeason = createOne;
exports.updateSeason = updateOne;
exports.deleteSeason = deleteOne;

