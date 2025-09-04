import { useState, useEffect, useRef } from "react";
import robotGray from "../assets/robot-modified.png";

export function SectionIAComp() {
  const [messages, setMessages] = useState<any[]>([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async (faqReceived?: string) => {
    if (!input && !faqReceived) return;

    setMessages([
      ...messages,
      { sender: "Tú", text: input ? input : faqReceived },
    ]);
    const userMessage = input ? input : faqReceived;
    setInput("");

    try {
      const res = await fetch("http://localhost:3000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { sender: "IA", text: data.choices[0].message.content },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "IA", text: "Lo siento, todavía no puedo responder." },
      ]);
    }
  };

  const faqs = [
    "¿Cómo hago un pedido?",
    "¿Cuál es la pizza más vendida?",
    "¿Dónde están ubicados?",
    "¿Hay comida vegetariana?",
  ];

  return (
    <div
      data-aos="fade-left"
      className="flex flex-col md:flex-row justify-center items-center gap-10 px-6 md:px-12 mt-32"
    >
      {/* Bloque del chat */}
      <div className="w-full md:w-[500px] space-y-6">
        <h2 className="font-[spartan] font-bold text-[#1F2937] text-3xl md:text-[40px]">
          Un asistente con IA para tus consultas
        </h2>
        <p className="font-poppins text-[17px] md:text-[19px]">
          Respuestas instantáneas a tus dudas sobre menús y pedidos.
        </p>

        <div className="w-full bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
          <div className="bg-[#1F2937] text-white p-3 font-bold">
            Hacé tus consultas!
          </div>

          {/* Área de mensajes */}
          <div className="p-3 flex flex-col gap-2 overflow-y-auto h-[300px]">
            {/* Header asistente */}
            <div className="flex gap-3">
              <img src={robotGray} alt="robot" className="w-10 h-10" />
              <div className="flex flex-col">
                <h6 className="font-[poppins]">Asistente virtual</h6>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse"></div>
                  <h6>En línea ahora</h6>
                </div>
              </div>
            </div>

            {/* FAQs visibles solo si no hay mensajes */}
            {messages.length === 0 && (
              <div className="mb-32">
                <p className="font-poppins text-lg font-bold mb-2">
                  Preguntas frecuentes:
                </p>
                <div className="flex flex-wrap gap-2">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="px-3 py-1 rounded-full bg-gray-300 text-[13px] font-poppins cursor-pointer hover:bg-gray-400 transition"
                      onClick={() => {
                        setMessages([...messages, { sender: "Tú", text: faq }]);
                        handleSend(faq);
                      }}
                    >
                      {faq}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mensajes */}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`px-3 py-1 rounded-lg max-w-[75%] ${
                  msg.sender === "Tú"
                    ? "bg-orange-200 self-end text-right"
                    : "bg-gray-100 self-start text-left"
                }`}
              >
                <span className="font-poppins text-sm">{msg.text}</span>
              </div>
            ))}

            <div ref={chatEndRef}></div>
          </div>

          {/* Input */}
          <div className="flex border-t border-gray-200">
            <input
              className="flex-1 p-2 outline-none"
              placeholder="Escribe tu mensaje..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
            />
            <button
              type="button"
              className="bg-[#1F2937] text-white px-4 hover:bg-blue-300 hover:cursor-pointer transition"
              onClick={() => handleSend}
            >
              Enviar
            </button>
          </div>
        </div>
      </div>

      {/* Bloque de texto a la derecha */}
      <div className="w-full md:max-w-[660px]">
        <h2 className="font-[spartan] font-bold text-[#1F2937] text-2xl md:text-[32px]">
          ¿Por qué elegir nuestro asistente virtual?
        </h2>
        <div className="h-[1px] bg-[#121212]"></div>
        <h6 className="text-[poppins] font-bold mt-4">Respuestas inmediatas</h6>
        <p className="font-[poppins] mt-4 text-[16px]">
          Hacé tu consulta y obtené la información de inmediato.
        </p>
        <div className="h-[1px] bg-[#121212]"></div>
        <h6 className="text-[poppins] font-bold mt-4">Disponible 24/7</h6>
        <p className="font-[poppins] mt-4 text-[16px]">
          Asistencia en cualquier momento del día o noche.
        </p>
        <div className="h-[1px] bg-[#121212]"></div>
        <h6 className="text-[poppins] font-bold mt-4">Información precisa</h6>
        <p className="font-[poppins] mt-4 text-[16px]">
          Respuestas basadas en nuestros menús y políticas actuales.
        </p>
        <div className="h-[1px] bg-[#121212]"></div>
      </div>
    </div>
  );
}
