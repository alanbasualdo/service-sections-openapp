const {
  postPosition,
  getPositions,
  deletePosition,
} = require("../../controllers/positions/positions");

const router = require("express").Router();

router.post("/post-position", postPosition);

router.get("/get-positions", getPositions);

router.delete("/delete-position/:id", deletePosition);

module.exports = router;
