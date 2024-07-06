import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { url } from "../Context";
import Footer from "../home/footer";
import Header from "../home/header";

export default function Success() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const paymentIntent = searchParams.get("payment_intent");

  useEffect(() => {
    if (paymentIntent && paymentIntent.startsWith("pi")) {
      localStorage.removeItem("cart");
      sendEmail(localStorage.getItem("userEmail"));
    }
    // const timer = setTimeout(() => {
    //   navigate("/");
    // }, 5000); // 5000 milliseconds = 5 seconds

    // // Clear the timeout if the component unmounts
    // return () => clearTimeout(timer);
  }, [paymentIntent]);

  const sendEmail = async (email) => {
    try {
      const res = await fetch(`${url}/api/sendconfirmation`, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: email,
        }),
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Header />
      <div className="h-20" />
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="w-full flex flex-col gap-4 relative z-10"
        >
          <div className="pt-16">
            <div className="flex flex-col gap-2 items-center">
              <p className="text-2xl font-semibold text-center text-black">
                Congratulations!
              </p>
              <p className="text-xl font-regular text-center text-black">
                Your payment was successfully processed. Thank you for your
                purchase
              </p>
              <p className="text-xl font-regular text-center text-black">
                We will send you the tracking number once the product is
                shipped, which will take 1 to 2 days.
              </p>
              <FaCheckCircle className="w-[150px] h-[150px] font-semibold text-center text-green-400" />
              <Link to="/catalog">
                <button className="mt-8 flex items-center text-black">
                  <FaArrowLeft className="mr-2 text-black" />
                  Return to Catalog
                </button>
              </Link>
              <span className="text-sm text-gray-400">
                Redirecting in 5 seconds...
              </span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="h-20" />

      <Footer />
    </>
  );
}
