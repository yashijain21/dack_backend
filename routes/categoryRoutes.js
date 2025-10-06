const express = require("express");
const router = express.Router();
const Category = require("../models/Category");
const Product = require("../models/Product");

router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

router.get("/:id/products", async (req, res) => {
  const products = await Product.find({ category: req.params.id });
  res.json(products);
});

module.exports = router;
