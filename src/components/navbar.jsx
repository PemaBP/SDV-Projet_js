import React from "react";
import Link from "next/link";
import Image from "next/image";
function navbar() {
  return (
    <div className="navbar">
      <nav className="bg-back-color-navbar fixed top-8 left-0 right-0 px-10 pt-3 pb-3 flex justify-between items-center shadow-lg " style={{ borderRadius: '15px' }}>
        <Link href="/" className="flex group justify-start items-center w-1/3 ">
        <Image src="/logo.png" alt="Logo" width={65} height={65} />
          <span className="text-3xl text-blue-color ml-4">PlaceSpotter</span>
        </Link>
        <div className="space-x-8 mr-3 text-blue-color text-3xl "> 
          <Link href="/" className=" focus:underline focus:font-bold" >Accueil</Link>
          {" "}
          <Link href="/add" className="focus:underline focus:font-bold">Ajout</Link>
        </div>
      </nav>
      </div>
  );
}

export default navbar;