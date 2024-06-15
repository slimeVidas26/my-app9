// import mongoose from 'mongoose';

// export const Order = mongoose.model('Order', {
     
//      reference: String ,
//      date:Date,
//      supplier:String,
//      rows:Number,
//      quantity:Number,
//      supplied:Number,
//      isOpen:Boolean,
     
     
    
//     });

import mongoose from 'mongoose';

const {Schema} = mongoose

const testOrderSchema = new Schema({
     testSupplier: { type: mongoose.Schema.Types.ObjectId, ref: 'TestSupplier', required: true },

     testProducts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'TestProduct', required: true }],
     orderDate: { type: Date, default: Date.now },
     totalAmount: { type: Number, required: true }
   });
   
   export const TestOrder = mongoose.model('TestOrder', testOrderSchema);

    