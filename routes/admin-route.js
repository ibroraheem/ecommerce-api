const express = require("express")
const router = express.Router()
const user = require("../model/user")
const { login, update, deleteUser, displayUsers } = require("../Auth/Auth")
const { addProduct, getAllProducts, getProductById, updateProduct, deleteProduct } = require("../product/product")
if (user.role === 'admin') {
    router.route("admin/login").post(login);
    router.route("admin/update").put(update);
    router.route("admin/deleteUser").delete(deleteUser);
    router.route("admin/displayUsers").get(displayUsers);
    router.route("/products").get(getAllProducts)
    router.route("/product").post(addProduct)
    router.route("/product/:id").get(getProductById).delete(deleteProduct).put(updateProduct)
}

module.exports = router