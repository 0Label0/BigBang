import { Schema, model } from 'mongoose'

const drinkSchema = new Schema({
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
  }
}, {
  timestamps: true
})

export default model('Drink', drinkSchema)