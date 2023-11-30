const express = require('express');

const app = express();
const PORT = 3001;

const API_KEY = "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";

const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    apiKey: API_KEY,
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