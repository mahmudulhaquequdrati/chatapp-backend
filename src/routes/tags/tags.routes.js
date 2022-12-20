const express = require("express");
const {
  createTag,
  updateTag,
  deleteTag,
  getTagBySlug,
  getAllTags,
} = require("./tags.controller");

const router = express.Router();

router.get("/all-tags", getAllTags);
router.get("/all-tags/:slug", getTagBySlug);
router.post("/create-tag", createTag);
router.put("/update-tag/:slug", updateTag);
router.delete("/delete-tag/:slug", deleteTag);

module.exports = router;
