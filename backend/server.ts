import express from "express";
import dotenv from "dotenv";
import path from "path";
import OpenAI from "openai";

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env.API_KEY_GPT,
});

const app = express();
app.use(express.json());

app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: `
          Eres un asistente virtual de Cueva Burger.
          Contestas solo sobre: Saludos, el menú, ubicación, teléfono y horarios.
          Dirección: Av. Aguado y N3300, Buenos Aires, Argentina. 
          Teléfono: +54 3756 567472 hace tu pedido via Whatsapp.
          Horarios: 11:00 a 00:00 de lunes a viernes y Domingo. Sabado de 10:00 a 01:00.
          Menú: Pizzas Caseras: nuestras pizzas artesanales son elaboradas con ingredientes frescos y de calidad.
          Hamburguesas: Carne 100% res premium, panes artesanales y combinaciones únicas que deleitarán tu paladar.
          Empanadas: Sabores tradicionales y gourmet, carne, pollo, choclo, al horno y fritas, con masas crocantes y rellenos jugosos preparados al momento.
          Pizzas más vendida: Nuestra clásica pizza muzzarella, con abundante queso, tomate fresco y una masa suave y recién horneada.
          Pizzas Vegetarianas: Vegetarianas preparadas con ingredientes frescos de origen vegetal, ideales para quienes buscan una alternativa saludable sin perder el auténtico sabor.
          Postres caseros: postres caseros como flan con dulce de leche. Nuestros postres son elaborados diariamente, garantizando frescura y sabor.
          Sé amable y breve.
          `,
        },
        {
          role: "user",
          content: message,
        },
      ],
    });
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Error al procesar la solicitud",
    });
  }
});

const frontendPath = path.resolve(__dirname, "../frontend/dist");

app.use(express.static(frontendPath));

app.get("/*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
