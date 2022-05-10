const express = require("express")
const router = express.Router()
const { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct } = require("./product")
router.route("/addproduct").post(addProduct)
router.route("/getallproducts").get(getAllProducts)
router.route("/getproductbyid/:id").get(getProductById)
router.route("/updateproduct/:id").put(updateProduct)
router.route("/deleteproduct/:id").delete(deleteProduct)
module.exports = router