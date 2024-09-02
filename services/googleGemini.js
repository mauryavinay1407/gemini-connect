const { GoogleGenerativeAI }=require("@google/generative-ai");
require('dotenv').config();
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generateAnswers=async(prompt)=>{
    try {
        const result = await model.generateContent(prompt);
        return result.response.text();
        
    } catch (error) {
        console.log(error);
    }
}

module.exports={generateAnswers};