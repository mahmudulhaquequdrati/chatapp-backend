const mongoose = require("mongoose");

const tagSchema = new mongoose.Schema(
  {
    tagname: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      trim: true,
    },
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Conversation",
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;
