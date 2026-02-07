
import { GoogleGenAI, Type } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are "Impulso Bot", the AI fitness coach for "Tu Impulso Fitness Marín".
Your personality is professional, highly motivating, and knowledgeable.
Your goal is to answer fitness and nutrition questions for potential and current members.
Always mention that the gym is located in Rúa Jaime Janer 42, Marín and is open 24/7.
Keep responses concise, formatted with clear headings, and always end with an encouraging fitness quote.
If asked about prices, refer to: Individual 55€, Parejas 45€/pers, Familia 35€/pers.
Language: Spanish.
`;

export const getCoachResponse = async (userMessage: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topK: 40,
        topP: 0.95,
      }
    });

    return response.text || "Lo siento, estoy teniendo problemas para conectar. ¡Ven al gym y hablamos en persona!";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Ups, mis circuitos están descansando. ¡Te veo en el rack de sentadillas!";
  }
};
