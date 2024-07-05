import React, { useContext } from "react";
import { motion } from "framer-motion";
import { home, priceTag } from "../data";
import { Link } from "react-router-dom";
import { ProuctsContext } from "../Context";

export const Products = () => {
  const { data } = useContext(ProuctsContext);
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800 relative z-10">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <motion.h2
          initial={{
            y: 25,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.25,
            delay: 0.25,
            ease: "easeInOut",
          }}
          className="max-w-lg text-4xl font-bold md:text-5xl text-slate-900"
        >
          Top Selling:
          <span className="text-slate-400"> Must-Have Featured Products</span>
        </motion.h2>
        <Link
          to="/catalog"
          className="whitespace-nowrap rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
        >
          Explore More
        </Link>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        {data?.slice(6, 9)?.map((prd, index) => (
          <div
            className="col-span-12 md:col-span-4  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl  overflow-hidden "
            key={index}
          >
            <Link to={`/catalog/${prd.Handle}`}>
              <img
                src={prd["Variant Image"]}
                alt="Product"
                className="h-80 w-full object-contain rounded-t-xl "
              />
              <div className="px-4 py-3 bg-slate-100 h-full">
                <span className="text-gray-400 mr-3 uppercase text-xs">
                  {prd["Vendor"]}
                </span>
                <p className="text-lg font-bold text-black  block capitalize">
                  {prd.Title}
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {priceTag}
                    {prd["Variant Price"]}
                  </p>
                  <del>
                    <p className="text-sm text-gray-600 cursor-auto ml-2">
                      {priceTag}
                      {prd["Variant Compare At Price"]}
                    </p>
                  </del>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-4">
        {data?.slice(3, 6)?.map((prd, index) => (
          <div
          className="col-span-12 md:col-span-4  bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl  overflow-hidden "
          key={index}
        >
          <Link to={`/catalog/${prd.Handle}`}>
            <img
              src={prd["Variant Image"]}
              alt="Product"
              className="h-80 w-full object-contain rounded-t-xl "
            />
            <div className="px-4 py-3 bg-slate-100 h-full">
              <span className="text-gray-400 mr-3 uppercase text-xs">
                {prd["Vendor"]}
              </span>
              <p className="text-lg font-bold text-black  block capitalize">
                {prd.Title}
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  {priceTag}
                  {prd["Variant Price"]}
                </p>
                <del>
                  <p className="text-sm text-gray-600 cursor-auto ml-2">
                    {priceTag}
                    {prd["Variant Compare At Price"]}
                  </p>
                </del>
              </div>
            </div>
          </Link>
        </div>
        ))}
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      initial={{
        y: 25,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[450px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-left text-3xl font-bold capitalize">
      {children}
    </h3>
  );
};
