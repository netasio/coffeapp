import React from "react";
import Logo from "../../assets/website/neologonav.png";
import { FaHome } from "react-icons/fa";
import { FaServicestack } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
    img: FaHome, // Aquí se incluye el ícono
  },
  {
    id: 2,
    name: "Services",
    link: "/#services",
    img: FaServicestack, // Asegúrate de incluir un ícono aquí también
  },
  {
    id: 3,
    name: "About",
    link: "/#about",
    img: FaInfoCircle, // Asegúrate de incluir un ícono aquí también
  },
];
const Navbar = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-primary to-secondary/90 shadow-md bg-gray-900 text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            {/* Logo section */}
            <div data-aos="fade-down" data-aos-once="true">
              <a
                href="#"
                className="text-2xl sm:text-3xl flex justify-center items-center gap-2 tracking-wider font-cursive"
              >
                <img src={Logo} alt="Logo" className="w-14" />
                Cafe Shop
                
              </a>
            </div>

            {/* Link section */}
            <div
              data-aos="fade-down"
              data-aos-once="true"
              data-aos-delay="300"
              className="flex justify-between items-center gap-4"
            >
             <ul className="hidden sm:flex items-center gap-4">
      {Menu.map((menu) => (
        <li key={menu.id}>
          <a
            href={menu.link}
            className="inline-block text-xl py-10 px-4 text-white/70 hover:text-white duration-200 flex items-center"
          >
            {menu.img && <menu.img className="mr-2" />} {/* Renderiza el ícono aquí */}
            {menu.name}
          </a>
        </li>
      ))}
    </ul>
  
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
