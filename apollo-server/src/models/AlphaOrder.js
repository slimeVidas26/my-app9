import mongoose from 'mongoose'
const { Schema } = mongoose;

const alphaOrderProductSchema = new mongoose.Schema({
  alphaProduct: { type: mongoose.Schema.Types.ObjectId, ref: 'AlphaProduct', required: true },
  quantity: { type: Number, required: true }
});

const alphaOrderSchema = new mongoose.Schema({
  alphaSupplier: { type: mongoose.Schema.Types.ObjectId, ref: 'AlphaSupplier', required: true },
  alphaProducts: [alphaOrderProductSchema],
  alphaOrderDate: { type: Date, default: Date.now },
  totalAmount: { type: Number, required: true }
});

 export const AlphaOrder = mongoose.model('AlphaOrder', alphaOrderSchema);