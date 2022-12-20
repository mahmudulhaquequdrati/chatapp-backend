const Message = require("../../models/messages.model");

const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json({
      status: "success",
      data: messages,
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

const getMessageBySlug = async (req, res) => {
  try {
    const message = await Message.findOne({ slug: req.params.slug });
    res.status(200).json({ status: "success", message: message });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

const createMessage = async (req, res) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json({ status: "success", data: message });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error.message,
    });
  }
};

const updateMessage = async (req, res) => {
  try {
    const message = await Message.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    );
    res.status(200).json({ status: "success", message: message });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findOneAndDelete({ slug: req.params.slug });
    res.status(200).json({ status: "success", message: message });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = {
  getAllMessages,
  getMessageBySlug,
  createMessage,
  updateMessage,
  deleteMessage,
};
