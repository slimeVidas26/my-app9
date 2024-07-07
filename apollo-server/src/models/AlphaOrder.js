import mongoose from 'mongoose'
const { Schema } = mongoose;

const alphaOrderProductSchema = new Schema({
  alphaProduct: { type: mongoose.Schema.Types.ObjectId, ref: 'AlphaProduct', required: true },
  quantity: { type: Number, required: false },

});

const alphaOrderSchema = new Schema({
  alphaSupplier: { type: mongoose.Schema.Types.ObjectId, ref: 'AlphaSupplier', required: true },
  alphaEdi: { type: Number, required: false , default: 10000000},
  alphaReference: { type: Number, required: true },
  alphaProducts: [alphaOrderProductSchema],
  alphaOrderDate: { type: Date, default: Date.now},
  totalQuantity: { type: Number,default: 0 }
});

 export const AlphaOrder = mongoose.model('AlphaOrder', alphaOrderSchema);