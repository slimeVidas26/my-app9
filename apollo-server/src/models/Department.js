import mongoose from 'mongoose';

export const Department = mongoose.model('Department', { title: String });