import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
    SiApplepay,
    SiMastercard,
    SiPaypal,
    SiVisa
} from "react-icons/si";
import { twMerge } from "tailwind-merge";

export const FoldingLogos = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-12 bg-neutral-950 px-4 py-24 md:flex-row z-20 relative">
      <Copy />
      <LogoRolodex
        items={[
          <LogoItem key={1} className="bg-blue-300 text-neutral-900">
            <SiPaypal />
          </LogoItem>,
          <LogoItem key={2} className="bg-orange-300 text-neutral-900">
            <SiMastercard />
          </LogoItem>,
          <LogoItem key={3} className="bg-gray-300 text-neutral-900">
            <SiVisa />
          </LogoItem>,
          <LogoItem key={4} className="bg-white text-black">
            <SiApplepay />
          </LogoItem>,
        ]}
      />
    </section>
  );
};

const Copy = () => (
  <div className="max-w-lg text-center md:text-start z-20">
    <h2 className="mb-3 text-4xl text-white">Accepted Payment Methods</h2>
    <p className="mb-6 text-sm leading-relaxed text-neutral-400">
      Shop confidently with [Your Company Name]. Our hassle-free return policy
      ensures:
    </p>
    <p className="ml-4 mb-6 text-sm leading-relaxed text-neutral-400">
      - Easy returns within 30 days
    </p>
    <p className="ml-4 mb-6 text-sm leading-relaxed text-neutral-400">
      - Free return shipping in the US
    </p>
    <p className="ml-4 mb-6 text-sm leading-relaxed text-neutral-400">
      - Fast refunds processed within 3-5 days
    </p>
    <p className="ml-4 mb-6 text-sm leading-relaxed text-neutral-400">
      - Dedicated customer support for any questions
    </p>
    <p className="mb-6 text-sm leading-relaxed text-neutral-400">
      {" "}
      Your satisfaction is guaranteed with every purchase.
    </p>
  </div>
);

const DELAY_IN_MS = 2500;
const TRANSITION_DURATION_IN_SECS = 1.5;

const LogoRolodex = ({ items }) => {
  const intervalRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((pv) => pv + 1);
    }, DELAY_IN_MS);

    return () => {
      clearInterval(intervalRef.current || undefined);
    };
  }, []);

  return (
    <div
      style={{
        transform: "rotateY(-20deg)",
        transformStyle: "preserve-3d",
      }}
      className="relative z-0 h-44 w-60 shrink-0 rounded-xl border border-neutral-700 bg-neutral-800"
    >
      <AnimatePresence mode="sync">
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 0, 100% 0, 100% 50%, 0 50%)",
            zIndex: -index,
            backfaceVisibility: "hidden",
          }}
          key={index}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          initial={{ rotateX: "0deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "-180deg" }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
        <motion.div
          style={{
            y: "-50%",
            x: "-50%",
            clipPath: "polygon(0 50%, 100% 50%, 100% 100%, 0 100%)",
            zIndex: index,
            backfaceVisibility: "hidden",
          }}
          key={(index + 1) * 2}
          initial={{ rotateX: "180deg" }}
          animate={{ rotateX: "0deg" }}
          exit={{ rotateX: "0deg" }}
          transition={{
            duration: TRANSITION_DURATION_IN_SECS,
            ease: "easeInOut",
          }}
          className="absolute left-1/2 top-1/2"
        >
          {items[index % items.length]}
        </motion.div>
      </AnimatePresence>

      <hr
        style={{
          transform: "translateZ(1px)",
        }}
        className="absolute left-0 right-0 top-1/2 z-[999999999] -translate-y-1/2 border-t-2 border-neutral-800"
      />
    </div>
  );
};

const LogoItem = ({ children, className }) => {
  return (
    <div
      className={twMerge(
        "grid h-36 w-52 place-content-center rounded-lg bg-neutral-700 text-6xl text-neutral-50",
        className
      )}
    >
      {children}
    </div>
  );
};
