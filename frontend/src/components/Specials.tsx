import img1 from "../assets/cards/img1.png";
import icon1 from "../assets/cards/icon1.png";
import img2 from "../assets/cards/img2.png";
import icon2 from "../assets/cards/icon2.png";
import img3 from "../assets/cards/img3.png";
import icon3 from "../assets/cards/icon3.png";

const cards = [
  {
    img: img1,
    icon: icon1,
    title: "Pizzas Caseras",
    text: "Nuestras pizzas artesanales son elaboradas con ingredientes frescos y de calidad, con diferentes variedades.",
  },
  {
    img: img2,
    icon: icon2,
    title: "Hamburguesas grandes",
    text: "Doble Carne 100% res premium, panes artesanales y combinaciones únicas que deleitarán tu paladar.",
  },
  {
    img: img3,
    icon: icon3,
    title: "Empanadas",
    text: "Sabores tradicionales y gourmet, con masas crocantes y rellenos jugosos preparados al momento.",
  },
];

export function SpecialComp() {
  return (
    <div
      data-aos="fade-down"
      className="flex flex-col items-center mt-20 overflow-x-hidden px-4"
    >
      {/* Título */}
      <h2 className="text-2xl md:text-4xl font-[spartan] font-bold text-[#1F2937] text-center md:text-left">
        Nuestras Especialidades
      </h2>
      <span className="w-40 h-1.5 bg-[#E2E2E2] mt-2"></span>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 w-auto max-w-6xl mx-auto">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl shadow-md flex flex-col items-center md:items-start p-4 md:p-6 transition-transform duration-300 md:hover:scale-105"
          >
            <img
              className="w-full rounded-xl object-cover"
              src={card.img}
              alt={card.title}
            />
            <img className="mt-6 w-12 h-12" src={card.icon} alt="" />
            <h3 className="mt-4 font-[poppins] text-xl sm:text-2xl font-bold text-center md:text-left">
              {card.title}
            </h3>
            <p className="mt-2 font-[poppins] text-sm sm:text-base text-center md:text-left">
              {card.text}
            </p>
            <a className="mt-4 cursor-pointer text-blue-600 hover:text-blue-400 font-medium">
              Ver »
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
