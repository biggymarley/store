import { motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { home, priceTag } from "../data";
import { ProuctsContext } from "../Context";
export const Hero = () => {
  const { data } = useContext(ProuctsContext);

  return (
    <section className="relative overflow-hidden ">
      <div className="flex relative justify-center">
        <div
          className={`w-full relative z-20 flex items-center lg:flex-row flex-col max-w-screen-2xl`}
        >
          <Content />
          <div className="hidden lg:block">
            {data?.slice(12, 13)?.map((prd, index) => (
              <motion.div
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
                className="col-span-12 md:col-span-4  bg-white"
                key={index}
              >
                <Link to={`/catalog/${prd.Handle}`}>
                  <img
                    src={prd["Variant Image"]}
                    alt="Product"
                    className="w-[1200px]  object-contain"
                  />
                  <div className="px-4 py-3  h-full">
                    <div className="flex items-center">
                      <p className="text-2xl font-bold text-black cursor-auto my-3">
                        {priceTag}
                        {prd["Variant Price"]}
                      </p>
                      <del className="text-red-500">
                        <p className="text-2xl text-red-500 cursor-auto ml-2">
                          {priceTag}
                          {prd["Variant Compare At Price"]}
                        </p>
                      </del>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
        {/* <div className="absolute w-full h-full bg-slate-900/30 z-10" /> */}
        {/* <div className="absolute h-full z-1">
          <img src={home.hero.heroimg} className="w-screen h-full object-cover blur-sm" />
        </div> */}
      </div>
      {/* <Beams /> */}
      {/* <Brands /> */}
    </section>
  );
};
const Brands = () => {
  return (
    <>
      <div className="flex  overflow-hidden bg-slate-100">
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
        <TranslateWrapper>
          <LogoItemsTop />
        </TranslateWrapper>
      </div>
      <div className="flex overflow-hidden mt-4 bg-slate-100">
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
        <TranslateWrapper reverse>
          <LogoItemsBottom />
        </TranslateWrapper>
      </div>
    </>
  );
};
const TranslateWrapper = ({ children, reverse }) => {
  return (
    <motion.div
      initial={{ translateX: reverse ? "-100%" : "0%" }}
      animate={{ translateX: reverse ? "0%" : "-100%" }}
      transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      className="flex gap-4 px-2"
    >
      {children}
    </motion.div>
  );
};

const LogoItem = ({ Icon }) => {
  return (
    <a
      href="/"
      rel="nofollow"
      target="_blank"
      className="w-16 md:w-24 h-16 md:h-24 flex justify-center items-center hover:bg-slate-200 text-black transition-colors"
    >
      <Icon className="text-4xl md:text-5xl" />
    </a>
  );
};

const LogoItemsTop = () => (
  <>
    {home.brands.top.map((item, index) => (
      <LogoItem Icon={item} key={index} />
    ))}
  </>
);

const LogoItemsBottom = () => (
  <>
    {home.brands.bottom.map((item, index) => (
      <LogoItem Icon={item} key={index} />
    ))}
  </>
);

const Content = () => {
  return (
    <div className="relative  mx-auto flex max-w-6xl flex-col items-start justify-center px-4 py-24 md:px-8 md:py-36 min-h-[60vh] mt-60  rounded-lg mb-16 ">
      <motion.h1
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
        className="mb-3 text-start text-3xl font-bold leading-tight text-black sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-7xl lg:leading-tight"
        dangerouslySetInnerHTML={{ __html: home.hero.title }}
      >
        {/* {home.hero.title} */}
      </motion.h1>
      <motion.p
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
          delay: 0.5,
          ease: "easeInOut",
        }}
        className="mb-9  text-start text-base leading-relaxed text-black sm:text-lg md:text-lg md:leading-relaxed"
      >
        {home.hero.description}
      </motion.p>
      <motion.div
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
          delay: 0.75,
          ease: "easeInOut",
        }}
        className="flex flex-col items-center gap-6 sm:flex-row"
      >
        <SplashButton
          className="flex items-center gap-2"
          path={home.hero.button.path}
        >
          {home.hero.button.name}
          <FiArrowRight />
        </SplashButton>
      </motion.div>
    </div>
  );
};

const SplashButton = ({ children, className, ...rest }) => {
  return (
    <Link
      to={rest.path}
      className={twMerge(
        "rounded-md bg-gradient-to-br from-indigo-400 to-indigo-700 px-4 py-2 text-zinc-50 ring-2 ring-indigo-500/50 ring-offset-2 ring-offset-zinc-950 transition-all hover:scale-[1.02] hover:ring-transparent active:scale-[0.98] active:ring-blue-500/70",
        className
      )}
      {...rest}
    >
      {children}
    </Link>
  );
};

const Beams = () => {
  const { width } = useWindowSize();

  const numColumns = width ? Math.floor(width / GRID_BOX_SIZE) : 0;

  const placements = [
    {
      top: GRID_BOX_SIZE * 0,
      left: Math.floor(numColumns * 0.05) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 5,
        delay: 2,
      },
    },
    {
      top: GRID_BOX_SIZE * 12,
      left: Math.floor(numColumns * 0.15) * GRID_BOX_SIZE,
      transition: {
        duration: 3.5,
        repeatDelay: 10,
        delay: 4,
      },
    },
    {
      top: GRID_BOX_SIZE * 3,
      left: Math.floor(numColumns * 0.25) * GRID_BOX_SIZE,
    },
    {
      top: GRID_BOX_SIZE * 9,
      left: Math.floor(numColumns * 0.75) * GRID_BOX_SIZE,
      transition: {
        duration: 2,
        repeatDelay: 7.5,
        delay: 3.5,
      },
    },
    {
      top: 0,
      left: Math.floor(numColumns * 0.7) * GRID_BOX_SIZE,
      transition: {
        duration: 3,
        repeatDelay: 2,
        delay: 1,
      },
    },
    {
      top: GRID_BOX_SIZE * 2,
      left: Math.floor(numColumns * 1) * GRID_BOX_SIZE - GRID_BOX_SIZE,
      transition: {
        duration: 5,
        repeatDelay: 5,
        delay: 5,
      },
    },
  ];

  return (
    <>
      {placements.map((p, i) => (
        <Beam
          key={i}
          top={p.top}
          left={p.left - BEAM_WIDTH_OFFSET}
          transition={p.transition || {}}
        />
      ))}
    </>
  );
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () =>
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
};

const Beam = ({ top, left, transition = {} }) => {
  return (
    <motion.div
      initial={{
        y: 0,
        opacity: 0,
      }}
      animate={{
        opacity: [0, 1, 0],
        y: 32 * 8,
      }}
      transition={{
        ease: "easeInOut",
        duration: 3,
        repeat: Infinity,
        repeatDelay: 1.5,
        ...transition,
      }}
      style={{
        top,
        left,
      }}
      className="absolute z-10 h-[64px] w-[1px] bg-gradient-to-b from-blue-500/0 to-blue-500"
    />
  );
};

const GRID_BOX_SIZE = 32;
const BEAM_WIDTH_OFFSET = 1;
