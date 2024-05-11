const express = require("express");
const router = express.Router();
const { user_controller } = require("../../controllers/");
const {check_authorized} = require("../../middlewares")

router.get("/all",user_controller.get_all_users);
router.get("/user/:userId", check_authorized,user_controller.get_user_by_id);


module.exports = router;