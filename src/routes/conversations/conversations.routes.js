const express = require("express");
const {
  getAllConversations,
  getConversationByTags,
} = require("./conversations.controller");

const router = express.Router();

router.get("/all-conversations", getAllConversations);
router.get("/all-conversations/:tag", getConversationByTags);

module.exports = router;
