import mongoose from 'mongoose';

export const ItemReason = mongoose.model('ItemReason', { title: String });