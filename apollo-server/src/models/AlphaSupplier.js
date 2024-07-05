import mongoose from 'mongoose'
const { Schema } = mongoose;

const alphaSupplierSchema = new Schema({
    name: { type: String, required: true },
    number: { type: Number, required: true },

    address: String,
    phone: String,
    email: String
  });

  //console.log(alphaSupplierSchema)

  export const AlphaSupplier = mongoose.model('AlphaSupplier', alphaSupplierSchema);

  
 

  