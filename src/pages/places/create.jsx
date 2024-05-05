import React from 'react';
import { Formik } from 'formik';
import { Field } from 'formik';
import { Form } from "@/components/Form";
import { FormField } from "@/components/FormField"
import { barPriceLevelValidator, barTypeValidator, parkTypeValidator, isPublicValidator, cityValidator, nameValidator, typeValidator, starsValidator, addressValidator, artTypeValidator, countryValidator, artStyleValidator, parkPriceValidator, postalCodeValidator, priceLevelValidator, cuisineTypeValidator, freeOrPaidParkValidator } from '@/validators';
import * as yup from 'yup';
import axios from 'axios';

const initialValues = {
  type: '',
  name: '',
  address: '',
  city: '',
  postalCode: '',
  country: '',
  cuisineType: '',
  stars: '',
  priceLevel: '',
  artStyle: '',
  artType: '',
  barType: '',
  priceLevelBar: '',
  parkType: '',
  isPublic: '',
  freeOrPaidPark: '',
  parkPrice: '',
};

const validationSchema = yup.object({
  type: typeValidator,
  name: nameValidator,
  address: addressValidator,
  city: cityValidator,
  postalCode: postalCodeValidator,
  country: countryValidator,
  cuisineType: cuisineTypeValidator,
  stars: starsValidator,
  priceLevel: priceLevelValidator,
  artStyle: artStyleValidator,
  artType: artTypeValidator,
  barType: barTypeValidator,
  priceLevelBar: barPriceLevelValidator,
  parkType: parkTypeValidator,
  isPublic: isPublicValidator,
  freeOrPaidPark: freeOrPaidParkValidator,
  parkPrice: parkPriceValidator,
});

