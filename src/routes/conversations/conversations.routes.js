const express = require("express");
const {
  getAllConversations,
  getConversationByTags,
  getConversationByChannelId
} = require("./conversations.controller");

const router = express.Router();

router.get("/all-conversations", getAllConversations);
router.get("/all-conversations/channel/:id", getConversationByChannelId);
router.get("/all-conversations/:tag", getConversationByTags);

module.exports = router;
