const mongoose = require('mongoose')


const HistorySchema = new mongoose.Schema({
  prompt: String,
  images: [String],
  audio: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
})

const HistoryModel = mongoose.models.History || mongoose.model('History', HistorySchema)
export default HistoryModel
