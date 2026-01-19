
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getPropertyAdvice = async (userInput: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `User wants real estate advice in Kenya. User input: "${userInput}". Provide 3 short bullet points about prime locations, market trends, or tips for this request specifically in the context of Kenya's premium real estate market. Keep it professional and concise.`,
      config: {
        temperature: 0.7,
        topP: 0.9,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently unable to provide real-time advice. Please contact our specialists directly.";
  }
};
