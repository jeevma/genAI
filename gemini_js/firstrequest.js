require('dotenv').config(); // Load environment variables from .env


const { GoogleGenerativeAI } = require("@google/generative-ai")
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

//const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY }); // Access the API key from the environment
const model = genAI.getGenerativeModel({ "model": "gemini-1.5-pro" });

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function runPrompt() {
    const result = await model.generateContent("give me different species of corgi");
    console.log(result.response.text());
}

runPrompt();

