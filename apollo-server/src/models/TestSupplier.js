import mongoose from 'mongoose';

const { Schema } = mongoose;


const testSupplierSchema = new Schema({
  name: { type: String, required: true },
  address: String,
  phone: String,
  email: String
});

export const TestSupplier = mongoose.model('TestSupplier', testSupplierSchema);


// Define the Supplier schema
// const supplierSchema = new Schema({
//   name: { type: String, required: true },
//   number: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
// });

// export const Supplier = mongoose.model('Supplier', supplierSchema);



// export const Supplier = mongoose.model('Supplier', {
     
//     supplier_name: String,
//      supplier_number:String 
// });