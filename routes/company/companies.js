const {
  postCompany,
  getCompanies,
  deleteCompany,
} = require("../../controllers/companies");

const router = require("express").Router();

router.post("/post", postCompany);

router.get("/get", getCompanies);

router.delete("/delete/:id", deleteCompany);

module.exports = router;
