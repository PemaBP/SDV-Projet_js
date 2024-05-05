import React from "react";
import PlaceForm from "./places/essai";

const AddAddressPage = () => {
  return (
    <div className="grid-cols-2 bg-section-backg rounded-3xl py-28 text-white ">
      <div className="ml-8">
        <div className="text-5xl text-blue-color font-bold">
          Ajouter une adresse
        </div>
        <p className="text-blue-color text-xl pt-4">
          Partagez simplement une adresse avec ce formulaire
        </p>
        <hr className="border-blue-color mx-auto my-12 border-2 w-1/3 m-auto" />
        <div className="pt-4">
          <PlaceForm />

        </div>
      </div>
    </div>
  );
};

export default AddAddressPage;
