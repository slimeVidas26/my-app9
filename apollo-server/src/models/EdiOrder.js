// import mongoose from 'mongoose';

// const Schema = mongoose.Schema
// const ObjectId = Schema.Types.ObjectId;



// export const EdiOrder = mongoose.model('EdiOrder', { 
//  // _id: ObjectId,

//   supplier:String,
//   supplierNumber: String,
//   edi :Number,
//   orderNumber: String,
//   boxes: Number,
//   quantity : Number,
//   date:String,
//   // date: {type: Date, default: Date.now},
//   // rows: Number , 
//   // quantity : Number , 
//   // ediOrderItems: [{
//   //       type: Schema.Types.ObjectId,
//   //       ref: 'EdiOrderItem'
//   //     }]
//      });

     import mongoose from 'mongoose';



     const { Schema } = mongoose;

// Define the EdiOrder schema
const ediOrderSchema = new Schema({

 supplier: { type: Schema.Types.ObjectId, ref: 'Supplier' },
 edi: { type: Number, required: true },
supplierDeliveryNumber : { type: Number, required: true },
date: {type: Date, default: Date.now},
 products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
 boxQuantity : { type: Number, required: true },
 //quantityOrdered : {boxQuantity * quantityPerBox }

});

export const EdiOrder = mongoose.model('EdiOrder', ediOrderSchema);


     