const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema(
  {
    groupname: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
