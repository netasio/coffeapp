import React from "react";
import FooterBg from "../../assets/website/coffee-footer.jpg";

const bgImage = {
  backgroundImage: `url(${FooterBg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  minHeight: "400px",
  width: "100%",
};

const Footer = () => {
  return (
    <div style={bgImage} className="text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              Cooffe Shop
            </a>
            <p className="pt-4">
              Pagina de presentacion para venta de cafe
            </p>
          </div>
          <div className="py-8 px-8">
            <p className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive">
              Redes
            </p>
            <div className="flex flex-col space-y-2"> 
              <a href="https://www.instagram.com/valen.neto/">
                Instagram
              </a>
              <a href="https://www.youtube.com/watch?v=Lvz_aWBHgFI">
                YouTube
              </a>
            </div>
          </div>
          <div className="py-8 px-8">
            <p className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive">
              Contactos
            </p>
            <div className="flex flex-col space-y-2"> 
              <p>Telefon:2235521620</p>
              <p>Correo: matiasvalentinguerreironeto@gmail.com</p>
              <p>Correo: jazminlopez@gmail.com</p>
            </div>
          </div>
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4 col-span-2 sm:col-auto">
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
