const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "please enter product name"],
    minLength: 2,
  },
  price: {
    type: Number,
    required: [true, "please enter product price"],
  },
  description: {
    type: String,
    required: [true, "please enter product description"],
  },
  images: [
    {
      public_id: {
        type: String,
        required: [true, "image required"],
      },
      url: {
        type: String,
        required: [true, "please enter url"],
      },
    },
  ],
  noOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: [true, "please enter your name"],
      },
      comment: {
        type: String,
      },
      rating: {
        type: String,
        required: [true, "please enter rating"],
      },
    },
  ],
  category: {
    type: String,
    required: [true, "please enter category"],
    enum: [
      "Electronics",
      "Clothes",
      "Food",
      "Smart Phones",
      "Laptop",
      "Beauty",
      "Home Appliances",
    ],
  },
});
module.exports = mongoose.model("Produt", productSchema);
