import { useState } from "react";
import whatsappImg from "../assets/boton-whatsapp.png";

export function ButtonWhatsappComp() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      {/* Botón flotante */}
      <div
        className="fixed bottom-7 right-10 w-14 h-14 bg-[#1F2937] rounded-full flex items-center justify-center cursor-pointer z-50 text-white text-2xl shadow-lg hover:scale-105 transition-transform"
        onClick={() => setOpen(!open)}
      >
        <img src={whatsappImg} alt="robot" className="p-1" />
      </div>
    </div>
  );
}
