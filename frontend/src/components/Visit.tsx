import GoogleMapComponent from "./MapComponent.js";
import whatsapp from "../assets/socials/whatsapp.png";
import facebook from "../assets/socials/facebook.png";
import instagram from "../assets/socials/instagram.png";

export function VisitComp() {
  return (
    <div
      data-aos="fade-right"
      className="flex flex-col items-center gap-4 mt-40 px-6 md:px-12"
    >
      <h2 className="font-[spartan] font-bold text-[#1F2937] text-3xl md:text-[48px] text-center">
        Visítanos
      </h2>
      <span className="w-[170px] h-1.5 bg-[#E2E2E2] mt-2"></span>

      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start gap-12 md:gap-24 mt-10 w-full max-w-[1200px]">
        {/* Horarios + redes */}
        <div className="w-full md:max-w-[600px] flex flex-col">
          <h4 className="font-[spartan] font-bold text-2xl mb-8">Horarios</h4>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <div className="font-[poppins] font-extralight text-xl md:text-2xl">
                Lunes - Viernes
              </div>
              <div className="font-[poppins] font-extralight text-xl md:text-2xl">
                11:00AM - 12:00PM
              </div>
            </div>
            <div className="flex justify-between">
              <div className="font-[poppins] font-extralight text-xl md:text-2xl">
                Sábado - Domingo
              </div>
              <div className="font-[poppins] font-extralight text-xl md:text-2xl">
                10:00AM - 01:00PM
              </div>
            </div>
          </div>

          {/* redes */}
          <div className="flex flex-col mt-16">
            <h4 className="font-[spartan] font-bold text-2xl">
              Nuestras redes
            </h4>
            <div className="flex gap-8 mt-6">
              <a
                href=""
                className="cursor-pointer inline-block transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0px_0px_18px_rgba(64,195,81,0.9)]"
              >
                <img
                  src={whatsapp}
                  alt="Whatsapp"
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </a>
              <a
                href=""
                className="cursor-pointer inline-block transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0px_0px_10px_rgba(26,93,249,0.9)]"
              >
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </a>
              <a
                href=""
                className="cursor-pointer inline-block transition-transform duration-300 hover:scale-110 hover:drop-shadow-[0_0_10px_rgba(255,0,150,0.8)]"
              >
                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-10 h-10 md:w-12 md:h-12"
                />
              </a>
            </div>
          </div>
        </div>

        {/* mapa */}
        <div className="w-full md:max-w-[600px] h-[300px] md:h-[400px]">
          <GoogleMapComponent />
        </div>
      </div>
    </div>
  );
}
