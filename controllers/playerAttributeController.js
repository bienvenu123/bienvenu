const PlayerAttribute = require("../models/PlayerAttribute");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: PlayerAttribute,
  idField: "attribute_id",
  idParam: "attribute_id",
  allowedFields: [
    "player_id",
    "season_id",
    "pace",
    "shooting",
    "passing",
    "dribbling",
    "defending",
    "physical",
    "overall_rating",
    "potential_rating",
    "updated_at",
  ],
  defaultSort: { updated_at: -1 },
});

exports.getPlayerAttributes = getAll;
exports.getPlayerAttributeById = getById;
exports.createPlayerAttribute = createOne;
exports.updatePlayerAttribute = updateOne;
exports.deletePlayerAttribute = deleteOne;

