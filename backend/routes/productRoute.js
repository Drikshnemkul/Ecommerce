const express = require("express");

const { model } = require("mongoose");
const router = express.Router();
const {
  addProduct,
  getAllProducts,
  updateProduct,
  removeProduct,
} = require("../controllers/productController");

router.route("/").post(addProduct);
router.route("/").get(getAllProducts);
router.route("/:id").put(updateProduct);
router.route("/:id").delete(removeProduct);

module.exports = router;
