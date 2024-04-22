const {
  postMemorie,
  getMemories,
  deleteMemorie,
} = require("../../controllers/pcs/ram");

const router = require("express").Router();

router.post("/post-ram", postMemorie);

router.get("/get-rams", getMemories);

router.delete("/delete-ram/:id", deleteMemorie);

module.exports = router;
