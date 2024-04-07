import mongoose from 'mongoose';

export const Supplier = mongoose.model('Supplier', {
     
    name: String,
     number:String 
});