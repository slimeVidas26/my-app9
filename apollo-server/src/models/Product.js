import mongoose from 'mongoose'
const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: false },
  code: { type: Number, required: true },

  inStock: { type: Number, required: false },
  quantityPerBox: { type: Number, required:true },
   supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true }
});

export const Product = mongoose.model('Product', productSchema);