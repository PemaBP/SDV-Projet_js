import { PlaceSchema } from "@/db/Schemas/PlaceSchema"
import mongoose from "mongoose"

export const PlaceModel =
  mongoose.models.Place || mongoose.model("Place", PlaceSchema)