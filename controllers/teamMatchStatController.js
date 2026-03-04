const TeamMatchStat = require("../models/TeamMatchStat");
const { createCrudHandlers } = require("./crudControllerFactory");

const { getAll, getById, createOne, updateOne, deleteOne } = createCrudHandlers({
  Model: TeamMatchStat,
  idField: "team_match_stat_id",
  idParam: "team_match_stat_id",
  allowedFields: [
    "match_id",
    "team_id",
    "possession_percentage",
    "shots",
    "shots_on_target",
    "shots_off_target",
    "blocked_shots",
    "corners",
    "offsides",
    "fouls",
    "yellow_cards",
    "red_cards",
    "passes",
    "passes_completed",
    "pass_accuracy",
    "tackles",
    "saves",
  ],
  defaultSort: { match_id: 1, team_id: 1 },
});

exports.getTeamMatchStats = getAll;
exports.getTeamMatchStatById = getById;
exports.createTeamMatchStat = createOne;
exports.updateTeamMatchStat = updateOne;
exports.deleteTeamMatchStat = deleteOne;

