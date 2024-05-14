import mongoose from 'mongoose';

const Schema = mongoose.Schema

export const Product = mongoose.model('Product', {
  product_name: String,
  barcode: String,
  image:String,

  // supplier: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Supplier'
  // }
})