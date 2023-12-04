import React from "react";
import StripeCheckout from "./stripePayment";

const Checkout = () => {
  return (
    <div className="font-mono text-white font-[700] text-opacity-90 h-screen flex justify-center items-center">
      <div className="bg-white rounded-md p-12 bg-opacity-70">
        <StripeCheckout />
      </div>
    </div>
  );
};

export default Checkout;
