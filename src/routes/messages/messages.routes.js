const express = require("express");
const {
  getAllMessages,
  getMessageBySlug,
  createMessage,
  updateMessage,
  deleteMessage,
} = require("./message.controller");

const router = express.Router();

router.get("/all-messages", getAllMessages);
router.get("/all-messages/:slug", getMessageBySlug);
router.post("/create-message", createMessage);
router.put("/update-message/:slug", updateMessage);
router.delete("/delete-message/:slug", deleteMessage);

module.exports = router;
