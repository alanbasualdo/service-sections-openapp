const { postPC, getPCs, deletePC } = require("../../controllers/pcs/pcs");

const router = require("express").Router();

router.post("/post-pc", postPC);

router.get("/get-pcs", getPCs);

router.delete("/delete-pc/:id", deletePC);

module.exports = router;
