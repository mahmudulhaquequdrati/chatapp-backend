const Conversation = require("../../models/conversations.model");

const getAllConversations = async (req, res) => {
  try {
    const conversations = await Conversation.find();
    res.status(200).json({
      status: "success",
      data: {
        conversations,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: error.message,
    });
  }
};

const getConversationByTags = async (req, res) => {
  try {
    const { tag } = req.params;
    const conversation = await Conversation.find({
      tags: {
        $in: [tag],
      },
    });
    console.log(conversation);
    res.status(200).json({ status: "success", conversation: conversation });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = {
  getAllConversations,
  getConversationByTags,
};
