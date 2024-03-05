const {
    postBrand,
    getBrands,
    deleteBrand,
  } = require("../../controllers/brands");
  
  const router = require("express").Router();
  
  router.post("/post", postBrand);
  
  router.get("/get", getBrands);
  
  router.delete("/delete/:id", deleteBrand);
  
  module.exports = router;
  