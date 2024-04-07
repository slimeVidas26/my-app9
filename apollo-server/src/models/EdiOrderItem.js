import mongoose from 'mongoose';

const Schema = mongoose.Schema

export const EdiOrderItem = mongoose.model('EdiOrderItem', {
  code: String,
  product: String,
  quantity:Number,
  ediOrder: {
    type: Schema.Types.ObjectId,
    ref: 'EdiOrder'
  }
})