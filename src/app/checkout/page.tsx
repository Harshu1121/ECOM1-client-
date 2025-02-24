"use client";

import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import CheckoutSuspense from "./checkoutSkeleton";

function CheckoutPage() {
  const options = {
    clientId:
      "AUW3NFfn77W2Q9SKi4OSV0kbUUvGuCpTyHnAaEO68OfsR8NIUQZYxXtpfH1C1pOeQ1hMD7crNtOmHAZp",
  };

  return (
    <PayPalScriptProvider options={options}>
      <CheckoutSuspense />
    </PayPalScriptProvider>
  );
}

export default CheckoutPage;
