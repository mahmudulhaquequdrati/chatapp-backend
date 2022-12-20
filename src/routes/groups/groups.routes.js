const express = require("express");
const {
  getAllGroups,
  getGroupBySlug,
  createGroup,
  updateGroup,
  deleteGroup,
} = require("./groups.controller");

const router = express.Router();

router.get("/all-groups", getAllGroups);
router.get("/all-groups/:slug", getGroupBySlug);
router.post("/create-group", createGroup);
router.put("/update-group/:slug", updateGroup);
router.delete("/delete-group/:slug", deleteGroup);

module.exports = router;
