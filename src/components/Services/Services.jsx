
import Img2 from "../../assets/coffee2.png";
const ServicesData = [
  {
    id: 1,
    img: Img2,
    name: "Espresso",
    description:
      "Un café concentrado, servido en una pequeña taza. Es fuerte y con mucho cuerpo.",
    aosDelay: "100",
  },
  {
    id: 2,
    img: Img2,
    name: "Americano",
    description:
      "Se prepara añadiendo agua caliente al espresso, lo que lo hace más suave y menos concentrado.",
    aosDelay: "300",
  },
  {
    id: 3,
    img: Img2,
    name: "Cappuccino",
    description:
      "Una combinación de partes iguales de espresso, leche caliente y espuma de leche. A veces se adorna con cacao en polvo o canela.",
    aosDelay: "500",
  },
  {
    id: 4,
    img: Img2,
    name: "Ristretto",
    description:
      "Similar al espresso, pero con menos agua, lo que lo hace más concentrado y con un sabor más fuerte.",
    aosDelay: "500",
  },
  {
    id: 5,
    img: Img2,
    name: "Macchiato",
    description:
      "Espresso con una pequeña cantidad de espuma de leche, para darle un toque suave.",
    aosDelay: "500",
  },
  {
    id: 6,
    img: Img2,
    name: "Latte",
    description:
      "Similar al cappuccino, pero con más leche y menos espuma, lo que lo hace más suave y cremoso.",
    aosDelay: "500",
  },
];
const Services = () => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container">
          {/* Heading section  */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold font-cursive text-gray-800">
              Mejor cafe para vos
            </h1>
          </div>

          {/* Services Card section  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div
                data-aos="fade-up"
                data-aos-delay={service.aosDelay}
                className="rounded-2xl bg-white hover:bg-primary hover:text-white relative shadow-xl duration-high group max-w-[300px]"
              >
                <div className="h-[122px]">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[200px] block mx-auto transform -translate-y-14
                  group-hover:scale-105 group-hover:rotate-6 duration-300"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full "></div>
                  <h1 className="text-xl font-bold">{service.name}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
