const express = require("express")
const router = express.Router()
const { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct } = require("../product/product")
router.route("/product").post(addProduct)
router.route("/products").get(getAllProducts)
router.route("/product/:id").get(getProductById).delete(deleteProduct).put(updateProduct)
module.exports = router