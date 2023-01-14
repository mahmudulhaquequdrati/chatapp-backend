const express = require("express");
const {
  getAllMessages,
  getMessageById,
  createMessage,
  updateMessage,
  deleteMessage,
} = require("./message.controller");

const router = express.Router();

router.get("/all-messages", getAllMessages);
router.get("/all-messages/:id", getMessageById);
router.post("/create-message", createMessage);
router.put("/update-message/:id", updateMessage);
router.delete("/delete-message/:id", deleteMessage);

module.exports = router;
