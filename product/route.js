const express = require("express")
const router = express.router()
const { addProduct } = require("./product")
router.route("/addproduct").post(addProduct)
module.exports = router