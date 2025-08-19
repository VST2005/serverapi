const mongoose = require("mongoose")
const TeachersSchema = mongoose.Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  Password: {
    type: String
  }
})

const TeacherModel = mongoose.model("teacher", TeachersSchema);
module.exports = TeacherModel
