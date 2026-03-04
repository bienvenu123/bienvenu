/**
 * Seed script for Teams and Players (requires 1 Country for valid data).
 * Run: node scripts/seed-test-data.js
 * Use the seeded data in Postman to test /api/teams and /api/players
 */
require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("../config/db");
const Country = require("../models/Country");
const Team = require("../models/Team");
const Player = require("../models/Player");

const countries = [
  { country_id: 1, name: "France", code: "FRA", continent: "Europe" },
  { country_id: 2, name: "Spain", code: "ESP", continent: "Europe" },
];

const teams = [
  {
    team_id: 1,
    name: "Paris Saint-Germain",
    short_name: "PSG",
    country_id: 1,
    founded_year: 1970,
    stadium_name: "Parc des Princes",
    stadium_capacity: 47929,
    city: "Paris",
  },
  {
    team_id: 2,
    name: "Real Madrid",
    short_name: "RMA",
    country_id: 2,
    founded_year: 1902,
    stadium_name: "Santiago Bernabéu",
    stadium_capacity: 81044,
    city: "Madrid",
  },
];

const players = [
  {
    player_id: 1,
    first_name: "Kylian",
    last_name: "Mbappé",
    date_of_birth: new Date("1998-12-20"),
    nationality_id: 1,
    height_cm: 178,
    weight_kg: 73,
    preferred_foot: "right",
    shirt_number: 7,
  },
  {
    player_id: 2,
    first_name: "Vinicius",
    last_name: "Junior",
    date_of_birth: new Date("2000-07-12"),
    nationality_id: 2,
    second_nationality_id: 1,
    height_cm: 176,
    weight_kg: 73,
    preferred_foot: "right",
    shirt_number: 7,
  },
];

async function seed() {
  try {
    await connectDB();
    await Country.deleteMany({});
    await Team.deleteMany({});
    await Player.deleteMany({});

    await Country.insertMany(countries);
    await Team.insertMany(teams);
    await Player.insertMany(players);

    console.log("Seed done. Data ready for Postman:");
    console.log("  Countries: 2 (IDs 1, 2)");
    console.log("  Teams: 2 (IDs 1, 2) - GET /api/teams");
    console.log("  Players: 2 (IDs 1, 2) - GET /api/players");
    process.exit(0);
  } catch (err) {
    console.error("Seed failed:", err.message);
    process.exit(1);
  }
}

seed();
