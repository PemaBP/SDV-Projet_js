import React from "react";
import Link from "next/link";
import Image from "next/image";
function footer() {
  return (
    <div className="footer">
      <footer className="bg-back-color-navbar fixed bottom-0 right-0 left-0 px-10 pt-5 pb-5" style={{ borderRadius: '15px' }}>
        <div className="text-xl "> 
          <Image src="/logo.png" alt="Logo" width={70} height={70} />
          <div className=" container2 flex justify-center space-x-8 mr-3 text-blue-color pb-4 "> 
            <Link href="/" >Accueil</Link>
            <Link href="/add">Ajout</Link>
          </div>
          <hr className="border-blue-color  " />
          <div className="copyright flex justify-center text-blue-color pt-4">
            © Copyright 2024 | Pema Belise-Perreard | Tous droits réservés
          </div>
        </div>
      </footer>
    </div>
  );
}

export default footer;
