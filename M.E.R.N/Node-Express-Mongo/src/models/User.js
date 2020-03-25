const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    username: { type: String, trim: true, unique: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
