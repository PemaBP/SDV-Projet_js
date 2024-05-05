import mongoose from "mongoose";

const PlaceSchema = new mongoose.Schema({
  type: { type: String, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  postalCode: { type: String, required: true },
  country: { type: String, required: true },
  cuisineType: String,
  stars: Number,
  priceLevel: Number,
  artStyle: String,
  artType: String,
  barType: String,
  priceLevelBar: Number,
  parkType: String,
  isPublic: String,
  freeOrPaidPark: String,
  parkPrice: Number,
});

const Place = mongoose.model("Address", PlaceSchema);

module.exports = Place;
