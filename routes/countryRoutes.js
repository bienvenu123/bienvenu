const express = require("express");
const {
  getCountries,
  getCountryById,
  createCountry,
  updateCountry,
  deleteCountry,
} = require("../controllers/countryController");

const router = express.Router();

// GET    /countries
router.get("/", getCountries);

// GET    /countries/:country_id
router.get("/:country_id", getCountryById);

// POST   /countries
router.post("/", createCountry);

// PUT    /countries/:country_id
router.put("/:country_id", updateCountry);

// DELETE /countries/:country_id
router.delete("/:country_id", deleteCountry);

module.exports = router;

