import { Schema, model } from "mongoose";
import { Section } from "../types";

const sectionSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    unique: true
  }
})

export default model<Section>('Section',sectionSchema)
