const mongoose = require('mongoose')

const BookSchema = new mongoose.Schema({
  name: String,
  refId: String
})

const BookModel = mongoose.models.Book || mongoose.model('Book', BookSchema)
export default BookModel
