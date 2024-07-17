import mongoose from 'mongoose'
const { Schema } = mongoose;

const supplierSchema = new Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true },
  address: String,
  phone: String,
  email: String,
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }]


});


export const Supplier = mongoose.model('Supplier', supplierSchema);




