import React from 'react';
import { Formik,Form, Field, useFormik } from 'formik';
import * as Yup from 'yup';

const PlaceForm = () => {
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

  const onSubmit = (values) => {
    console.log('Submitted:', values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} >
      {({ values, handleChange }) => (
        <Form >
          <div className='grid grid-cols-2 gap-4 pb-6 '>
            <label htmlFor="type" className="font-bold">Type de lieu:</label>
            <Field as="select" name="type" id="type" className="bg-white text-black" required>
              <option value="">Sélectionner le type de lieu</option>
              <option value="restaurant">Restaurant</option>
              <option value="museum">Musée</option>
              <option value="bar">Bar</option>
              <option value="park">Parc</option>
            </Field>

            <label htmlFor="name"className="font-bold">Nom du lieu:</label>
            <Field type="text" name="name" id="name" className="text-black" required />

            <label htmlFor="address"className="font-bold">Adresse:</label>
            <Field type="text" name="address" id="address"className="text-black" required />
            
            <label htmlFor="city"className="font-bold">Ville:</label>
            <Field type="text" name="city" id="city" className="text-black"required />
            
            <label htmlFor="postalCode"className="font-bold ">Code postal:</label>
            <Field type="text" name="postalCode" id="postalCode"className="text-black" required />
            
            <label htmlFor="country"className="font-bold ">Pays:</label>
            <Field type="text" name="country" id="country"className="text-black" required />
          </div>
            {values.type === 'restaurant' && (
              <div>
                <label htmlFor="cuisineType"className="font-bold">Type de cuisine:</label>
                <Field as="select" name="cuisineType" id="cuisineType" className="bg-white text-black"required>
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
                </Field>

                <label htmlFor="stars"className="font-bold ml-6">Nombre d'étoiles:</label>
                <Field type="number" name="stars" id="stars" min="0" max="3" className="bg-white text-black" required />

                <label htmlFor="priceLevel"className="font-bold ml-6">Prix moyen (de 1 à 5):</label>
                <Field type="number" name="priceLevel" id="priceLevel" min="1" max="5" className="bg-white text-black" required />
              </div>
            )}

            {values.type === 'museum' && (
              <div >
                <label htmlFor="artStyle"className="font-bold">Courant artistique:</label>
                <Field as="select" name="artStyle" id="artStyle" className="bg-white text-black"required>
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
                </Field>
                <label htmlFor="artType"className="font-bold ml-6 ">Type d'art:</label>
                <Field as="select" name="artType" id="artType" className="bg-white text-black"required>
                  <option value="">Sélectionner le type d'art</option>
                  <option value="sculpture">Sculpture</option>
                  <option value="dessin">Dessin</option>
                  <option value="peinture">Peinture</option>
                  <option value="archéologie">Archéologie</option>
                  <option value="mixte">Mixte</option>
                  <option value="autre">Autre</option>
                </Field>
                <label htmlFor="freeOrPaid"className="font-bold ml-6">Gratuit ou payant:</label>
                <Field as="select" name="freeOrPaid" id="freeOrPaid" className="bg-white text-black"required>
                  <option value="">Sélectionner</option>
                  <option value="gratuit">Gratuit</option>
                  <option value="payant">Payant</option>
                </Field>

                {values.freeOrPaid === 'payant' && (
                  <div>
                    <label htmlFor="Price"className="font-bold ml-6">Prix :</label>
                    <Field type="number" name="Price" id="Price" min="0"className="bg-white text-black" required />
                  </div>
                )}
              </div>
            )}

            {values.type === 'bar' && (
              <div>
                <label htmlFor="barType"className="font-bold">Type de bar:</label>
                <Field as="select" name="barType" id="barType" className="bg-white text-black"required>
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
                </Field>
                <label htmlFor="barPriceLevel"className="font-bold ml-6">Prix moyen (de 1 à 5):</label>
                <Field type="number" name="barPriceLevel" id="barPriceLevel" min="1" max="5"className=" text-black" required />
              </div>
            )}

            {values.type === 'park' && (
              <div>
                <label htmlFor="parkType"className="font-bold">Type de parc:</label>
                <Field as="select" name="parkType" id="parkType" required className="bg-white text-black">
                  <option value="">Sélectionner le type de parc</option>
                  <option value="zoologique">Zoologique</option>
                  <option value="archéologique">Archéologique</option>
                  <option value="attraction">Attraction</option>
                  <option value="botanique">Botanique</option>
                  <option value="naturel régional">Naturel régional</option>
                  <option value="jardin public">Jardin public</option>
                  <option value="aquatique">Aquatique</option>
                  <option value="autre">Autre</option>
                </Field>

                <label htmlFor="isPublic"className="font-bold ml-6">Public ou privé:</label>
                <Field as="select" name="isPublic" id="isPublic"className="bg-white text-black" required>
                  <option value="">Sélectionner</option>
                  <option value="public">Public</option>
                  <option value="private">Privé</option>
                </Field>

                <label htmlFor="freeOrPaidPark"className="font-bold ml-6">Gratuit ou payant:</label>
                <Field as="select" name="freeOrPaidPark" id="freeOrPaidPark" className="bg-white text-black"required>
                  <option value="">Sélectionner</option>
                  <option value="gratuit">Gratuit</option>
                  <option value="payant">Payant</option>
                </Field>

                {values.freeOrPaidPark === 'payant' && (
                  <div>
                    <label htmlFor="parkPrice"className="font-bold ml-6 ">Prix :</label>
                    <Field type="number" name="parkPrice" id="parkPrice" min="0" className="text-black" />
                  </div>
                )}
              </div>
            )}
          <button type="submit" className="block px-4 py-2 mt-16 mx-auto bg-blue-color text-white text-3xl font-bold rounded-md shadow-xl ">Ajouter</button>
        </Form>
      )}
    </Formik>
  );
};

export default PlaceForm;
