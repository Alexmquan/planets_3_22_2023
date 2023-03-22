import mongoose from "mongoose";
const Schema = mongoose.Schema

export const GalaxySchema = new Schema(
  {
    name: { type: String, required: true, maxLength: 30 },
    stars: { type: Number, max: 1000 }
  }, {
  timestamps: true, toJSON: { virtuals: true }
}
)