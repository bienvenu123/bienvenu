const PlayerPosition = require("../models/PlayerPosition");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: PlayerPosition,
  idField: "player_position_id",
  idParam: "player_position_id",
  allowedFields: ["player_id", "position_id", "is_primary"],
  defaultSort: { player_id: 1, is_primary: -1 },
});

exports.getPlayerPositions = getAll;
exports.getPlayerPositionById = getById;
exports.createPlayerPosition = createOne;
exports.updatePlayerPosition = updateOne;
exports.deletePlayerPosition = deleteOne;

