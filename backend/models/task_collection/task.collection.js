const mongoose = require("mongoose");

const task_schema = mongoose.Schema({
    userId:mongoose.Types.ObjectId
})


module.exports = mongoose.model("tasks",task_schema);