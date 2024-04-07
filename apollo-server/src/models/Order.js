import mongoose from 'mongoose';

export const Order = mongoose.model('Order', {
     
     reference: String ,
     date:Date,
     supplier:String,
     rows:Number,
     quantity:Number,
     supplied:Number,
     isOpen:Boolean,
     
     
    
    });

    