const mongoose = require("mongoose");


const project_collection = mongoose.Schema({
    projectName: {
        type: String,
        require: true
    },
    projectDesctiption: {
        type: String,
        require: true
    },
    projectStartdate: {
        type: Date,
        default: Date.now(),
        require: true
    },
    projectEnddate: {
        type: Date,
        default: Date.now(),
        require: true
    }
})


module.exports = mongoose.model("projects", project_collection)