import { Elements } from "@stripe/react-stripe-js";
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ProuctsContext } from "../Context";
import { priceTag } from "../data";
import Footer from "../home/footer";
import Header from "../home/header";
import usePaymentHook from "../usePaymentHook";
import CheckoutForm from "./CheckoutForm";

export default function Payment() {
  const { total, cart } = useContext(ProuctsContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length <= 0) navigate("/catalog");
  }, [cart, navigate]);
  const { stripePromise, clientSecret } = usePaymentHook(total.total);

  return (
    <>
      <Header />
      <div className="h-40" />
      <section className="bg-white py-8 antialiased dark:bg-gray-900/60 backdrop-blur md:py-16 relative z-10">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <ol className="items-center flex w-full max-w-2xl text-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:text-base">
            <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                <svg
                  className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Cart
              </span>
            </li>
            <li className="after:border-1 flex items-center text-primary-700 after:mx-6 after:hidden after:h-1 after:w-full after:border-b after:border-gray-200 dark:text-primary-500 dark:after:border-gray-700 sm:after:inline-block sm:after:content-[''] md:w-full xl:after:mx-10">
              <span className="flex items-center after:mx-2 after:text-gray-200 after:content-['/'] dark:after:text-gray-500 sm:after:hidden">
                <svg
                  className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
                Billing
              </span>
            </li>
            <li className="flex shrink-0 items-center text-primary-500">
              <svg
                className="me-2 h-4 w-4 sm:h-5 sm:w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8.5 11.5 11 14l4-4m6 2a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Payment
            </li>
          </ol>
          <div className="mt-6 sm:mt-8 lg:flex lg:items-center lg:gap-12 xl:gap-16">
            <div className="min-w-0 flex-1 space-y-8 bg-white p-4">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-gray-900">Payment</h2>
              </div>
              {total.total > 0 && clientSecret && stripePromise && (
                <Elements stripe={stripePromise} options={{ clientSecret }}>
                  <CheckoutForm />
                </Elements>
              )}
            </div>
            <div className="mt-6 w-full space-y-6 sm:mt-8 lg:mt-0 lg:max-w-xs xl:max-w-md">
              <div className="flow-root">
                <div className="-my-3 divide-y divide-gray-200 dark:divide-gray-800">
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Total originale
                    </dt>
                    <dd className="text-base font-medium text-gray-900 dark:text-white">
                      {priceTag}
                      {total.originalPrice.toFixed(2)}
                    </dd>
                  </dl>
                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                      Savings
                    </dt>
                    <dd className="text-base font-medium text-green-500">
                      {" "}
                      {priceTag}
                      {total.savings.toFixed(2)}
                    </dd>
                  </dl>

                  <dl className="flex items-center justify-between gap-4 py-3">
                    <dt className="text-base font-bold text-gray-900 dark:text-white">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 dark:text-white">
                      {priceTag}
                      {total.total.toFixed(2)}
                    </dd>
                  </dl>
                </div>
              </div>
              <div className="space-y-3"></div>
            </div>
          </div>
        </div>
      </section>
      <div className="h-40" />
      <Footer />
    </>
  );
}
