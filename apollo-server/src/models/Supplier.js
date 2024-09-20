import mongoose from 'mongoose'
const { Schema } = mongoose;

const extraDataSchema = new Schema({
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  
  

});

const supplierSchema = new Schema({
  name: { type: String, required: true },
  number: { type: Number, required: true },
  extraData: [extraDataSchema],
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true }]


});


export const Supplier = mongoose.model('Supplier', supplierSchema);




