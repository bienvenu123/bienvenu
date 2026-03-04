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

function pickAllowed(body, allowedFields) {
  const updates = {};
  for (const key of allowedFields) {
    if (Object.prototype.hasOwnProperty.call(body || {}, key)) {
      updates[key] = body[key];
    }
  }
  return updates;
}

/**
 * Creates standard CRUD handlers for numeric ID entities.
 * @param {object} opts
 * @param {import('mongoose').Model} opts.Model
 * @param {string} opts.idField - e.g. "league_id"
 * @param {string} opts.idParam - e.g. "league_id"
 * @param {string[]} opts.allowedFields - fields allowed in update
 * @param {object} [opts.defaultSort] - mongoose sort object
 */
exports.createCrudHandlers = function createCrudHandlers({
  Model,
  idField,
  idParam,
  allowedFields,
  defaultSort = { [idField]: 1 },
}) {
  const getAll = async (req, res) => {
    try {
      const docs = await Model.find().sort(defaultSort);
      return res.json(docs);
    } catch (err) {
      return sendMongoError(res, err);
    }
  };

  const getById = async (req, res) => {
    try {
      const id = toInt(req.params[idParam]);
      if (!id) return res.status(400).json({ message: `Invalid ${idParam}` });

      const doc = await Model.findOne({ [idField]: id });
      if (!doc) return res.status(404).json({ message: "Not found" });

      return res.json(doc);
    } catch (err) {
      return sendMongoError(res, err);
    }
  };

  const createOne = async (req, res) => {
    try {
      const created = await Model.create(req.body);
      return res.status(201).json(created);
    } catch (err) {
      return sendMongoError(res, err);
    }
  };

  const updateOne = async (req, res) => {
    try {
      const id = toInt(req.params[idParam]);
      if (!id) return res.status(400).json({ message: `Invalid ${idParam}` });

      const updates = pickAllowed(req.body, allowedFields);
      const updated = await Model.findOneAndUpdate(
        { [idField]: id },
        { $set: updates },
        { new: true, runValidators: true }
      );

      if (!updated) return res.status(404).json({ message: "Not found" });
      return res.json(updated);
    } catch (err) {
      return sendMongoError(res, err);
    }
  };

  const deleteOne = async (req, res) => {
    try {
      const id = toInt(req.params[idParam]);
      if (!id) return res.status(400).json({ message: `Invalid ${idParam}` });

      const deleted = await Model.findOneAndDelete({ [idField]: id });
      if (!deleted) return res.status(404).json({ message: "Not found" });

      return res.json({ message: "Deleted" });
    } catch (err) {
      return sendMongoError(res, err);
    }
  };

  return { getAll, getById, createOne, updateOne, deleteOne };
};

