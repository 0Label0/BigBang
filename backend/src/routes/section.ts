import { Schema, model } from "mongoose";
import { Section } from "../types";

const sectionSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  position: {
    type: Number,
    required: true
  }

})

export default model<Section>('Section',sectionSchema)
