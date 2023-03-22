import mongoose from "mongoose";
const Schema = mongoose.Schema

export const PlanetSchema = new Schema(
  {
    name: { type: String, maxLength: 30, required: true },
    biome: { type: String, maxLength: 30 },
    atmosphere: { type: Boolean, default: false },
    galaxyId: { type: Schema.Types.ObjectId, required: true, ref: 'Galaxy' }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)