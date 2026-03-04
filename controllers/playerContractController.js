const PlayerContract = require("../models/PlayerContract");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: PlayerContract,
  idField: "contract_id",
  idParam: "contract_id",
  allowedFields: [
    "player_id",
    "team_id",
    "start_date",
    "end_date",
    "shirt_number",
    "is_on_loan",
    "parent_team_id",
    "weekly_salary",
    "contract_type",
  ],
  defaultSort: { start_date: -1 },
});

exports.getPlayerContracts = getAll;
exports.getPlayerContractById = getById;
exports.createPlayerContract = createOne;
exports.updatePlayerContract = updateOne;
exports.deletePlayerContract = deleteOne;

