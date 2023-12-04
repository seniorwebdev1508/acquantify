import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./checkoutForm";

const stripePromise = loadStripe(process.env.REACT_APP_SERVER_STRIPE_KEY);

export default function StripeCheckout() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // replace this with your own server endpoint
    fetch(process.env.DOMAIN_NAME + ":3001/create-payment-intent/", {
      method: "POST",
      mode: 'no-cors',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{}] }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const options = {
    clientSecret,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
