const express = require("express");
const Product = require("../models/Product");

const router = express.Router();

// ✅ GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().populate({
      path: "category",
      strictPopulate: false, // prevents crash if category missing
    });
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ GET single product by ID
router.get("/:id", async (req, res) => {
  try {
  const product = await Product.findById(req.params.id).populate("category_id");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (error) {
    console.error("Error fetching product:", error);

    // Check if ID format is invalid
    if (error.kind === "ObjectId") {
      return res.status(400).json({ message: "Invalid product ID" });
    }

    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
