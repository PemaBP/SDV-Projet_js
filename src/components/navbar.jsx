import React from "react";
import Link from "next/link";
import Logo from "../components/logo.png"
function navbar() {
  return (
    <nav className="bg-back-color-navbar fixed top-8 left-0 right-0 px-10 pt-5 pb-5 flex justify-between items-center " style={{ borderRadius: '15px' }}>
      <Link href="/" className="flex group justify-start items-center w-1/3 ">
        <img src={Logo} className="h14 w-auto" alt="Logo" />
        <span className="text-3xl text-blue-color">PlaceSpotter</span>
      </Link>
      <div className="space-x-8 mr-3 text-blue-color "> 
        <Link href="/" className="text-2xl focus:underline " >Accueil</Link>
        {" "}
        <Link href="/add" className="text-2xl focus:underline ">Ajout</Link>
      </div>

    </nav>
  );
}

export default navbar;