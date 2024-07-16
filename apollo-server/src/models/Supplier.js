import mongoose from 'mongoose'
const { Schema } = mongoose;

const supplierSchema = new Schema({
    name: { type: String, required: true },
    number: { type: Number, required: true },
    address: String,
    phone: String,
    email: String,

  });

  //console.log(alphaSupplierSchema)

  export const Supplier = mongoose.model('Supplier', supplierSchema);

  
 

  