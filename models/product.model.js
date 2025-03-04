const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter the product name"],
    },
    quantity: {
      type: Number,
      required: [true, "Please enter the product quantity"],
      default: 0,
    },
    price: {
      type: Number,
      required: [true, "Please enter the product price"],
      default: 0,
    },
    image: {
      type: String,
      required: [false, "Please enter the product image"],
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
