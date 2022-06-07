const express = require("express")
const router = express.Router()
const { getAllProducts, getProductById  } = require("../product/product")
router.route("/products").get(getAllProducts)
router.route("/products/:id").get(getProductById)
module.exports = router