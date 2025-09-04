import imgHero from "../assets/pizza-hero.png";

export function HeroComp() {
  return (
    <div className="relative w-full h-screen">
      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src={imgHero}
          alt="Pizza Hero"
          className="w-full h-full object-cover"
        />
        {/* Overlay oscuro para contraste */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col justify-center h-full px-6 md:px-20 lg:px-32 text-white mt-8">
        <h1 className="font-[spartan] font-bold text-3xl text-center lg:text-start sm:text-5xl lg:text-6xl leading-tight">
          Descubre y disfruta <br /> el sabor auténtico
        </h1>

        <p className="mt-6 max-w-xl text-base text-center sm:text-lg lg:text-2xl font-[spartan] font-extralight lg:text-start">
          Vení y descubrí un lugar donde la calidad y el sabor se encuentran.
          Nuestras especialidades están hechas con ingredientes frescos y pasión
          por la cocina.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="cursor-pointer px-6 py-3 border border-white text-white rounded-sm hover:bg-white/20 transition">
            Ver menú
          </button>
          <button className="cursor-pointer px-6 py-3 bg-white text-black rounded-sm hover:bg-gray-200 transition">
            Visítanos
          </button>
        </div>
      </div>
    </div>
  );
}
