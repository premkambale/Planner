const { project_collection, auth_collection } = require("../../models");

const edit_project_by_project_id = async (req, payload) => {
    console.log(payload)
    return await project_collection.updateOne({ _id: payload.projectId},  { $set: payload }, { new: true} )
}

const fetch_all_projects = async (req) => {
    return await project_collection.find()
}

const fetch_project_by_projectId = async (req) => {
    return await project_collection.findOne({ _id: req.params.projectId })
}

const remove_project_by_project_id = async (req, res) => {
    return await project_collection.deleteOne({ _id: req.params.projectId })
}


module.exports = {
    fetch_all_projects,
    fetch_project_by_projectId,
    remove_project_by_project_id,
    edit_project_by_project_id
}