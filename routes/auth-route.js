const express = require("express")
const router = express.Router()
const { register, login, update, deleteUser, displayUsers } = require("../Auth/auth")
router.route("/register").post(register)
router.route("/login").post(login);
router.route("/update").put(update);
router.route("/deleteUser").delete(deleteUser);
router.route("/displayUsers").get(displayUsers);
module.exports = router