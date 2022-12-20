const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    channelId: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
    },
    assaignee: {
      type: Array,
    },
    sharedpeople: {
      type: Array,
    },
    files: {
      type: Array,
    },
    reactions: {
      type: Array,
    },
  },
  {
    timestamps: true,
  }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
