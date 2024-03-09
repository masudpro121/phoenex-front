const mongoose = require('mongoose')


const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  }
})

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema)
export default UserModel
