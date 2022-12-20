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

module.exports = {
  getAllConversations,
};
