import Hero from "@/components/hero";
import PlaceList from "@/components/Placelist";
import React from "react";
function Home() {
  return (
    <>
      <Hero />
      <hr className="border-blue-color mx-auto my-24 border-2 w-1/3 m-auto" />

    </>
  );
}


export default Home;

//      <ul>
//        {places.map((place) => (
//          <PlaceList key={place._id} place={place} />
//        ))}
//      </ul>