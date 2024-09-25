import mongoose from 'mongoose'
const { Schema } = mongoose;

const orderProductSchema = new Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantityBefore: { type: Number, required: true },
  // quantityAfter: { type: Number, required: false ,default: 0},
  quantityAfter: { type: Number, default: function() { return this.quantityBefore; }, required: false },  // Default to quantityBefore if not provided
  // quantityPerBox: { type: Number, required: false },
  isOpen: { type: Boolean, default: true }

});

const orderSchema = new Schema({
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
  edi: { type: Number, required: false, default: 100 },
  reference: { type: Number, required: true },
  date: { type: Date, default: Date.now },
  totalQuantity: { type: Number, default: 0 },
  totalBoxes: { type: Number, default: 0 },
  products: [orderProductSchema],

});

export const Order = mongoose.model('Order', orderSchema);