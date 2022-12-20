const express = require("express");
const {
  getAllChannels,
  getChannelBySlug,
  createChannel,
  updateChannel,
  deleteChannel,
} = require("./channels.controller");

const router = express.Router();

router.get("/all-channels", getAllChannels);
router.get("/all-channels/:slug", getChannelBySlug);
router.post("/create-channel", createChannel);
router.put("/update-channel/:slug", updateChannel);
router.delete("/delete-channel/:slug", deleteChannel);

module.exports = router;
