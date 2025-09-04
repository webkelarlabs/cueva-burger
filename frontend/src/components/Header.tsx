import { useState } from "react";
import logo from "../assets/logo.png";
import menu from "../assets/menu.png";

export function HeaderComp() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50 h-[68px]">
      <div className="flex items-center justify-between h-16 px-4 sm:px-8 lg:px-16">
        {/* Logo */}
        <img className="w-16 h-auto cursor-pointer" src={logo} alt="Logo" />

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-10">
          {["Inicio", "Menú", "Sobre nosotros", "Contacto"].map((item) => (
            <a
              key={item}
              href="#"
              className="relative text-gray-800 font-medium border-b-2 border-transparent hover:border-gray-400 transition-all duration-300 pb-1"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Botón hamburguesa (mobile) */}
        <button
          className="md:hidden text-gray-800 z-50"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖️" : <img src={menu} alt="Menu" className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav - slide down */}
      <div
        className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 py-6" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {["Inicio", "Menú", "Sobre nosotros", "Contacto"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-800 font-medium text-lg hover:text-gray-500 transition"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
