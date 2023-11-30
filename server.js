const express = require('express');
require('dotenv').config();
const app = express();
const PORT = 3001;

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const callOpenAI = async (prompt) => {
    try {
        const response = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [
                {"role": "system", "content": prompt},
            ]
        });
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

app.get('/', (req, res) => {
    // res.send("Hello World!");
    const result = callOpenAI("hi");
    console.log(result);
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});