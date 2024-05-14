import mongoose from 'mongoose';

const Schema = mongoose.Schema

export const Book = mongoose.model('Book', {
  title: String,
  pages: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  }
})