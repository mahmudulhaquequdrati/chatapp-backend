const Group = require("../../models/groups.model");

const getAllGroups = async (req, res) => {
  try {
    const groups = await Group.find();
    res.status(200).json({
      status: "success",
      groups,
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};
const getGroupBySlug = async (req, res) => {
  try {
    const group = await Group.findOne({ slug: req.params.slug });
    res.status(200).json({ status: "success", group });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

const createGroup = async (req, res) => {
  try {
    const group = await Group.create(req.body);
    res.status(201).json({ status: "success", group });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

const updateGroup = async (req, res) => {
  try {
    const group = await Group.findOneAndUpdate(
      { slug: req.params.slug },
      req.body,
      { new: true }
    );
    res.status(200).json({ status: "success", group });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

const deleteGroup = async (req, res) => {
  try {
    const group = await Group.findOneAndDelete({ slug: req.params.slug });
    res.status(200).json({ status: "success", group });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  }
};

module.exports = {
  getAllGroups,
  getGroupBySlug,
  createGroup,
  updateGroup,
  deleteGroup,
};
