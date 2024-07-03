
import { GoogleGenerativeAI } from '@google/generative-ai';
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
const ask=function( props){



app.use ("/api/ask",askRoutes);

try {
    const result = await model.generateContent(question);
    const response = await result.response;
    const text = await response.text();
    res.json({ answer: text });
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while processing your request.' });
}
}
export default ask