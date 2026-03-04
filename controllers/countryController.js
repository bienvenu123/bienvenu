const Country = require("../models/Country");

function toInt(value) {
  const n = Number.parseInt(value, 10);
  return Number.isFinite(n) ? n : null;
}

function sendMongoError(res, err) {
  // Duplicate key error (unique index)
  if (err && err.code === 11000) {
    return res.status(409).json({
      message: "Duplicate value for a unique field.",
      details: err.keyValue || null,
    });
  }

  // Mongoose validation / cast errors
  if (err && (err.name === "ValidationError" || err.name === "CastError")) {
    return res.status(400).json({ message: err.message });
  }

  return res.status(500).json({ message: "Server error" });
}

exports.getCountries = async (req, res) => {
  try {
    const countries = await Country.find().sort({ name: 1 });
    return res.json(countries);
  } catch (err) {
    return sendMongoError(res, err);
  }
};

exports.getCountryById = async (req, res) => {
  try {
    const countryId = toInt(req.params.country_id);
    if (!countryId) return res.status(400).json({ message: "Invalid country_id" });

    const country = await Country.findOne({ country_id: countryId });
    if (!country) return res.status(404).json({ message: "Country not found" });

    return res.json(country);
  } catch (err) {
    return sendMongoError(res, err);
  }
};

exports.createCountry = async (req, res) => {
  try {
    const payload = {
      country_id: req.body?.country_id,
      name: req.body?.name,
      code: req.body?.code,
      flag_url: req.body?.flag_url ?? null,
      continent: req.body?.continent ?? null,
    };

    const created = await Country.create(payload);
    return res.status(201).json(created);
  } catch (err) {
    return sendMongoError(res, err);
  }
};

exports.updateCountry = async (req, res) => {
  try {
    const countryId = toInt(req.params.country_id);
    if (!countryId) return res.status(400).json({ message: "Invalid country_id" });

    const updates = {};
    const allowed = ["name", "code", "flag_url", "continent"];
    for (const key of allowed) {
      if (Object.prototype.hasOwnProperty.call(req.body || {}, key)) {
        updates[key] = req.body[key];
      }
    }

    const updated = await Country.findOneAndUpdate(
      { country_id: countryId },
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!updated) return res.status(404).json({ message: "Country not found" });
    return res.json(updated);
  } catch (err) {
    return sendMongoError(res, err);
  }
};

exports.deleteCountry = async (req, res) => {
  try {
    const countryId = toInt(req.params.country_id);
    if (!countryId) return res.status(400).json({ message: "Invalid country_id" });

    const deleted = await Country.findOneAndDelete({ country_id: countryId });
    if (!deleted) return res.status(404).json({ message: "Country not found" });

    return res.json({ message: "Country deleted" });
  } catch (err) {
    return sendMongoError(res, err);
  }
};

