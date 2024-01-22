const express = require("express");
const Product = require("../Models/productModel");

const router = express.Router();

router.post("/", async (req, res) => {
  const product = await Product.create(req.body);
  res.send(product);
});

router.get("/", async (req, res) => {
  let filterObj = {};
  if (req.query.sizes && req.query.sizes != "All") {
    filterObj.sizes = req.query.sizes;
  }

  let query = Product.find(filterObj);

  if (req.query.sort) {
    query = query.sort(req.query.sort);
  }
  const products = await query;
  res.send(products);
});

router.delete("/:productId", async (req, res) => {
  await Product.findByIdAndDelete(req.params.productId);
  res.send("deleted");
});

module.exports = router;
