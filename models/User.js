const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user_id: { type: Number, required: true, unique: true, index: true, min: 1 },
    name: { type: String, required: true, trim: true, maxlength: 150 },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      maxlength: 255,
    },
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      minlength: 3,
      maxlength: 50,
    },
    role: {
      type: String,
      enum: ["ADMIN", "EDITOR", "VIEWER"],
      default: "VIEWER",
      required: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
      maxlength: 255,
    },
  },
  {
    collection: "users",
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("User", userSchema);

