require('dotenv').config(); // Load environment variables from .env


const { GoogleGenerativeAI } = require("@google/generative-ai")
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

//const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY }); // Access the API key from the environment
const model = genAI.getGenerativeModel({ "model": "gemini-1.5-pro" });

const generationConfig = {
    temperature: 0.5
};

async function runPrompt(textPrompt) {
    const result = await model.generateContent(textPrompt, generationConfig);
    console.log(result.response.text());
}

runPrompt("In one sentence, what is the meaning of life?");
runPrompt("In one sentence, what is the meaning of life?");
runPrompt("In one sentence, what is the meaning of life?");

