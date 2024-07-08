import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import useMeasure from "react-use-measure";
import StickyCountdown from "./countdown";
import { home } from "../data";
import { Link } from "react-router-dom";
import { BiCart } from "react-icons/bi";
import { ProuctsContext } from "../Context";

const Header = () => {
  return (
    <>
      <GlassNavigation />
      {/* <div className="h-10" /> */}
    </>
  );
};

const GlassNavigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="z-50		 glass-nav    overflow-hidden  bg-gradient-to-br from-indigo-400 to-indigo-700">
       <StickyCountdown /> 
      <div className="glass-nav flex items-center justify-start px-5 backdrop-blur py-2">
        <Logo />
        <Links />

        <Buttons setMenuOpen={setMenuOpen} />
      </div>

      <MobileMenu menuOpen={menuOpen} />
    </nav>
  );
};

const Logo = () => (
  <div className="flex-grow md:flex-grow-0">
    <Link to="/">
      {home.logo ? (
        <img src={home.logo} className="h-16" />
      ) : (
        <h1 className="text-2xl text-black font-bold mr-4 cursor-pointer">
          {home.storeName}
        </h1>
      )}
      {/* <h1 className="text-2xl text-white font-bold mr-4 cursor-pointer">
        {home.storeName}
      </h1> */}
    </Link>
  </div>
);

const Links = () => (
  <div className="hidden items-center gap-2 md:flex flex-grow">
    {home.headLinks.map((link, index) => (
      <GlassLink text={link.name} path={link.path} key={index} />
    ))}
  </div>
);

const GlassLink = ({ text, path }) => {
  return (
    <Link
      to={path}
      className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95"
    >
      <span className="relative z-10 text-white transition-colors group-hover:text-black font-regular ">
        {text}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </Link>
  );
};

const Buttons = ({ setMenuOpen }) => {
  const { cartLength } = useContext(ProuctsContext);
  return (
    <div className="flex items-center gap-4">
      {home.headAction.map((action, index) => (
        <Link
          key={index}
          to={action.path}
          className="relative scale-100  rounded-lg bg-gradient-to-br from-orange-600 from-40% to-orange-400 px-4 py-2 font-medium text-white transition-transform hover:scale-105 active:scale-95"
        >
          {action.name === "CART" && cartLength > 0 ? (
            <span className="absolute bg-red-500 w-6 h-6 text-center rounded-full text-sm font-bold -top-2 -left-2">
              {cartLength}
            </span>
          ) : null}

          {action.name === "CART" ? <BiCart size={30} /> : action.name}
        </Link>
      ))}

      <button
        onClick={() => setMenuOpen((pv) => !pv)}
        className="ml-2 block scale-100 text-3xl text-indigo-600 transition-all hover:scale-105 hover:text-white active:scale-95 md:hidden"
      >
        <FiMenu />
      </button>
    </div>
  );
};
const SignInButton = () => {
  return (
    <button className="group relative scale-100 overflow-hidden rounded-lg px-4 py-2 transition-transform hover:scale-105 active:scale-95">
      <span className="relative z-10 text-white/90 transition-colors group-hover:text-white">
        Sign in
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-br from-white/20 to-white/5 opacity-0 transition-opacity group-hover:opacity-100" />
    </button>
  );
};

const MobileMenu = ({ menuOpen }) => {
  const [ref, { height }] = useMeasure();
  return (
    <motion.div
      initial={false}
      animate={{
        height: menuOpen ? height : "0px",
      }}
      className="block overflow-hidden md:hidden"
    >
      <div ref={ref} className="flex items-center justify-center px-4 pb-4 ">
        <div className="flex items-center gap-4 flex-col">
          {home.headLinks.map((link, index) => (
            <GlassLink text={link.name} key={index} path={link.path} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
