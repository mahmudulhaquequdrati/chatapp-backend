const mongoose = require("mongoose");

const channelSchema = new mongoose.Schema(
  {
    channelname: {
      type: String,
      required: true,
    },
    groupId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Channel = mongoose.model("Channel", channelSchema);

module.exports = Channel;
