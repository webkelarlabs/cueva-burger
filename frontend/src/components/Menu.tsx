import img1 from "../assets/cards-menu/flan.png";
import img2 from "../assets/cards-menu/collage.png";
import nextimg from "../assets/siguiente.png";

export function MenuComp() {
  return (
    <div
      data-aos="fade-left"
      className="flex flex-col items-center mt-32 px-4 overflow-x-hidden"
    >
      {/* Título */}
      <div className="flex flex-col max-w-2xl items-center text-center">
        <h2 className="font-[spartan] font-bold text-[#1F2937] text-3xl sm:text-5xl">
          Menú Destacado
        </h2>
        <span className="w-40 h-1.5 bg-[#E2E2E2] mt-2"></span>
        <p className="font-[poppins] text-base sm:text-lg mt-4">
          En nuestro menú, ofrecemos una variedad de opciones que satisfacen
          todos los paladares. Cada plato está elaborado con ingredientes
          frescos y de alta calidad.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
        {/* card 1 */}
        <div className="flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-105">
          <img src={img1} alt="Flan" className="w-full max-w-full rounded-lg" />
          <div className="mt-4 px-2">
            <h4 className="font-[poppins] text-2xl sm:text-3xl text-center font-bold">
              Postres caseros que te encantarán
            </h4>
            <p className="mt-4 font-[poppins] text-sm sm:text-base text-center">
              Nuestros postres son elaborados diariamente garantizando frescura
              y sabor.
            </p>
          </div>
        </div>

        {/* card 2 */}
        <div className="flex flex-col items-center cursor-pointer transform transition-transform duration-300 hover:scale-105">
          <img
            src={img2}
            alt="Hamburguesas-pizzas"
            className="w-full max-w-full rounded-lg"
          />
          <div className="mt-4 px-2">
            <h4 className="font-[poppins] text-2xl sm:text-3xl text-center font-bold">
              Variedad que satisface todos los antojos
            </h4>
            <p className="mt-4 font-[poppins] text-sm sm:text-base text-center">
              Desde hamburguesas jugosas hasta pizzas gourmet, tenemos todo.
            </p>
          </div>
        </div>
      </div>

      {/* Botones */}
      <div className="flex flex-col sm:flex-row gap-4 mt-16">
        <button className="px-6 py-3 font-[poppins] font-medium border rounded-sm hover:bg-gray-200 transition w-full sm:w-auto text-center">
          Ver menú completo
        </button>
        <button className="flex justify-center items-center px-6 py-3 font-[poppins] font-medium border rounded-sm hover:bg-gray-200 transition w-full sm:w-auto text-center">
          <span>Reservar</span>
          <img className="ml-2 w-4 h-4" src={nextimg} alt="icon-next" />
        </button>
      </div>
    </div>
  );
}
