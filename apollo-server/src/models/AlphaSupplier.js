import mongoose from 'mongoose'
const { Schema } = mongoose;

const alphaSupplierSchema = new Schema({
    name: { type: String, required: true },
    address: String,
    phone: String,
    email: String
  });

  export const AlphaSupplier = mongoose.model('AlphaSupplier', alphaSupplierSchema);

  
 

  