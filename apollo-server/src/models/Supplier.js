import mongoose from 'mongoose';

export const Supplier = mongoose.model('Supplier', {
     
    supplier_name: String,
     supplier_number:String 
});