require('dotenv').config(); // Load environment variables from .env


const { GoogleGenerativeAI } = require("@google/generative-ai")
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
});

const convorsation = model.startChat();

/*
Go to Node console
node
.load chat.js

convorsation
const reply = await convorsation.sendMessage("Hello there, how are you today?")
reply.response.text()
const reply2 = await convorsation.sendMessage("What can I do to make my day happy? Any tips?")
reply2.response.text()
convorsation._history
 convorsation._history[3].parts
*/