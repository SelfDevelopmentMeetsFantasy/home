
import { GoogleGenAI } from "@google/genai";

// Always use process.env.GEMINI_API_KEY for the Gemini API
const apiKey = process.env.GEMINI_API_KEY || "";
const ai = new GoogleGenAI({ apiKey });

export interface AppInfo {
  logoUrl?: string;
  screenshotUrl?: string;
  tagline?: string;
}

export async function fetchAppInfo(appStoreUrl: string): Promise<AppInfo> {
  console.log(`Fetching app info for: ${appStoreUrl}`);

  // Check cache first
  const cacheKey = `v4_app_info_${appStoreUrl}`;
  const cached = localStorage.getItem(cacheKey);
  if (cached) {
    try {
      const parsed = JSON.parse(cached);
      if (parsed.logoUrl || parsed.screenshotUrl) {
        console.log("Found cached app info");
        return parsed;
      }
    } catch (e) {
      localStorage.removeItem(cacheKey);
    }
  }

  if (!apiKey) {
    console.error("GEMINI_API_KEY is missing");
    return {};
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze this App Store page: ${appStoreUrl}.
      1. Find the absolute URL for the main app icon/logo.
      2. Find the absolute URL for a high-quality app screenshot (usually from the gallery).
      3. Extract the official short tagline or category description (max 50 characters).
      Return ONLY a JSON object with keys "logoUrl", "screenshotUrl", and "tagline".`,
      config: {
        tools: [{ urlContext: {} }],
        responseMimeType: "application/json"
      },
    });

    const text = response.text || '{}';
    console.log("Gemini response for app:", text);
    const data = JSON.parse(text);
    const result = {
      logoUrl: data.logoUrl,
      screenshotUrl: data.screenshotUrl,
      tagline: data.tagline
    };

    // Save to cache if we got something
    if (result.logoUrl || result.screenshotUrl) {
      localStorage.setItem(cacheKey, JSON.stringify(result));
    }
    return result;
  } catch (error) {
    console.error("Error fetching app info:", error);
    return {};
  }
}
