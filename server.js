const PORT = 8000;
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {GoogleGenerativeAI} from '@google/generative-ai';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());



const genAi = new GoogleGenerativeAI(process.env.API_KEY);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);})

app.post('/gemini', async (req, res) => {
console.log(req.body.history);
console.log(req.body.message);
const model = await genAi.getGenerativeModel({model:"gemini-1.5-pro-latest"});
const chat = model.startChat({
    history:req.body.history
})
const message = req.body.message;
const result = await chat.sendMessage(message);
res.send(result.response.text());
});