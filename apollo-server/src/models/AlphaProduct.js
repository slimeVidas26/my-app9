import mongoose from 'mongoose'
const { Schema } = mongoose;

const alphaProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  inStock: { type: Number, required: true },
  quantityPerBox: { type: Number, required:false },


  alphaSupplier: { type: mongoose.Schema.Types.ObjectId, ref: 'AlphaSupplier', required: true }
});

export const AlphaProduct = mongoose.model('AlphaProduct', alphaProductSchema);