import { useState, useEffect, useRef } from "react";
import robotImg from "../assets/robot.png";
import robotGray from "../assets/robot-modified.png";

export default function ChatButton() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  // Scroll automático al final cuando hay un nuevo mensaje
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input) return;

    // Agregar mensaje del usuario
    setMessages([...messages, { sender: "Tú", text: input }]);
    const userMessage = input;
    setInput("");

    // Llamada al backend (Node.js/Express) - opcional si no tenés backend aún
    try {
      const res = await fetch("https://cueva-burger.onrender.com/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      const data = await res.json();

      // Agregar respuesta de la IA
      setMessages((prev) => [
        ...prev,
        { sender: "IA", text: data.choices[0].message.content },
      ]);
    } catch (error) {
      // fallback si no hay backend
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
    <>
      {/* Botón flotante */}
      <div
        className="fixed bottom-7 right-30 w-14 h-14 bg-[#1F2937] rounded-full flex items-center justify-center cursor-pointer z-50 text-white text-2xl shadow-lg hover:scale-105 transition-transform"
        onClick={() => setOpen(!open)}
      >
        <img src={robotImg} alt="robot" className="p-1" />
      </div>

      {/* Chat container */}
      <div
        className={`fixed bottom-20 right-5 w-[90vw] max-w-[700px] max-h-[80vh] bg-white rounded-lg shadow-lg flex flex-col overflow-hidden z-50
        transition-all duration-500 ease-in-out
        ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <div className="bg-[#1F2937] text-white p-3 font-bold">
          Hacé tus consultas!
        </div>

        <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-2">
          <div className="flex gap-3">
            <img src={robotGray} alt="robot" />
            <div className="flex flex-col">
              <h6 className="font-[poppins]">Asistente virtual</h6>
              <div className="flex items-center space-x-2 cursor-pointer">
                <div className="w-3 h-3 rounded-full bg-green-600 animate-pulse"></div>
                <h6>En linea ahora</h6>
              </div>
            </div>
          </div>
          {/* FAQs visibles solo si no hay input ni mensajes */}
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
                    onClick={() =>
                      setMessages([...messages, { sender: "Tú", text: faq }])
                    }
                  >
                    {faq}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Mensajes del chat */}
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
            className="bg-[#1F2937] text-white px-4 hover:bg-blue-300 hover:cursor-pointer transition"
            onClick={handleSend}
          >
            Enviar
          </button>
        </div>
      </div>
    </>
  );
}
