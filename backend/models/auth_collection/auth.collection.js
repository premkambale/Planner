const mongoose = require("mongoose");

const user_regration_schema = mongoose.Schema({
  fullname: {
    type: String,
    require,
  },
  email: {
    type: String,
    require,
  },
  password: {
    type: String,
    require,
  },
  mobileNo: {
    type: Number,
    require,
  },
  role: {
    type: String,
    enum: ['USER', 'ADMIN'],
    default: 'ADMIN'
  },
  projects: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "projects"
    }
  ]

}, {
  timestamps: true,
}
)

module.exports = mongoose.model("users", user_regration_schema)