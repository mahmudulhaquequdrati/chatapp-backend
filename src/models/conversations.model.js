const mongoose = require("mongoose");

const controllerSchema = new mongoose.Schema(
  {
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    conversationsType: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
    },
    groupname: {
      type: String,
    },
    channelname: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Conversation = mongoose.model("Conversation", controllerSchema);

module.exports = Conversation;
