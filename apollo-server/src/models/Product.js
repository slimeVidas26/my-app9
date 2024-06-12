import mongoose from 'mongoose';

const {Schema} = mongoose

// Define the Product schema
const productSchema = new Schema({
  name: { type: String, required: true },
  barcode: { type: String, required: true},
  image : {type: String, required: true},
  price: { type: Number, required: true },
  description : String,
});

export const Product = mongoose.model('Product', productSchema);

// export const Product = mongoose.model('Product', {
//   product_name: String,
//   barcode: String,
//   image:String,

  // supplier: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Supplier'
  // }
