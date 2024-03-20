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
  },
  name: String,
  username: {
    type: String,
    unique: true
  },
  age: {
    type: Number,
    min: 18
  },
  profilePicture: {
    type: String,
  },
  bio: {
    type: String,
    maxlength: 250
  },
  booksRead: [{
    title: String,
    author: String,
    status: String,
    pageAt: Number,
    book: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Book'
    }
  }],
  messages: [{
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    message: String,
    timestamp: {
      type: Date,
      default: Date.now
    }
  }],
  interests: [String],
  
}, {
  timestamps: true // Adds createdAt and updatedAt fields automatically
})

const UserModel = mongoose.models.User || mongoose.model('User', UserSchema)
export default UserModel
