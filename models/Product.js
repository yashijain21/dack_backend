const mongoose = require("mongoose");

const extraFeeSchema = new mongoose.Schema({
  icon: { type: String },
  text: { type: String },
});

const specificationSchema = new mongoose.Schema({}, { strict: false });

const faqItemSchema = new mongoose.Schema({
  q: { type: String, required: true },
  a: { type: String, required: true },
});

const faqCategorySchema = new mongoose.Schema({
  category: { type: String, required: true },
  items: [faqItemSchema],
});

const termsSchema = new mongoose.Schema({}, { strict: false });

const productSchema = new mongoose.Schema(
  {
    // Basic Info
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true, trim: true },
    category: { type: String, required: true, trim: true },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    description: { type: String },
    price: { type: Number, required: true },
    discount_price: { type: Number },
    stock: { type: Number, default: 0 },
    status: { type: String, enum: ["active", "inactive"], default: "active" },
    currency: { type: String, default: "kr" },
    unit: { type: String, default: "/st" },

    // 🖼 Product Images
    productImage: { type: String },
    euClassificationImage: { type: String },

    // Product Details
    details: { type: String },
    extraFees: [extraFeeSchema],
    sections: [{ type: String }],

    // Specifications
    specifications: specificationSchema,

    // FAQs
    faqs: [faqCategorySchema],

    // Terms
    terms: termsSchema,
  },
  { timestamps: true }
);

// ✅ Virtual field for formatted price
productSchema.virtual("formattedPrice").get(function () {
  return `${this.price} ${this.currency}${this.unit}`;
});

// ✅ Include virtuals in JSON
productSchema.set("toJSON", { virtuals: true });
productSchema.set("toObject", { virtuals: true });

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
