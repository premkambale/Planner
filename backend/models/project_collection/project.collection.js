const mongoose = require("mongoose");


const project_collection = mongoose.Schema({
    projectName: {
        type: String,
        require
    },
    projectDescription: {
        type: String,
        require
    },
    projectStartdate: {
        type: Date,
        default: Date.now(),
        require
    },
    projectEnddate: {
        type: Date,
        default: Date.now(),
        require
    }
})


module.exports = mongoose.model("projects", project_collection)