import React from "react";
import Slider from "react-slick";

const TestimonialData = [
  {
    id: 1,
    name: "Brownie de Chocolate",
    text: "Un delicioso y denso brownie hecho con el mejor chocolate negro, perfecto para acompañar un café expreso.",
    img: "https://img.freepik.com/foto-gratis/porcion-brownie-chocolate-aislada-sobre-fondo-blanco_123827-27904.jpg?t=st=1728874681~exp=1728875281~hmac=5338c89afa86623b42bf035f3a2ed5cb15783ceef1c2d4391cfb82cea058c84a",
  },
  {
    id: 2,
    name: "Cheesecake",
    text: "Una cremosa tarta de queso con una capa de frutas del bosque frescas, ideal para los amantes de los sabores dulces y ácidos.",
    img: "https://cakesbymk.com/wp-content/uploads/2023/11/Template-Size-for-Blog-Photos-24-802x1024.jpg",
  },
  {
    id: 3,
    name: "Tarta de Zanahoria",
    text: "Esponjosa tarta de zanahoria con un toque de canela, cubierta con un glaseado de queso crema que complementa su sabor.",
    img: "https://t1.uc.ltmcdn.com/es/posts/5/3/7/como_hacer_un_pastel_de_zanahoria_25735_600.jpg",
  },
  {
    id: 4,
    name: "Croissant de Almendra",
    text: "Un croissant suave y hojaldrado relleno de crema de almendra, con un toque crujiente en cada bocado.",
    img: "https://tienda.ayulem.com.ar/public/storage/product/39/iIj2QIybiB5T9mi6Vr7hcbTPnS6fIZeqFa6O1T2w.jpg",
  },
  
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="mb-10">
          <h1
            data-aos="fade-up"
            className="text-center text-4xl font-bold font-cursive"
          >
            Postres
          </h1>
        </div>

        {/* Testimonial cards */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div className="my-6">
                <div
                  key={data.id}
                  className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl  bg-primary/10 relative"
                >
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  {/* content section */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80  font-cursive2">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
