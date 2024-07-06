import mongoose from 'mongoose'
const { Schema } = mongoose;

const alphaOrderProductSchema = new mongoose.Schema({
  alphaProduct: { type: mongoose.Schema.Types.ObjectId, ref: 'AlphaProduct', required: false },
  quantity: { type: Number, required: false }
});

const alphaOrderSchema = new mongoose.Schema({
  alphaSupplier: { type: mongoose.Schema.Types.ObjectId, ref: 'AlphaSupplier', required: true },
  alphaEdi: { type: Number, required: false , default: 10000000},
  alphaReference: { type: Number, required: true },
  alphaProducts: [alphaOrderProductSchema],
  alphaOrderDate: { type: Date, default: Date.now},
  totalAmount: { type: Number,default: 0 }
});

 export const AlphaOrder = mongoose.model('AlphaOrder', alphaOrderSchema);