const PlaceForm = () => {
  const handleSubmit = async (values, { resetForm }) => {
    await axios.post("/api/places", values);
    resetForm();
  }

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
        {(props) => (
          <Form>
            <div className='grid grid-cols-2 gap-8 pb-6 '>
              <label htmlFor="type" className="font-bold">Type de lieu:</label>
              <FormField name="type" as="select" required className="text-black">
                <option value="">Sélectionner le type de lieu</option>
                <option value="restaurant">Restaurant</option>
                <option value="museum">Musée</option>
                <option value="bar">Bar</option>
                <option value="park">Parc</option>
              </FormField>
              <label htmlFor="name"className="font-bold">Nom du lieu:</label>
              <FormField name="name" required className="text-black" />
              <label htmlFor="address"className="font-bold">Adresse:</label>
              <FormField name="address" required className="text-black" />
              <label htmlFor="city"className="font-bold">Ville:</label>
              <FormField name="city" required className="text-black" />
              <label htmlFor="postalCode"className="font-bold ">Code postal:</label>
              <FormField name="postalCode" required className="text-black" />
              <label htmlFor="country"className="font-bold ">Pays:</label>
              <FormField name="country" required className="text-black"/>
            </div>
            {props.values.type === 'restaurant' && (
              <>
                <label htmlFor="cuisineType"className="font-bold">Type de cuisine:</label>
                <FormField name="cuisineType" as="select" required className="text-black">
                  <option value="">Sélectionner le type de cuisine</option>
                  <option value="italienne">Italienne</option>
                  <option value="japonaise">Japonaise</option>
                  <option value="mexicaine">Mexicaine</option>
                  <option value="française">Française</option>
                  <option value="marocaine">Marocaine</option>
                  <option value="sénégalaise">Sénégalaise</option>
                  <option value="polonaise">Polonaise</option>
                  <option value="chilienne">Chilienne</option>
                  <option value="autre">Autre</option>
                </FormField>
                <label htmlFor="stars"className="font-bold ml-6">Nombre d'étoiles:</label>
                <FormField name="stars" label="Nombre d'étoiles" required className="text-black">
                  <Field type="number" name="stars" id="stars" min="0" max="3" className="bg-white text-black" />
                </FormField>
                <label htmlFor="priceLevel"className="font-bold ml-6">Prix moyen (de 1 à 5):</label>
                <FormField name="priceLevel" label="Prix moyen (de 1 à 5)" required className="text-black">
                  <Field type="number" name="priceLevel" id="priceLevel" min="1" max="5" className="bg-white text-black" />
                </FormField>
              </>
            )}

            {props.values.type === 'museum' && (
              <>
                <label htmlFor="artStyle"className="font-bold">Courant artistique:</label>
                <FormField name="artStyle" as="select" label="Courant artistique" required className="text-black">
                  <option value="">Sélectionner le courant artistique</option>
                  <option value="classicisme">Classicisme</option>
                  <option value="baroque">Baroque</option>
                  <option value="fauvisme">Fauvisme</option>
                  <option value="rococo">Rococo</option>
                  <option value="romantisme">Romantisme</option>
                  <option value="réalisme">Réalisme</option>
                  <option value="cubisme">Cubisme</option>
                  <option value="tout genre">Tout genre</option>
                  <option value="autre">Autre</option>
                </FormField>
                <label htmlFor="artType"className="font-bold ml-6 ">Type d'art:</label>
                <FormField name="artType" as="select" label="Type d'art" required className="text-black">
                  <option value="">Sélectionner le type d'art</option>
                  <option value="sculpture">Sculpture</option>
                  <option value="dessin">Dessin</option>
                  <option value="peinture">Peinture</option>
                  <option value="archéologie">Archéologie</option>
                  <option value="mixte">Mixte</option>
                  <option value="autre">Autre</option>
                </FormField>
                <label htmlFor="freeOrPaid"className="font-bold ml-6">Gratuit ou payant:</label>
                <FormField name="freeOrPaid" as="select" label="Gratuit ou payant" required className="text-black">
                  <option value="">Sélectionner</option>
                  <option value="gratuit">Gratuit</option>
                  <option value="payant">Payant</option>
                </FormField>
            
                {props.values.freeOrPaid === 'payant' && (
                  <div>
                    <label htmlFor="Price"className="font-bold ml-6">Prix :</label>
                    <FormField name="parkPrice" label="Prix" required className="text-black">
                      <Field type="number" name="parkPrice" id="parkPrice" min="0" max="500"className="bg-white text-black" />
                    </FormField>
                  </div>

                )}
              </>
            )}

            {props.values.type === 'bar' && (
              <>
                <label htmlFor="barType"className="font-bold">Type de bar:</label>
                <FormField name="barType" as="select" label="Type de bar" required className="text-black">
                  <option value="">Sélectionner le type de bar</option>
                  <option value="bar dansant">Bar dansant</option>
                  <option value="jazz">Jazz</option>
                  <option value="pub">Pub</option>
                  <option value="vin">Vin</option>
                  <option value="whiskey">Whiskey</option>
                  <option value="pmu">PMU</option>
                  <option value="bière">Bière</option>
                  <option value="cocktails">Cocktails</option>
                  <option value="clubs">Clubs</option>
                  <option value="autre">Autre</option>
                </FormField>
                <label htmlFor="barPriceLevel"className="font-bold ml-6">Prix moyen (de 1 à 5):</label>
                <FormField name="barPriceLevel" label="Prix moyen (de 1 à 5)" required className="text-black"> 
                  <Field type="number" name="barPriceLevel" id="barPriceLevel" min="1" max="5" className="bg-white text-black" />
                </FormField>
              </>
            )}

            {props.values.type === 'park' && (
              <>
                <label htmlFor="parkType"className="font-bold">Type de parc:</label>
                <FormField name="parkType" as="select" label="Type de parc" required className="text-black">
                  <option value="">Sélectionner le type de parc</option>
                  <option value="zoologique">Zoologique</option>
                  <option value="archéologique">Archéologique</option>
                  <option value="attraction">Attraction</option>
                  <option value="botanique">Botanique</option>
                  <option value="naturel régional">Naturel régional</option>
                  <option value="jardin public">Jardin public</option>
                  <option value="aquatique">Aquatique</option>
                  <option value="autre">Autre</option>
                </FormField>
                <label htmlFor="isPublic"className="font-bold ml-6">Public ou privé:</label>
                <FormField name="isPublic" as="select" label="Public ou privé" required className="text-black">
                  <option value="">Sélectionner</option>
                  <option value="public">Public</option>
                  <option value="private">Privé</option>
                </FormField>
                <label htmlFor="freeOrPaidPark"className="font-bold ml-6">Gratuit ou payant:</label>
                <FormField name="freeOrPaidPark" as="select" label="Gratuit ou payant" required className="text-black">    
                  <option value="">Sélectionner</option>
                  <option value="gratuit">Gratuit</option>
                  <option value="payant">Payant</option>
                </FormField>
                {props.values.freeOrPaidPark === 'payant' && (
                  <div>
                    <label htmlFor="parkPrice"className="font-bold ml-6 ">Prix :</label>
                    <FormField name="parkPrice" label="Prix" required className="text-black">
                      <Field type="number" name="parkPrice" id="parkPrice" min="0" max="500" className="bg-white text-black" />
                    </FormField>
                  </div>
                )}
              </>
            )}
            <button type="submit" className="block px-4 py-2 mt-16 mx-auto bg-blue-color text-white text-3xl font-bold rounded-md shadow-xl ">
              Ajouter
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default PlaceForm;
