import { Schema, model } from "mongoose";
import { Admin } from "../types";

const adminSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  mail: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
  },

})

export default model<Admin>('Admin', adminSchema)
