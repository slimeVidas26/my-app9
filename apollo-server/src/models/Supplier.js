import mongoose from 'mongoose'
// import { Product } from './Product.js';
const { Schema } = mongoose;

const supplierDetailsSchema = new Schema({
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
});

const productSchema = new Schema({
  name: { type: String, required: false },
  price: { type: Number, required: false },
  code: { type: Number, required: false },
  category: { type: String, required: false },
  inStock: { type: Number, required: false },
  quantityPerBox: { type: Number, required: false },
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: false }
});


const supplierSchema = new Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true },
  supplierDetails: [supplierDetailsSchema],
  products: [productSchema]
});


export const Supplier = mongoose.model('Supplier', supplierSchema);




