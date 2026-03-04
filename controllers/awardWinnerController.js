const AwardWinner = require("../models/AwardWinner");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: AwardWinner,
  idField: "winner_id",
  idParam: "winner_id",
  allowedFields: ["award_id", "player_id", "team_id", "manager_id", "season_id", "year"],
  defaultSort: { year: -1, award_id: 1 },
});

exports.getAwardWinners = getAll;
exports.getAwardWinnerById = getById;
exports.createAwardWinner = createOne;
exports.updateAwardWinner = updateOne;
exports.deleteAwardWinner = deleteOne;

