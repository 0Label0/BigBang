import { Document } from "mongoose"

export interface Section extends Document {
  name: string,
  position: number
}

export interface Drink extends Document {
  name: string,
  price: number,
  desctiption: string,
  section_id: mongoose.Schema.ObjectId
}

export interface Admin extends Document {
  name: String,
  mail: String,
  password: String
}
