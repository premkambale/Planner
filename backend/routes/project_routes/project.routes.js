const { project_controller } = require("../../controllers");
const { check_authorized } = require("../../middlewares")
const express = require("express");
const { project_services } = require("../../services");
const router = express.Router();



router.post("/create-project", check_authorized, project_controller.create_project);
router.put("/project", check_authorized, project_controller.update_project_by_project_id)
router.get("/all", check_authorized, project_controller.get_all_projects);
router.get("/project/:projectId", check_authorized, project_controller.get_project_by_project_Id);
router.delete("/project/:projectId", check_authorized, project_controller.delete_project_by_project_id);



module.exports = router;