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
    <div style={bgImage} className=" text-white">
      <div className="bg-black/40 min-h-[400px]">
        <div className="container grid md:grid-cols-3 pb-20 pt-5">
          <div className="py-8 px-4">
            <a
              href="#"
              className="font-semibold tracking-widest text-2xl sm:text-3xl font-cursive"
            >
              Cooffe Shop
            </a>
            <p className="  pt-4">
              Pagina de presentacion para venta de cafe
            </p>
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
