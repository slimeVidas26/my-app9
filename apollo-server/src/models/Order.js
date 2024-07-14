import mongoose from 'mongoose'
const { Schema } = mongoose;

const orderProductSchema = new Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
  quantity: { type: Number, required: true },
  quantityPerBox: { type: Number, required: false },


});

const orderSchema = new Schema({
  supplier: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
  edi: { type: Number, required: false , default: 10000000},
  reference: { type: Number, required: true },
  products: [orderProductSchema],
  date: { type: Date, default: Date.now},
  totalQuantity: { type: Number,default: 0 },
  totalBoxes: { type: Number,default: 0 },

});

 export const Order = mongoose.model('Order', orderSchema);