import { GoogleGenerativeAI } from '@google/generative-ai';

const askQuestion = async (req, res) => {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

    const { question } = req.body;
    
    
    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const result = await model.generateContent(question);
        const response = await result.response;
        const text = await response.text();
        res.json({ answer: text });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
};

export default askQuestion;
