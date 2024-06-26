import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
const url = "https://pymentserver.onrender.com";
export default function usePaymentHook(total) {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    fetch(`${url}/api/config`).then(async (r) => {
      const { publishableKey } = await r.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);

  useEffect(() => {
    fetch(`${url}/api/create-payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ totalPrice: (total * 100).toFixed(0) }),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
  }, [total]);

  return { stripePromise, clientSecret };
}
