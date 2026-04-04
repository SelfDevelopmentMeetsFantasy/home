
import { GoogleGenAI } from "@google/genai";

async function findLogo() {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: "Find the official App Store logo URL for the app 'Happier Decisions' by Eduardo Aleman. The app store link is https://apps.apple.com/app/happier-decisions/id6759266086. Return only the URL of the logo image.",
  });
  console.log(response.text);
}

findLogo();
