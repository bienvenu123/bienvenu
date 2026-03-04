const Player = require("../models/Player");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: Player,
  idField: "player_id",
  idParam: "player_id",
  allowedFields: [
    "first_name",
    "last_name",
    "date_of_birth",
    "nationality_id",
    "second_nationality_id",
    "height_cm",
    "weight_kg",
    "preferred_foot",
    "photo_url",
    "shirt_number",
    "is_active",
  ],
  defaultSort: { last_name: 1, first_name: 1 },
});

exports.getPlayers = getAll;
exports.getPlayerById = getById;
exports.createPlayer = createOne;
exports.updatePlayer = updateOne;
exports.deletePlayer = deleteOne;

