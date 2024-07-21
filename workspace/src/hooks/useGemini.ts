import {GoogleGenerativeAI} from "@google/generative-ai"
import { use } from "react";

export default function useGemini(text: string){
    const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY)
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const result = use(model.generateContent(text))
    return result.response.text()
}