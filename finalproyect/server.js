import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Sirve archivos estáticos desde la carpeta 'public'
app.use(express.static("public"));

app.post("/translate", async (req, res) => {
  const { text } = req.body;
  const targetLangs = ["ES", "EN", "JA"]; // DeepL espera los códigos en mayúsculas
  let translations = {};

  try {
    for (let lang of targetLangs) {
      const response = await fetch("https://api-free.deepl.com/v2/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          "Authorization": "DeepL-Auth-Key ab87cf65-e8a2-40f1-966a-8aef75ef11f0:fx"
        },
        body: new URLSearchParams({
          text: text,
          target_lang: lang
        })
      });
    
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`Error al traducir a ${lang}:`, errorText);
        throw new Error(`DeepL API error for target ${lang}`);
      }
    
      const data = await response.json();
      translations[lang.toLowerCase()] = data.translations[0].text;
    }
    
    res.json({ translations });
  } catch (error) {
    console.error("Error en traducción:", error);
    res.status(500).json({ error: "Translation failed" });
  }
});

app.listen(3000, () =>
  console.log("Server running on http://127.0.0.1:3000")
);
