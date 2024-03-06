const { postCity, getCities, deleteCity } = require("../../controllers/cities");

const router = require("express").Router();

router.post("/post", postCity);

router.get("/get", getCities);

router.delete("/delete/:id", deleteCity);

module.exports = router;
