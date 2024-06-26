import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../home/footer";
import Header from "../home/header";

export default function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("cart");
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000); // 5000 milliseconds = 5 seconds

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <>
      <Header />
      <div className="h-60" />
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
              <p className="text-2xl font-semibold text-center text-white">
                Congratulations!
              </p>
              <p className="text-xl font-regular text-center text-white">
                Your payment was successfully processed. Thank you for your
                purchase
              </p>
              <p className="text-xl font-regular text-center text-white">
                We will send you the tracking number once the product is
                shipped, which will take 1 to 2 days.
              </p>
              <FaCheckCircle className="w-[150px] h-[150px] font-semibold text-center text-green-400" />
              <Link to="/catalog">
                <button className="mt-8 flex items-center text-white">
                  <FaArrowLeft className="mr-2 text-white" />
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
      <div className="h-60" />

      <Footer />
    </>
  );
}
