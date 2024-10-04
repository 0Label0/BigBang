import { Schema, model } from 'mongoose'
import { Drink } from '../types' 

const dinkSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: false,
    trim: true
  },
  section_id: {
    type: Schema.Types.ObjectId,
    ref: 'Section',
    required: false
  }
})

export default model<Drink>('Drink', dinkSchema)
