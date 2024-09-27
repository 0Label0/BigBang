import { Document } from "mongoose"

interface Section extends Document {
  title: string,
}
export interface SectionArray {
  sections: [Section]
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
