import imgHistory from "../assets/history.png";

export function HistoryComp() {
  return (
    <div
      data-aos="fade-down"
      className="flex flex-col md:flex-row justify-center items-center gap-12 mt-28 mb-32 px-6 md:px-0"
    >
      {/* Sección de título e imagen */}
      <div className="flex-1 max-w-[550px] flex flex-col items-center">
        <h2 className="text-center font-[spartan] font-bold text-[#1F2937] text-4xl md:text-[48px]">
          Nuestra historia
        </h2>
        <span className="w-[236px] h-1.5 bg-[#E2E2E2] mt-2"></span>

        <div className="mt-4 w-full max-w-[440px]">
          <img
            src={imgHistory}
            alt="Nuestra-Historia"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Sección de texto */}
      <div className="flex-1 max-w-[626px]">
        <p className="font-normal font-[poppins] text-lg">
          Fundado en 2010, nuestro restaurante la cueva nació de la pasión por
          la buena comida y el deseo de crear experiencias culinarias
          memorables. Utilizamos solo ingredientes de la más alta calidad,
          muchos de ellos provenientes de productores locales, para garantizar
          el mejor sabor en cada bocado. Hoy, seguimos comprometidos con la
          calidad y el sabor, ofreciendo a nuestros clientes una experiencia
          única.
        </p>
      </div>
    </div>
  );
}
