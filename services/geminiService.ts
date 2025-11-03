import { GoogleGenAI, Type } from "@google/genai";
import { ResultContent, ResultType } from '../types';
import { RESULT_DETAILS } from '../constants';

// FIX: Initialize GoogleGenAI client according to guidelines, removing the explicit API_KEY constant and check.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateResultContent = async (resultType: ResultType): Promise<Omit<ResultContent, 'title' | 'characterImage'>> => {
  const details = RESULT_DETAILS[resultType];
  if (!details) {
    throw new Error("Invalid result type provided.");
  }
  
  // FIX: Property 'basePrompt' does not exist on type 'ResultContent'.
  // A prompt is constructed dynamically using the existing static details to provide context for the AI.
  const basePrompt = `You are a world-class marketing copywriter and personal branding coach. Your task is to rewrite content for a quiz result page to be more personal, empathetic, and persuasive. The user has been identified as a "${details.title}".

Here is the original content for this user type:
- What they need: "${details.whatYouNeed}"
- Course pitch: "${details.coursePitch}"

Please rewrite this content in Traditional Chinese. Your response must be a valid JSON object with the following keys: "whatYouNeed", "coursePitch". The new content should maintain the core message but be delivered with a more engaging and encouraging tone.`;
      
  try {
    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: basePrompt,
        config: {
          responseMimeType: "application/json",
          // FIX: The response schema is updated to request keys that match the function's return type.
          responseSchema: {
            type: Type.OBJECT,
            properties: {
                whatYouNeed: { type: Type.STRING },
                coursePitch: { type: Type.STRING },
            },
            required: ["whatYouNeed", "coursePitch"]
          },
        },
    });

    const text = response.text.trim();
    const parsedJson = JSON.parse(text);

    // FIX: The returned object now correctly matches the Omit<ResultContent, ...> type, resolving the error
    // "Object literal may only specify known properties, and 'analysis' does not exist...".
    return {
      whatYouNeed: parsedJson.whatYouNeed,
      coursePitch: parsedJson.coursePitch,
      ctaButtonText: details.ctaButtonText, // This part remains static.
    };
  } catch (error) {
    console.error("Error generating content with Gemini API:", error);
    // Fallback content in case of API error
    // FIX: The fallback object also matches the required return type. It returns the original static content.
    return {
      whatYouNeed: details.whatYouNeed,
      coursePitch: details.coursePitch,
      ctaButtonText: details.ctaButtonText,
    };
  }
};