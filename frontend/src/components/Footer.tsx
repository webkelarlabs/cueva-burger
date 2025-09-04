import logoFooter from "../assets/logo-footer.png";

export function FooterComp() {
  return (
    <footer className="flex flex-col bg-[#1F2937] mt-32">
      {/* Sección superior */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start p-8 gap-8 md:gap-16">
        {/* Logo */}
        <div className="cursor-pointer">
          <img src={logoFooter} alt="Logo Footer" className="w-24 md:w-32" />
        </div>

        {/* Nosotros */}
        <div className="text-center md:text-left">
          <h6 className="font-[spartan] text-white font-semibold text-lg">
            Nosotros
          </h6>
          <p className="font-[poppins] text-sm font-extralight text-white mt-2 hover:text-[#ababab] cursor-pointer">
            Menú Destacado
          </p>
          <p className="font-[poppins] text-sm font-extralight text-white mt-2 hover:text-[#ababab] cursor-pointer">
            Sobre nosotros
          </p>
          <p className="font-[poppins] text-sm font-extralight text-white mt-2 hover:text-[#ababab] cursor-pointer">
            Vísitanos
          </p>
        </div>

        {/* Contáctanos */}
        <div className="text-center md:text-left">
          <h6 className="font-[spartan] text-white font-semibold text-lg">
            Contáctanos
          </h6>
          <p className="font-[poppins] text-sm font-extralight text-white mt-2 hover:text-[#ababab] cursor-pointer">
            Whatsapp
          </p>
          <p className="font-[poppins] text-sm font-extralight text-white mt-2 hover:text-[#ababab] cursor-pointer">
            Facebook
          </p>
          <p className="font-[poppins] text-sm font-extralight text-white mt-2 hover:text-[#ababab] cursor-pointer">
            Instagram
          </p>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="w-full h-[1px] bg-[#E2E2E2]"></div>

      {/* Sección inferior */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-4 md:gap-8 px-6 py-4">
        <h6 className="font-[poppins] text-xs text-white font-extralight text-center">
          © 2025 LC Pizzas y Hamburguesas. Todos los derechos reservados.
        </h6>
        <div className="flex flex-wrap justify-center gap-4">
          <h6 className="font-[poppins] text-xs text-white font-extralight hover:text-[#ababab] cursor-pointer">
            Política de Privacidad
          </h6>
          <h6 className="font-[poppins] text-xs text-white font-extralight hover:text-[#ababab] cursor-pointer">
            Términos de Servicio
          </h6>
          <h6 className="font-[poppins] text-xs text-white font-extralight hover:text-[#ababab] cursor-pointer">
            Configuración de Cookies
          </h6>
        </div>
      </div>
    </footer>
  );
}
