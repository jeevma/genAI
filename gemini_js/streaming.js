require('dotenv').config(); // Load environment variables from .env


const { GoogleGenerativeAI } = require("@google/generative-ai")
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-pro",
});

//const chatStream = model.startChat();
/*
async function sendMessage(message) {
    const result = await chatStream.sendMessageStream(message);
    let text = "";
    for await (const chunk of result.stream) {
        const chunkText = chunk.text();
        console.log(chunkText);
        text += chunkText;
    }
}
*/

async function run() {
    const result = await model.generateContent(
        "Write me a long eassy about shambji maharaja and his fights with the mughals"
    );
    console.log(result.response.text());
}

run();

