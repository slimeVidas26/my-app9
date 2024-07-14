import mongoose from 'mongoose'
const { Schema } = mongoose;

const betaOrderProductSchema = new Schema({
  betaProduct: { type: mongoose.Schema.Types.ObjectId, ref: 'BetaProduct', required: true },
  quantity: { type: Number, required: true },
  quantityPerBox: { type: Number, required: false },


});

const betaOrderSchema = new Schema({
  betaSupplier: { type: mongoose.Schema.Types.ObjectId, ref: 'BetaSupplier', required: true },
  betaEdi: { type: Number, required: false , default: 10000000},
  betaReference: { type: Number, required: true },
  betaProducts: [betaOrderProductSchema],
  betaOrderDate: { type: Date, default: Date.now},
  totalQuantity: { type: Number,default: 0 },
  totalBoxes: { type: Number,default: 0 },

});

 export const BetaOrder = mongoose.model('BetaOrder', betaOrderSchema);