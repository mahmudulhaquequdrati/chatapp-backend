const Tag = require("../../models/tags.model");

const getAllTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.status(200).json({
      message: "All tags",
      data: tags,
    });
  } catch (err) {
    res.status(403).json({
      error: "network error occurred",
      err,
    });
  }
};

const getTagBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const tag = await Tag.findOne({ slug });

    res.status(200).json({
      message: "Tag",
      data: tag,
    });
  } catch (err) {
    res.status(403).json({
      error: "network error occurred",
      err,
    });
  }
};

const createTag = async (req, res) => {
  try {
    const { tagname, conversationId, email } = req.body;
    if (!tagname || !conversationId || !email) {
      return res.status(403).json({
        error: "All field are required",
      });
    }

    const createSlug = slug(tagname);
    const createTag = {
      tagname,
      slug: createSlug,
      conversationId,
      email,
    };
    const tag = await Tag.create({ ...createTag });
    res.status(201).json({
      message: "Tag created successfully",
      data: tag,
    });
  } catch (err) {
    res.status(403).json({
      error: "network error occurred",
      err,
    });
  }
};

const updateTag = async (req, res) => {
  try {
    const { slug } = req.params;
    const { tagname, conversationId, email } = req.body;
    if (!tagname || !conversationId || !email) {
      return res.status(403).json({
        error: "All field are required",
      });
    }
    const updateTag = {
      tagname,
      conversationId,
      email,
    };
    const tag = await Tag.findOneAndUpdate(
      { slug },
      { ...updateTag },
      { new: true }
    );
    res.status(201).json({ message: "Tag updated successfully", data: tag });
  } catch (err) {
    res.status(403).json({ error: "network error occurred", err });
  }
};

const deleteTag = async (req, res) => {
  try {
    const { slug } = req.params;
    const tag = await Tag.findOneAndDelete({ slug });
    res.status(201).json({ message: "Tag deleted successfully", data: tag });
  } catch (err) {
    res.status(403).json({ error: "network error occurred", err });
  }
};

module.exports = {
  getAllTags,
  getTagBySlug,
  createTag,
  updateTag,
  deleteTag,
};
