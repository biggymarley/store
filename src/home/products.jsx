import React from "react";
import { motion } from "framer-motion";
import { home } from "../data";
import { Link } from "react-router-dom";

export const Products = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
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
          className="max-w-lg text-4xl font-bold md:text-5xl text-slate-100"
        >
          Top Selling:
          <span className="text-slate-400"> Must-Have Featured Products</span>
        </motion.h2>
        <Link
          to="/catalog"
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
        >
          Explore More
        </Link>
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
        {home.productstop.map((prd, index) => (
          <BounceCard className={prd.className} key={index}>
            <div className="font-bold text-xl absolute top-0  right-4  ">
              {prd.price}
            </div>
            <CardTitle>{prd.name}</CardTitle>
            <div
              className={`absolute bottom-0 left-4 right-4 top-40 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] ${prd.bg}`}
            >
              <span className="block text-center font-semibold text-indigo-50">
                <div dangerouslySetInnerHTML={{ __html: prd.description }} />
              </span>
            </div>
          </BounceCard>
        ))}
      </div>
      <div className="grid grid-cols-12 gap-4">
        {home.productsbottom.map((prd, index) => (
          <BounceCard className={prd.className} key={index}>
            <div className="font-bold text-xl absolute top-0  right-4  text-slate-700">
              {prd.price}
            </div>
            <CardTitle>{prd.name}</CardTitle>
            <div
              className={`absolute bottom-0 left-4 right-4 top-40 translate-y-8 rounded-t-2xl p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] ${prd.bg}`}
            >
              <span className="block text-left font-semibold text-indigo-50">
                <div dangerouslySetInnerHTML={{ __html: prd.description }} />
              </span>
            </div>
          </BounceCard>
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
  return <h3 className="mx-auto text-left text-3xl font-bold">{children}</h3>;
};
