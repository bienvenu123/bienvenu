const Stadium = require("../models/Stadium");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: Stadium,
  idField: "stadium_id",
  idParam: "stadium_id",
  allowedFields: [
    "name",
    "city",
    "country_id",
    "capacity",
    "built_year",
    "surface_type",
    "photo_url",
  ],
  defaultSort: { name: 1 },
});

exports.getStadiums = getAll;
exports.getStadiumById = getById;
exports.createStadium = createOne;
exports.updateStadium = updateOne;
exports.deleteStadium = deleteOne;

