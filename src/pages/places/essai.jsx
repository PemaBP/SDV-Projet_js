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
            <FormField name="type" as="select" required className="text-black">
              <option value="">Sélectionner le type de lieu</option>
              <option value="restaurant">Restaurant</option>
              <option value="museum">Musée</option>
              <option value="bar">Bar</option>
              <option value="park">Parc</option>
            </FormField>
            <FormField name="name"  required className="text-black"/>
            <FormField name="address" required className="text-black"/>
            <FormField name="city" required className="text-black"/>
            <FormField name="postalCode" required className="text-black"/>
            <FormField name="country" required className="text-black"/>

            {props.values.type === 'restaurant' && (
              <>
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
                <FormField name="stars" label="Nombre d'étoiles" required className="text-black">
                  <Field type="number" name="stars" id="stars" min="0" max="3" className="bg-white text-black" />
                </FormField>
                <FormField name="priceLevel" label="Prix moyen (de 1 à 5)" required className="text-black">
                  <Field type="number" name="priceLevel" id="priceLevel" min="1" max="5" className="bg-white text-black" />
                </FormField>
              </>
            )}

            {props.values.type === 'museum' && (
              <>
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
                <FormField name="artType" as="select" label="Type d'art" required className="text-black">
                  <option value="">Sélectionner le type d'art</option>
                  <option value="sculpture">Sculpture</option>
                  <option value="dessin">Dessin</option>
                  <option value="peinture">Peinture</option>
                  <option value="archéologie">Archéologie</option>
                  <option value="mixte">Mixte</option>
                  <option value="autre">Autre</option>
                </FormField>
                <FormField name="freeOrPaid" as="select" label="Gratuit ou payant" required className="text-black">
                  <option value="">Sélectionner</option>
                  <option value="gratuit">Gratuit</option>
                  <option value="payant">Payant</option>
                </FormField>
            
                {props.values.freeOrPaid === 'payant' && (
                  <FormField name="parkPrice" label="Prix" required className="text-black">
                    <Field type="number" name="parkPrice" id="parkPrice" min="0" max="500"className="bg-white text-black" />
                  </FormField>
                )}
              </>
            )}

            {props.values.type === 'bar' && (
              <>
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
                <FormField name="barPriceLevel" label="Prix moyen (de 1 à 5)" required className="text-black"> 
                  <Field type="number" name="barPriceLevel" id="barPriceLevel" min="1" max="5" className="bg-white text-black" />
                </FormField>
              </>
            )}

            {props.values.type === 'park' && (
              <>
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
                <FormField name="isPublic" as="select" label="Public ou privé" required className="text-black">
                  <option value="">Sélectionner</option>
                  <option value="public">Public</option>
                  <option value="private">Privé</option>
                </FormField>
                <FormField name="freeOrPaidPark" as="select" label="Gratuit ou payant" required className="text-black">    
                  <option value="">Sélectionner</option>
                  <option value="gratuit">Gratuit</option>
                  <option value="payant">Payant</option>
                </FormField>

                {props.values.freeOrPaidPark === 'payant' && (
                  <FormField name="parkPrice" label="Prix" required className="text-black">
                    <Field type="number" name="parkPrice" id="parkPrice" min="0" max="500" className="bg-white text-black" />
                  </FormField>
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
