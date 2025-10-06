const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

router.get("/:id", async (req, res) => {
  const product = await Product.findById(req.params.id).populate("category");
  res.json(product);
});

module.exports = router;
