import mongoose from 'mongoose'
const { Schema } = mongoose;

const betaProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: false },
  inStock: { type: Number, required: false },
  quantityPerBox: { type: Number, required:true },


  // alphaSupplier: { type: mongoose.Schema.Types.ObjectId, ref: 'AlphaSupplier', required: true }
});

export const BetaProduct = mongoose.model('BetaProduct', betaProductSchema);