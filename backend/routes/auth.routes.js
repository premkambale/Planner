const express = require("express");
const route = express.Router();
const {auth_controller} = require("../controllers")

route.post("/register",auth_controller.register)
route.post("/login",auth_controller.login)


module.exports = route;