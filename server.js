const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = 3001;

const stripe = require("stripe")(process.env.REACT_APP_CLIENT_STRIPE_KEY);

const calculateOrderAmount = (items) => {
    return 1;
};

// const { Configuration, OpenAIApi } = require("openai");
// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// const callOpenAI = async (prompt) => {
//     try {
//         const response = await openai.createChatCompletion({
//             model: 'gpt-3.5-turbo',
//             messages: [
//                 {"role": "system", "content": prompt},
//             ]
//         });
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// app.get('/call-openai', (req, res) => {
//     // res.send("Hello World!");
//     const result = callOpenAI("hi");
//     console.log(result);
// });

app.post("/create-payment-intent", async (req, res) => {

    console.log(req.body);
    const { items } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({

        amount: calculateOrderAmount(items),
        currency: "usd",

        automatic_payment_methods: {
            enabled: true,
        },
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
});