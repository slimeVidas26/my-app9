import mongoose from 'mongoose';

export const OrderItem = mongoose.model('OrderItem', {
      code: String,
      product_name: String,
      quantity: Number,
      boxes: Number,
      isOpen: Boolean,
      isFull: Boolean,
      ReasonOfRefund: String,
      orderReference:String
    });

    