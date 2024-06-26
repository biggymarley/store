import { motion } from "framer-motion";
import { home } from "./data";
export const Loader = () => {
  return (
    <div className="z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed  w-screen h-screen bg-slate-900 flex items-center justify-center flex-col gap-8 z-50"
      >
        <img src={home.logo} className="w-[90px] rounded-full " />
        <BarLoader />
      </motion.div>
    </div>
  );
};

const variants = {
  initial: {
    scaleY: 0.5,
    opacity: 0,
  },
  animate: {
    scaleY: 1,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 1,
      ease: "circIn",
    },
  },
};

const BarLoader = () => {
  return (
    <motion.div
      transition={{
        staggerChildren: 0.25,
      }}
      initial="initial"
      animate="animate"
      className="flex gap-1"
    >
      <motion.div variants={variants} className="h-10 w-2 bg-gray-200" />
      <motion.div variants={variants} className="h-10 w-2  bg-gray-300" />
      <motion.div variants={variants} className="h-10 w-2  bg-gray-400" />
      <motion.div variants={variants} className="h-10 w-2  bg-gray-500" />
      <motion.div variants={variants} className="h-10 w-2  bg-gray-600" />
    </motion.div>
  );
};
