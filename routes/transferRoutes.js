const express = require("express");
const {
  getTransfers,
  getTransferById,
  createTransfer,
  updateTransfer,
  deleteTransfer,
} = require("../controllers/transferController");

const router = express.Router();

// GET    /transfers
router.get("/", getTransfers);
// GET    /transfers/:transfer_id
router.get("/:transfer_id", getTransferById);
// POST   /transfers
router.post("/", createTransfer);
// PUT    /transfers/:transfer_id
router.put("/:transfer_id", updateTransfer);
// DELETE /transfers/:transfer_id
router.delete("/:transfer_id", deleteTransfer);

module.exports = router;

