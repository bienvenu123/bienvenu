const PlayerMarketValue = require("../models/PlayerMarketValue");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: PlayerMarketValue,
  idField: "market_value_id",
  idParam: "market_value_id",
  allowedFields: ["player_id", "value_eur", "valuation_date", "source"],
  defaultSort: { valuation_date: -1 },
});

exports.getPlayerMarketValues = getAll;
exports.getPlayerMarketValueById = getById;
exports.createPlayerMarketValue = createOne;
exports.updatePlayerMarketValue = updateOne;
exports.deletePlayerMarketValue = deleteOne;

