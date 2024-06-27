import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ProuctsContext } from "../Context";
import { priceTag } from "../data";
import Footer from "../home/footer";
import Header from "../home/header";
import { GiEmptyWoodBucket } from "react-icons/gi";
import { BsCartX } from "react-icons/bs";

export default function Cart() {
  const { total, cart, removeItem, removeNumProduct, addNumProduct } =
    useContext(ProuctsContext);
  const navigate = useNavigate();

  useEffect(() => {
    // if (cart.length <= 0) navigate("/catalog");
  }, [cart, navigate]);

  return (
    <>
      <Header />
      <div className="h-40" />
      <section className=" py-8 antialiased bg-gray-900/10 backdrop-blur md:py-16 relative z-20">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <h2 className="text-xl font-semibold text-white  sm:text-2xl">
            Shopping Cart
          </h2>

          <div className="mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8">
            <div className="mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl">
              <div className="space-y-6">
                {cart && cart.length > 0 ? (
                  cart?.map((prod, index) => (
                    <div
                      key={index}
                      className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm  md:p-6"
                    >
                      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
                        <a href="#" className="shrink-0 md:order-1 ">
                          <img
                            className="h-80 w-40 object-cover object-center"
                            src={prod.item["Variant Image"]}
                            alt="Product"
                          />
                        </a>

                        <label htmlFor="counter-input" className="sr-only">
                          Choose quantity:
                        </label>
                        <div className="flex items-center justify-between md:order-3 md:justify-end">
                          <div className="flex items-center">
                            <button
                              type="button"
                              onClick={() =>
                                removeNumProduct(prod.item["Handle"])
                              }
                              id="decrement-button"
                              data-input-counter-decrement="counter-input"
                              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100"
                            >
                              <svg
                                className="h-2.5 w-2.5 text-gray-900 "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 2"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M1 1h16"
                                />
                              </svg>
                            </button>
                            <input
                              type="text"
                              id="counter-input"
                              data-input-counter
                              onChange={() => {}}
                              className="w-10 shrink-0 border-0 bg-transparent text-center text-xl font-medium text-gray-900 focus:outline-none focus:ring-0 "
                              placeholder=""
                              value={prod.num}
                              required
                            />
                            <button
                              type="button"
                              onClick={() => addNumProduct(prod.item["Handle"])}
                              id="increment-button"
                              data-input-counter-increment="counter-input"
                              className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100 "
                            >
                              <svg
                                className="h-2.5 w-2.5 text-gray-900 "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 18 18"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 1v16M1 9h16"
                                />
                              </svg>
                            </button>
                          </div>
                          <div className="text-end md:order-4 md:w-32">
                            <div className="text-xl font-bold text-gray-900 ">
                              <del>
                                <p className=" text-gray-900  cursor-auto">
                                  {priceTag}
                                  {prod.item["Variant Compare At Price"]}
                                </p>
                              </del>
                              {priceTag}
                              {prod.item["Variant Price"]}
                            </div>
                          </div>
                        </div>

                        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                          <Link
                            to={`/catalog/${prod.item["Handle"]}`}
                            className="text-xl font-bold text-gray-900 hover:underline  capitalize"
                          >
                            {prod.item["Title"]}
                          </Link>

                          <div className="flex items-center gap-4">
                            <button
                              onClick={() => removeItem(prod.item["Handle"])}
                              type="button"
                              className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                            >
                              <svg
                                className="me-1.5 h-5 w-5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="none"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  stroke="currentColor"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M6 18 17.94 6M18 18 6.06 6"
                                />
                              </svg>
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-20 px-8 rounded-lg border text-gray-500 border-gray-200 bg-white gap-4 shadow-sm  flex items-center justify-center flex-col">
                    <BsCartX size={50} />
                    <p className="text-base font-normal text-gray-500  text-center">
                      Your cart is currently empty. Start exploring our products
                      and add your favorites to your cart. Happy shopping!
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full">
              <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm  sm:p-6">
                <p className="text-xl font-semibold text-gray-900 ">
                  Order summary
                </p>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Original price
                      </dt>
                      <dd className="text-base font-medium text-gray-900 ">
                        {priceTag}
                        {total.originalPrice.toFixed(2)}
                      </dd>
                    </dl>

                    <dl className="flex items-center justify-between gap-4">
                      <dt className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Savings
                      </dt>
                      <dd className="text-base font-medium text-green-600">
                        {priceTag}
                        {total.savings.toFixed(2)}
                      </dd>
                    </dl>
                  </div>

                  <dl className="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
                    <dt className="text-base font-bold text-gray-900 ">
                      Total
                    </dt>
                    <dd className="text-base font-bold text-gray-900 ">
                      {priceTag}
                      {total.total.toFixed(2)}
                    </dd>
                  </dl>
                </div>
                {cart && cart.length > 0 ? (
                  <Link
                    to="/billing"
                    className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Proceed to Checkout
                  </Link>
                ) : (
                  <button
                    disabled={true}
                    className="flex w-full items-center justify-center rounded-lg bg-primary-700/50 px-5 py-2.5 text-sm font-medium text-white  focus:outline-none focus:ring-4 focus:ring-primary-300 "
                  >
                    Proceed to Checkout
                  </button>
                )}

                <div className="flex items-center justify-center gap-2">
                  <span className="text-sm font-normal text-gray-500 dark:text-gray-400">
                    {" "}
                    or{" "}
                  </span>
                  <Link
                    to="/catalog"
                    title=""
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
                  >
                    Continue Shopping
                    <svg
                      className="h-5 w-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 12H5m14 0-4 4m4-4-4-4"
                      />
                    </svg>
                  </Link>
                </div>
              </div>

              {/* <div className="space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6">
                <form className="space-y-4">
                  <div>
                    <label
                      htmlFor="voucher"
                      className="mb-2 block text-sm font-medium text-gray-900 "
                    >
                      {" "}
                      Do you have a voucher or gift card?{" "}
                    </label>
                    <input
                      type="text"
                      id="voucher"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700  dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder=""
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  >
                    Apply Code
                  </button>
                </form>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      <div className="h-40" />

      <Footer />
    </>
  );
}
