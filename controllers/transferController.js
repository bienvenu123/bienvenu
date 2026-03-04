const Transfer = require("../models/Transfer");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: Transfer,
  idField: "transfer_id",
  idParam: "transfer_id",
  allowedFields: [
    "player_id",
    "from_team_id",
    "to_team_id",
    "transfer_date",
    "transfer_fee_eur",
    "transfer_type",
    "season_id",
    "is_loan",
    "loan_fee_eur",
    "buy_option_eur",
  ],
  defaultSort: { transfer_date: -1 },
});

exports.getTransfers = getAll;
exports.getTransferById = getById;
exports.createTransfer = createOne;
exports.updateTransfer = updateOne;
exports.deleteTransfer = deleteOne;

