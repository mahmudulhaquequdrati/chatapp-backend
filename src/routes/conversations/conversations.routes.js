const express = require("express");
const { getAllConversations } = require("./conversations.controller");

const router = express.Router();

router.get("/all-conversations", getAllConversations);

module.exports = router;
