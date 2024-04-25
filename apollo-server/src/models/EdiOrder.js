import mongoose from 'mongoose';

const Schema = mongoose.Schema
// const ObjectId = Schema.Types.ObjectId;

export const EdiOrder = mongoose.model('EdiOrder', { 
 // _id: ObjectId,

  supplier:String,
  supplierNumber: String,
  edi :Number,
  orderNumber: String,
  boxes: Number,
  quantity : Number,
  date:String,
  // date: {type: Date, default: Date.now},
  // rows: Number , 
  // quantity : Number , 
  // ediOrderItems: [{
  //       type: Schema.Types.ObjectId,
  //       ref: 'EdiOrderItem'
  //     }]
     });

     