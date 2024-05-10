const { project_collection } = require("../../models");
const { user_services, project_services } = require("../../services")


const create_project = async (req, res) => {
    const payload = { ...req.body };
    const new_project = new project_collection(payload);
    try {
        await new_project
            .save()
            .then(async (response) => {
                const user = await user_services.find_user_by_id(req)
                if (user) {
                    user.created_projects.push(response._id);
                    user.save();
                    res.send({
                        success: true,
                        message: "Project created successfully."
                    })
                }
                else {
                    res.send({
                        success: false,
                        message: "Faild to create project."
                    })
                }
            })

    }
    catch (error) {
        res.send({
            success: false,
            message: "Faild to create project."
        })
    }
}

const update_project_by_project_id = async (req, res) => {
    const payload = { ...req.body };
    try {
        const update_response = await project_services.edit_project_by_project_id(req, payload);
        if (update_response) {
            res.send({
                success: true,
                message: "Project updated successfully."
            })
        }
        else{
            res.send({
                success: false,
                message: "Failed to update projects."
            })
        }
    }
    catch {
        res.send({
            success: false,
            message: "Failed to update projects."
        })
    }
}

const get_all_projects = async (req, res) => {
    try {
        const projects = await project_services.fetch_all_projects(req);
        if (projects) {
            res.send({
                data: [...projects],
                success: true,
                message: "Projects fetched."
            })
        }
        else {
            res.send({
                success: false,
                message: "Failed to fetch projects."
            })
        }
    }
    catch (error) {
        res.send({
            success: false,
            message: "Failed to fetch projects."
        })
    }
}


const get_project_by_project_Id = async (req, res) => {
    try {
        const project = await project_services.fetch_project_by_projectId(req);
        if (project) {
            res.send({
                data: project,
                success: true,
                message: "Project fetched."
            })
        }
        else {
            res.send({
                success: false,
                message: "Failed to fetch project."
            })
        }
    }
    catch (error) {
        res.send({
            success: false,
            message: "Failed to fetch project."
        })
    }
}

const delete_project_by_project_id = async (req, res) => {
    const is_authorized = req.role?.includes("ADMIN");
    const deleted = await project_services.remove_project_by_project_id(req);
    try {
        if (is_authorized) {
            if (deleted) {
                res.send({
                    success: true,
                    message: "Project deleted Successfully",
                })
            }
            else {
                res.send({
                    success: false,
                    message: "Failed to delete project",
                })
            }
        }
        else {
            res.send({
                success: false,
                message: "You are not authorized to delete this project",
            })
        }
    }
    catch (error) {
        res.send({
            success: false,
            message: "Failed to delete project",
        })
    }
}


module.exports = {
    create_project,
    update_project_by_project_id,
    get_all_projects,
    get_project_by_project_Id,
    delete_project_by_project_id
}