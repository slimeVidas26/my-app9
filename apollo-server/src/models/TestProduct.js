import mongoose from 'mongoose';

const {Schema} = mongoose

const testProductSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  testSupplier: { type: mongoose.Schema.Types.ObjectId, ref: 'TestSupplier', required: true }
});

export const TestProduct = mongoose.model('TestProduct', testProductSchema);

// Define the Product schema
// const productSchema = new Schema({name: { type: String, required: true },
//                                   barcode: { type: String, required: true},
//                                   image : {type: String, required: true},
//                                   price: { type: Number, required: true },
//                                   description : String,
//                                   quantityPerBox :{ type: Number },
//                                   quantityInStock :{ type: Number },

//                                 });

// export const Product = mongoose.model('Product', productSchema);


