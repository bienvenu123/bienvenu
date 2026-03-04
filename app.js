require("dotenv").config();
const express = require("express");
const cors = require("cors");

const countryRoutes = require("./routes/countryRoutes");
const leagueRoutes = require("./routes/leagueRoutes");
const seasonRoutes = require("./routes/seasonRoutes");
const teamRoutes = require("./routes/teamRoutes");
const leagueTeamRoutes = require("./routes/leagueTeamRoutes");
const playerRoutes = require("./routes/playerRoutes");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const positionRoutes = require("./routes/positionRoutes");
const playerPositionRoutes = require("./routes/playerPositionRoutes");
const playerContractRoutes = require("./routes/playerContractRoutes");
const playerMarketValueRoutes = require("./routes/playerMarketValueRoutes");
const transferRoutes = require("./routes/transferRoutes");
const matchRoutes = require("./routes/matchRoutes");
const matchEventRoutes = require("./routes/matchEventRoutes");
const matchLineupRoutes = require("./routes/matchLineupRoutes");
const playerMatchStatRoutes = require("./routes/playerMatchStatRoutes");
const playerSeasonStatRoutes = require("./routes/playerSeasonStatRoutes");
const teamMatchStatRoutes = require("./routes/teamMatchStatRoutes");
const teamSeasonStatRoutes = require("./routes/teamSeasonStatRoutes");
const refereeRoutes = require("./routes/refereeRoutes");
const stadiumRoutes = require("./routes/stadiumRoutes");
const managerRoutes = require("./routes/managerRoutes");
const teamManagerRoutes = require("./routes/teamManagerRoutes");
const injuryRoutes = require("./routes/injuryRoutes");
const awardRoutes = require("./routes/awardRoutes");
const awardWinnerRoutes = require("./routes/awardWinnerRoutes");
const standingRoutes = require("./routes/standingRoutes");
const playerAttributeRoutes = require("./routes/playerAttributeRoutes");
const matchFormationRoutes = require("./routes/matchFormationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Football API is running" });
});

app.use("/api/countries", countryRoutes);
app.use("/api/leagues", leagueRoutes);
app.use("/api/seasons", seasonRoutes);
app.use("/api/teams", teamRoutes);
app.use("/api/league-teams", leagueTeamRoutes);
app.use("/api/players", playerRoutes);
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/positions", positionRoutes);
app.use("/api/player-positions", playerPositionRoutes);
app.use("/api/player-contracts", playerContractRoutes);
app.use("/api/player-market-values", playerMarketValueRoutes);
app.use("/api/transfers", transferRoutes);
app.use("/api/matches", matchRoutes);
app.use("/api/match-events", matchEventRoutes);
app.use("/api/match-lineups", matchLineupRoutes);
app.use("/api/player-match-stats", playerMatchStatRoutes);
app.use("/api/player-season-stats", playerSeasonStatRoutes);
app.use("/api/team-match-stats", teamMatchStatRoutes);
app.use("/api/team-season-stats", teamSeasonStatRoutes);
app.use("/api/referees", refereeRoutes);
app.use("/api/stadiums", stadiumRoutes);
app.use("/api/managers", managerRoutes);
app.use("/api/team-managers", teamManagerRoutes);
app.use("/api/injuries", injuryRoutes);
app.use("/api/awards", awardRoutes);
app.use("/api/award-winners", awardWinnerRoutes);
app.use("/api/standings", standingRoutes);
app.use("/api/player-attributes", playerAttributeRoutes);
app.use("/api/match-formations", matchFormationRoutes);

// Basic error handler
app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.error(err);
  res.status(500).json({ message: "Server error" });
});

module.exports = app;
