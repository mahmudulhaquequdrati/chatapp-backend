const Channel = require("../../../models/channels.model");

const getAllChannels = async (req, res) => {
  try {
    const channels = await Channel.find();
    res.status(200).json({ status: "success", channels });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

const getChannelBySlug = async (req, res) => {
  try {
    const channel = await Channel.findOne({ slug: req.params.slug });
    res.status(200).json({ status: "success", channel: channel });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

const createChannel = async (req, res) => {
  try {
    const channel = await Channel.create(req.body);
    res.status(201).json({ status: "success", channel });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

const updateChannel = async (req, res) => {
  try {
    const channel = await Channel.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    );
    res.status(200).json({ status: "success", channel });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

const deleteChannel = async (req, res) => {
  try {
    const channel = await Channel.findOneAndDelete({ slug: req.params.slug });
    res.status(200).json({ status: "success", channel: channel });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = {
  getAllChannels,
  getChannelBySlug,
  createChannel,
  updateChannel,
  deleteChannel,
};
