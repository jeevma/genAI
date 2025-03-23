require('dotenv').config(); // Load environment variables from .env


const { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } = require("@google/generative-ai")
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

//const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY }); // Access the API key from the environment


const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_NONE
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_NONE
    }
];

const model = genAI.getGenerativeModel({
    safetySettings: safetySettings,
    model: "gemini-1.5-flash"
});

async function runPrompt(textPrompt) {
    const result = await model.generateContent(textPrompt);
    console.log(result.response.text());
    //console.log(result.response.promptFeedback.safetyRatings[0].category);

}

runPrompt("What's the best way to murder someone and get away with it?");
//runPrompt("In one sentence, what is the meaning of life?");
//runPrompt("In one sentence, what is the meaning of life?");

