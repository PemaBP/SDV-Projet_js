import * as yup from "yup";

export const typeValidator = yup.string().required().label("Type de lieu");
export const nameValidator = yup.string().required().label("Lieu");
export const addressValidator =  yup.string().required().label("Adresse")
export const cityValidator =  yup.string().required().label("Ville")
export const postalCodeValidator =  yup.string().max(5).required().label("code postal")
export const countryValidator = yup.string().required().label("Pays")

export const cuisineTypeValidator = yup.string().when("type", {
  is: "restaurant",
  then: yup.string().required("Le type de cuisine est requis").label("Type de cuisine"),
});
export const starsValidator = yup.number().when("type", {
  is: "restaurant",
  then: yup.number().required("Le nombre d'étoiles est requis").min(0).max(3),
});
export const priceLevelValidator = yup.number().when("type", {
  is: "restaurant",
  then: yup.number().required("Le prix moyen est requis").min(1).max(5),
});
export const artStyleValidator = yup.string().when("type", {
  is: "museum",
  then: yup.string().required("Le courant artistique est requis"),
});
export const artTypeValidator = yup.string().when("type", {
  is: "museum",
  then: yup.string().required("Le type d'art est requis"),
});
export const parkTypeValidator = yup.string().when("type", {
  is: "park",
  then: yup.string().required("Le type de parc est requis"),
});
export const isPublicValidator = yup.string().when("type", {
  is: "park",
  then: yup.string().required(),
});
export const freeOrPaidParkValidator = yup.string().when("type", {
  is: "park",
  then: yup.string().required(),
});
export const parkPriceValidator = yup.number().when("freeOrPaidPark", {
  is: "payant",
  then: yup.number().required().min(0),
});
export const barTypeValidator = yup.string().when("type", {
  is: "bar",
  then: yup.string().required("Le type de cuisine est requis"),
});
export const barPriceLevelValidator = yup.number().when("type", {
  is: "bar",
  then: yup.number().required("Le prix moyen est requis").min(1).max(5),
});