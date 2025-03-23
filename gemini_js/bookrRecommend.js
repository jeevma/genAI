require('dotenv').config(); // Load environment variables from .env
const fs = require('fs');


const { GoogleGenerativeAI } = require("@google/generative-ai")
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

function generateImageParts(path, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(fs.readFileSync(path)).toString("base64"),
            mimeType
        },
    };
}

const parts = [
    {text: "Give me an image of a book, generate the book title, author, and similar book recommendations in the same genre. Only recommend books written"
        }
]

async function runPrompt(textPrompt) {
    const imageObj = generateImageParts("./images/dog.jpg", "image/jpeg");
    const result = await model.generateContent(["What is this in image?", imageObj]);
    console.log(result.response.text());

}

runPrompt();


