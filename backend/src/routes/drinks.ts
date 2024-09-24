import mongoose, { Schema, model } from 'mongoose'
import { Drink } from '../types' 

const dinkSchema: Schema = new Schema({
  name: {
    type:String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: false,
    trim: true
  },
  section_id: {
    type: mongoose.Schema.ObjectId,
    ref: 'Section',
    required: true
  }
}, {
  timestamps: true
})

export default model<Drink>('Drink', dinkSchema)
